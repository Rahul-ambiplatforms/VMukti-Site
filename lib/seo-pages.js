/**
 * SEO Landing Page Data Loader
 * Aggregates all seoPageData files and provides lookup functions
 */

// Import all data files
import seoPageData from '../data/seoPageData';
import seoPageDataExpansion from '../data/seoPageDataExpansion';
import seoPageDataExpansion2 from '../data/seoPageDataExpansion2';
import seoPageDataExpansion3 from '../data/seoPageDataExpansion3';
import seoPageDataExpansion4 from '../data/seoPageDataExpansion4';
import seoPageDataGeo from '../data/seoPageDataGeo';
import seoPageDataGeoIntl from '../data/seoPageDataGeoIntl';
import seoPageDataGenAI from '../data/seoPageDataGenAI';
import seoPageDataInnovation from '../data/seoPageDataInnovation';
import seoPageDataCompare from '../data/seoPageDataCompare';
import seoPageDataCompliance from '../data/seoPageDataCompliance';

// Merge all page data into one object
const allPageData = {
  ...seoPageData,
  ...seoPageDataExpansion,
  ...seoPageDataExpansion2,
  ...seoPageDataExpansion3,
  ...seoPageDataExpansion4,
  ...seoPageDataGeo,
  ...seoPageDataGeoIntl,
  ...seoPageDataGenAI,
  ...seoPageDataInnovation,
  ...seoPageDataCompare,
  ...seoPageDataCompliance,
};

/**
 * Get page data by category and slug
 */
export function getPageData(category, pageSlug) {
  // Try multiple key patterns (same logic as original SEOLandingPage.jsx)
  const searchKey = `${category}-${pageSlug}`;
  return allPageData[searchKey] || allPageData[pageSlug] || allPageData[category] || null;
}

/**
 * Get all page slugs for a given category (for generateStaticParams)
 */
export function getAllSlugsForCategory(category) {
  const slugs = [];
  const categoryPrefix = `${category}-`;

  for (const key of Object.keys(allPageData)) {
    const page = allPageData[key];
    if (!page || !page.slug) continue;

    // Match pages whose slug starts with /category/
    if (page.slug.startsWith(`/${category}/`)) {
      const pageSlug = page.slug.replace(`/${category}/`, '');
      if (pageSlug) slugs.push(pageSlug);
    }

    // Also match by key prefix
    if (key.startsWith(categoryPrefix)) {
      const pageSlug = key.replace(categoryPrefix, '');
      if (pageSlug && !slugs.includes(pageSlug)) {
        slugs.push(pageSlug);
      }
    }
  }

  return slugs;
}

/**
 * Get all page data entries (for sitemap)
 */
export function getAllPages() {
  return Object.entries(allPageData)
    .filter(([_, page]) => page && page.slug)
    .map(([key, page]) => ({
      key,
      slug: page.slug,
      title: page.title,
      category: page.category || 'general',
    }));
}

export default allPageData;
