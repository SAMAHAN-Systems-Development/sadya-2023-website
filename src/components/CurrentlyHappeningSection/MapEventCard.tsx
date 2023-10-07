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
    <div className='pt-[55px]'>
      {filteredEvents.length === 0 ? (
        <div className="flex justify-center items-center font-inter">
          <p>No Current Events</p>
        </div>
      ) : (
        <div className='flex justify-center'>
        <div className='grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5'>
            {filteredEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event.eventDataEntry}
                date={event.eventDataDate}
                description={event.eventDataDescription}
                floor={event.eventDataFloor}
                imageUrl={event.imageUrl}
              />
            ))}
          </div>
         </div>
      )}
    </div>
  );
};