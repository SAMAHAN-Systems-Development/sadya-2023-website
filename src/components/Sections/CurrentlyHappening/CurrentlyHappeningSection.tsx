import React from 'react';

import EventCards from '@/components/Sections/CurrentlyHappening/MapEventCard';

import SectionUI from '@/components/SectionUI';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Home() {
  return (
    <SectionUI>
      <SectionTitle
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        title="currently happening"
      />
      <EventCards />
    </SectionUI>
  );
}
