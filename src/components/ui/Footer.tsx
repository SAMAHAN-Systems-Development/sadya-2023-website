import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import Image from 'next/image';

// eslint-disable-next-line no-restricted-imports
import SysDevLogo from '../../../public/assets/images/SYSDEVLogo.png';
// eslint-disable-next-line no-restricted-imports
import SysEgg from '../../../public/assets/images/SysEggFooter.png';

const Footer = () => {
  return (
    <div className="h-[9.25rem] bg-[#333333] flex">
      <div className="flex-grow font-medium p-8">
        <h3>Copyright &#169; 2023 SAMAHAN</h3>
        <h3>Developed by SAMAHAN Systems Development & SCT</h3>
        <div className="flex pt-3 gap-3 text-xl">
          <a href="https://youtube.com/shorts/GCh_bKQ18w8?si=hqPLgaz0zdQEigcW">
            <BsFacebook />
          </a>
          <a href="https://youtube.com/shorts/GCh_bKQ18w8?si=hqPLgaz0zdQEigcW">
            <BsTwitter />
          </a>
          <a href="https://youtube.com/shorts/GCh_bKQ18w8?si=hqPLgaz0zdQEigcW">
            <BsInstagram />
          </a>
        </div>
      </div>
      <div className="p-8 text-right">
        <h2 className="font-extrabold">SADYA 2023</h2>
        <div className="flex gap-2">
          <Image
            src={SysEgg}
            height={58}
            placeholder="blur"
            draggable={false}
            objectFit="cover"
            alt="/"
          />
          <Image
            src={SysDevLogo}
            height={58}
            placeholder="blur"
            draggable={false}
            objectFit="cover"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
