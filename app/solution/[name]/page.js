import { generatePageMetadata } from '../../../lib/metadata';
import { seoConfig } from '../../../lib/seo-config';
import SolutionDetailsClient from './solution-details-client';

export const dynamic = 'force-dynamic';

const solutionMap = {
  'video-management-system': 'productVMS',
  'enterprise-management-system': 'productEMS',
  'iccc': 'productICCC',
  'cloudai': 'solutionCloudAI',
  'genai': 'solutionGenAI',
  'visualbot': 'solutionVisualBot',
  'live-streaming': 'solutionLiveStreaming',
  'face-surveillance': 'solutionFSV',
};

export async function generateStaticParams() {
  return Object.keys(solutionMap).map(name => ({ name }));
}

export async function generateMetadata({ params }) {
  const { name } = await params;
  const configKey = solutionMap[name];
  if (!configKey || !seoConfig[configKey]) {
    return { title: 'Page Not Found' };
  }
  return generatePageMetadata(seoConfig[configKey], `/solution/${name}`);
}

export default async function SolutionDetailsPage({ params }) {
  const { name } = await params;
  return <SolutionDetailsClient solutionName={name} />;
}
