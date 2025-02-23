import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useWidth } from "@/app/hooks/useWidth";
import { useAppDispatch } from "@/app/hooks/reduxHooks";
import { LuShoppingCart } from "react-icons/lu";
import { BsCheckLg } from "react-icons/bs";
import {
  addToBasket,
  changeIsOrder,
  emptyBasket,
} from "@/app/redux/basketReducer";
import Image from "next/image";
import { toasty } from "@/app/components/toasty/toast";
import { useRouter } from "@/app/libs/router-events/patch-router/router";
export default memo(function CardProject({
  id,
  name,
  price,
  promotion,
  quntity,
  like,
  save,
  isShowPrice,
  isShowPromotion,
  thumbanil,
  status,
  photos,
}) {
  const [swiper, setSwiper] = useState(null);
  const [selectedColor, setselectedColor] = useState(-1);
  const [selectedSize, setselectedSize] = useState(-1);
  const [isSave, setIsSave] = useState(save || false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const toggleSave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (selectedSize === -1 || selectedColor === -1) {
      toasty("اختر الحجم و اللون اولا", {
        toastId: "addProduct",
        autoClose: 5000,
        type: "warning",
      });
      return;
    }
    dispatch(
      addToBasket({
        id,
        name,
        price: promotion && isShowPromotion ? promotion : price,
        quntity: 1,
        thumbanil:
          photos?.find(
            (e) =>
              e?.color === selectedColor &&
              (e?.sizes?.includes(selectedSize) ||
                (selectedSize === "" && !e?.sizes?.length))
          )?.photos?.[0] || thumbanil,
        photos,
        maxQuntity: quntity,
        size: selectedSize,
        color: selectedColor,
      })
    );
    toasty("تم وضع المنتج في السلة", {
      toastId: "addProduct",
      autoClose: 5000,
      type: "success",
    });
    setIsSave(true);
    setTimeout(() => {
      setIsSave(false);
    }, 1000);
  };
  useEffect(() => {
    if (photos?.[0]?.color === "" || photos?.[0]?.color === undefined) {
      setselectedColor("");
    }
  }, [photos]);
  useEffect(() => {
    if (
      photos
        ?.filter((e) => e?.color === selectedColor || selectedColor === -1)
        ?.every((e) => !e.sizes?.length)
    ) {
      setselectedSize("");
    }
  }, [selectedColor]);
  return (
    <div className="rounded-md w-[94%] max-w-[280px] h-[400px] overflow-hidden flex shadow-2xl flex-col  justify-between  items-center">
      <div className="relative h-full w-full max-h-[75%] img-project">
        <button
          onClick={toggleSave}
          className={`rounded-full z-10 p-2 absolute right-2 top-2 ${
            !isSave ? "bg-white" : "bg-scandaryColor"
          }`}
        >
          {!isSave ? (
            <LuShoppingCart size={15} className={`stroke-basketColor`} />
          ) : (
            <BsCheckLg
              size={15}
              className={`animate-[appear_0.3s_ease-in-out] fill-white`}
            />
          )}
        </button>
        <div className="aspect-w-3 aspect-h-4 relative flex h-full w-full items-center justify-center">
          <div className="flex h-full w-full items-center justify-center">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              className="w-full h-full"
              lazyPreloadPrevNext={1}
              pagination={{
                type: "progressbar",
              }}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              onClick={() => router.push(`../product/${id}`)}
            >
              {photos
                ?.filter(
                  (e) => e?.color === selectedColor || selectedColor === -1
                )
                ?.map((e, index) =>
                  selectedColor === -1 ? (
                    <SwiperSlide key={index} className="w-full relative h-full">
                      <Image
                        fill
                        crossOrigin="anonymous"
                        className="h-full w-full object-cover"
                        src={e?.photos?.[0]}
                        alt=""
                      />
                    </SwiperSlide>
                  ) : (
                    e?.photos?.map((photo, index) => (
                      <SwiperSlide
                        key={index}
                        className="w-full relative h-full"
                      >
                        <Image
                          fill
                          crossOrigin="anonymous"
                          className="h-full w-full object-cover"
                          src={photo}
                          alt=""
                        />
                      </SwiperSlide>
                    ))
                  )
                )}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-11/12 flex flex-col justify-between pb-5 gap-1 pt-2  items-start">
        <div className="w-full flex justify-between">
          <p className="w-full text-xl justify-self-center text-ellipsis overflow-hidden">
            {name}
          </p>
        </div>
        {photos?.filter(
          (e) => e?.color === selectedColor || selectedColor === -1
        )?.length > 0 && (
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            autoHeight={true}
            navigation={{ prevEl: ".prev", nextEl: ".next" }}
            modules={[Navigation]}
            className="w-full shadow-[inset_4px_0px_8px_0px_#edf2f7] rounded-lg"
          >
            {photos
              ?.filter(
                (e) => e?.color === selectedColor || selectedColor === -1
              )
              ?.map((e) =>
                e?.sizes?.map((size, index) => (
                  <SwiperSlide className="swiper-card " key={index}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (selectedSize === size) {
                          setselectedSize(-1);
                          return;
                        }
                        setselectedSize(size);
                      }}
                      className={`${
                        size === selectedSize
                          ? "border-none bg-mainColor text-white"
                          : "border-mainColor border-[1.5px]"
                      }  font-medium active:border-none active:bg-mainColor active:text-white p-1 m-1 rounded-sm`}
                    >
                      {size}
                    </button>
                  </SwiperSlide>
                ))
              )}
          </Swiper>
        )}
        {photos?.[0]?.color !== "" && (
          <div className="flex w-full justify-normal gap-4 items-center">
            <p className="inline font-semibold text-solidHeading">الالوان: </p>

            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              autoHeight={true}
              className="w-full "
            >
              {photos
                ?.filter(
                  (e) =>
                    e?.sizes?.includes(selectedSize) ||
                    selectedSize === -1 ||
                    selectedSize == []
                )
                ?.map((e, index) => (
                  <SwiperSlide key={index} className="swiper-card ">
                    <button
                      onClick={(el) => {
                        el.stopPropagation();
                        if (e?.color === selectedColor) {
                          setselectedColor(-1);
                          return;
                        }
                        setselectedColor(e?.color);
                      }}
                      key={index}
                      style={{ backgroundColor: e?.color }}
                      className={`rounded-full  ${
                        selectedColor === e?.color ? "ring-4" : ""
                      } z-50 w-6 h-6`}
                    ></button>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (selectedColor !== -1 && selectedSize !== -1) {
                  dispatch(emptyBasket());
                  dispatch(
                    addToBasket({
                      id: id,
                      name: name,
                      price: price,
                      maxQuntity: quntity,
                      quntity: 1,
                      thumbanil: photos?.find(
                        (e) =>
                          e?.color === selectedColor &&
                          (e?.sizes?.includes(selectedSize) ||
                            (selectedSize === "" && !e?.sizes?.length))
                      )?.photos?.[0],
                      photos,
                      color: selectedColor,
                      size: selectedSize,
                    })
                  );
                  dispatch(changeIsOrder(true));
                  router.push("/checkout");
                } else {
                  toasty("حدد اللون و الحجم", {
                    toastId: "addProduct",
                    autoClose: 5000,
                    type: "warning",
                  });
                }
              }}
              className="text-sm font-hacen-tunisia py-2 px-4 text-white bg-green-500"
            >
             شراء
            </button>
          </div>
          <div className="flex items-center gap-2">
            {isShowPrice && !isShowPromotion && (
              <p className="">{price} دج</p>
            )}
            {isShowPrice && isShowPromotion && (
              <div className="flex gap-2">
                <p className="text-green-500">{promotion} دج</p>
                <p className="text-gray-400 line-through">{price} دج</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
