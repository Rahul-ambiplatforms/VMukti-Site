import UAEClient from './uae-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'Smart City Surveillance & Cloud VMS for UAE | NDAA Compliant | VMukti',
    description: 'Enterprise Cloud VMS for UAE smart cities. Manage 50,000+ cameras across Dubai, Abu Dhabi, Sharjah. NDAA compliant. Arabic interface. Data sovereignty. Hybrid cloud deployment.',
    canonical: 'https://www.vmukti.com/uae/smart-city-surveillance',
    keywords: [
      'Cloud VMS UAE',
      'smart city surveillance Dubai',
      'video management Abu Dhabi',
      'enterprise VMS Emirates',
      'NDAA compliant VMS',
      'Arabic interface VMS',
      'UAE data sovereignty',
      'hybrid cloud deployment UAE',
    ],
    alternates: {
      languages: {
        'en-AE': 'https://www.vmukti.com/uae/smart-city-surveillance',
        'en-IN': 'https://www.vmukti.com/india/ai-video-analytics',
        'en-US': 'https://www.vmukti.com/usa/video-surveillance-solutions',
        'en-GB': 'https://www.vmukti.com/uk/video-surveillance-solutions',
        'en-SG': 'https://www.vmukti.com/singapore/enterprise-vms',
        'en-SA': 'https://www.vmukti.com/saudi-arabia/ai-video-analytics',
      },
    },
    robots: 'index, follow',
    openGraph: {
      title: 'Smart City Surveillance & Cloud VMS for UAE | NDAA Compliant | VMukti',
      description: 'Enterprise Cloud VMS for UAE smart cities. Manage 50,000+ cameras across Dubai, Abu Dhabi.',
      url: 'https://www.vmukti.com/uae/smart-city-surveillance',
      type: 'website',
      images: [
        {
          url: 'https://www.vmukti.com/assets/tablet1.webp',
          width: 1200,
          height: 630,
          alt: 'VMukti Cloud VMS Platform',
        },
      ],
    },
  };
}

export default function UAEPage() {
  return <UAEClient />;
}
