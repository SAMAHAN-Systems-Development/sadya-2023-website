import type { Metadata } from 'next';
import ActivitiesCarousel from '@/components/ui/ActivitiesCarousel';
import "@splidejs/react-splide/css";


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