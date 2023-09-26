import React from 'react';

import ActivitiesTile from '@/components/ui/ActivitiesTile';
import Button from '@/components/ui/Button';
import NavigationBar from '@/components/ui/NavigationBar';

const HomePage = () => {
    return (
        <div>
            <Button label="Primary Button" type="primary"/>
            <Button label="Secondary Button" type="secondary"/>
            <Button label="Large Button" size="large"/>
            <NavigationBar/>
            <ActivitiesTile activity={'BANNER MAKING'}
                location={'Building - Floor'}
                time={'10:00AM - 5:00PM'}/>
        </div>
    );
};

export default HomePage;
