import { generatePageMetadata } from '../../lib/metadata';
import { seoConfig } from '../../lib/seo-config';
import CareersClient from './careers-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return generatePageMetadata(seoConfig.careers, '/careers');
}

export default function CareersPage() {
  return <CareersClient />;
}
