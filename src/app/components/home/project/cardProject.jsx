import Link from "next/link";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CardProject({
  title,
  img,
  colors,
  sizes,
  urlGithub,
  url,
}) {
  const [selectedColor, setselectedColor] = useState();
  const [selectedSize, setselectedSize] = useState();
  return (
    <div className="rounded-md w-[94%] max-w-[280px] h-[400px] overflow-hidden flex shadow-2xl flex-col justify-between  items-center">
      <div className="relative h-full w-full max-h-[75%] img-project">
        <div className="aspect-w-3 aspect-h-4 relative flex h-full w-full items-center justify-center">
          <div className="absolute flex h-full w-full items-center justify-center">
            <img
              crossOrigin="anonymous"
              className="h-full w-full object-cover"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-11/12 h-3/5 flex flex-col justify-between pb-5 gap-2 pt-2 items-start">
        <p className="font-bol text-xl justify-self-center">{title}</p>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          autoHeight={true}
          className="w-full"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {sizes.map((size, index) => (
            <SwiperSlide key={index}>
              <button
                onClick={() => setselectedSize(index)}
                className={`${
                  index == selectedSize
                    ? "border-none bg-mainColor text-white"
                    : "border-mainColor border-[1.5px]"
                }  font-medium  active:border-none active:bg-mainColor active:text-white p-2 rounded-md`}
              >
                {size}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex w-full justify-normal gap-4 items-center">
          <p className="inline font-semibold text-solidHeading">الالوان: </p>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            autoHeight={true}
            className="w-full"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {colors.map((color, index) => (
              <SwiperSlide>
                <button
                  onClick={() => setselectedColor(index)}
                  key={index}
                  className={`rounded-full ${
                    selectedColor == index ? "ring-4" : ""
                  } z-50 w-5 h-5 ${color}`}
                ></button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <Link
              href={url}
              className="border-b border-black text-sm font-hacen-tunisia"
            >
              الطلب
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <FiShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}
