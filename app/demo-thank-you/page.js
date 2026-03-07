import { generatePageMetadata } from '../../lib/metadata';
import DemoThankYouClient from './demo-thank-you-client';

export function generateMetadata() {
  return {
    title: 'Demo Scheduled | VMukti Solutions',
    description: 'Thank you for scheduling your VMukti demo.',
    noindex: true,
  };
}

export default function DemoThankYouPage() {
  return <DemoThankYouClient />;
}
