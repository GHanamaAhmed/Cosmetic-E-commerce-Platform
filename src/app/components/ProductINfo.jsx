import Image from "next/image";
import React from "react";

export default function ProductINfo() {
  return (
    <div className=" w-full row-start-2 md:row-start-1">
      <div className="w-full flex flex-col justify-center h-fit  p-2 bg-SolidHeadingDarkMode">
        <p className="text-2xl ">في سلتك</p>
      </div>
      <div className="w-full flex flex-row justify-between items-center gap-5">
        <div className="w-11/12">
          <div className="w-full flex justify-between">
            <p className="text-lg ">المجموع الفرعي</p>
            <p className="text-lg ">3300دج</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-lg "> التوصيل</p>
            <p className="text-lg ">3300دج</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-lg "> التخفيض</p>
            <p className="text-lg ">3300دج</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-lg  font-semibold">المجموع</p>
            <p className="text-lg text-mainColor">3300دج</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col my-3 gap-3 bg-lightContent px-2 py-3">
        <p className="text-lg ">مكان التوصيل</p>
        <div className="flex flex-row w-full gap-5">
          {" "}
          <input
            type="radio"
            name="home"
            id="agence"
            value={"choice"}
            className="accent-black accent scale-125"
          />
          <label htmlFor="agence">التوصيل للمكتب</label>
        </div>
        <div className="flex flex-row w-full gap-5">
          <input
            type="radio"
            name="home"
            id="home"
            value={"choice"}
            className="accent-black accent scale-125"
          />
          <label htmlFor="home"> التوصيل للمنزل &#8205; &#8205;</label>
        </div>
      </div>
      <div className=" w-1/2 h-1/2 flex flex-col gap-5 ">
        <div className="flex flex-row gap-5 ">
          <Image
            src={"/img/feature-product-1.jpg"}
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div>
            <p className="text-lg ">3300دج</p>
            <p className="text-lg ">3300دج</p>
            <p className="text-lg ">3300دج</p>
          </div>
        </div>
        <div className="flex flex-row gap-5 ">
          <Image
            src={"/img/feature-product-1.jpg"}
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div>
            <p className="text-lg ">3300دج</p>
            <p className="text-lg ">3300دج</p>
            <p className="text-lg ">3300دج</p>
          </div>
        </div>
      </div>
    </div>
  );
}
