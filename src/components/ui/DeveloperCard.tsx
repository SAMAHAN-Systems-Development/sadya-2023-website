import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

type DeveloperCardProps = {
  course: string;
  developerType: string;
  facebook: string;
  fullName: string;
  imageUrl: StaticImageData;
  instagram: string;
  twitter: string;
};
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
      <Image
        src={imageUrl}
        placeholder="blur"
        draggable={false}
        fill
        className="rounded-card object-cover object-center"
        alt="/"
      />
      <div className="absolute bottom-0 left-0 px-5 pb-7 pl-5 z-10">
        <span className="text-sm text-[#EFD807]">
          {developerType}
        </span>
        <h1 className="text-2xl font-bold text-[#CFEF07]">
          {fullName}
        </h1>
        <span className="text-sm font-light text-white">
          {course}
        </span>
        <div className="flex pt-3 gap-4 text-3xl text-white">
          <Link
            className="hover:-translate-y-1 transition-all duration-300"
            href={facebook}
          >
            <FaFacebook />
          </Link>
          <Link
            className="hover:-translate-y-1 transition-all duration-300"
            href={instagram}
          >
            <FaInstagram />
          </Link>
          <Link
            className="hover:-translate-y-1 transition-all duration-300"
            href={twitter}
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#080A3C] from-10% to-50% rounded-[0.9375rem]" />
    </div>
  );
};

export default DeveloperCard;
