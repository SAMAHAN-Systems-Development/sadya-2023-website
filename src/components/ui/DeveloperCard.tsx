import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Image from 'next/image';

import type { DeveloperCardProps } from 'lib/types/developersDatatype';

// type DeveloperCardProps = {
//   course: string;
//   developerType: string;
//   facebook: string;
//   fullName: string;
//   imageUrl: StaticImageData;
//   instagram: string;
//   twitter: string;
// };
const DeveloperCard: React.FC<DeveloperCardProps> = ({
  course,
  developerType,
  facebook,
  fullName,
  imageUrl,
  instagram,
  twitter,
}) => {
  return (
    <div className="w-[18.75rem] h-[28.125rem] rounded-[0.9375rem] relative overflow-hidden">
      <div className="bg-gradient-to-t from-[#080A3C] to-transparent w-full h-[100%]">
        <div className="absolute bottom-0 left-0 px-5 pb-7 pl-5">
          <span className="text-sm font-inter text-[#EFD807]">
            {developerType}
          </span>
          <h1 className="text-2xl font-bold font-inter text-[#CFEF07]">
            {fullName}
          </h1>
          <span className="text-sm font-inter font-light">{course}</span>
          <div className="flex pt-3 gap-4 text-3xl">
            <a href={facebook}>
              <FaFacebook />
            </a>
            <a href={instagram}>
              <FaInstagram />
            </a>
            <a href={twitter}>
              <FaTwitter />
            </a>
          </div>
        </div>
        <Image
          src={imageUrl}
          placeholder="blur"
          draggable={false}
          fill
          className="rounded-card object-cover object-center"
          alt="/"
        />
      </div>
    </div>
  );
};

export default DeveloperCard;
