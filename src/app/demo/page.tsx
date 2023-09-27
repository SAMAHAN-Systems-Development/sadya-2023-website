import type { Metadata } from 'next';

import ActivitiesTile from '@/components/ui/ActivitiesTile';

export const metadata: Metadata = {
  title: 'Sadya 2023',
  description: '',
};

export default function Home() {
  return (
    <main>
      <ActivitiesTile activity={'BANNER MAKING'} location={'Building - Floor'} time={'10:00AM - 5:00PM'}/>
      <ActivitiesTile activity={'BANNER MAKING'} location={'Building - Floor'} time={'10:00AM - 5:00PM'}/>
      <ActivitiesTile activity={'BANNER MAKING'} location={'Building - Floor'} time={'10:00AM - 5:00PM'}/>
      <ActivitiesTile activity={'BANNER MAKING'} location={'Building - Floor'} time={'10:00AM - 5:00PM'}/>
      <ActivitiesTile activity={'BANNER MAKING'} location={'Building - Floor'} time={'10:00AM - 5:00PM'}/>
      <ActivitiesTile activity={'BANNER MAKING'} location={'Building - Floor'} time={'10:00AM - 5:00PM'}/>
    </main>
  );
}
