import { generatePageMetadata } from '../../lib/metadata';
import { seoConfig } from '../../lib/seo-config';
import BookDemoClient from './book-a-demo-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'Book a Demo | VMukti Solutions',
    description: 'Schedule a demo of VMukti cloud VMS, EMS, and ICCC platform. Talk with our enterprise solutions team.',
    canonical: 'https://www.vmukti.com/book-a-demo',
  };
}

export default function BookDemoPage() {
  return <BookDemoClient />;
}
