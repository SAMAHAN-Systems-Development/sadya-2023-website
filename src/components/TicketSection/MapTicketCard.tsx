
import TicketsCard from '@/components/ui/Tickets/TicketsCard'
import {
  firstCard, secondCard, 
  firstCard_header, secondCard_header
} from '@/data/ticketsdata'


export default function MapTicketCard(){
     //const splicedTicketData = TicketsData.splice(0, 4)
    return (
      <div className="h-[30rem] grid grid-cols-2 justify-center">
        
       
      <div className="px-5">
        <div className="flex flex-col text-center py-5">
          <h1 className="font-bold">
                {firstCard_header.eventTitle}
            </h1>
              <h2>
                {firstCard_header.eventDate}
              </h2>
        </div>
           
            {firstCard.map((ticketData, index) => (
              <TicketsCard
              key={index}
              //eventId = {ticketData.eventId}
              eventFloor = {ticketData.eventFloor}
              eventPrice = {ticketData.eventPrice}
              eventFoodAvailability={ticketData.eventFoodAvailability}
              eventBuilding = {ticketData.eventBuilding}
              eventSlotLeft = {ticketData.eventSlotLeft}
              eventTime = {ticketData.eventTime}
            />
              
            
          
          ))}

    </div>

      <div className="px-5">
     <div className="flex flex-col text-center py-5">
            <h1 className="font-bold">
                {secondCard_header.eventTitle}
            </h1>
              <h2>
                {secondCard_header.eventDate}
              </h2>
        </div>
           
         
          {secondCard.map((ticketData, index) => (
            <TicketsCard
              key={index}
             
              //eventId = {ticketData.eventId}
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