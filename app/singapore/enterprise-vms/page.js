import SingaporeClient from './singapore-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'Smart Nation Enterprise VMS | PDPA Compliant | VMukti',
    description: 'PDPA-compliant Cloud VMS for Singapore\'s Smart Nation enterprises. AI-powered analytics with privacy protection. Multi-site management. On-premise deployment available.',
    canonical: 'https://www.vmukti.com/singapore/enterprise-vms',
    keywords: [
      'Cloud VMS Singapore',
      'PDPA compliant VMS',
      'Smart Nation surveillance',
      'enterprise video management Singapore',
      'privacy-first AI analytics',
      'Singapore data protection',
      'enterprise campus VMS',
    ],
    alternates: {
      languages: {
        'en-SG': 'https://www.vmukti.com/singapore/enterprise-vms',
        'en-IN': 'https://www.vmukti.com/india/ai-video-analytics',
        'en-US': 'https://www.vmukti.com/usa/video-surveillance-solutions',
        'en-GB': 'https://www.vmukti.com/uk/video-surveillance-solutions',
        'en-AE': 'https://www.vmukti.com/uae/smart-city-surveillance',
        'en-SA': 'https://www.vmukti.com/saudi-arabia/ai-video-analytics',
      },
    },
    robots: 'index, follow',
    openGraph: {
      title: 'Smart Nation Enterprise VMS | PDPA Compliant | VMukti',
      description: 'PDPA-compliant Cloud VMS for Singapore enterprises with AI analytics and privacy protection.',
      url: 'https://www.vmukti.com/singapore/enterprise-vms',
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

export default function SingaporePage() {
  return <SingaporeClient />;
}
