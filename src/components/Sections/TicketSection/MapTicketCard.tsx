import type { FC } from 'react';

import type { TicketsCardProps } from 'lib/types/ticketCardType';

import TicketsCard from '@/components/ui/TicketsCard';
import { firstCard_header, secondCard_header } from '@/data/ticketsdata';

type MapTicketCardProps = {
  firstCardData: TicketsCardProps[];
  secondCardData: TicketsCardProps[];
};

const MapTicketCard: FC<MapTicketCardProps> = ({
  firstCardData,
  secondCardData,
}) => {
  return (
    <div className="h-fit flex-row justify-center">
      <div className="px-5 py-5">
        <div className="flex flex-col text-center py-5">
          <h1 className="leading-none font-londrina font-bold text-lavander md:text-[2.5rem] sm:text-[2rem] text-[1.6rem]">
            {firstCard_header.eventTitle}
          </h1>
          <h2 className="font-inter font-semibold md:text-[1.375rem] sm:text-[1.1rem] text-[.88rem]">
            {firstCard_header.eventDate}
          </h2>
        </div>

        {firstCardData.map((ticketData, index) => (
          <TicketsCard
            key={index}
            eventId={ticketData.eventId}
            eventFloor={ticketData.eventFloor}
            eventPrice={ticketData.eventPrice}
            eventFoodAvailability={ticketData.eventFoodAvailability}
            eventBuilding={ticketData.eventBuilding}
            eventSlotLeft={ticketData.eventSlotLeft}
            eventTime={ticketData.eventTime}
            eventURL={ticketData.eventURL}
          />
        ))}
      </div>

      <div className="px-5 py-5">
        <div className="flex flex-col text-center py-5">
          <h1 className="leading-none font-londrina font-bold text-lavander md:text-[2.5rem] sm:text-[2rem] text-[1.6rem]">
            {secondCard_header.eventTitle}
          </h1>
          <h2 className="font-inter font-semibold md:text-[1.375rem] sm:text-[1.1rem] text-[.88rem]">
            {secondCard_header.eventDate}
          </h2>
        </div>

        {secondCardData.map((ticketData, index) => (
          <TicketsCard
            key={index}
            eventId={ticketData.eventId}
            eventFloor={ticketData.eventFloor}
            eventPrice={ticketData.eventPrice}
            eventFoodAvailability={ticketData.eventFoodAvailability}
            eventBuilding={ticketData.eventBuilding}
            eventSlotLeft={ticketData.eventSlotLeft}
            eventTime={ticketData.eventTime}
            eventURL={ticketData.eventURL}
          />
        ))}
      </div>
    </div>
  );
};

export default MapTicketCard;
