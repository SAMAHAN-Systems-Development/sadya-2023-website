import type { Metadata } from 'next';

import CurrentlyHappeningSection from '@/components/Sections/CurrentlyHappening/CurrentlyHappeningSection';

import TicketSection from '@/components/Sections/TicketSection/TicketSection';
import NavigationBar from '@/components/ui/NavigationBar';
import ActivitiesSection from '@/components/Sections/ActivitiesSection/ActivitiesSection';
import HomePage from '@/components/Home/HomePage';

export const metadata: Metadata = {
  title: 'SADYA 2023: The Ateneo U-Fest',
  description:
    'The official Sadya 2023 Website of the Ateneo de Davao University',
};

export default function Home() {
  return (
    <div className="bg-white bg-gradient-to-t from-lightlavander relative">
      <NavigationBar />
      <HomePage />
      <CurrentlyHappeningSection />
      <ActivitiesSection />
      <TicketSection />
    </div>
  );
}
