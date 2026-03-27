import { getPageData, getAllCategorySlugPairs } from '../../../lib/seo-pages';
import { generateLandingPageMetadata } from '../../../lib/metadata';
import SEOLandingPageContent from '../../../components/SEOLandingPageContent';
import { notFound } from 'next/navigation';

// Routes that have their OWN dedicated folders in app/ (exclude from catch-all)
const EXCLUDED_CATEGORIES = ['blog', 'solution', 'industry', 'uk', 'usa', 'events', 'Ambicam', 'solutions-comparison'];

export async function generateStaticParams() {
  const allPairs = getAllCategorySlugPairs();
  return allPairs.filter(({ category }) => !EXCLUDED_CATEGORIES.includes(category));
}

export async function generateMetadata({ params }) {
  const { category, pageSlug } = await params;
  const pageData = getPageData(category, pageSlug);
  if (!pageData) return { title: 'Page Not Found | VMukti Solutions' };
  return generateLandingPageMetadata(pageData);
}

export default async function Page({ params }) {
  const { category, pageSlug } = await params;
  const pageData = getPageData(category, pageSlug);
  if (!pageData) notFound();
  return <SEOLandingPageContent pageData={pageData} category={category} />;
}
