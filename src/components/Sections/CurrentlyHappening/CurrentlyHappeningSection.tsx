import React from 'react';

import EventCards from '@/components/Sections/CurrentlyHappening/MapEventCard';

import SectionTitle from '@/components/ui/SectionTitle';

export default function Home() {
  return (
    <section className="container-2xl mb-5 pt-25 sm:pt-35 md:pt-40 lg:pt-52">
      <SectionTitle
        subtitle="Checkout the current events happening in real time during October 12-14!"
        title="currently happening"
      />
      <EventCards />
    </section>
  );
}
