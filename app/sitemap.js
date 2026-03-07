import { getAllPages } from '../lib/seo-pages';
import { getAllBlogSlugs } from '../lib/api';

const SITE_URL = 'https://www.vmukti.com';

export default async function sitemap() {
  // 1. Static pages
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/solution`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/industry`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/contact-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/book-a-demo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/careers`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms-and-conditions`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/usa/video-surveillance-solutions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/uk/video-surveillance-solutions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Solutions
    { url: `${SITE_URL}/solution/video-management-system`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/solution/enterprise-management-system`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/solution/intelligent-command-control-center`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/solution/cloud-ai-platform`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/solution/genai-visual-bot`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/solution/visual-bot`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/solution/live-streaming`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/solution/face-surveillance-system`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Industries
    ...['banking', 'smart-city', 'healthcare', 'manufacturing', 'oil-gas', 'government', 'defense',
      'warehouse', 'logistics', 'education', 'election', 'transportation', 'pharma', 'construction',
      'hospitality', 'sports-entertainment', 'enterprise', 'retail'
    ].map(name => ({
      url: `${SITE_URL}/industry/${name}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];

  // 2. SEO Landing Pages (from data files)
  const seoPages = getAllPages().map(page => ({
    url: `${SITE_URL}${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 3. Blog posts (from API)
  let blogPages = [];
  try {
    const slugs = await getAllBlogSlugs();
    blogPages = slugs.map(slug => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    }));
  } catch (e) {
    console.error('Sitemap blog fetch error:', e);
  }

  return [...staticPages, ...seoPages, ...blogPages];
}
