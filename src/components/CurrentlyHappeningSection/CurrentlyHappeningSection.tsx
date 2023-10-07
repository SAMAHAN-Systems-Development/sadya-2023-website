import React from "react";

import EventCard from "@/components/CurrentlyHappeningSection/MapEventCard";
import SectionUI from "../SectionUI";
import SectionTitle from "../ui/SectionTitle";
SectionTitle

export default function Home() {
    return (
        <main>
            <SectionUI>
            <SectionTitle 
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            title="currently happening"/>
            <EventCard />
            </SectionUI>
        </main>
    );
}
