import type { StaticImageData } from 'next/image';

export type DeveloperCardProps = {
  course: string;
  developerType: string;
  imageUrl: StaticImageData;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  fullName?: string;
};
