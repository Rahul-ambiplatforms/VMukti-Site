import { generatePageMetadata } from '../../lib/metadata';
import { seoConfig } from '../../lib/seo-config';
import BlogDashboardClient from './blog-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'Latest Trends & Insights for AI Video Surveillance & Cloud VMS | VMukti',
    description: 'Explore expert insights on AI surveillance, Cloud VMS, EMS, ICCC, video intelligence, and smart city solutions. Stay updated with VMukti blog.',
    alternates: {
      canonical: 'https://www.vmukti.com/blog',
    },
    openGraph: {
      title: 'VMukti Blog - AI Video Surveillance Insights',
      description: 'Expert insights on AI surveillance, Cloud VMS, EMS, ICCC, and smart city solutions.',
      url: 'https://www.vmukti.com/blog',
      type: 'website',
    },
  };
}

export default function BlogPage() {
  return <BlogDashboardClient />;
}
