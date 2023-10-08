'use client';
import { useState } from 'react';
import { RxChevronRight } from 'react-icons/rx';
import Link from 'next/link';

import * as Accordion from '@radix-ui/react-accordion';
import type { TicketsCardProps } from 'lib/types/ticketCardType';

import { cn } from '@/utils/cvaUtils';

const TicketsCard: React.FC<TicketsCardProps> = ({
  eventFloor,
  eventPrice,
  eventFoodAvailability,
  eventBuilding,
  eventSlotLeft,
  eventTime,
  eventURL,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="w-full flex justify-center align-middle">
      <Accordion.Root
        className="bg-white md:w-[25rem] sm:w-[19.9737rem] w-[16.1231rem] justify-center rounded-2xl shadow-[.3125rem_.625rem_.3125rem] shadow-black/10 px-5 py-1 mb-3"
        type="single"
        collapsible
      >
        <Accordion.Item className="AccordionItem" value="item-1">
          <Accordion.Trigger
            className="w-full grid grid-cols-2"
            onClick={handleAccordionClick}
            role="button"
            tabIndex={0}
            value="1"
          >
            <div className="font-londrina md:text-[2.1875rem] sm:text-[1.6475rem] text-[1.4106rem]  flex items-center place-content-start font-bold">
              {eventFloor}
            </div>
            <div className="flex items-center place-content-end h-full">
              <div className="md:text-[1.25rem] sm:text-[.9988rem] text-[.8063rem]">
                {eventSlotLeft} Slots Left
              </div>
              <div className="md:w-[2.125rem] md:h-[2.1875rem] sm:w-[1.6975rem] sm:h-[1.7475rem] w-[1.3706rem] h-[1.4106rem]">
                {
                  <RxChevronRight
                    size={'100%'}
                    className={cn(
                      isAccordionOpen
                        ? 'transform rotate-90'
                        : 'transform rotate-0'
                    )}
                  />
                }
              </div>
            </div>
          </Accordion.Trigger>
          <Accordion.Content className="flex flex-col align-bottom">
            <div className="flex flex-row">
              <div className="font-bold md:text-[1.25rem] sm:text-[.9988rem] text-[.8063rem]">
                P{eventPrice}
              </div>
              <div className="mx-2 md:text-[1.25rem] sm:text-[.9988rem] text-[.8063rem]">
                -
              </div>
              <div className="md:text-[1.25rem] sm:text-[.9988rem] text-[.8063rem]">
                {eventFoodAvailability}
              </div>
            </div>

            <div className="block md:text-[1.25rem] sm:text-[.9988rem] text-[.8063rem]">
              {eventBuilding}
            </div>
            <div className="block md:text-[1.25rem] sm:text-[.9988rem] text-[.8063rem]">
              {eventTime}
            </div>
            <Link href={eventURL}>
              <button className="w-full md:h-[2.3244rem] sm:h-[1.8569rem] h-[1.4988rem] md:text-[1.125rem] sm:text-[.8988rem] text-[.7256rem] text-[#FFFFFF] bg-lavander hover:bg-lightlavander  hover:outline-[#757575] rounded-[.2075rem] my-3">
                Buy Tickets
              </button>
            </Link>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export default TicketsCard;
