import React from "react";

import imageUrl from "public/assets/sampleImg.png"

import EventCard from "@/components/ui/EventCard";

  export default function Home() {
    return (
      <main>
        <EventCard 
        imageUrl={imageUrl}
        title={'TICKETED ENTRY'} 
        date={'October 25, 2023'} 
        description={'BTOB & Creative Series Short Film Showcase'} 
        floor={'Martin Hall - 4th Floor - Ateneo de Davao University'} />
      </main>
    );
  }
