import type { Metadata } from 'next';

import CurrentlyHappeningSection from '@/components/Sections/CurrentlyHappening/CurrentlyHappeningSection';

import TicketSection from '@/components/Sections/TicketSection/TicketSection';
import NavigationBar from '@/components/ui/NavigationBar';

export const metadata: Metadata = {
  title: 'Sadya 2023',
  description: '',
};

export default function Home() {
  return (
    <div className="bg-white bg-gradient-to-t from-lightlavander relative">
      <NavigationBar />
      <CurrentlyHappeningSection />
      <TicketSection />
    </div>
  );
}
