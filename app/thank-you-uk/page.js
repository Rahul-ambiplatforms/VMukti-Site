import ThankYouClient from '../thank-you/thank-you-client';

export function generateMetadata() {
  return {
    title: 'Thank You | VMukti Solutions UK',
    description: 'Thank you for contacting VMukti Solutions UK.',
    robots: { index: false, follow: false },
  };
}

export default function ThankYouUKPage() {
  return <ThankYouClient />;
}
