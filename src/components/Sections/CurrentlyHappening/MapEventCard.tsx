'use client';

import React, { useEffect, useState } from 'react';

import EventCard from '@/components/ui/EventCard';
import { EventData } from '@/data/EventData';
import { FilterContents } from '@/utils/datetime';

export default function MapEventCard() {
  const [filteredEvents, setFilteredEvents] = useState(
    FilterContents(EventData)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFilteredEvents(FilterContents(filteredEvents));
    }, 10000);
    return () => clearInterval(interval);
  }, [filteredEvents]);

  return (
    <div className="pt-[55px]">
      {filteredEvents.length === 0 ? (
        <div className="flex justify-center items-center text-lavander">
          <p>No current events.</p>
        </div>
      ) : (
          <div className="flex flex-wrap justify-center text-white">
            {filteredEvents.map((event, index) => (
              <div key={index} className='m-4'>
              <EventCard
                title={event.eventDataEntry}
                date={event.eventDataDate}
                description={event.eventDataDescription}
                floor={event.eventDataFloor}
                imageUrl={event.imageUrl}
              />
              </div>
            ))}
          </div>
      )}
    </div>
  );
}
