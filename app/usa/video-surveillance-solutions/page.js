import { generatePageMetadata } from '../../../lib/metadata';
import USAClient from './usa-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'Cloud Video Surveillance Solutions in USA | VMukti',
    description: 'VMukti cloud VMS solutions for USA - Enterprise video management system with AI analytics, ANPR, face recognition, and multi-site monitoring.',
    canonical: 'https://www.vmukti.com/usa/video-surveillance-solutions',
    alternates: {
      languages: {
        'en-US': 'https://www.vmukti.com/usa/video-surveillance-solutions',
      },
    },
  };
}

export default function USAPage() {
  return <USAClient />;
}
