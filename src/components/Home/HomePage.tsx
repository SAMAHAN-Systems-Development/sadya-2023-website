import React from 'react';

import Button from '@/components/ui/Button';
import NavigationBar from '../ui/NavigationBar';

const HomePage = () => {
  return (
    <div>
      <Button label="Primary Button" type="primary" />
      <Button label="Secondary Button" type="secondary" />
      <Button label="Large Button" size="large" />
      <NavigationBar/>
    </div>
  );
};

export default HomePage;
