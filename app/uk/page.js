import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'VMukti Solutions UK | Video Surveillance & AI Analytics',
    description: 'VMukti UK - Leading provider of cloud video surveillance solutions, AI analytics, and enterprise security systems across the United Kingdom.',
    canonical: 'https://www.vmukti.com/uk',
    alternates: {
      languages: {
        'en-GB': 'https://www.vmukti.com/uk',
      },
    },
  };
}

export default function UKRootPage() {
  // Redirect to the main UK video surveillance solutions page
  redirect('/uk/video-surveillance-solutions');
}