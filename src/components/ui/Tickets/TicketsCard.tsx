'use client'
import React from "react";
import { RxChevronRight } from "react-icons/rx"

import * as Accordion from '@radix-ui/react-accordion';
import type { TicketsCardProps } from 'lib/types/ticketCardType';

const TicketsCard: React.FC<TicketsCardProps> = ({
  eventFloor,
  eventPrice, 
  eventFoodAvailability,
  eventBuilding,
  eventSlotLeft,
  eventTime,
 
  

}) => {
  return(
<div className="w-full justify-center align-middle">
          <Accordion.Root 
          className="w-full rounded-md shadow-[5px_10px_5px] shadow-black/10 px-3 py-3"
           type="single" collapsible>
            <Accordion.Item className="AccordionItem" value="1">
              <Accordion.Trigger className="w-full grid grid-cols-2 py-1">
                <div className="flex items-center place-content-start font-bold">
                  {eventFloor}
                </div>
                <div className="flex items-center place-content-end">
                     {eventSlotLeft} Slots Left 
                    {<RxChevronRight className="AccordionChevron" aria-hidden/>} 
                 </div>
                </Accordion.Trigger>
              <Accordion.Content>
                <div>
                  {eventPrice} - {eventFoodAvailability}
                  </div>
                <div className="py-1">
                  {eventBuilding} - {eventTime}
                </div>
                <button className="w-full py-[0.9375rem ] outline outline-2 outline-[#333333] text-[#333333] rounded hover:text-[#757575] hover:outline-[#757575]'">
                  Buy Tickets
                </button>
               
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
        </div>

      

   
  )
}

export default TicketsCard;