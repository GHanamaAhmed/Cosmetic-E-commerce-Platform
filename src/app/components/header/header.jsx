"use client";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import Contact from "./contact";
import NavBarPages from "./navBarPages";
import Image from "next/image";
import Basket from "../basket/basket";
import { SlBasketLoaded } from "react-icons/sl";
import { useRouter } from "@/app/libs/router-events/patch-router/router";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useSearchParams } from "next/navigation"
import { IoIosCloseCircleOutline } from "react-icons/io";
export default function Header() {
  const [isBasketActive, setIsBasketActive] = useState(false);
  const [positionScroll, setPositinScroll] = useState(typeof window !== "undefined" ? window.screenY : 0);
  const [headerPosition, setHeaderPosition] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const refSearch = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const handlePosition = () => {
      if (positionScroll < window.scrollY) {
        if (isBasketActive == false) {
          setHeaderPosition("-translate-y-full");
        }
      } else {
        setHeaderPosition("");
      }
      setPositinScroll(window.scrollY);
    };
    window.addEventListener("scroll", handlePosition);
    return () => window.removeEventListener("scroll", handlePosition);
  }, [positionScroll]);
  const handleMenu = () => {
    setIsBasketActive((prevValue) => !prevValue);
  };
  const handleSearch = () => {
    setIsSearchVisible((prevValue) => !prevValue); // Toggle search visibility
  };
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  const handleSearchQuery = (e) => {
    if (e?.key === 'Enter' || e?.type == "click") {
      router.replace("/" + '?' + createQueryString('s', refSearch.current.value) + "#products")
    }
  }
  return (
    <>
      <header
        className={`w-full fixed bg- z-50 bg-white ${headerPosition} duration-500 flex-row-reverse flex items-center justify-around py-2`}
      >
        <button onClick={() => router.push("/")}>
          <div className={`w-[97px] h-[59px] relative ${isSearchVisible ? "hidden md:inline-block " : "inline-block"}`}>
            {" "}
            <Image className="-z-10" src="/img/logo 1.svg" fill alt="logo" />
          </div>
        </button>
        <div className={`flex items-center w-full justify-center md:w-fit ${isSearchVisible ? '' : 'hidden'}`}>
          <IoCloseOutline onClick={handleSearch} className={`cursor-pointer ${isSearchVisible ? '' : 'hidden'}`} size={30} />
          <div className={`transition-all px-2  md:w-fit h-full z-40 right-0 bg-white border top-0 peer-focus:border-black`}>
            <div className="flex items-center">
              <input defaultValue={searchParams.get("s")} onKeyDown={handleSearchQuery} ref={refSearch} type="text" className="peer focus:border-none focus:outline-none" placeholder="Search..." />
              <CiSearch className="cursor-pointer my-2" onClick={handleSearchQuery} size={30} />
            </div>
          </div>
        </div>
        <div className={`md:flex-row-reverse transition-all duration-500 justify-between ${isSearchVisible ? 'hidden' : 'md:flex hidden'} items-center gap-10`}>
          <NavBarPages />
          <ul className="flex justify-between items-center gap-3">
            <Contact />
          </ul>
        </div>
        <div className={`gap-5 items-center ${isSearchVisible ? "hidden md:flex" : "flex"}`}>
          <div className="flex flex-col md:hidden items-center gap-1 cursor-pointer">
            <div
              className={`h-1 w-6 rounded-lg bg-darkMode  duration-300 ${false ? "-translate-x-4" : ""
                }`}
            ></div>
            <div
              className={`h-1 w-6 rounded-lg bg-darkMode  duration-300 ${false ? "-translate-x-2" : ""
                }`}
            ></div>
            <div className="h-1 w-6 rounded-lg bg-darkMode "></div>
          </div>
          <SlBasketLoaded size={20} onClick={handleMenu} />
          <CiSearch onClick={handleSearch} className={`cursor-pointer ${isSearchVisible ? "hidden" : ""}`} size={30} />
        </div>
      </header>
      <div
        className={`fixed transition-all flex flex-col w-full md:w-fit lg:4/12 h-screen ${isBasketActive ? "" : "translate-x-full"
          } z-50 right-0 bg-white shadow-sm top-0`}
      >
        <div className="w-full flex justify-between items-center py-2 px-3 bg-[#F6F4EB]">
          <p className="">سلة المشتريات الخاصة بك</p>
          <IoIosCloseCircleOutline className={`cursor-pointer `} size={30} onClick={(e) => setIsBasketActive(false)} />
        </div>
        <Basket />
      </div>
    </>
  );
};
