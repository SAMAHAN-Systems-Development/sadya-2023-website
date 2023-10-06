import React from 'react'
import SectionUI from '@/components/SectionUI'
import ActivitiesCarousel from '@components/ui/ActivitiesCarousel'


const CarouselSection = () => {
  return (
    <div>
      <SectionUI>
        <h1>Whats on</h1>
        <ActivitiesCarousel/>
      </SectionUI>
    </div>
  )
}

export default CarouselSection
