import { getPageData, getAllSlugsForCategory } from '../../../lib/seo-pages';
import { generateLandingPageMetadata } from '../../../lib/metadata';
import SEOLandingPageContent from '../../../components/SEOLandingPageContent';

// List of categories handled by catch-all (excludes those with their own routes)
const CATCH_ALL_CATEGORIES = ['geo', 'industry'];

export async function generateStaticParams() {
  const params = [];
  for (const category of CATCH_ALL_CATEGORIES) {
    const slugs = getAllSlugsForCategory(category);
    slugs.forEach(slug => {
      params.push({ category, pageSlug: slug });
    });
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { category, pageSlug } = await params;
  const pageData = getPageData(category, pageSlug);
  if (!pageData) return { title: 'Page Not Found' };
  return generateLandingPageMetadata(pageData);
}

export default async function Page({ params }) {
  const { category, pageSlug } = await params;
  const pageData = getPageData(category, pageSlug);
  if (!pageData) return <div>Page not found</div>;
  return <SEOLandingPageContent pageData={pageData} category={category} />;
}
