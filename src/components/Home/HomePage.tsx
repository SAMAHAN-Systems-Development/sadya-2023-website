import React from 'react';

import Button from'@/components/ui/Button'
import HeroSection from '@/components/ui/HeroSection/Hero'

const HomePage = () => {

    return (
        <div>
          <HeroSection/>
            <Button label="Primary Button" type="primary"/>
            <Button label="Secondary Button" type="secondary"/>
            <Button label="Large Button" size="large"/>
        </div>
    );
};

export default HomePage;
