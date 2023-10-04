'use client';

import React, { useEffect, useState } from 'react';
import EventCard from '../../components/ui/EventCard';
import { EventData } from '../../data/EventData';
import { FilterContents } from '../../utils/datetime';

const mainContainerStyle = {
  height: "1070px",
  paddingTop: "120px",
  paddingLeft: "195px",
  paddingRight: "195px",
};

export default function Home() {
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
    <main style={mainContainerStyle}>
      {filteredEvents.length === 0 ? (
        <div className="flex justify-center items-center">
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