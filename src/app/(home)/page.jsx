import React from "react";
import { memo } from "react";
import Tech from "@/app/components/home/tech/tech";
import Project from "@/app/components/home/project/products";
import { fetchProducts as fetchP } from "@/app/libs/products";
export default memo(async function page({ searchParams }) {
  const initialData = await fetchP(searchParams?.s || "", searchParams?.type || "الكل").then((res) => res.data);
  return <div className="w-full flex flex-col items-center pt-[55px] md:pt-[75px] ">
    <div className="flex flex-col bg-caderSection justify-center items-center relative w-full">
      <img className="absolute w-full h-full object-cover" src="./img/amy-shamblen-xwM61TPMlYk-unsplash.jpg" alt="" />
      <div className="w-fit text-justify relative my-10 md:my-32 flex flex-col gap-0 md:gap-3  text-solidHeading text-xl font-bold md:text-4xl">
        <p className="inline md:block z-10 text-black text-2xl md:text-5xl">
          LET’S 👋,
        </p>
        <p className="inline md:block z-10 text-black text-2xl md:text-5xl">
          EXPLORE
        </p>
        <p className="inline md:block z-10 text-black text-2xl md:text-5xl">
          {" "}
          UNIQUE{" "}
        </p>
        <p className="inline md:block z-10 text-black text-2xl md:text-5xl">
          COSMETICS.
        </p>
        <img className="absolute  w-full" src="./img/Rectangle 3.png" alt="" />
        <img className="absolute w-full bottom-0" src="./img/Rectangle 7.png" alt="" />
      </div>
    </div>
    <Tech />
    <Project initialData={initialData} />
  </div>;
}
)