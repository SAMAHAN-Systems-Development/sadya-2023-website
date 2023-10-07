import type { Metadata } from 'next';

import "@splidejs/react-splide/css";

import ActivitiesCarousel from '@/components/ui/ActivitiesCarousel';


export const metadata: Metadata = {
  title: 'Sadya 2023',
  description: '',
};

export default function Home() {

  return (
    <main>
      <ActivitiesCarousel/>
    </main>
  );
}