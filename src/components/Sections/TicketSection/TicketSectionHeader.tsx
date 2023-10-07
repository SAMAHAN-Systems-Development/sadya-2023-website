import React from "react";

const mainHeader = {
    title: "PURCHASE E-TICKETS",
    subtitle: "Grab your E-Tickets now and gain swift, stress-free entry, ensuring you don't miss a moment of the excitement!"   
}

export default function TicketSectionHeader(){
    return (
        <div className="text-center">
            <h1 className="font-bold">
                {mainHeader.title}
            </h1>
            <h2>
                {mainHeader.subtitle}
            </h2>
        </div>
       
    )
}
  
