import FAQPage from './faq-client';

export const metadata = {
  title: 'VMukti Cloud VMS FAQ | Comprehensive Q&A Guide',
  description: 'Find answers to 30+ frequently asked questions about VMukti Cloud VMS, AI video analytics, deployment, compliance, pricing, and support.',
  alternates: {
    canonical: 'https://vmukti.com/knowledge-base/faq',
  },
};

export default function FAQPageWrapper() {
  return <FAQPage />;
}
