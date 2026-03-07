import { generatePageMetadata } from '../../lib/metadata';
import { seoConfig } from '../../lib/seo-config';
import ContactUsClient from './contact-us-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return generatePageMetadata(seoConfig.contact, '/contact-us');
}

export default function ContactUsPage() {
  return <ContactUsClient />;
}
