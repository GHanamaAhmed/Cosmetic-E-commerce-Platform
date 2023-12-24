"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaAngleDown } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useWidth } from "@/app/hooks/useWidth";
import { useAppDispatch } from "@/app/hooks/reduxHooks";
import {
  addToBasket,
  changeIsOrder,
  emptyBasket,
} from "@/app/redux/basketReducer";
import { useRouter } from "next/navigation";
import { toasty } from "../toasty/toast";
export default function Product({ product }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [numImage, setNumImage] = useState(0);
  const [selectedSize, setselectedSize] = useState(-1);
  const [photos, setPhotos] = useState([]);
  const [selectedColor, setselectedColor] = useState(-1);
  const [isShowDescription, setIsShowDescription] = useState(false);
  const [quntity, setQuntity] = useState(1);
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
    setNumImage(
      product?.photos
        ?.filter((e) => selectedColor == e?.color || selectedColor == -1)
        ?.reduce((preveus, currentV) => {
          return preveus + currentV?.photos?.length;
        }, 0)
    );
    setPhotos(
      product?.photos
        ?.filter((e) => selectedColor == e?.color || selectedColor == -1)
        ?.reduce((preveus, currentV) => {
          return [...preveus, ...currentV?.photos];
        }, [])
    );
  }, [selectedColor]);
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
        return 4 * (index + 1) - (numImage % 4);
      }
    } else {
      return index + 1;
    }
  };
  return (
    <>
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
          {product?.showPrice && !product?.showPromotion && (
            <p className="text-mainColor">{product?.price} دج</p>
          )}
          {product?.showPrice && product?.showPromotion && (
            <div className="flex gap-2">
              <p className="text-mainColor">{product?.promotion} دج</p>
              <p className="text-gray-400 line-through">{product?.price} دج</p>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {product?.photos
              ?.filter((e) => selectedColor == e?.color || selectedColor == -1)
              ?.map((e) =>
                e?.sizes?.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (size == selectedSize) {
                        setselectedSize(-1);
                        return;
                      }
                      setselectedSize(size);
                    }}
                    className={`${size == selectedSize
                      ? "border-none bg-mainColor text-white"
                      : "border-mainColor border-[1.5px]"
                      }  font-medium  active:border-none active:bg-mainColor active:text-white p-2 rounded-sm`}
                  >
                    {size}
                  </button>
                ))
              )}
          </div>
          <div className="flex gap-2">
            {product?.photos
              ?.filter(
                (e) => e?.sizes?.includes(selectedSize) || selectedSize == -1
              )
              ?.map((e, index) => (
                <button
                  onClick={() => {
                    if (e?.color == selectedColor) {
                      setselectedColor(-1);
                      return;
                    }
                    setselectedColor(e?.color);
                  }}
                  key={index}
                  style={{ backgroundColor: e?.color }}
                  className={`rounded-full ${selectedColor == e?.color ? "ring-4" : ""
                    } w-7 h-7`}
                ></button>
              ))}
          </div>
          <div className="flex border w-fit">
            <button
              onClick={() => {
                if (selectedColor !== -1 && selectedSize !== -1) {
                  product?.quntity - quntity > 0 &&
                    setQuntity((prev) => prev + 1);
                } else {
                  toasty("اختر اللون و الحجم اولا", {
                    position: "top-left",
                    toastId: "selectColor",
                    autoClose: 5000,
                    type: "warning",
                  });
                }
              }}
              className="px-2 py-0.5 lg:px-3 lg:py-2 border-l  text-sm "
            >
              +
            </button>
            <div className="px-2 text-sm py-0.5 lg:px-3 lg:py-2">{quntity}</div>
            <button
              onClick={() => {
                if (selectedColor !== -1) {
                  quntity > 1 && setQuntity((prev) => prev - 1);
                } else {
                  toasty("اختر اللون اولا", {
                    position: "top-left",
                    toastId: "selectColor",
                    autoClose: 5000,
                    type: "warning",
                  });
                }
              }}
              className="px-2 py-0.5 lg:px-3 lg:py-2 border-r text-sm "
            >
              -
            </button>
          </div>
          <div className="w-full grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                if (selectedColor !== -1 && selectedSize !== -1) {
                  dispatch(emptyBasket());
                  dispatch(
                    addToBasket({
                      id: product?._id,
                      name: product?.name,
                      price: product?.price,
                      maxQuntity: product?.quntity,
                      quntity,
                      thumbanil:
                        product?.photos?.[
                          product?.photos?.findIndex(
                            (e) => e?.color == selectedColor
                          )
                        ]?.photos?.[
                        product?.photos?.[
                          product?.photos?.findIndex(
                            (e) => e?.color == selectedColor
                          )
                        ]?.sizes?.findIndex((size) => size == selectedSize)
                        ],
                      photos: product?.photos,
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
              className={` font-medium border-mainColor border-[1.5px] active:border-none active:bg-mainColor active:text-white p-2 rounded-sm`}
            >
              طلب
            </button>
            <button
              onClick={() => {
                if (selectedColor !== -1 && selectedSize !== -1) {
                  dispatch(
                    addToBasket({
                      id: product?._id,
                      name: product?.name,
                      price: product?.price,
                      maxQuntity: product?.quntity,
                      quntity,
                      thumbanil:
                        product?.photos?.[
                          product?.photos?.findIndex(
                            (e) => e?.color == selectedColor
                          )
                        ]?.photos?.[
                        product?.photos?.[
                          product?.photos?.findIndex(
                            (e) => e?.color == selectedColor
                          )
                        ]?.sizes?.findIndex((size) => size == selectedSize)
                        ],
                      photos: product?.photos,
                      color: selectedColor,
                      size: selectedSize,
                    })
                  );
                  toasty("تم وضع المنتج في السلة", {
                    toastId: "addProduct",
                    autoClose: 5000,
                    type: "success",
                  });
                } else {
                  toasty("حدد اللون و الحجم", {
                    toastId: "addProduct",
                    autoClose: 5000,
                    type: "warning",
                  });
                }
              }}
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
                className={`${isShowDescription ? "rotate-180" : ""
                  } absolute left-3 top-1/2 -translate-y-1/2`}
              />
            </div>
            {isShowDescription && <p>{product?.description}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
