import type { StaticImageData } from 'next/image';

export type OfficerType = {
  imageUrl?: StaticImageData;
  firstName: string;
  lastName: string;
  department?: string;
};
