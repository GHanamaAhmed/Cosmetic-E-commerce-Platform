"use client";
import { memo, use, useCallback, useEffect, useRef, useState } from "react";
import Contact from "./contact";
import NavBarPages from "./navBarPages";
import Image from "next/image";
import Basket from "../basket/basket";
import { SlBasketLoaded } from "react-icons/sl";
import { useRouter } from "@/app/libs/router-events/patch-router/router";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Menu from "../menu/menu";
import { useOutside } from "@/app/hooks/useOutside";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
import { getInfo } from "@/app/redux/accountReducer";
export default function Header() {
  const [isBasketActive, setIsBasketActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [positionScroll, setPositinScroll] = useState(
    typeof window !== "undefined" ? window.screenY : 0
  );
  const [headerPosition, setHeaderPosition] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const refSearch = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const menuRef = useRef(null);
  const basketRef = useRef(null);
  const [isOutsideMenu, setIsOutsideMenu] = useOutside(menuRef);
  const [isOutsideBasket, setIsOutsideBasket] = useOutside(basketRef);
  const { isAuthenticated, user } = useAppSelector((store) => store.account);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getInfo());
  }, []);
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
  useEffect(() => {
    if (isOutsideMenu) {
      setIsMenuActive(false);
    }
  }, [isOutsideMenu]);
  useEffect(() => {
    if (isOutsideBasket) {
      setIsBasketActive(false);
    }
  }, [isOutsideBasket]);
  useEffect(() => {
    if (isMenuActive) {
      setIsOutsideMenu(false);
    }
  }, [isMenuActive]);
  useEffect(() => {
    if (isBasketActive) {
      setIsOutsideBasket(false);
    }
  }, [isBasketActive]);
  const handleBasket = () => {
    setIsBasketActive((prevValue) => !prevValue);
  };
  const handleSearch = () => {
    setIsSearchVisible((prevValue) => !prevValue); // Toggle search visibility
  };
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const handleSearchQuery = (e) => {
    if (e?.key === "Enter" || e?.type == "click") {
      router.replace(
        "/" +
          "?" +
          createQueryString("s", refSearch.current.value) +
          "#products"
      );
    }
  };
  const handleMenu = useCallback(() => {
    setIsMenuActive((prevValue) => !prevValue);
  });
  const onCloseBasket = useCallback(() => {
    setIsBasketActive(false);
  }, []);
  const onOpenBasket = useCallback(() => {
    setIsBasketActive(true);
  }, []);
  return (
    <>
      <header
        className={`w-full fixed bg- z-50 bg-white ${headerPosition} duration-500 flex-row-reverse flex items-center justify-around py-2`}
      >
        {!isSearchVisible && !isAuthenticated && (
          <a
            href="https://api.fri7a.com/auth/google"
            target="_self"
            className="border md:hidden border-dartext px-4 py-2 text-darkMode transition-all duration-200 hover:bg-dartext-darkMode hover:text-primaryColor"
          >
            تسجيل الدخول{" "}
          </a>
        )}
        {!isSearchVisible && isAuthenticated && (
          <Image
            height={40}
            width={40}
            src={user?.Photo}
            class="rounded-full md:hidden"
            alt="Avatar"
          />
        )}
        <button
          className={`md:w-[97px] md:h-[59px] w-[49px] h-[29px] relative ${
            isSearchVisible ? "hidden md:inline-block " : "inline-block"
          }`}
          onClick={() => router.push("/")}
        >
          {" "}
          <Image className="-z-10" src="/img/logo 1.svg" fill alt="logo" />
        </button>
        <div
          className={`flex items-center w-full justify-center md:w-fit ${
            isSearchVisible ? "" : "hidden"
          }`}
        >
          <IoCloseOutline
            onClick={handleSearch}
            className={`cursor-pointer ${isSearchVisible ? "" : "hidden"}`}
            size={30}
          />
          <div
            className={`transition-all px-2  md:w-fit h-full z-40 right-0 bg-white border top-0 peer-focus:border-black`}
          >
            <div className="flex items-center">
              <input
                defaultValue={searchParams.get("s")}
                onKeyDown={handleSearchQuery}
                ref={refSearch}
                type="text"
                className="peer focus:border-none focus:outline-none"
                placeholder="Search..."
              />
              <CiSearch
                className="cursor-pointer my-2"
                onClick={handleSearchQuery}
                size={30}
              />
            </div>
          </div>
        </div>
        <div
          className={`md:flex-row-reverse transition-all duration-500 justify-between ${
            isSearchVisible ? "hidden" : "md:flex hidden"
          } items-center gap-10`}
        >
          <NavBarPages />
          <ul className="flex justify-between items-center gap-3">
            <Contact />
          </ul>
        </div>
        <div
          className={`gap-5 items-center ${
            isSearchVisible ? "hidden md:flex" : "flex"
          }`}
        >
          <button
            onClick={handleMenu}
            className="flex flex-col items-center gap-1 cursor-pointer"
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
          </button>
          <SlBasketLoaded size={20} onClick={handleBasket} />
          <CiSearch
            onClick={handleSearch}
            className={`cursor-pointer ${isSearchVisible ? "hidden" : ""}`}
            size={30}
          />
          {!isAuthenticated && (
            <a
              href="https://api.fri7a.com/auth/google"
              target="_self"
              className="border hidden md:block border-dartext px-4 py-2 text-darkMode transition-all duration-200 hover:bg-dartext-darkMode hover:text-primaryColor"
            >
              تسجيل الدخول{" "}
            </a>
          )}
          {!isSearchVisible && isAuthenticated && (
            <Image
              height={40}
              width={40}
              src={user?.Photo}
              class="rounded-full hidden md:inline-block"
              alt="Avatar"
            />
          )}
        </div>
      </header>
      <div
        ref={menuRef}
        className={`fixed transition-all w-[80%] md:w-4/12 lg:w-3/12 h-screen ${
          isMenuActive ? "" : "translate-x-full"
        } z-50 right-0 bg-white shadow-sm top-0`}
      >
        <Menu onCloseMenu={handleMenu} onOpenBasket={onOpenBasket} />
      </div>
      <div
        ref={basketRef}
        className={`fixed transition-all flex flex-col w-full md:w-fit lg:4/12 h-screen ${
          isBasketActive ? "" : "translate-x-full"
        } z-50 right-0 bg-white shadow-sm top-0`}
      >
        <div className="w-full flex justify-between items-center py-2 px-3 bg-[#F6F4EB]">
          <p className="">سلة المشتريات الخاصة بك</p>
          <IoIosCloseCircleOutline
            className={`cursor-pointer `}
            size={30}
            onClick={onCloseBasket}
          />
        </div>
        <Basket onPurchase={onCloseBasket} />
      </div>
    </>
  );
}
