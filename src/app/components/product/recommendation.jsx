import React, { memo, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Grid, Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaAngleDown } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardProject from "../home/project/cardProduct";
import { fetchProducts } from "@/app/libs/products";
import { useWidth } from "@/app/hooks/useWidth";
export default memo(function Recommendation({ type, idProduct }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [min, setMin] = useState(0);
  const [count, setCount] = useState(0);
  const [types, setTypes] = useState([]);
  const [input, setInput] = useState("");
  const { width } = useWidth();
  const fetch = async (e) => {
    if (e) {
      await fetchProducts(input, type || "الكل")
        .then((res) => {
          console.log(res.data);
          setIsLoading(false);
          setProducts((prev) => [...res.data.products]);
          setMin(res.data.products?.length);
          setTypes(res.data?.types);
          setCount(res.data?.count);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    } else {
      await fetchProducts(input, type, min)
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
    }
  };
  useEffect(() => {
    fetch(true);
  }, [type]);
  const more = () => {
    fetch();
  };
  return (
    products.length > 1 && (
      <div className="px-3 py-5 flex flex-col gap-3">
        <p className="text-2xl text-solidHeading">مقترحات</p>
        <div className="flex justify-center w-full">
          <Swiper
            slidesPerView={"auto"}
            navigation={width > 767 ? true : false}
            // on last slid is showen
            onReachEnd={more}
            modules={[Navigation, Autoplay]}
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
    )
  );
});
