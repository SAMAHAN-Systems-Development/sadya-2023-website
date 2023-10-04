
import {TicketsData} from '@/data/ticketsdata'

export default function MapTicketCard(){
     {TicketsData.map((ticketData, index) => (
            <EventCard
              key={index}
              title={event.eventDataEntry}
              date={event.eventDataDate}
              description={event.eventDataDescription}
              floor={event.eventDataFloor}
            />
          ))}
}