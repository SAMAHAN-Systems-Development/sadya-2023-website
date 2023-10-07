'use client'
import {useState} from 'react';

import MapTicketCard from '@/components/Sections/TicketSection/MapTicketCard'
import SectionUI from '@/components/SectionUI';
import SectionTitle from '@/components/ui/SectionTitle';
import {firstCardData, secondCardData} from '@/data/ticketsdata'
const socket = new WebSocket('wss://sadya2023-backend.onrender.com');
const Test = () => {
    
    const [firstEventData, setFirstEventData] = useState(firstCardData);
    const [secondEventData, setSecondEventData] = useState(secondCardData);
        // Create WebSocket connection.

        // Listen for messages
        socket.addEventListener('message', function (event) {
           
            const data = JSON.parse(event.data);
            const firstEventDataArr = []
            const secondEventDataArr = []
            for (let i = 0; i < firstEventData.length; i++) {
                firstEventDataArr.push({...firstEventData[i], ['eventSlotLeft'] : data[firstEventData[i].eventId]})
            }
            for (let j = 0; j < secondEventData.length; j++) {   
                secondEventDataArr.push({...secondEventData[j], ['eventSlotLeft'] : data[secondEventData[j].eventId]})
            }

            setFirstEventData(firstEventDataArr)
            setSecondEventData(secondEventDataArr)
        
        });

    return (
        
        <div className="h-screen flex flex-col items-center justify-center ">
                <SectionUI>
                    <SectionTitle
                        subtitle="Grab your E-Tickets now and gain swift, stress-free entry, ensuring you don't miss a moment of the excitement!"
                        title="PURCHASE E-TICKETS"
                    />
                    <MapTicketCard firstCardData={firstEventData} secondCardData={secondEventData}/>
                </SectionUI>
                
        </div>
        
    );
};

export default Test;
