'use client'
import {useState} from 'react';

import MapTicketCard from '@/components/TicketSection/MapTicketCard'
import TicketSectionHeader from '@/components/TicketSection/TicketSectionHeader'
import {firstCardData, secondCardData} from '@/data/ticketsdata'
const Test = () => {
    const [firstEventData, setFirstEventData] = useState(firstCardData);
    const [secondEventData, setSecondEventData] = useState(secondCardData);

    /*let socketURL = 'ws://127.0.0.1:8000'
    let message;
    const [ticketCount, setTicketCount] = useState(0);
    const {lastMessage} = useWebSocket(socketURL)
        for (const key in lastMessage){
        message = lastMessage['data']
    }*/

    return (
        
        <div className="h-screen flex flex-col items-center justify-center ">
                <TicketSectionHeader/>
                <MapTicketCard firstCardData={firstEventData} secondCardData={secondEventData}/>
        </div>
        
    );
};

export default Test;
