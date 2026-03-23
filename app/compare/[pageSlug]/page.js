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
  const slugs = getAllSlugsForCategory(CATEGORY);
  return slugs.map(slug => ({ pageSlug: slug }));
}

export async function generateMetadata({ params }) {
  const { pageSlug } = await params;

  // Try JSON file first for richer meta
  const jsonData = getComparisonJSON(pageSlug);
  if (jsonData?.meta) {
    return {
      title: jsonData.meta.title,
      description: jsonData.meta.description,
      keywords: jsonData.meta.keywords,
      alternates: jsonData.meta.canonical ? { canonical: jsonData.meta.canonical } : undefined,
    };
  }

  const pageData = getPageData(CATEGORY, pageSlug);
  if (!pageData) return { title: 'Page Not Found' };
  return generateLandingPageMetadata(pageData);
}

export default async function Page({ params }) {
  const { pageSlug } = await params;

  // Try loading rich JSON comparison data first
  const jsonData = getComparisonJSON(pageSlug);
  // Try seoData by URL slug, then strip trailing segments for mismatches (e.g. verkada-vms → verkada)
  let seoData = getPageData(CATEGORY, pageSlug);
  if (!seoData && pageSlug.includes('-')) {
    // Try progressively shorter slugs to find a match
    const parts = pageSlug.split('-');
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
