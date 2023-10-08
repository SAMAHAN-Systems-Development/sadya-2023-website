import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

import SysDevLogo from 'public/assets/images/SYSDEVLogo.png';
import SysEgg from 'public/assets/images/SysEggFooter.png';

const Footer = () => {
  return (
    <div className="xsm:p-8 p-6 w-full h-auto bg-white flex md:flex-row flex-col justify-between md:space-y-0 space-y-4 text-black">
      <div className="flex flex-col md:items-start items-center text-center font-medium font-inter md:text-lg sm:text-sm text-xs">
        <h3>Copyright &#169; 2023 SAMAHAN</h3>
        <h3>Developed by SAMAHAN Systems Development & SCT</h3>
        <div className="flex sm:pt-7 pt-4 gap-3 md:text-3xl sm:text-2xl text-xl">
          <Link
            href={'https://www.facebook.com/SAMAHANSysDev'}
          >
            <BsFacebook />
          </Link>
          <Link
            href={'https://twitter.com/SAMAHANSysDev'}
          >
            <BsTwitter />
          </Link>
          <Link
            href={'https://www.instagram.com/samahansysdev/'}
          >
            <BsInstagram />
          </Link>
        </div>
      </div>
      <div className="text-right flex md:flex-col flex-row sm:space-x-10 space-x-7 md:justify-between justify-center items-center">
        <h2 className="font-extrabold md:text-3xl sm:text-4xl text-2xl text-center font-londrina">
          SADYA 2023
        </h2>
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
      </div>
    </div>
  );
};

export default Footer;
