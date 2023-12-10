"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import ClientINfo from "../ClientINfo";
import Card from "./card";
import axios from "axios";
export default function Checkout() {
  const { products, order } = useAppSelector((state) => state.basket);
  // const { user, isAuthenticated } = useAppSelector((state) => state.account);
  const [shipping, setShipping] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [discountPrice, setDiscountPrice] = useState(0);
  const [discountPorcent, setDiscountPorcent] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [isLading, setIsLoading] = useState(true);
  const [isSend, setIsSend] = useState(false);
  const [wilayas, setWilayas] = useState([]);
  const [wilaya, setWilaya] = useState();
  const [baladias, setBaladias] = useState([]);
  const [baladia, setBaladia] = useState();
  const [delivery, setDelivery] = useState("deleveryAgency");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const price = useMemo(() => {
    return products?.reduce(
      (some, e) => some + Number(e?.price) * Number(e?.quntity),
      0
    );
  }, [products]);
  const checkCode = (e) => {
    if (!e?.currentTarget.value) {
      setDiscountPorcent(0);
      setDiscountPrice(0);
      return;
    }
    setIsSend(true);
    customAxios
      .post("/coupon", { code: e?.currentTarget.value })
      .then((res) => {
        if (res.data?.porcent) {
          setDiscountPorcent(Number(res.data?.porcent));
        } else {
          setDiscountPrice(Number(res.data?.price));
        }
        toasty(
          `تم تخفيض ${
            res?.data.porcent
              ? `${res.data?.porcent * 100}/100`
              : `${res.data?.price}`
          }`,
          { toastId: "checkCoupon", autoClose: 5000, type: "success" }
        );
      })
      .catch((err) => {
        if (err?.response?.data) {
          toasty(err?.response?.data, {
            toastId: "checkCoupon",
            autoClose: 5000,
            type: "error",
          });
        }
        setCoupon("");
        setDiscountPorcent(0);
        setDiscountPrice(0);
        console.error(err);
      })
      .finally((f) => setIsSend(false));
  };
  const pay = () => {
    axios
      .post(
        "https://devapi.slick-pay.com/api/v1/users/accounts",
        {
          rib: "00799999002600751111",
          title: "main",
          lastname: "Ghanama",
          firstname: "Ahmed",
          address: "Adrar",
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${"165|M88yS5tC3kjHt3FlPmOOO1lyGxWyh9ZJMJ0UnyMH"}`,
          },
        }
      )
      .then((result) => {
        let response = result.data;

        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full h-full flex flex-col items-center pt-[75px] gap-10">
      <div className="relative w-[98%] h-36   ">
        <Image
          src="/img/headerimg.jpg"
          fill
          className="z-0 brightness-50 blur-[0.5px]"
        />

        <p className="absolute z-50 text-3xl text-white bottom-5 right-5">
          {" "}
          الدفع النهائي{" "}
        </p>
      </div>
      <div className="w-11/12 flex flex-col justify-between items-start border-b-2">
        {" "}
        <p className="text-2xl"> المعلومات</p>
      </div>
      <div className="w-10/12 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className=" w-full row-start-2 md:row-start-1">
          <div className="w-full flex flex-col justify-center h-fit  p-2 bg-SolidHeadingDarkMode">
            <p className="text-xl ">في سلتك</p>
          </div>
          <div className="w-full flex flex-row justify-between items-center gap-5">
            <div className="w-11/12">
              <div className="w-full flex justify-between">
                <p className="font-thin">المجموع الفرعي</p>
                <p className="font-mono text-sm ">{price}دج</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="font-mono text-sm "> التوصيل</p>
                <p className="font-mono text-sm ">مجانا</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="font-mono text-sm "> التخفيض</p>
                <p className="font-mono text-sm ">
                  {discountPorcent
                    ? price * discountPorcent
                    : price - discountPrice}{" "}
                  دج
                </p>
              </div>
              <div className="w-full flex justify-between">
                <p className="font-semibold">المجموع</p>
                <p className="font-mono text-sm text-mainColor">
                  {discountPorcent
                    ? price * (1 - discountPorcent)
                    : price - discountPrice}{" "}
                  دج
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col my-3 gap-3 bg-SolidHeadingDarkMode px-2 py-3">
            <p className="text-xl ">مكان التوصيل</p>
            <div className="flex flex-row w-full gap-5">
              {" "}
              <input
                type="radio"
                name="shipping"
                id="agence"
                checked={delivery === "deleveryAgency"}
                onChange={(e) => setDelivery(e?.currentTarget?.value)}
                value={"deleveryAgency"}
                className="accent-black accent scale-125"
              />
              <label htmlFor="agence" className="text-sm font-mono">
                التوصيل للمكتب
              </label>
            </div>
            <div className="flex flex-row w-full gap-5">
              <input
                type="radio"
                name="shipping"
                id="home"
                checked={delivery === "homeDelivery"}
                onChange={(e) => setDelivery(e?.currentTarget?.value)}
                value={"homeDelivery"}
                className="accent-black accent scale-125"
              />
              <label htmlFor="home" className="text-sm font-mono">
                {" "}
                التوصيل للمنزل &#8205; &#8205;
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {products.map((e, i) => (
              <Card product={e} key={i} />
            ))}
          </div>
        </div>
        <div className="w-full h-full flex gap-2 flex-col">
          <div className="flex flex-col w-full">
            <p className="font-extralight">الاسم</p>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e?.currentTarget?.value)}
              type="text"
              className="relative w-full cursor-default rounded-sm py-1.5 pl-3 pr-1 shadow-sm border  border-mainColor focus:outline-none focus:border-blue-500 "
            />
          </div>
          <div className="flex flex-col gap w-full">
            <p className="font-extralight">الايميل</p>
            <input
              value={email}
              onChange={(e) => setEmail(e?.currentTarget?.value)}
              type="email"
              className="relative w-full cursor-default rounded-sm py-1.5 pl-3 pr-1 shadow-sm border  border-mainColor focus:outline-none focus:border-blue-500 "
            />
          </div>
          <div>
            <div className="relative mt-2">
              <button
                type="button"
                className="relative w-full cursor-default rounded-sm py-1.5 pl-3 pr-6 shadow-sm border  border-mainColor focus:outline-none focus:border-blue-500 "
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
              >
                <span className="flex items-center">
                  <span className="ml-3 block truncate">wilaya</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <ul
                className="absolute hidden z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                tabIndex={-1}
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
              >
                <li
                  className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                  id="listbox-option-0"
                  role="option"
                >
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="h-5 w-5 flex-shrink-0 rounded-full"
                    />
                    {/* Selected: "font-semibold", Not Selected: "font-normal" */}
                    <span className="font-normal ml-3 block truncate">
                      Wade Cooper
                    </span>
                  </div>
                  {/*
    Checkmark, only display for selected option.

    Highlighted: "text-white", Not Highlighted: "text-indigo-600"
  */}
                  <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </li>
                {/* More items... */}
              </ul>
            </div>
          </div>

          <div>
            <div className="relative mt-2">
              <button
                type="button"
                className="relative w-full cursor-default rounded-sm py-1.5 pl-3 pr-6 shadow-sm border  border-mainColor focus:outline-none focus:border-blue-500 "
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
              >
                <span className="flex items-center">
                  <span className="ml-3 block truncate">wilaya</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <ul
                className="absolute hidden z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                tabIndex={-1}
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
              >
                <li
                  className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                  id="listbox-option-0"
                  role="option"
                >
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="h-5 w-5 flex-shrink-0 rounded-full"
                    />
                    {/* Selected: "font-semibold", Not Selected: "font-normal" */}
                    <span className="font-normal ml-3 block truncate">
                      Wade Cooper
                    </span>
                  </div>
                  {/*
    Checkmark, only display for selected option.

    Highlighted: "text-white", Not Highlighted: "text-indigo-600"
  */}
                  <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </li>
                {/* More items... */}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap w-full">
            <p className="font-extralight">رقم الهاتف</p>
            <input
              value={phone}
              onChange={(e) => setPhone(e?.currentTarget?.value)}
              type="text"
              className="relative w-full cursor-default rounded-sm py-1.5 pl-3 pr-1 shadow-sm border  border-mainColor focus:outline-none focus:border-blue-500"
            />
          </div>
          <button onClick={pay}>pay</button>
        </div>
      </div>
    </div>
  );
}
