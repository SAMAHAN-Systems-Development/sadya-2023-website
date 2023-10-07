'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import SadyaLogo from "public/assets/images/SADYA LOGOTYPE 3D 1.png";

import MainButton from "@/components/ui/MainButton";
import { FaRegWindowMinimize } from "react-icons/fa6";

FaRegWindowMinimize
const NavigationBar = () => {
  const navigationRef = useRef<HTMLDivElement>(null);
  const lastScrollPosition = useRef(0);
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const scrollListener = useCallback(() => {
    if (navigationRef.current) {
      const scrollY = window.scrollY;

      if (scrollY > 800 && scrollY > lastScrollPosition.current) {
        // If scrolling down and past a certain level (e.g., 100 pixels), show the navbar
        setIsNavBarVisible(true);
      } else if (scrollY <= 800) {
        // If scrolling back up to the top or at the top, show the navbar
        setIsNavBarVisible(false);
      } else {
        // If scrolling down but below 100 pixels, hide the navbar
        setIsNavBarVisible(true);
      }

      lastScrollPosition.current = scrollY;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [scrollListener]);

  return (
    <div
      ref={navigationRef}
      className={`sticky top-0 flex items-start justify-between px-6 py-4 bg-gradient-to-b from-white via-white-50 to-transparent h-[11.25rem] transition-opacity ${isNavBarVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="relative w-[98.4px] h-[64px] sm:w-[123px] sm:h-[80px] leading-normal">
        <Image
          className="absolute "
          alt="Sadya LOGOTYPE"
          src={SadyaLogo}
          fill
        />
      </div>
      <div>
        <MainButton label="GET TICKETS" type="get-tickets" />
      </div>
    </div>
  );
};

export default NavigationBar;
