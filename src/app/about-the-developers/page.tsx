import React from 'react'
import type { Metadata } from 'next'

import DeveloperSection from '@/components/Sections/DeveloperSection/DeveloperSection'
import NavigationBar from '@/components/ui/NavigationBar';

export const metadata: Metadata = {
    title: 'SAMAHAN SysDev Team',
    description:
      'Explore innovation at its core – meet the talented developers behind the scenes.',
};

const page = () => {
  return (
    <>
        <NavigationBar/>
        <DeveloperSection/>
    </>
  )
}

export default page