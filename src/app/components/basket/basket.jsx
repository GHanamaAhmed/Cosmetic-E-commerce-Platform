import Image from "next/image";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Card from "./card";
export default function Basket() {
  const { products } = useSelector((state) => state.basket);
  const some = useMemo(() => {
    return products.reduce((some, e) => some + e?.price * e?.quntity, 0);
  }, [products]);
  const disable = useMemo(() => {
    const c = products.every(
      (e) =>
        e?.color &&
        e?.size &&
        e?.color != "الكل" &&
        e?.size != "الكل" &&
        e?.quntity > 0
    );
    return c ? false : true;
  }, [products]);
  return (
    <div className="w-full gap-2">
      <div className="w-full flex py-3 border-b px-3 justify-between">
        <div className="flex">
          <Image src={"/img/Rectangle 4.png"} width={130} height={130} />
          <div className="grid grid-cols-2 px-4">
            <div className="flex flex-col gap-1">
              <p className=" text-sm ">الاسم</p>
              <button
                className={`rounded-full shadow-[inset_-0.5px_0.5px_3px_0px_#1a202c]  z-50 w-6 h-6 bg-amber-900`}
              ></button>
              <p className=" text-sm ">الحجم</p>
              <div className="flex border w-fit">
                <button className="px-2 py-0.5 lg:px-3 lg:py-2 border-l  text-sm ">
                  +
                </button>
                <div className="px-2 py-0.5 lg:px-3 lg:py-2">5</div>
                <button className="px-2 py-0.5 lg:px-3 lg:py-2 border-r  text-sm ">
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-between items-end">
          <button className="h-1 w-2 bg-red-600"></button>
          <p className=" text-sm ">1800Da</p>
        </div>
      </div>
      {products?.map((e, i) => (
        <Card product={e} index={i} key={i} />
      ))}
      <div className="w-full flex items-center flex-col gap-1">
        <div className="w-full flex justify-around">
          <p>المجموع:</p>
          <p>3500 دج</p>
        </div>
        <button className="border border-green-500 py-2 w-11/12">شراء</button>
      </div>
    </div>
  );
}
