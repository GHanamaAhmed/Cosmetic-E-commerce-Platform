"use client";
import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import { Axios } from "@/app/libs/axios";
import { set } from "nprogress";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
import { logout } from "@/app/redux/accountReducer";
export default memo(function Menu({ onCloseMenu, onOpenBasket }) {
  const router = useRouter();
  const [types, setTypes] = useState([]);
  const [isShowTypes, setIsShowTypes] = useState(false);
  const [isLoadingTypes, setIsLoadingTypes] = useState(false);
  const searchParams = useSearchParams();
  const { isAuthenticated } = useAppSelector((store) => store.account);
  const dispatch = useAppDispatch();
  useEffect(() => {}, []);
  const handleShowTypes = () => {
    if (!isShowTypes && types.length === 0) setIsLoadingTypes(true);
    Axios.get("/products/types")
      .then((response) => {
        setIsLoadingTypes(false);
        setTypes(response.data?.types);
      })
      .catch((error) => {
        setIsLoadingTypes(false);
        console.error(error);
      });
    setIsShowTypes(!isShowTypes);
  };
  const createQueryParams = (type, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(type, value);
    return params.toString();
  };
  return (
    <div className="w-full max-h-full overflow-auto flex flex-col items-center gap-3 py-3 px-2">
      <Image src="/img/logo 1.svg" width={100} height={50} alt="logo" />
      <ul className="w-full">
        <li
          onClick={() => {
            router.push("/");
            onCloseMenu();
          }}
          className="w-full flex items-center justify-between py-3 border-b"
        >
          <p>الصفحة الرائيسة</p>
          <MdKeyboardArrowLeft />
        </li>
        <li
          onClick={() => {
            onOpenBasket();
            onCloseMenu();
          }}
          className="w-full flex items-center justify-between py-3 border-b"
        >
          <p>سلة التسوق</p>
          <MdKeyboardArrowLeft />
        </li>
        <li
          onClick={() => {
            router.push("/contactUs");
            onCloseMenu();
          }}
          className="w-full flex items-center justify-between py-3 border-b"
        >
          <p>اتصل بنا</p>
          <MdKeyboardArrowLeft />
        </li>
        {isAuthenticated && (
          <li
            onClick={() => {
              dispatch(logout());
              onCloseMenu();
            }}
            className="w-full flex items-center justify-between py-3 border-b"
          >
            <p>تسجيل الخروج</p>
            <MdKeyboardArrowLeft />
          </li>
        )}
        {!isAuthenticated && (
          <li
            onClick={() => {
              window.open("https://api.fri7a.com/auth/google", "_self");
              onCloseMenu();
            }}
            className="w-full flex items-center justify-between py-3 border-b"
          >
            <p>تسجيل الدخول</p>
            <MdKeyboardArrowLeft />
          </li>
        )}
        <li
          onClick={handleShowTypes}
          className="w-full flex items-center justify-between py-3 border-b"
        >
          <p>التصنيفات</p>
          <MdKeyboardArrowLeft
            className={`${isShowTypes ? "" : "-rotate-90"}`}
          />
        </li>
        {isShowTypes && (
          <ul className="pr-5">
            <li
              onClick={() => {
                router.push("/" + "#" + "products");
                onCloseMenu();
              }}
              className="w-full flex items-center justify-between py-1"
            >
              <p>جميع التصنيفات</p>
              <MdKeyboardArrowLeft />
            </li>
            {types.map((type, i) => (
              <li
                key={i}
                onClick={() => {
                  router.push(
                    "/" +
                      "?" +
                      createQueryParams("type", type) +
                      "#" +
                      "products"
                  );
                  onCloseMenu();
                }}
                className="w-full flex items-center justify-between py-1"
              >
                <p>{type}</p>
                <MdKeyboardArrowLeft />
              </li>
            ))}
          </ul>
        )}
        {isLoadingTypes && (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </ul>
    </div>
  );
});
