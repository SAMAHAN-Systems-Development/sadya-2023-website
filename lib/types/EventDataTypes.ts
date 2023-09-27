import type { StaticImageData } from 'next/image';

export type EventDataTypes = {
  eventDataDate: string;
  eventDataDescription: string;
  eventDataEntry: string;
  eventDataFloor: string;
  imageUrl?: StaticImageData;
};