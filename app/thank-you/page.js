import { generatePageMetadata } from '../../lib/metadata';
import ThankYouClient from './thank-you-client';

export function generateMetadata() {
  return {
    title: 'Thank You | VMukti Solutions',
    description: 'Thank you for contacting VMukti Solutions.',
    noindex: true,
  };
}

export default function ThankYouPage() {
  return <ThankYouClient />;
}
