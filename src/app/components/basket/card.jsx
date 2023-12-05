import React from "react";

export default function Card({product}) {
  return (
    <div className="w-full flex py-3 px-3 border-b justify-between">
      <div className="flex">
        <Image src={"/img/Rectangle 4.png"} width={130} height={130} />
        <div className="grid grid-cols-2 px-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm">{product?.name}</p>
            <button
              className={`rounded-full shadow-[inset_-0.5px_0.5px_3px_0px_#1a202c]  z-50 w-6 h-6 bg-amber-900`}
            ></button>
            <p className="text-sm">{product?.size}</p>
            <div className="flex border w-fit">
              <button className="px-2 py-0.5 lg:px-3 lg:py-2 border-l  text-sm ">
                +
              </button>
              <div className="px-2 text-sm py-0.5 lg:px-3 lg:py-2">5</div>
              <button className="px-2 py-0.5 lg:px-3 lg:py-2 border-r  text-sm ">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between items-end">
        <button className="h-1 w-2 bg-red-600"></button>
        <p className="text-sm">1800Da</p>
      </div>
    </div>
  );
}
