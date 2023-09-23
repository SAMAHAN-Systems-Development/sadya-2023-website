import React from 'react';

import Button from '@/components/ui/Button';
import NavigationBar from '../ui/NavigationBar';
import ActivitiesTile from '../ui/ActivitiesTile';

const HomePage = () => {
  return (
    <div>
      <Button label="Primary Button" type="primary" />
      <Button label="Secondary Button" type="secondary" />
      <Button label="Large Button" size="large" />
      <ActivitiesTile/>
    </div>
  );
};

export default HomePage;
