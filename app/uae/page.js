import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export function generateMetadata() {
  return {
    title: 'VMukti Solutions UAE | Cloud VMS & Smart City Surveillance',
    description: 'VMukti UAE - NDAA-compliant cloud VMS for enterprise and smart city surveillance across Dubai, Abu Dhabi, and all emirates. Arabic interface. Data sovereignty guaranteed.',
    canonical: 'https://www.vmukti.com/uae',
    alternates: {
      languages: {
        'en-AE': 'https://www.vmukti.com/uae',
      },
    },
  };
}

export default function UAERootPage() {
  redirect('/uae/smart-city-surveillance');
}
