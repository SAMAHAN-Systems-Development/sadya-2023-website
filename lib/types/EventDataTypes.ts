import type { StaticImageData } from 'next/image';

export type EventDataTypes = {
  imageUrl: any;
  // imageUrl: StaticImageData;
  eventDataDate: string;
  eventDataDescription: string;
  eventDataEntry: string;
  eventDataFloor: string;
  expiry: string;
  start: string;
  imageUrl?: StaticImageData;
};
