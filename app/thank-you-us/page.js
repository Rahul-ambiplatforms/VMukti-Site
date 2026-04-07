import ThankYouClient from '../thank-you/thank-you-client';

export function generateMetadata() {
  return {
    title: 'Thank You | VMukti Solutions USA',
    description: 'Thank you for contacting VMukti Solutions USA.',
    robots: { index: false, follow: false },
  };
}

export default function ThankYouUSPage() {
  return <ThankYouClient />;
}
