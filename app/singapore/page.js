import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'VMukti Solutions Singapore | Smart Nation VMS',
    description: 'VMukti Singapore - PDPA-compliant cloud VMS for Smart Nation enterprises. Privacy-first AI analytics. On-premise and hybrid cloud deployment available.',
    canonical: 'https://www.vmukti.com/singapore',
    alternates: {
      languages: {
        'en-SG': 'https://www.vmukti.com/singapore',
      },
    },
  };
}

export default function SingaporeRootPage() {
  redirect('/singapore/enterprise-vms');
}
