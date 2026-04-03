import SaudiArabiaClient from './saudi-arabia-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'AI Video Analytics for Saudi Arabia | Vision 2030 | VMukti',
    description: 'Cloud VMS for Saudi Arabia\'s Vision 2030 enterprises. Hajj crowd analytics for millions of pilgrims. Manage 100,000+ cameras. NDAA compliant. Arabic interface.',
    canonical: 'https://www.vmukti.com/saudi-arabia/ai-video-analytics',
    keywords: [
      'Cloud VMS Saudi Arabia',
      'Vision 2030 security',
      'Hajj crowd analytics',
      'video management Riyadh',
      'surveillance platform KSA',
      'NEOM security',
      'enterprise VMS Jeddah',
      'Arabic video management',
    ],
    alternates: {
      languages: {
        'en-SA': 'https://www.vmukti.com/saudi-arabia/ai-video-analytics',
        'en-IN': 'https://www.vmukti.com/india/ai-video-analytics',
        'en-US': 'https://www.vmukti.com/usa/video-surveillance-solutions',
        'en-GB': 'https://www.vmukti.com/uk/video-surveillance-solutions',
        'en-AE': 'https://www.vmukti.com/uae/smart-city-surveillance',
        'en-SG': 'https://www.vmukti.com/singapore/enterprise-vms',
      },
    },
    robots: 'index, follow',
    openGraph: {
      title: 'AI Video Analytics for Saudi Arabia | Vision 2030 | VMukti',
      description: 'Cloud VMS for Vision 2030 with Hajj crowd analytics and enterprise surveillance across all 13 regions.',
      url: 'https://www.vmukti.com/saudi-arabia/ai-video-analytics',
      type: 'website',
      images: [
        {
          url: 'https://www.vmukti.com/assets/tablet1.webp',
          width: 1200,
          height: 630,
          alt: 'VMukti VMS Platform',
        },
      ],
    },
  };
}

export default function SaudiArabiaPage() {
  return <SaudiArabiaClient />;
}
