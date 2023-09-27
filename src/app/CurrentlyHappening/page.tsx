'use client'; 
import React, { useState } from 'react';
import EventCard from '@/components/ui/EventCard';
import { EventData } from '@/data/EventData';
import { FilterContents } from '@/utils/datetime';

export default function Home() {
  // const filteredEvents = FilterContents(EventData);
  const [filteredEvents, setFilteredEvents] = useState(FilterContents(EventData))
  console.log(filteredEvents)
  return (

    <main>
      {filteredEvents.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <p>No Current Events</p>
        </div>
      ) : (
        <div>
          {filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.eventDataEntry}
              date={event.eventDataDate}
              description={event.eventDataDescription}
              floor={event.eventDataFloor}
            />
          ))}
        </div>
      )}
    </main>
  );
}
