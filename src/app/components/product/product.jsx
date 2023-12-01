"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Grid, Navigation, Pagination } from "swiper/modules";
import { FaAngleDown } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useWidth } from "@/app/hooks/useWidth";
import CardProject from "../home/project/cardProject";
import Contacts from "../home/contacts/contacts";

const sizes = [
  "كبير",
  "100 ml",
  "455",
  "كبير",
  "100 ml",

];
const colors = ["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"];
const numImage = 10;
export default function Product() {
  const [selectedSize, setselectedSize] = useState();
  const [selectedColor, setselectedColor] = useState();
  const [isShowDescription, setIsShowDescription] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  const { width } = useWidth();
  const numOfSlide = () => {
    if (width > 767) {
      return Math.ceil(numImage / 4);
    } else {
      return numImage;
    }
  };
  const imageStart = (index) => {
    if (width > 767) {
      return 4 * index;
    } else {
      return index;
    }
  };
  const imageEnd = (index) => {
    if (width > 767) {
      if (index + 1 != numOfSlide()) {
        return 4 * (index + 1);
      } else {
        return (numImage % 4) + 4 * index;
      }
    } else {
      return index + 1;
    }
  };
  return (
    <div className="pt-[75px] ">
      <div className="hidden relative h-[150px] md:flex px-10 items-end py-6">
        <Image className="-z-10" src="/img/image 3.jpg" fill alt="" />
        <p className="text-white text-4xl">خطوات الشراء</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:pt-7">
        <div className="relative w-full h-[230px] md:min-h-[400px] px-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            className="w-full h-full   shadow-[inset_0px_20px_20px_10px_#f7fafc]"
          >
            {[...Array(hydrated ? numOfSlide() : 0)].map((size, index) => (
              <SwiperSlide
                className={`swiper-grid relative h-full w-full m-1 `}
                key={index}
              >
                {[...Array(numImage)]
                  .slice(imageStart(index), imageEnd(index))
                  .map((_, ind) => (
                    <div key={ind} className="relative w-full h-full ">
                      <Image
                        className="object-contain my-2 ml-2"
                        src="/img/feature-product-1.jpg"
                        fill
                        alt="img"
                      />
                    </div>
                  ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="px-5 flex flex-col gap-3 w-full">
          <p className="text-solidHeading text-2xl">المنتج 1</p>
          <p className="text-mainColor">200 دج</p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setselectedSize(index)}
                className={`${
                  index == selectedSize
                    ? "border-none bg-mainColor text-white"
                    : "border-mainColor border-[1.5px]"
                }  font-medium  active:border-none active:bg-mainColor active:text-white p-2 rounded-sm`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <button
                onClick={() => setselectedColor(index)}
                key={index}
                className={`rounded-full ${
                  selectedColor == index ? "ring-4" : ""
                } z-50 w-7 h-7 ${color}`}
              ></button>
            ))}
          </div>
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
      <div className="px-3 py-5 flex flex-col gap-3">
        <p className="text-2xl text-solidHeading">مقترحات</p>
        <div className="flex justify-center w-full">
          <Swiper
            slidesPerView={"auto"}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper w-full"
          >
            <SwiperSlide className="swiper-card">
              <CardProject
                img={"/img/Rectangle 6.png"}
                title={"المنتج"}
                colors={[
                  "bg-green-500",
                  "bg-blue-500",
                  "bg-red-500",
                  "bg-yellow-500",
                ]}
                sizes={["100 مل", "100 مل", "100 مل", "100 مل"]}
                url={""}
                urlGithub={""}
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-card">
              <CardProject
                img={"/img/Rectangle 6.png"}
                title={"المنتج"}
                colors={[
                  "bg-green-500",
                  "bg-blue-500",
                  "bg-red-500",
                  "bg-yellow-500",
                ]}
                sizes={["100 مل", "100 مل", "100 مل", "100 مل"]}
                url={""}
                urlGithub={""}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Contacts />
    </div>
  );
}
