import { generatePageMetadata } from '../../../lib/metadata';
import ConvergenceClient from './convergence-india-2026-client';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'Convergence India 2026 | VMukti Solutions',
    description: 'Join VMukti Solutions at Convergence India 2026 for enterprise surveillance and enterprise campus innovations.',
    canonical: 'https://www.vmukti.com/events/convergence-india-2026',
  };
}

export default function ConvergencePage() {
  return <ConvergenceClient />;
}
