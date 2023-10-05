import React from 'react';
import EventCard from '../../components/ui/EventCard';
import { EventData } from '../../data/EventData';

import sampleImg from '../../data/sampleImg.jpeg'

const containerStyle = {
  width: '100%',
  maxWidth: '1200px',
  height: '1050px',
}
export default function Home() {
  return (
    <main>
      <div className='flex justify-center gap-5'>
        <div style={containerStyle} className='flex flex-wrap justify-center gap-10 mt-10'>
          {EventData.map((event, index) => (
              <EventCard 
              title={event.eventDataEntry}
              date={event.eventDataDate}
              description={event.eventDataDescription}
              floor={event.eventDataFloor} 
              imageUrl={'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg'}              
              />
          ))}
        </div>
      </div>
    </main>
  );
}

