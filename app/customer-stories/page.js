import { generatePageMetadata } from '../../lib/metadata';
import { seoConfig } from '../../lib/seo-config';
import CustomerStoriesClient from './customer-stories-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return generatePageMetadata(seoConfig.customerStories, '/customer-stories');
}

export default function CustomerStoriesPage() {
  return <CustomerStoriesClient />;
}