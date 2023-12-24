"use client"
import React, {  useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardProject from "../home/project/cardProduct";
import { fetchProducts } from "@/app/libs/products";
export default function Recommendation({ type, idProduct, initialData }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(initialData?.products || []);
  const [min, setMin] = useState(initialData?.products?.length || 0);
  const [count, setCount] = useState(initialData?.count || 0);
  const [types, setTypes] = useState(initialData?.types || []);
 
  const fetch = async (e) => {
    await fetchProducts("", type, min)
      .then((res) => {
        setIsLoading(false);
        setProducts((prev) => [...prev, ...res.data.products]);
        setMin(res.data.products?.length + min);
        setTypes(res.data?.types);
        setCount(res.data?.count);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setProducts(initialData?.products)
    setCount(initialData?.count)
    setMin(initialData?.products?.length)
    setTypes(initialData?.types)
  }, [initialData])
  const more = () => {
    fetch();
  };
  return (
    products?.length > 1? (
      <div className="px-3 py-5 flex flex-col gap-3">
        <p className="text-2xl text-solidHeading">مقترحات</p>
        <div className="flex justify-center w-full">
          <Swiper
            slidesPerView={"auto"}
            // on last slid is showen
            onReachEnd={more}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              640: {
                navigation: false,
              },
              768: {
                navigation: true,
              },
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            className="mySwiper w-full"
          >
            {products
              ?.filter((e) => e?._id != idProduct)
              .map((e, i) => (
                <SwiperSlide key={i}>
                  <CardProject
                    id={e?._id}
                    name={e?.name}
                    price={e?.price}
                    promotion={e?.promotion}
                    quntity={e?.quntity}
                    like={e?.isLike}
                    save={e?.isSave}
                    isShowPrice={e?.showPrice}
                    isShowPromotion={e?.showPromotion}
                    thumbanil={e?.thumbanil}
                    status={e?.status}
                    photos={e?.photos}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    ):
    <div></div>
  );
}