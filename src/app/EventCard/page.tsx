import React from 'react';
import EventCard from '../../components/ui/EventCard';
import { EventData } from '../../data/EventData';

export default function Home() {
  return (
    <main>
      {EventData.map((event, index) => (
        <EventCard
          key={index}
          title={event.eventDataEntry}
          date={event.eventDataDate}
          description={event.eventDataDescription}
          floor={event.eventDataFloor}
        />
      ))}
    </main>
  );
}