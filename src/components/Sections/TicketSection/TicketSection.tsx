'use client';
import { useState } from 'react';

import MapTicketCard from '@/components/Sections/TicketSection/MapTicketCard';
import SectionUI from '@/components/SectionUI';
import SectionTitle from '@/components/ui/SectionTitle';
import { firstCardData, secondCardData } from '@/data/ticketsdata';
const socket = new WebSocket('wss://sadya2023-backend.onrender.com');

const TicketSection = () => {
  const [firstEventData, setFirstEventData] = useState(firstCardData);
  const [secondEventData, setSecondEventData] = useState(secondCardData);

  socket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data);
    const firstEventDataArr = [];
    const secondEventDataArr = [];
    // eslint-disable-next-line id-length
    for (let i = 0; i < firstEventData.length; i++) {
      firstEventDataArr.push({
        ...firstEventData[i],
        ['eventSlotLeft']: data[firstEventData[i].eventId],
      });
    }
    // eslint-disable-next-line id-length
    for (let j = 0; j < secondEventData.length; j++) {
      secondEventDataArr.push({
        ...secondEventData[j],
        ['eventSlotLeft']: data[secondEventData[j].eventId],
      });
    }

    setFirstEventData(firstEventDataArr);
    setSecondEventData(secondEventDataArr);
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <SectionUI>
        <SectionTitle
          subtitle="Grab your E-Tickets now and gain swift, stress-free entry, ensuring you don't miss a moment of the excitement!"
          title="PURCHASE E-TICKETS"
        />
        <MapTicketCard
          firstCardData={firstEventData}
          secondCardData={secondEventData}
        />
      </SectionUI>
    </div>
  );
};

export default TicketSection;
