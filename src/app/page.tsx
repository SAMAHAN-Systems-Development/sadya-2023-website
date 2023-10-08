import type { Metadata } from 'next';

import "@splidejs/react-splide/css";

import HomePage from '@/components/Home/HomePage';
import ActivitiesCarousel from '@/components/ui/ActivitiesCarousel';


export const metadata: Metadata = {
  title: 'Sadya 2023',
  description: '',
};

export default function Home() {
  return (
    <main>
      <HomePage />
      <ActivitiesCarousel/>
    </main>
  );
}
