import type { Metadata } from 'next';

import Test from '@/components/TicketSection';

export const metadata: Metadata = {
  title: 'Sadya 2023',
  description: '',
};

export default function Home() {
  return (
    <main>
      <Test/>
    </main>
  );
}
