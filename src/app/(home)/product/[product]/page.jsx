"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Grid, Navigation, Pagination } from "swiper";
import { FaAngleDown } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { useWidth } from "@/app/hooks/useWidth";

const sizes = [
  "كبير",
  "100 ml",
  "455",
  "كبير",
  "100 ml",
  "455",
  "كبير",
  "100 ml",
  "455",
  "كبير",
  "100 ml",
  "455",
];
const colors = ["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"];
export default function page() {
  const [selectedSize, setselectedSize] = useState();
  const [selectedColor, setselectedColor] = useState();
  const [isShowDescription, setIsShowDescription] = useState(false);
  const { width } = useWidth();
  useEffect(() => {
    console.log(width);
  });
  return (
    <div className="pt-[75px] ">
      <div className="hidden relative h-[150px] md:flex px-10 items-end py-6">
        <Image className="-z-10" src="/img/image 3.jpg" fill />
        <p className="text-white text-4xl">خطوات الشراء</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:pt-7">
        <div className="relative w-full h-[229px]">
          <Swiper
            slidesPerView={width < 768 ? "auto" : 2}
            grid={{
              rows: width < 768 ? 1 : 3,
              fill: "row",
            }}
            spaceBetween={30}
            modules={[Grid, Pagination]}
            className="mySwiper h-full md:h-fit"
          >
            {[...Array(10)].map((size, index) => (
              <SwiperSlide className={`relative md:min-h-[100px]`} key={index}>
                <Image
                  className="object-contain"
                  src="/img/feature-product-1.jpg"
                  fill
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="px-5 flex flex-col gap-3 w-full">
          <p className="text-solidHeading text-2xl">المنتج 1</p>
          <p className="text-mainColor">200 دج</p>
         <div className="grid w-full">
         <Swiper
              slidesPerView={"auto" }
              spaceBetween={10}
              modules={[ Pagination]}
              className="mySwiper w-full"
          >
            {sizes.map((size, index) => (
              <SwiperSlide className="swiper-product" key={index}>
                <button
                  onClick={() => setselectedSize(index)}
                  className={`${
                    index == selectedSize
                      ? "border-none bg-mainColor text-white"
                      : "border-mainColor border-[1.5px]"
                  }  font-medium  active:border-none active:bg-mainColor active:text-white p-2 rounded-sm`}
                >
                  {size}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
         </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            autoHeight={true}
            className="w-full "
          >
            {colors.map((color, index) => (
              <SwiperSlide className="swiper-card ">
                <button
                  onClick={() => setselectedColor(index)}
                  key={index}
                  className={`rounded-full ${
                    selectedColor == index ? "ring-4" : ""
                  } z-50 w-7 h-7 ${color}`}
                ></button>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full grid grid-cols-2 gap-2">
            <button
              className={` font-medium border-mainColor border-[1.5px] active:border-none active:bg-mainColor active:text-white p-2 rounded-sm`}
            >
              طلب
            </button>
            <button
              className={`font-medium border-mainColor border-[1.5px] active:border-none active:bg-[#989898] active:text-white p-2 rounded-sm`}
            >
              اضافة للسلة
            </button>
          </div>
          <div className="ont-medium relative w-full border-mainColor border-[1.5px] p-2 rounded-sm">
            <button
              className={`w-full`}
              onClick={() => setIsShowDescription(!isShowDescription)}
            >
              معلومات المنتج
            </button>
            <FaAngleDown
              className={`${
                isShowDescription ? "rotate-180" : ""
              } absolute left-3 top-1/2 -translate-y-1/2`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
