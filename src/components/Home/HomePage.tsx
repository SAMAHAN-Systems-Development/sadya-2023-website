import React from 'react';
import TicketsCard from '@/components/ui/Tickets/TicketsCard';
import SectionUI from '@/components/SectionUI';

const HomePage = () => {
  return (
    <>
    <SectionUI>
      <h1>PURCHASE E-TICKETS</h1>
      <div className="flex justify-center">
         <TicketsCard/>
          <TicketsCard/>
      </div>
      
     
    </SectionUI>
   
    </>
  );
};

export default HomePage;
