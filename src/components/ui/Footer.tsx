import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

import SysDevLogo from 'public/assets/images/SYSDEVLogo.png';
import SysEgg from 'public/assets/images/SysEggFooter.png';

const Footer = () => {
  return (
    <div className="xsm:p-8 p-6 w-full h-auto bg-white flex md:flex-row flex-col justify-between md:space-y-0 space-y-4 text-black">
      <div className="flex flex-col md:items-start items-center text-center font-medium md:text-lg sm:text-sm text-xs">
        <div>
          <h3>
            Copyright &#169; 2023
            <span className="hover:underline">
              <a
                href="https://samahan.addu.edu.ph"
                target="_blank"
                rel="noopener noreferrer"
              >
                SAMAHAN
              </a>
            </span>
          </h3>
        </div>
        <div>
          <h3>
            Developed by
            <span className="hover:underline">
              <a
                href="https://sadya2023.addu.edu.ph/about-the-developers"
                rel="noopener noreferrer"
              >
                SAMAHAN Systems Development
              </a>
            </span>
            &nbsp;&&nbsp;
            <span className="hover:underline">
              <a
                href="https://www.facebook.com/SAMAHANCreativeTeam"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCT
              </a>
            </span>
          </h3>
        </div>
        <div className="flex sm:pt-7 pt-4 gap-3 md:text-3xl sm:text-2xl text-xl">
          <Link href={'https://www.facebook.com/AdDUSAMAHAN'}>
            <BsFacebook />
          </Link>
          <Link href={'https://twitter.com/addusamahan'}>
            <BsTwitter />
          </Link>
          <Link href={'https://www.instagram.com/samahan_ateneo'}>
            <BsInstagram />
          </Link>
        </div>
      </div>
      <div className="text-right flex md:flex-col flex-row sm:space-x-10 space-x-7 md:justify-between justify-center md:items-end items-center">
        <h2 className="font-extrabold md:text-3xl sm:text-4xl text-2xl font-londrina">
          SADYA 2023
        </h2>
        <Link href="/about-the-developers">
          <div className="flex gap-2">
            <Image
              src={SysEgg}
              className="sm:h-14 xsm:h-12 h-9 w-auto object-contain"
              placeholder="blur"
              draggable={false}
              alt="/"
            />
            <Image
              src={SysDevLogo}
              className="sm:h-14 xsm:h-12 h-9 w-auto object-contain"
              placeholder="blur"
              draggable={false}
              alt="/"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
