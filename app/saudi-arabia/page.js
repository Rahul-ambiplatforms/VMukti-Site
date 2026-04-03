import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'VMukti Solutions Saudi Arabia | Vision 2030 Security',
    description: 'VMukti Saudi Arabia - Cloud VMS for Vision 2030 enterprises. Crowd analytics for Hajj. Arabic interface. Manage 100,000+ cameras across all regions.',
    canonical: 'https://www.vmukti.com/saudi-arabia',
    alternates: {
      languages: {
        'en-SA': 'https://www.vmukti.com/saudi-arabia',
      },
    },
  };
}

export default function SaudiArabiaRootPage() {
  redirect('/saudi-arabia/ai-video-analytics');
}
