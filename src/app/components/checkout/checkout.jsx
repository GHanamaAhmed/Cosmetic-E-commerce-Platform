"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import ProductINfo from "../ProductINfo";
import ClientINfo from "../ClientINfo";
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
  const [delivery, setDelivery] = useState();
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
        <ProductINfo />
        <ClientINfo />
      </div>
    </div>
  );
}
