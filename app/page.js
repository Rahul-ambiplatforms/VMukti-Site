import { generatePageMetadata } from '../lib/metadata';
import { seoConfig } from '../lib/seo-config';
import HomepageClient from './homepage-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return generatePageMetadata(seoConfig.home, '/');
}

export default function HomePage() {
  return <HomepageClient />;
}
