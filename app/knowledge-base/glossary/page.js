import GlossaryPage from './glossary-client';

export const metadata = {
  title: 'VMukti Glossary | Video Surveillance & AI Terms',
  description: 'Comprehensive glossary of video surveillance, cloud computing, and AI analytics terminology used in enterprise VMS deployments.',
  alternates: {
    canonical: 'https://vmukti.com/knowledge-base/glossary',
  },
};

export default function GlossaryPageWrapper() {
  return <GlossaryPage />;
}
