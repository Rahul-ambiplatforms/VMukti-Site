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
    // Geo Landing Pages (International)
    { url: `${SITE_URL}/india/ai-video-analytics`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/uae/smart-city-surveillance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/singapore/enterprise-vms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/saudi-arabia/ai-video-analytics`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Knowledge Base (GEO AI Optimization)
    { url: `${SITE_URL}/knowledge-base`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/knowledge-base/faq`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/knowledge-base/stats`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/knowledge-base/glossary`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // Solutions
    { url: `${SITE_URL}/solution/video-management-system`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/solution/enterprise-management-system`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/solution/integrated-command-control-center`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/solution/cloudai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/solution/genai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/solution/visualbot`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/solution/live-streaming-solution`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/solution/flying-squad-vehicle`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/solution/ai-video-analytics`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/solution/face-recognition`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/solution/anpr-lpr`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/solution/cloud-surveillance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/solution/edge-ai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Industries
    ...['banking', 'enterprise-campus', 'healthcare', 'manufacturing', 'oil-and-gas',
      'government', 'defense', 'warehouse', 'logistics', 'education', 'election',
      'transportation', 'pharma', 'construction', 'hospitality', 'sports-entertainment',
      'enterprise', 'retail'
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
