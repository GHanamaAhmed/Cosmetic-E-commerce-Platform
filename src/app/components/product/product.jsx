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
import Contacts from "../home/contacts/contacts";
import Recommendation from "./recommendation";
export default function Product({ product }) {
  const [numImage, setNumImage] = useState(0);
  const [selectedSize, setselectedSize] = useState(-1);
  const [photos, setPhotos] = useState([]);
  const [selectedColor, setselectedColor] = useState(0);
  const [isShowDescription, setIsShowDescription] = useState(false);
  useEffect(() => {
    setNumImage(
      product?.photos?.reduce((preveus, currentV) => {
        return preveus + currentV?.photos?.length;
      }, 0)
    );
    setPhotos(
      product?.photos?.reduce((preveus, currentV) => {
        return [...preveus, ...currentV?.photos];
      }, [])
    );
  }, [product]);
  useEffect(() => {
    console.log(product);
  }, [numImage]);
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
            {[...Array(numOfSlide())].map((_, index) => (
              <SwiperSlide
                className={`swiper-grid relative h-full w-full m-1 `}
                key={index}
              >
                {photos
                  ?.slice(imageStart(index), imageEnd(index))
                  .map((photo, ind) => (
                    <div key={ind} className="relative w-full h-full ">
                      <Image
                        className="object-contain my-2 ml-2"
                        src={photo}
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
          <p className="text-solidHeading text-2xl">{product?.name}</p>
          <p className="text-mainColor">{product?.price} دج</p>
          <div className="flex flex-wrap gap-2">
            {product?.photos
              ?.filter((_, index) => selectedColor == index)?.[0]
              ?.sizes?.map((size, index) => (
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
            {product?.photos?.map((e, index) => (
              <button
                onClick={() => {
                  setselectedColor(index);
                  setselectedSize(-1);
                }}
                key={index}
                style={{ backgroundColor: e?.color }}
                className={`rounded-full ${
                  selectedColor == index ? "ring-4" : ""
                } z-50 w-7 h-7`}
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
          <div className="ont-medium  w-full border-mainColor border-[1.5px] p-2 rounded-sm">
            <div className="relative ">
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
            {isShowDescription && <p>{product?.description}</p>}
          </div>
        </div>
      </div>
      <Recommendation type={product?.type} idProduct={product?._id} />
      <Contacts />
    </div>
  );
}
