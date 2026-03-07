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

// Merge all page data into one object (keyed by original data file keys)
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

// Build a lookup index by slug path for fast access
// e.g., "/compare/vmukti-vs-milestone" → { ...pageData }
const slugIndex = {};
for (const [key, page] of Object.entries(allPageData)) {
  if (page && page.slug) {
    slugIndex[page.slug] = page;
  }
}

/**
 * Get page data by category and slug
 * Matches by slug path first (most reliable), then falls back to key patterns
 */
export function getPageData(category, pageSlug) {
  // Primary: match by full slug path
  const slugPath = `/${category}/${pageSlug}`;
  if (slugIndex[slugPath]) return slugIndex[slugPath];

  // Fallback: try key patterns
  const searchKey = `${category}-${pageSlug}`;
  if (allPageData[searchKey]) return allPageData[searchKey];
  if (allPageData[pageSlug]) return allPageData[pageSlug];

  return null;
}

/**
 * Get all page slugs for a given category (for generateStaticParams)
 * Scans ALL pages and matches by slug path prefix /{category}/
 */
export function getAllSlugsForCategory(category) {
  const slugs = new Set();

  for (const [key, page] of Object.entries(allPageData)) {
    if (!page || !page.slug) continue;

    // Match pages whose slug starts with /category/
    if (page.slug.startsWith(`/${category}/`)) {
      const pageSlug = page.slug.slice(`/${category}/`.length);
      if (pageSlug) slugs.add(pageSlug);
    }
  }

  return Array.from(slugs);
}

/**
 * Get ALL unique categories from the data (for the catch-all route)
 */
export function getAllCategories() {
  const categories = new Set();
  for (const page of Object.values(allPageData)) {
    if (!page || !page.slug) continue;
    const parts = page.slug.split('/').filter(Boolean);
    if (parts.length >= 2) {
      categories.add(parts[0]);
    }
  }
  return Array.from(categories);
}

/**
 * Get all category/slug pairs (for generateStaticParams in catch-all route)
 */
export function getAllCategorySlugPairs() {
  const pairs = [];
  for (const page of Object.values(allPageData)) {
    if (!page || !page.slug) continue;
    const parts = page.slug.split('/').filter(Boolean);
    if (parts.length >= 2) {
      pairs.push({ category: parts[0], pageSlug: parts[1] });
    }
  }
  return pairs;
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
