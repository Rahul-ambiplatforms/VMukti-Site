import { generatePageMetadata } from '../../lib/metadata';
import { seoConfig } from '../../lib/seo-config';
import AboutUsClient from './about-us-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return generatePageMetadata(seoConfig.about, '/about-us');
}

export default function AboutUsPage() {
  return <AboutUsClient />;
}
