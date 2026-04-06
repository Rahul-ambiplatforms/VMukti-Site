import { generatePageMetadata } from '../../../lib/metadata';
import { seoConfig } from '../../../lib/seo-config';
import SolutionDetailsClient from './solution-details-client';
import { redirect, notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

const solutionMap = {
  'video-management-system': 'productVMS',
  'cloud-vms': 'productVMS',
  'enterprise-management-system': 'productEMS',
  'iccc': 'productICCC',
  'integrated-command-control-center': 'productICCC',
  'cloudai': 'solutionCloudAI',
  'genai': 'solutionGenAI',
  'visualbot': 'solutionVisualBot',
  'live-streaming': 'solutionLiveStreaming',
  'live-streaming-solution': 'solutionLiveStreaming',
  'flying-squad-vehicle': 'solutionFSV',
  'ai-video-analytics': 'solutionAIVideoAnalytics',
  'face-recognition': 'solutionFaceRecognition',
  'anpr-lpr': 'solutionANPR',
  'cloud-surveillance': 'solutionCloudSurveillance',
  'edge-ai': 'solutionEdgeAI',
};

export async function generateStaticParams() {
  return Object.keys(solutionMap).map(name => ({ name }));
}

export async function generateMetadata({ params }) {
  const { name } = await params;
  const configKey = solutionMap[name];
  if (!configKey || !seoConfig[configKey]) {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }
  return generatePageMetadata(seoConfig[configKey], `/solution/${name}`);
}

export default async function SolutionDetailsPage({ params }) {
  const { name } = await params;
  
  // Redirect non-canonical URLs to canonical ones
  if (name === 'generative-ai') {
    redirect('/solution/genai');
  }
  
  if (name === 'cloud-ai') {
    redirect('/solution/cloudai');
  }
  
  if (name === 'visual-bot') {
    redirect('/solution/visualbot');
  }

  // Return proper 404 for unknown solution slugs
  const configKey = solutionMap[name];
  if (!configKey || !seoConfig[configKey]) {
    notFound();
  }

  return <SolutionDetailsClient solutionName={name} />;
}
