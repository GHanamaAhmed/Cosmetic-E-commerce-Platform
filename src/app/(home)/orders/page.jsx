import Product from "@/app/components/orders/products";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    // <div className="w-full h-full flex flex-col-reverse md:flex-row-reverse justify-evenly items-center pt-[80px] gap-10 px-5">
    // 	<div className="w-full h-full flex flex-col justify-evenly items-center ">
    // 		 <Product/>
    // 		<div>deliveary</div>
    // 		<div>payment</div>
    // 	</div>
    // 	<div className="w-full h-full flex flex-col justify-evenly items-center">
    // 		information
    // 	</div>
    // </div>
    <div className="w-full flex justify-center pt-[72px]">
      <div className="px-3 py-2 hidden md:flex"></div>
      <div className="w-11/12 flex flex-col px-3 py-2">
        <div className="flex gap-2">
          <div className="p-1 rounded-full bg-[#FFEDCA]">
            <div className="h-4 w-4 bg-[#FFB628] rounded-full"></div>
          </div>
          <p>غير مكتمل</p>
          <p className="text-[#A0B2CC]">2</p>
        </div>
        <div className="flex gap-2">
          <div className="relative h-32 w-44 md:h-">
            {" "}
            <Image src={"/img/Rectangle 4.png"} className="rounded-md" fill />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex gap-3 w-full ">
              <p className=" md:text-xl">منتج1</p>
              <p className="text-red-500 md:text-xl">80دج</p>
              <p className="text-[#A0B2CC] line-through md:text-xl">138دج</p>
            </div>
            <div className="flex flex-col h-full justify-between">
              <div className="flex gap-1">
                <p className="text-[#A0B2CC] md:text-xl">اللون</p>
                <div className={`rounded-full z-50 w-4 h-4 bg-red-500`}></div>
              </div>
              <div className="flex gap-1">
                <p className="text-[#A0B2CC] md:text-xl">الحجم</p>
                <p className="text-[#728FAD] md:text-xl">متوسط</p>
              </div>
              <div className="flex gap-1">
                <p className="text-[#A0B2CC] md:text-xl">الكمية</p>
                <p className="text-[#728FAD] md:text-xl">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
