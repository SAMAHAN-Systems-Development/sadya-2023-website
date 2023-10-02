import React from 'react';

import TicketsCard from '@/components/ui/Tickets/TicketsCard';

const Test = () => {
    return (
        <div className="flex justify-center">
            <div className="w-1/2 grid grid-cols-2 ">
                <TicketsCard 
                 eventTitle="BOTB" eventSlotLeft="40"
                 eventBuilding="Finster" eventDate="June 17" 
                 eventFloor='2F' eventPrice='P150'
                 eventTime='4PM-6PM'
                 />
                 <TicketsCard 
                 eventTitle="BOTB" eventSlotLeft="40"
                 eventBuilding="Finster" eventDate="June 17" 
                 eventFloor='2F' eventPrice='P150'
                 eventTime='4PM-6PM'
                 />
                            
                            
                    
                        
                    </div>
        </div>
        
    );
};

export default Test;
