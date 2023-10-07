import type { Metadata } from 'next';

import HomePage from '@/components/Home/HomePage';

export const metadata: Metadata = {
  title: 'Sadya 2023',
  description: 'The official Sadya 2023 Website of the Ateneo de Davao University',
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
