"use client";
import TitleSection from "../titleSection";
import CardProject from "./cardProject";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
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
  const [positionScroll, setPositinScroll] = useState(globalThis.screenY);
  const fetch = async (e) => {
    setIsLoading(true);
    if (e) {
      await fetchProducts(input, type)
        .then((res) => {
          setTimeout(() => {
            setIsLoading(false);
            setProducts((prev) => [...res.data.products]);
          }, 1000);
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
          setTimeout(() => {
            setIsLoading(false);
            res.data.products?.length &&
              setProducts((prev) => [...prev, ...res.data.products]);
          }, 1000);

          setMin((prev) => res.data.products?.length + prev);
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

  const handleScroll = () => {
    console.log("1");
    if (!isLoading) {
      console.log("2");
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight
      ) {
        console.log("3");
        console.log("4");
        more();
      }
    }
    setPositinScroll(globalThis.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [positionScroll]);
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
        {products.length === 0 && !isLoading && (
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-4xl font-bold text-gray-500">لا يوجد منتوجات</p>
          </div>
        )}
      </div>
      {isLoading && (
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}
