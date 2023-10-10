'use client';
import Image from 'next/image';

import cloud from 'public/assets/images/SMOKE - WEBSITE FOOTER.png';

import MapTicketCard from '@/components/Sections/TicketSection/MapTicketCard';
import SectionUI from '@/components/SectionUI';
import SectionTitle from '@/components/ui/SectionTitle';
import { useWebsocket } from '@/contexts/WebsocketContext';

const TicketSection = () => {
  const { firstEventData, secondEventData } = useWebsocket();

  return (
    <div
      id="ticket-purchase"
      className="flex flex-col items-center justify-center"
    >
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
      <div className="relative w-full h-[227px] bottom-0">
        <Image src={cloud} alt="cloud" fill className="object-cover" />
      </div>
    </div>
  );
};

export default TicketSection;
