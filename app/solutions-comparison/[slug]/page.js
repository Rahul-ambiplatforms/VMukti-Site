import fs from 'fs';
import path from 'path';
import { getPageData, getAllSlugsForCategory } from '../../../lib/seo-pages';
import { generateLandingPageMetadata } from '../../../lib/metadata';
import SEOLandingPageContent from '../../../components/SEOLandingPageContent';
import ComparisonDetail from '../../../pages-src/ComparisonDetail/ComparisonDetail';
import { notFound } from 'next/navigation';

const CATEGORY = 'compare';

function getComparisonJSON(slug) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'comparisons', `${slug}.json`);
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const seoSlugs = getAllSlugsForCategory(CATEGORY);

  // Also include slugs from comparison JSON files
  const comparisonsDir = path.join(process.cwd(), 'data', 'comparisons');
  let jsonSlugs = [];
  try {
    jsonSlugs = fs.readdirSync(comparisonsDir)
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''));
  } catch {
    // directory may not exist
  }

  const allSlugs = Array.from(new Set([...seoSlugs, ...jsonSlugs]));
  return allSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Try JSON file first for richer meta
  const jsonData = getComparisonJSON(slug);
  if (jsonData?.meta) {
    return {
      title: jsonData.meta.title,
      description: jsonData.meta.description,
      keywords: jsonData.meta.keywords,
      alternates: jsonData.meta.canonical ? { canonical: jsonData.meta.canonical } : undefined,
    };
  }

  const pageData = getPageData(CATEGORY, slug);
  if (!pageData) return { title: 'Page Not Found' };
  return generateLandingPageMetadata(pageData);
}

export default async function Page({ params }) {
  const { slug } = await params;

  // Try loading rich JSON comparison data first
  const jsonData = getComparisonJSON(slug);
  // Try seoData by URL slug, then strip trailing segments for mismatches
  let seoData = getPageData(CATEGORY, slug);
  if (!seoData && slug.includes('-')) {
    const parts = slug.split('-');
    for (let i = parts.length - 1; i >= 3 && !seoData; i--) {
      seoData = getPageData(CATEGORY, parts.slice(0, i).join('-'));
    }
  }

  if (jsonData) {
    return <ComparisonDetail data={jsonData} seoData={seoData} />;
  }

  // Fallback to existing SEO page data
  if (!seoData) notFound();
  return <SEOLandingPageContent pageData={seoData} category={CATEGORY} />;
}
