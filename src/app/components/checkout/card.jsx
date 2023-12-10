import React, { memo } from "react";
import Image from "next/image";
export default memo(function Card({ product }) {
  return (
    <div className="flex flex-row gap-5 ">
      <Image
        src={"/img/feature-product-1.jpg"}
        width={200}
        height={200}
        className="rounded-lg w-28 h-28"
      />
      <div className="flex flex-col justify-between">
        <p className="font-mono text-sm ">الاسم:{product?.name}</p>
        <div className="flex gap-1">
          <p className="font-mono text-sm">اللون:</p>
          <div
            className="h-5 w-5 rounded-full"
            style={{ backgroundColor: product?.color }}
          ></div>
        </div>
        <p className="font-mono text-sm ">الحجم :{product?.size}</p>
        <p className="font-mono text-sm ">الكمية: {product?.quntity}</p>
        <p className="font-mono text-sm ">السعر: {product?.price}دج</p>
      </div>
    </div>
  );
});
