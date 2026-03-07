/**
 * Shared metadata generation helpers
 */

const SITE_URL = 'https://www.vmukti.com';
const SITE_NAME = 'VMukti Solutions';

/**
 * Generate metadata object from SEO config entry
 */
export function generatePageMetadata(config, path = '') {
  const canonical = config.canonicalUrl || `${SITE_URL}${path}`;

  return {
    title: config.title,
    description: config.description,
    keywords: typeof config.keywords === 'string'
      ? config.keywords.split(',').map(k => k.trim())
      : config.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: canonical,
      siteName: SITE_NAME,
      images: config.ogImage ? [{ url: config.ogImage, width: 1200, height: 630 }] : [],
      locale: 'en_US',
      type: config.ogType || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : [],
      site: '@VMuktiSolution',
    },
    ...(config.noindex && {
      robots: { index: false, follow: false },
    }),
  };
}

/**
 * Generate blog post metadata
 */
export function generateBlogMetadata(blog) {
  const title = blog.metadata?.metaTitle || blog.content?.title || 'Blog | VMukti';
  const description = blog.metadata?.metaDescription || '';
  const urlWords = blog.metadata?.urlWords || '';
  const canonical = `${SITE_URL}/blog/${urlWords}`;
  const image = blog.content?.mainImage
    ? `https://res.cloudinary.com/dzs02ecai/image/upload/v1758361869/uploads/${blog.content.mainImage}`
    : `${SITE_URL}/og-image.jpg`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
      authors: [blog.content?.blogAuthor || 'VMukti Solutions'],
      section: 'Technology',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

/**
 * Generate SEO landing page metadata
 */
export function generateLandingPageMetadata(pageData) {
  const canonical = `${SITE_URL}${pageData.slug}`;

  return {
    title: pageData.title,
    description: pageData.metaDescription,
    keywords: pageData.keywords || [],
    alternates: { canonical },
    openGraph: {
      title: pageData.title,
      description: pageData.metaDescription,
      url: canonical,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.metaDescription,
    },
  };
}
