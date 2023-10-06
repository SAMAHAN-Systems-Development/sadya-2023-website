import type { Metadata } from 'next';

import ActivitiesCard from '@/components/ui/ActivitiesCard';

export const metadata: Metadata = {
  title: 'Sadya 2023',
  description: '',
};

export default function Home() {
  return (
    <main>
      <ActivitiesCard/>
    </main>
  );
}
