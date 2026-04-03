import StatsPage from './stats-client';

export const metadata = {
  title: 'VMukti Statistics & Market Data | Cloud VMS Analytics',
  description: 'VMukti platform statistics: 900+ projects, 700+ districts, 50+ smart cities, 200+ customers, 1B+ video feeds, 99.99% uptime, 30+ AI modules.',
  alternates: {
    canonical: 'https://vmukti.com/knowledge-base/stats',
  },
};

export default function StatsPageWrapper() {
  return <StatsPage />;
}
