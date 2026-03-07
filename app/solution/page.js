import { generatePageMetadata } from '../../lib/metadata';
import { seoConfig } from '../../lib/seo-config';
import SolutionClient from './solution-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return generatePageMetadata(seoConfig.solutions, '/solution');
}

export default function SolutionPage() {
  return <SolutionClient />;
}
