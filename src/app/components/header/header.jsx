"use client";
import { memo, useEffect, useLayoutEffect, useState } from "react";
import Contact from "./contact";
import NavBarPages from "./navBarPages";
import Image from "next/image";
import Basket from "../basket/basket";
export default memo(function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [positionScroll, setPositinScroll] = useState(globalThis.screenY);
  const [headerPosition, setHeaderPosition] = useState("");
  useEffect(() => {
    const handlePosition = () => {
      if (positionScroll < globalThis.scrollY) {
        if (isMenuActive == false) {
          setHeaderPosition("-translate-y-full");
        }
      } else {
        setHeaderPosition("");
      }
      setPositinScroll(globalThis.scrollY);
    };
    globalThis.addEventListener("scroll", handlePosition);
    return () => globalThis.removeEventListener("scroll", handlePosition);
  }, [positionScroll]);
  const handleMenu = () => {
    setIsMenuActive((prevValue) => !prevValue);
    
  };
  return (
    <>
      <header
        className={`w-full fixed bg- z-50 bg-white ${headerPosition} duration-500 flex-row-reverse flex items-center justify-around py-2`}
      >
        <div className="w-[97px] h-[59px] inline-block relative">
          <Image className="-z-10" src="/img/logo 1.svg" fill alt="logo" />
        </div>
        <div className="md:flex md:flex-row-reverse justify-between items-center gap-10 hidden">
          <NavBarPages />
          <ul className="flex justify-between items-center gap-3">
            <Contact />
          </ul>
        </div>
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={handleMenu}
        >
          <div
            className={`h-1 w-6 rounded-lg bg-darkMode  duration-300 ${
              isMenuActive ? "-translate-x-4" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 rounded-lg bg-darkMode  duration-300 ${
              isMenuActive ? "-translate-x-2" : ""
            }`}
          ></div>
          <div className="h-1 w-6 rounded-lg bg-darkMode "></div>
        </div>
      </header>
      <div
        className={`fixed transition-all pt-[80px] w-full md:w-fit lg:4/12 h-full ${
          isMenuActive ? "" : "translate-x-full"
        } z-10 right-0 bg-white shadow-sm top-0`}
      >
        <Basket />
      </div>
    </>
  );
});
