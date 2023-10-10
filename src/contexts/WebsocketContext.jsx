import React, { createContext, useContext, useState, useEffect } from 'react';
import { firstCardData, secondCardData } from '@/data/ticketsdata';

export const WebsocketContext = createContext();

export function WebsocketProvider({ children }) {
  const [firstEventData, setFirstEventData] = useState(firstCardData);
  const [secondEventData, setSecondEventData] = useState(secondCardData);

  useEffect(() => {
    const socket = new WebSocket('wss://sadya2023-backend.onrender.com');
    socket.addEventListener('message', function (event) {
      const data = JSON.parse(event.data);

      const newFirstEventData = firstEventData.map((eventData) => {
        return {
          ...eventData,
          ['eventSlotLeft']: data[eventData.eventId],
        };
      });

      const newSecondEventData = secondEventData.map((eventData) => {
        return {
          ...eventData,
          ['eventSlotLeft']: data[eventData.eventId],
        };
      });

      setFirstEventData(newFirstEventData);
      setSecondEventData(newSecondEventData);
    });
  }, []);

  return (
    <WebsocketContext.Provider value={{ firstEventData, secondEventData }}>
      {children}
    </WebsocketContext.Provider>
  );
}

export function useWebsocket() {
  return useContext(WebsocketContext);
}
