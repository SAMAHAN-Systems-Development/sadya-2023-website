
import TicketsCard from '@/components/ui/Tickets/TicketsCard'
import {firstCard, secondCard} from '@/data/ticketsdata'


export default function MapTicketCard(){
     //const splicedTicketData = TicketsData.splice(0, 4)
    return (
      <div className="grid grid-cols-2 justify-center">

      <div>
            {firstCard.map((ticketData, index) => (
            <TicketsCard
              key={index}
              eventFloor = {ticketData.eventFloor}
              eventPrice = {ticketData.eventPrice}
              eventFoodAvailability={ticketData.eventFoodAvailability}
              eventBuilding={ticketData.eventBuilding}
              eventSlotLeft = {ticketData.eventSlotLeft}
              eventTime = {ticketData.eventTime}
            />
          ))}

    </div>
      <div>
          {secondCard.map((ticketData, index) => (
            <TicketsCard
              key={index}
              eventFloor = {ticketData.eventFloor}
              eventPrice = {ticketData.eventPrice}
              eventFoodAvailability={ticketData.eventFoodAvailability}
              eventBuilding={ticketData.eventBuilding}
              eventSlotLeft = {ticketData.eventSlotLeft}
              eventTime = {ticketData.eventTime}
            />
          ))}
          </div>
        </div>
        
        
    )   
     
}