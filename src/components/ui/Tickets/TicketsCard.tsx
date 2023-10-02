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
            <Accordion.Item className="AccordionItem" value="item-1">
              <Accordion.Trigger className="flex flex-row place-items-center">{eventTitle} {eventSlotLeft} {<RxChevronRight/>}</Accordion.Trigger>
              <Accordion.Content className="grid grid-cols-2 justify-items-left">
                <div>
                  {eventPrice}
                </div>
                <div>
                   - No Food
                  </div>
                <div>
                  {eventBuilding} 
                </div>
                <div>
                  - {eventTime}
                </div>
                
               
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
        </div>

        
   
      

   
  )
}

export default TicketsCard;