import { generatePageMetadata } from '../../lib/metadata';
import TermsAndConditionsClient from './terms-and-conditions-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'Terms and Conditions | VMukti Solutions',
    description: 'VMukti Solutions terms and conditions of use.',
    canonical: 'https://www.vmukti.com/terms-and-conditions',
  };
}

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsClient />;
}
