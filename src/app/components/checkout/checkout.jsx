"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ClientINfo from "../ClientINfo";
import Card from "./card";
import axios from "axios";
import { Axios } from "@/app/libs/axios";
import { toasty } from "../toasty/toast";
import { emptyBasket, multyUpdateBasket } from "@/app/redux/basketReducer";
export default function Checkout() {
  const { products, order } = useAppSelector((state) => state.basket);
  const { user, isAuthenticated } = useAppSelector((state) => state.account);
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
  const [wilaya, setWilaya] = useState("adrar");
  const [baladias, setBaladias] = useState([]);
  const [baladia, setBaladia] = useState("adrar");
  const [delivery, setDelivery] = useState("deleveryAgency");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const price = useMemo(() => {
    return products?.reduce(
      (some, e) => some + Number(e?.price) * Number(e?.quntity),
      0
    );
  }, [products]);
  useEffect(() => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setEmail(user?.email);
    setPhone(user?.phone);
  }, [user]);
  useEffect(() => {
    if (order) {
      setIsLoading(false);
    } else {
      router.replace("/");
    }
    Axios.get("/cities/wilaya")
      .then((res) => setWilayas(res.data))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    console.log(wilaya);
    Axios.get(`/cities/wilaya/${wilaya?.id}`)
      .then((res) => setBaladias(res.data))
      .catch((err) => console.error(err));
  }, [wilaya]);
  useEffect(() => {
    try {
      delivery &&
        wilaya &&
        Axios.get(
          `cities/deliveryPrice?wilaya1=${wilaya?.name}&id=${wilaya?.id}&delivery=${delivery}`
        )
          .then((res) => setShipping(0))
          .catch((err) => console.error(err));
    } catch (e) {
      console.error(e);
    }
  }, [delivery, wilaya]);
  const checkCode = (e) => {
    if (!e?.currentTarget.value) {
      setDiscountPorcent(0);
      setDiscountPrice(0);
      return;
    }
    setIsSend(true);
    Axios.post("/coupon", { code: e?.currentTarget.value })
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
  const pay = async (mode, orderNumber) => {
    const invoice = {
      amount: 600,
      client: `${firstName} ${lastName}`, // add a text field to allow the user to enter his name, or get it from a context api (depends on the project architecture)
      client_enail: email,
      mode,
      invoice_number: orderNumber,
      discount: 0,
      comment: "empty",
      webhook_url: "https://crowinc.free.beeceptor.com/",
      back_url: "https://orders/webhook",
      discount: 0,
    };
    await axios
      .post("https://epay.chargily.com.dz/api/invoice", invoice, {
        headers: {
          "X-Authorization":
            "api_uaxvP7R6F1to33NUoNiyXCiWLuGpKuB4KRi7iGvv04vbrnaCaUO0zb44H6caD6AR",
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res.status >= 400) {
          window.location.href = res.data?.checkout_url;
        } else {
          toasty("حدث خطاء", { toastId: "pay", type: "error" });
        }
      })
      .catch((err) => console.error(err));
  };
  const postOrder = (mode) => {
    if (isSend) return;
    setIsSend(true);
    const req = {
      userId: user?._id,
      productsIds: products?.map((e) => ({
        thumbanil: e?.thumbanil,
        name: e?.name,
        price: e?.price,
        id: e?.id,
        quntity: e?.quntity,
        size: e?.size || undefined,
        color: e?.color || "",
      })),
      name: isAuthenticated
        ? `${user?.firstName} ${user?.lastName}`
        : firstName,
      coupon: coupon,
      adress: adress,
      phone: phone,
      email,
      city: wilaya && baladia ? `${wilaya?.name} ${baladia?.name}` : null,
      photo: user?.Photo,
      delivery,
      shipping,
    };
    if (!isAuthenticated) {
      delete req?.userId;
      delete req?.photo;
    }
    if (!coupon.trim()) {
      delete req.coupon;
    }
    if (!shipping) {
      delete req.shipping;
    }
    Axios.post("/orders", req)
      .then((res) => {
        if (res.data.error) {
          toasty(
            "نعتذر عن الإزعاج، ولكن يبدو أن بعض المنتجات قد تكون أكبر من الكمية المتاحة حالياً. يرجى تعديل الكميات او حذفها لاستكمال الطلب.",
            {
              toastId: "postOrder",
              type: "warning",
              autoClose: false,
            }
          );
          setIsSend(false);
          dispatch(multyUpdateBasket(res.data.error));
        } else {
          pay(mode, res.data?.orderNumber);
        }
      })
      .catch((err) => {
        setIsSend(false);
        toasty(err?.response?.data || "حدث خطاء", {
          toastId: "postOrder",
          type: "error",
        });
        console.error(err);
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
                    ? price - price * (1 - discountPorcent)
                    : discountPrice}{" "}
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
              <select
                onChange={(e) => {
                  const selectedValue = JSON.parse(e.currentTarget.value);
                  setWilaya({ id: selectedValue.id, name: selectedValue.name });
                  setBaladia(null);
                  console.log(selectedValue.name); // or perform other actions based on selection
                }}
                className="relative w-full cursor-default bg-transparent rounded-sm py-1.5 shadow-sm border border-mainColor focus:outline-none focus:border-blue-500"
                aria-labelledby="listbox-label"
              >
                <option value="">الولايات</option>
                <optgroup label="Options">
                  {wilayas.map((e, i) => (
                    <option
                      key={i}
                      value={JSON.stringify({ id: e?.id, name: e?.name })}
                    >
                      {e?.ar_name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>

          <div>
            <div className="relative mt-2">
              <select
                onChange={(e) => {
                  const selectedValue = JSON.parse(e.currentTarget.value);
                  setBaladia({
                    id: selectedValue.id,
                    name: selectedValue.name,
                  });
                  // Perform other actions based on the selected value
                }}
                className="relative w-full cursor-default bg-transparent rounded-sm py-1.5 shadow-sm border border-mainColor focus:outline-none focus:border-blue-500"
                aria-labelledby="listbox-label"
              >
                <option value="">البلديات</option>
                <optgroup label="Options">
                  {baladias.map((e, i) => (
                    <option
                      key={i}
                      value={JSON.stringify({ id: e?.id, name: e?.name })}
                    >
                      {e?.ar_name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap w-full">
            <p className="font-extralight">عنوان السكن</p>
            <input
              value={adress}
              onChange={(e) => setAdress(e?.currentTarget?.value)}
              type="text"
              className="relative w-full cursor-default rounded-sm py-1.5 pl-3 pr-1 shadow-sm border  border-mainColor focus:outline-none focus:border-blue-500"
            />
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
          <div className="flex flex-col gap w-full">
            <p className="font-extralight">كوبون التخفيض</p>
            <input
              value={coupon}
              onBlur={checkCode}
              onChange={(e) => setCoupon(e?.currentTarget?.value)}
              type="text"
              className="relative w-full cursor-default rounded-sm py-1.5 pl-3 pr-1 shadow-sm border  border-mainColor focus:outline-none focus:border-blue-500"
            />
          </div>
         <div className="flex justify-around">
         <button onClick={() => postOrder("EDAHABIA")}>
            <Image
              src={
                "/img/algerie-poste-activer-desactiver-carte-edahabia-removebg-preview.png"
              }
              width={200}
              height={100}
            />
          </button>
          <button onClick={() => postOrder("CIB")}>
            <Image
              src={
                "/img/cibEtDahabia-removebg-preview.png"
              }
              width={200}
              height={100}
            />
            </button>
         </div>
        </div>
      </div>
    </div>
  );
}
