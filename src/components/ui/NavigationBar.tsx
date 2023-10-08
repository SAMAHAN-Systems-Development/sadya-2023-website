'use client';
import { useEffect,useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SadyaLogo from 'public/assets/images/SADYA LOGOTYPE 3D 1.png';

import MainButton from '@/components/ui/MainButton';

type NavType = {
    isDevPage?: boolean;
}

const NavigationBar: React.FC<NavType> = ({isDevPage}) => {
    const [isNavBarVisible, setIsNavBarVisible] = useState(false);

    useEffect(() => {
        const el: HTMLElement | null = document.getElementById('with-nav');

        if(el){
            const movEl = el.offsetTop;
    
            window.onscroll = function () { myScrollFunction(movEl) };
        }

        if(isDevPage){
          setIsNavBarVisible(true);
        }
      }, []);

    
    
    function myScrollFunction( distance: number ) {
        const res = distance - document.documentElement.scrollTop;

        if (res <= 0) {
            setIsNavBarVisible(true);
        } else {
            setIsNavBarVisible(false);
        }
    }
    


  return (
    <div
      className={`sticky flex ease-in-out z-50 top-0 items-start justify-between px-6 py-4 bg-gradient-to-b from-white via-white-50 to-transparent h-[11.25rem] transition-opacity ${isNavBarVisible ? 'opacity-100' : 'opacity-0'}`}
    > 
      <Link href="/">
        <div className="relative w-[78.4px] h-[44px] sm:w-[123px] sm:h-[80px] leading-normal">
          <Image
            className="absolute "
            alt="Sadya LOGOTYPE"
            src={SadyaLogo}
            fill
          />
        </div>
      </Link>
      <div>
        <Link href="/#ticket-purchase">
          <MainButton label="GET TICKETS" type="get-tickets" />
        </Link>
      </div>
    </div>
  )
}

export default NavigationBar;
