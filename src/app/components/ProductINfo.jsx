import Image from "next/image";
import React from "react";

export default function ProductINfo() {
  return (
    <div className=" w-full row-start-2 md:row-start-1">
      <div className="w-full flex flex-col justify-center h-fit  p-2 bg-SolidHeadingDarkMode">
        <p className="text-xl ">في سلتك</p>
      </div>
      <div className="w-full flex flex-row justify-between items-center gap-5">
        <div className="w-11/12">
          <div className="w-full flex justify-between">
            <p className="font-thin">المجموع الفرعي</p>
            <p className="font-mono text-sm ">3300دج</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="font-mono text-sm "> التوصيل</p>
            <p className="font-mono text-sm ">3300دج</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="font-mono text-sm "> التخفيض</p>
            <p className="font-mono text-sm ">3300دج</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="font-semibold">المجموع</p>
            <p className="font-mono text-sm text-mainColor">3300دج</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col my-3 gap-3 bg-SolidHeadingDarkMode px-2 py-3">
        <p className="text-xl ">مكان التوصيل</p>
        <div className="flex flex-row w-full gap-5">
          {" "}
          <input
            type="radio"
            name="home"
            id="agence"
            value={"choice"}
            className="accent-black accent scale-125"
          />
          <label htmlFor="agence" className="text-sm font-mono">التوصيل للمكتب</label>
        </div>
        <div className="flex flex-row w-full gap-5">
          <input
            type="radio"
            name="home"
            id="home"
            value={"choice"}
            className="accent-black accent scale-125"
          />
          <label htmlFor="home" className="text-sm font-mono"> التوصيل للمنزل &#8205; &#8205;</label>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5 ">
          <Image
            src={"/img/feature-product-1.jpg"}
            width={200}
            height={200}
            className="rounded-lg w-28 h-28"
          />
          <div className="flex flex-col justify-between">
            <p className="font-mono text-sm ">الاسم</p>
            <p className="font-mono text-sm">اللون:</p>
            <p className="font-mono text-sm ">الحجم :متوسط</p>
            <p className="font-mono text-sm ">الكمية: 10</p>
            <p className="font-mono text-sm ">السعر: 200دج</p>
          </div>
        </div>
      </div>
    </div>
  );
}
