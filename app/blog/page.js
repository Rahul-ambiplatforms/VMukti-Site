import BlogDashboardClient from './blog-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'AI Video Surveillance & Cloud VMS Blog',
    description: 'Expert insights on AI surveillance, Cloud VMS, EMS, Enterprise Command Center, and enterprise campus security solutions. Stay updated with VMukti.',
    alternates: {
      canonical: 'https://www.vmukti.com/blog',
    },
    openGraph: {
      title: 'VMukti Blog - AI Video Surveillance Insights',
      description: 'Expert insights on AI surveillance, Cloud VMS, EMS, Enterprise Command Center, and enterprise campus solutions.',
      url: 'https://www.vmukti.com/blog',
      type: 'website',
    },
  };
}

export default function BlogPage() {
  return <BlogDashboardClient />;
}
