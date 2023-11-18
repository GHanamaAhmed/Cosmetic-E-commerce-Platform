"use client";
import { memo, useEffect, useLayoutEffect, useState } from "react";
import Contact from "./contact";
import NavBarPages from "./navBarPages";
export default memo(function Header({ onHandleMenu }) {
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
    onHandleMenu();
  };
  return (
    <header
      className={`w-full fixed bg- z-50 bg-white ${headerPosition} duration-500 flex-row-reverse flex items-center justify-around py-2`}
    >
      <img src="./img/logo 1.svg" alt="icon" />
      <div
        className="flex flex-col items-center gap-1 cursor-pointer md:hidden"
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
      <div className="md:flex md:flex-row-reverse justify-between items-center gap-10 hidden">
        <NavBarPages />
        <ul className="flex justify-between items-center gap-3">
          <Contact />
        </ul>
      </div>
    </header>
  );
});
