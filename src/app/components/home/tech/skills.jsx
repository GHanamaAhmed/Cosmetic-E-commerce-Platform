import Image from "next/image";
import React from "react";

export default function Skills({ className }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center justify-around w-full">
      <div className="flex flex-col rounded-md p-2 w-60 shadow-md">
        <div className="w-56 h-32 bg-[#DEDEDE] rounded-md relative overflow-hidden">
          <Image
            src={"/img/elsa-olofsson-Pm0K9Y3EPUc-unsplash.jpg"}
            fill
            alt="photo"
          />
        </div>
        <p className="mt-2">تصفح الموقع</p>
       
        <p className="text-xs md:text-sm text-darkContent">
          {" "}
          قم بتصفح موقعنا لاستعراض مجموعة واسعة من منتجات التجميل، واستعراض
          المعلومات والصور لكل منتج.
        </p>
      </div>
      <div className="flex flex-col rounded-md p-2 w-60 shadow-md">
        <div className="w-56 h-32 bg-[#DEDEDE] rounded-md relative overflow-hidden">
          <Image
            src={"/img/istockphoto-1414801672-1024x1024.jpg"}
            fill
            alt="photo"
          />
        </div>
        <p className="mt-2">اختيار المنتجات</p>
        <p className="text-xs md:text-sm text-darkContent">
          {" "}
          حدد المنتجات التي ترغب في شرائها وأضفها إلى سلة التسوق، ثم قم بتأكيد
          الطلب بالانتقال إلى صفحة الدفع.
        </p>
      </div>
      <div className="flex flex-col rounded-md p-2 w-60 shadow-md">
        <div className="w-56 h-32 bg-[#DEDEDE] rounded-md relative overflow-hidden">
          <Image
            src={"/img/istockphoto-1477483608-1024x1024.jpg"}
            fill
            alt="photo"
          />
        </div>
        <p className="mt-2">الشراء</p>
        <p className="text-xs md:text-sm text-darkContent">
          أكمل عملية الشراء بسهولة من خلال استخدام وسائل الدفع الإلكتروني
          المتاحة لتأكيد الطلب واستلام منتجاتك بسرعة وأمان.
        </p>
      </div>
    </div>
  );
}
