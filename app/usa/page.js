import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'VMukti Solutions USA | Video Surveillance & AI Analytics',
    description: 'VMukti USA - Leading provider of cloud video surveillance solutions, AI analytics, and enterprise security systems across the United States.',
    canonical: 'https://www.vmukti.com/usa',
    alternates: {
      languages: {
        'en-US': 'https://www.vmukti.com/usa',
      },
    },
  };
}

export default function USARootPage() {
  // Redirect to the main USA video surveillance solutions page
  redirect('/usa/video-surveillance-solutions');
}