import React from "react";

import HeadText from "../../components/CurrentlyHappeningSection/HeadText";
import EventCard from "../../components/CurrentlyHappeningSection/MapEventCard";

const mainContainerStyle = {
    height: "1070px",
    paddingTop: "120px",
    paddingLeft: "195px",
    paddingRight: "195px",
  };
  
export default function Home() {
    return(
        <main style={mainContainerStyle}>
            <HeadText />
            <EventCard />
        </main>
    )
}