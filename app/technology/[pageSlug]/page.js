import { getPageData, getAllSlugsForCategory } from '../../../lib/seo-pages';
import { generateLandingPageMetadata } from '../../../lib/metadata';
import SEOLandingPageContent from '../../../components/SEOLandingPageContent';

const CATEGORY = 'technology';

export async function generateStaticParams() {
  const slugs = getAllSlugsForCategory(CATEGORY);
  return slugs.map(slug => ({ pageSlug: slug }));
}

export async function generateMetadata({ params }) {
  const { pageSlug } = await params;
  const pageData = getPageData(CATEGORY, pageSlug);
  if (!pageData) return { title: 'Page Not Found' };
  return generateLandingPageMetadata(pageData);
}

export default async function Page({ params }) {
  const { pageSlug } = await params;
  const pageData = getPageData(CATEGORY, pageSlug);
  if (!pageData) return <div>Page not found</div>;
  return <SEOLandingPageContent pageData={pageData} category={CATEGORY} />;
}
