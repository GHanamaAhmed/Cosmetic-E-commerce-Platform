"use client";
import TitleSection from "../titleSection";
import CardProject from "./cardProject";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { Axios } from "@/app/libs/axios";
import { fetchProducts } from "@/app/libs/products";
export default function Project({ textAlign, widthContainer }) {
  const scrollContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [min, setMin] = useState(0);
  const [count, setCount] = useState(0);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState("الكل");
  const [input, setInput] = useState("");
  const fetch = async (e) => {
    if (e) {
      await fetchProducts(input, type)
        .then((res) => {
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
  const more = (e) => {
    e.preventDefault();
    fetch();
  };
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } =
      scrollContainerRef.current;
    console.log("ggg");
    // Check if user has scrolled to the bottom
    if (scrollTop + clientHeight === scrollHeight) {
      console.log("Reached the bottom!");
      // Do something when scrolled to the bottom
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <div className="w-[90%]">
        <TitleSection
          title={"المنتوجات"}
          subTitle={"Things I’ve built so far"}
        />
      </div>
      <div className="w-full h-full flex justify-center">
        {products.length > 0 && (
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="w-[90%] h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5"
          >
            {products.map((e, i) => (
              <CardProject
                key={i}
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
            ))}
          </div>
        )}
        {products.length === 0 && (
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-4xl font-bold text-gray-500">لا يوجد منتوجات</p>
          </div>
        )}
      </div>
    </div>
  );
}
