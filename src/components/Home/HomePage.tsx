import React from 'react';

import ActivitiesTile from '@/components/ActivitiesTile';

import Button from '@/components/ui/Button';

const HomePage = () => {
    return (
        <div>
            <Button label="Primary Button" type="primary"/>
            <Button label="Secondary Button" type="secondary"/>
            <Button label="Large Button" size="large"/>
            <ActivitiesTile time="10:00 AM - 5:00 PM" location="Building - Floor" activity="BANNER MAKING"/>
            <ActivitiesTile time="10:00 AM - 5:00 PM" location="Building - Floor" activity="BANNER MAKING"/>
            <ActivitiesTile time="10:00 AM - 5:00 PM" location="Building - Floor" activity="BANNER MAKING"/>

        </div>
    );
};

export default HomePage;
