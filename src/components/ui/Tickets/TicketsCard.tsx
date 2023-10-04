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
          className="w-[300px] rounded-md shadow-[10px_10px_5px] shadow-black/5 px-5 py-3"
           type="single" collapsible>
            <Accordion.Item className="AccordionItem" value="1">
              <Accordion.Trigger className="w-full grid grid-cols-2 px-5 py-3">
                <div className="font-bold">
                  {eventFloor}
                </div>
                <div className="flex items-center place-content-end">
                  
                     {eventSlotLeft} 
                    {<RxChevronRight className="AccordionChevron" aria-hidden/>} 
                 </div>
                </Accordion.Trigger>
              <Accordion.Content>
                <div>
                  {eventPrice} - {eventFoodAvailability}
                  </div>
                <div>
                  {eventBuilding} - {eventTime}
                </div>
                <button className="w-full py-[0.9375rem ] outline outline-2 outline-[#333333] text-[#333333] rounded-[0.725rem] hover:text-[#757575] hover:outline-[#757575]'">
                  Buy Tickets
                </button>
               
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
        </div>

      

   
  )
}

export default TicketsCard;