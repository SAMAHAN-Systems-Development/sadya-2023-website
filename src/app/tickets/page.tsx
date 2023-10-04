import React from 'react';

import TicketSectionHeader from '@/components/TicketSection/TicketSectionHeader'
import MapTicketCard from '@/components/TicketSection/MapTicketCard'

const Test = () => {
    return (
        
        <div className="h-screen flex flex-col items-center justify-center ">
                <TicketSectionHeader/>
                <MapTicketCard/>
        </div>
        
    );
};

export default Test;
