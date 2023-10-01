'use client'
import React from "react";

import * as Accordion from '@radix-ui/react-accordion';

import type { TicketsCardProps } from 'lib/types/developersDatatype';

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
    
      <div className="grid grid-cols-2 justify-items-center">
        <div className="w-1/2 px-5">
          <Accordion.Root type="multiple">
            <Accordion.Item className="w-full AccordionItem" value="item-1">
              <Accordion.Trigger>{eventTitle} {eventSlotLeft}</Accordion.Trigger>
              <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
        </div>

        
      </div>
      

   
  )
}

export default TicketsCard;