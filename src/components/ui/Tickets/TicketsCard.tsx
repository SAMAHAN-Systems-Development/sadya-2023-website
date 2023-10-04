'use client'
import React from "react";
import { RxChevronRight } from "react-icons/rx"

import * as Accordion from '@radix-ui/react-accordion';
import type { TicketsCardProps } from 'lib/types/ticketCardType';

const TicketsCard: React.FC<TicketsCardProps> = ({
  eventSlotLeft,
  eventTitle,
  eventDate,
  eventFloor,
  eventPrice,
  eventBuilding,
  eventTime,
  

}) => {
  return(
<div className="w-full flex justify-center align-middle">
        
          <Accordion.Root 
          className="w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
           type="single" collapsible>
            <Accordion.Item className="AccordionItem" value="1">
              <Accordion.Trigger className="w-full grid grid-cols-2 ">
                <div className="place-self-start">
                  {eventFloor}
                </div>
                <div className="flex flex-row  items-center place-content-end">
                  
                     {eventSlotLeft} 
                    {<RxChevronRight/>} 
                 </div>
                </Accordion.Trigger>
              <Accordion.Content>
                <div>
                  {eventPrice} - No Food
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