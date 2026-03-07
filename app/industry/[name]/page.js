import { generatePageMetadata } from '../../../lib/metadata';
import { seoConfig } from '../../../lib/seo-config';
import IndustryDetailsClient from './industry-details-client';

export const dynamic = 'force-dynamic';

const industryMap = {
  'banking': 'industryBanking',
  'smart-city': 'industrySmartCity',
  'healthcare': 'industryHealthcare',
  'manufacturing': 'industryManufacturing',
  'oil-gas': 'industryOilGas',
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
    return { title: 'Page Not Found' };
  }
  return generatePageMetadata(seoConfig[configKey], `/industry/${name}`);
}

export default async function IndustryDetailsPage({ params }) {
  const { name } = await params;
  return <IndustryDetailsClient industryName={name} />;
}
