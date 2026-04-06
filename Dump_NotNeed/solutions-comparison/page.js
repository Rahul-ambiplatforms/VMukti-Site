import SolutionsComparisonClient from './solutions-comparison-client';

export const metadata = {
  title: 'VMukti vs Competitors | Enterprise VMS Comparison 2026',
  description:
    'Compare VMukti Cloud VMS with Milestone, Genetec, Eagle Eye & Verkada. Feature-by-feature enterprise comparison with pricing, AI capabilities & cloud architecture.',
  keywords: [
    'enterprise VMS comparison',
    'vmukti vs milestone',
    'cloud VMS comparison',
    'video surveillance platform comparison 2026',
    'best enterprise VMS',
    'vmukti vs genetec vs eagle eye',
  ],
  alternates: {
    canonical: 'https://www.vmukti.com/solutions-comparison',
  },
  openGraph: {
    title: 'VMukti vs Competitors | Enterprise VMS Comparison 2026',
    description:
      'Compare VMukti Cloud VMS with Milestone, Genetec, Eagle Eye & Verkada. Feature-by-feature enterprise comparison.',
    url: 'https://www.vmukti.com/solutions-comparison',
    type: 'website',
    images: [
      {
        url: 'https://www.vmukti.com/og/solutions-comparison.jpg',
        width: 1200,
        height: 630,
        alt: 'VMukti vs Competitors – Enterprise VMS Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VMukti vs Competitors | Enterprise VMS Comparison 2026',
    description:
      'Compare VMukti Cloud VMS with Milestone, Genetec, Eagle Eye & Verkada. Feature-by-feature enterprise comparison.',
    images: ['https://www.vmukti.com/og/solutions-comparison.jpg'],
    site: '@VMuktiSolution',
  },
};

export default function SolutionsComparisonPage() {
  return <SolutionsComparisonClient />;
}
