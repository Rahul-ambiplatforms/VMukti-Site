import { generatePageMetadata } from '../../../lib/metadata';
import UKClient from './uk-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'Cloud Video Surveillance Solutions in UK | VMukti',
    description: 'VMukti cloud VMS solutions for UK - Enterprise video management system with AI analytics, ANPR, face recognition, and multi-site monitoring.',
    canonical: 'https://www.vmukti.com/uk/video-surveillance-solutions',
    alternates: {
      languages: {
        'en-GB': 'https://www.vmukti.com/uk/video-surveillance-solutions',
      },
    },
  };
}

export default function UKPage() {
  return <UKClient />;
}
