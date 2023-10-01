import React from 'react';
import TicketsCard from '@/components/ui/Tickets/TicketsCard';
import SectionUI from '@/components/SectionUI';

const HomePage = () => {
    return (
        <div>
            <Button label="Primary Button" type="primary"/>
            <Button label="Secondary Button" type="secondary"/>
            <Button label="Large Button" size="large"/>
        </div>
    );
};

export default HomePage;
