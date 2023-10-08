import type { Metadata } from 'next';

import CurrentlyHappeningSection from '@/components/Sections/CurrentlyHappening/CurrentlyHappeningSection';

import ActivitiesSection from '@/components/Sections/ActivitiesSection';
import Hero from '@/components/Sections/HeroSection';
import TicketSection from '@/components/Sections/TicketSection/TicketSection';
import NavigationBar from '@/components/ui/NavigationBar';

export const metadata: Metadata = {
  title: 'SADYA 2023: The Ateneo U-Fest',
  description:
    'The official Sadya 2023 Website of the Ateneo de Davao University.',
  metadataBase: new URL('https://sadya-2023.onrender.com/'),
};

export default function Home() {
  return (
    <div className="bg-white bg-gradient-to-t from-lightlavander/20 to-lightlavander/5">
      <Hero />
      <div id="with-nav">
        <NavigationBar />
        <CurrentlyHappeningSection />
        <ActivitiesSection />
        <TicketSection />
      </div>
    </div>
  );
}
