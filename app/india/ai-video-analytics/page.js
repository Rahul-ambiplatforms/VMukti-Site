import IndiaClient from './india-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'AI Video Analytics & Cloud VMS for India | STQC Certified | VMukti',
    description: 'STQC-certified cloud VMS & AI video analytics for Indian enterprises. 700+ districts, 50+ smart cities. Data localized in India. GeM listed. RBI, Railways, Healthcare compliant.',
    canonical: 'https://www.vmukti.com/india/ai-video-analytics',
    keywords: [
      'AI video analytics India',
      'cloud VMS India',
      'STQC certified VMS',
      'smart city surveillance India',
      'government video management system',
      'data localization India',
      'GeM listed video management',
      'Indian enterprises video analytics',
    ],
    alternates: {
      languages: {
        'en-IN': 'https://www.vmukti.com/india/ai-video-analytics',
        'en-US': 'https://www.vmukti.com/usa/video-surveillance-solutions',
        'en-GB': 'https://www.vmukti.com/uk/video-surveillance-solutions',
        'en-AE': 'https://www.vmukti.com/uae/smart-city-surveillance',
        'en-SG': 'https://www.vmukti.com/singapore/enterprise-vms',
        'en-SA': 'https://www.vmukti.com/saudi-arabia/ai-video-analytics',
      },
    },
    robots: 'index, follow',
    openGraph: {
      title: 'AI Video Analytics & Cloud VMS for India | STQC Certified | VMukti',
      description: 'STQC-certified cloud VMS & AI video analytics for Indian enterprises. 700+ districts, 50+ smart cities.',
      url: 'https://www.vmukti.com/india/ai-video-analytics',
      type: 'website',
      images: [
        {
          url: 'https://www.vmukti.com/assets/tablet1.webp',
          width: 1200,
          height: 630,
          alt: 'VMukti AI Video Analytics Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@vmukti',
      title: 'AI Video Analytics & Cloud VMS for India | STQC Certified | VMukti',
      description: 'STQC-certified cloud VMS & AI video analytics for Indian enterprises.',
      image: 'https://www.vmukti.com/assets/tablet1.webp',
    },
  };
}

export default function IndiaPage() {
  return <IndiaClient />;
    }
