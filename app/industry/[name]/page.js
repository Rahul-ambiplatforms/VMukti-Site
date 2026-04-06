import { generatePageMetadata } from '../../../lib/metadata';
import { seoConfig } from '../../../lib/seo-config';
import IndustryDetailsClient from './industry-details-client';
import { redirect, notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

const industryMap = {
  'banking': 'industryBanking',
  'enterprise-campus': 'industrySmartCity',
  'smart-city': 'industrySmartCity',
  'healthcare': 'industryHealthcare',
  'manufacturing': 'industryManufacturing',
  'oil-and-gas': 'industryOilGas',
  'government': 'industryGovernment',
  'defense': 'industryDefense',
  'warehouse': 'industryWarehouse',
  'logistics': 'industryLogistics',
  'education': 'industryEducation',
  'election': 'industryElection',
  'transportation': 'industryTransportation',
  'pharma': 'industryPharma',
  'construction': 'industryConstruction',
  'hospitality': 'industryHospitality',
  'sports-entertainment': 'industrySports',
  'enterprise': 'industryEnterprise',
  'retail': 'industryRetail',
};

export async function generateStaticParams() {
  return Object.keys(industryMap).map(name => ({ name }));
}

export async function generateMetadata({ params }) {
  const { name } = await params;
  const configKey = industryMap[name];
  if (!configKey || !seoConfig[configKey]) {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }
  return generatePageMetadata(seoConfig[configKey], `/industry/${name}`);
}

export default async function IndustryDetailsPage({ params }) {
  const { name } = await params;
  
  // Redirect non-canonical URLs to canonical ones
  if (name === 'oil-gas') {
    redirect('/industry/oil-and-gas');
  }

  if (name === 'sports-and-entertainment') {
    redirect('/industry/sports-entertainment');
  }

  // Return proper 404 for unknown industry slugs
  const configKey = industryMap[name];
  if (!configKey || !seoConfig[configKey]) {
    notFound();
  }

  return <IndustryDetailsClient industryName={name} />;
}
