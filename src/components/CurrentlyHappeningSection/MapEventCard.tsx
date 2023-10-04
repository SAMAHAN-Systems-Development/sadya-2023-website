'use client';

import React, { useEffect, useState } from 'react';
import EventCard from '../ui/EventCard';
import { EventData } from '../../data/EventData';
import { FilterContents } from '../../utils/datetime';

const cardStyle = {
  marginTop: "280px",
};
const containerStyle = {
  width: '100%',
  maxWidth: '1200px',
  height: '1050px',
}

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
    <main className='px-195 mt-10'>
      {filteredEvents.length === 0 ? (
        <div className="flex justify-center items-center" style={cardStyle}>
          <p>No Current Events</p>
        </div>
      ) : (
        <div className='flex justify-center gap-5'>
        <div style={containerStyle} className='flex flex-wrap justify-center gap-10 mt-10'>
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
        </div>
      )}
    </main>
  );
};