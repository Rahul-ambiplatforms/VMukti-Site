import { generatePageMetadata } from '../../lib/metadata';
import PrivacyPolicyClient from './privacy-policy-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'Privacy Policy',
    description: 'VMukti Solutions privacy policy. Learn how we protect your data.',
    canonical: 'https://www.vmukti.com/privacy-policy',
  };
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
