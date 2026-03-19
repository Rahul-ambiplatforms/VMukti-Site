import { getBlogByUrlWords } from '../../../lib/api';
import { generateBlogMetadata } from '../../../lib/metadata';
import BlogContentClient from './blog-content-client';
import BlogCTA from '../../../components/BlogCTA';
import StickyDemoBanner from '../../../components/StickyDemoBanner';
import { notFound } from 'next/navigation';

// Revalidate every hour for ISR
export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { urlWords } = await params;
  const blog = await getBlogByUrlWords(urlWords);
  if (!blog) return { title: 'Blog Not Found | VMukti' };
  return generateBlogMetadata(blog);
}

/**
 * Server-side rendered blog content
 * This is the KEY SEO fix — blog content is now in the initial HTML
 */
export default async function BlogPostPage({ params }) {
  const { urlWords } = await params;
  const blog = await getBlogByUrlWords(urlWords);

  if (!blog) {
    notFound();
  }

  const content = blog.content || {};
  const metadata = blog.metadata || {};

  // Build JSON-LD for the blog post
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: content.title || metadata.metaTitle,
    description: metadata.metaDescription,
    author: {
      '@type': 'Person',
      name: content.blogAuthor || 'VMukti Solutions',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VMukti Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.vmukti.com/VMukti-logo.png',
      },
    },
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    url: `https://www.vmukti.com/blog/${urlWords}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.vmukti.com/blog/${urlWords}`,
    },
  };

  // Build FAQ schema if FAQs exist
  const faqItems = content.faqs?.items || [];
  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(faq => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a,
      },
    })),
  } : null;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Server-rendered blog content for SEO crawlers */}
      <article
        style={{ display: 'none' }}
        aria-hidden="true"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <h1 itemProp="headline">{content.title}</h1>
        <meta itemProp="author" content={content.blogAuthor || 'VMukti Solutions'} />
        <meta itemProp="datePublished" content={blog.createdAt} />
        <meta itemProp="dateModified" content={blog.updatedAt} />

        {/* Render brief text */}
        {content.brief && content.brief.map((block, i) => (
          <p key={i} itemProp="description">
            {block.children?.map(child => child.text).join(' ')}
          </p>
        ))}

        {/* Render headings and paragraphs */}
        {content.headingsAndImages && content.headingsAndImages.map((item, i) => {
          const text = item.content?.text?.map(t =>
            t.children?.map(c => c.text).join(' ')
          ).join(' ') || '';

          if (item.type === 'h2') {
            return <h2 key={i}>{text}</h2>;
          }
          return <p key={i}>{text}</p>;
        })}
      </article>

      {/* Client-side interactive blog (same visual as current site) */}
      <BlogContentClient blogData={blog} urlWords={urlWords} />

      {/* Lead Generation: Demo CTA at end of every blog post */}
      <BlogCTA />

      {/* Lead Generation: Sticky demo banner on scroll */}
      <StickyDemoBanner />
    </>
  );
}
