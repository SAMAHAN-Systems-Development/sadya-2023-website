import React from 'react';

import EventCards from '@/components/Sections/CurrentlyHappening/MapEventCard';
import SectionUI from '@/components/SectionUI';
import SectionTitle from '@/components/ui/SectionTitle';
SectionTitle;

export default function Home() {
  return (
    <SectionUI>
      <SectionTitle
        subtitle="Checkout the current events happening in real time during October 12-14!"
        title="currently happening"
      />
      <EventCards />
    </SectionUI>
  );
}
