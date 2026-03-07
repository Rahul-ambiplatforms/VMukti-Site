import { generatePageMetadata } from '../../lib/metadata';
import { seoConfig } from '../../lib/seo-config';
import IndustryClient from './industry-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return generatePageMetadata(seoConfig.industries, '/industry');
}

export default function IndustryPage() {
  return <IndustryClient />;
}
