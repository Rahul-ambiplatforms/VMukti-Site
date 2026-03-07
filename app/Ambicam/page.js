import { generatePageMetadata } from '../../lib/metadata';
import AmbicamClient from './ambicam-client';

export function generateMetadata() {
  return {
    title: 'Ambicam | AI-Powered Video Analytics | VMukti Solutions',
    description: 'Ambicam by VMukti - Advanced AI-powered video analytics platform for intelligent surveillance and monitoring.',
    canonical: 'https://www.vmukti.com/Ambicam',
  };
}

export default function AmbicamPage() {
  return <AmbicamClient />;
}
