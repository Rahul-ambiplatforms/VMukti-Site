import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function IndiaRootPage(){
  redirect('/india/ai-video-analytics');
}
