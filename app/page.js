import { generatePageMetadata } from '../lib/metadata';
import { seoConfig } from '../lib/seo-config';
import HomepageClient from './homepage-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return generatePageMetadata(seoConfig.home, '/');
}

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href="/assets/tablet2.webp" fetchPriority="high" media="(min-width: 768px)" />
      <link rel="preload" as="image" href="/assets/tablet.webp" fetchPriority="high" media="(max-width: 767px)" />
      <HomepageClient />
    </>
  );
}
