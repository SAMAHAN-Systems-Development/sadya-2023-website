import type { Metadata } from 'next';

import HomePage from '@/components/Home/HomePage';

export const metadata: Metadata = {
  title: 'Sadya 2023',
  description: '',
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
