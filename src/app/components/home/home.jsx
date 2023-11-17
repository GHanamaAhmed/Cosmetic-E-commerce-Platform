"use client";
import { memo, useEffect, useState } from "react";
import Tech from "./tech/tech";
import Project from "./project/project";
import Contacts from "./contacts/contacts";

export default memo(function Home() {
  const [widthScreen, setWidthScreen] = useState(globalThis.innerWidth);
  useEffect(() => {
    globalThis.addEventListener("resize", () => {
      setWidthScreen(() => globalThis.innerWidth);
    });
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col bg-caderSection relative items-center gap-3 rounded-xl w-[98%] pt-24 md:py-28 lg:py-36 md:flex-row-reverse md:justify-around lg:px-28">
        <img className="md:w-[400px]" src="./img/50353683 1.png" alt="" />
        <div className="w-2/3 md:w-fit text-justify top-1/2 -translate-y-1/2 md:translate-y-0 absolute md:static flex flex-col gap-3  text-solidHeading text-xl font-bold md:text-4xl">
          <p className="inline md:block text-black text-2xl md:text-5xl">
            LET’S 👋,
          </p>
          <p className="inline md:block text-black text-2xl md:text-5xl">
            EXPLORE
          </p>
          <p className="inline md:block text-black text-2xl md:text-5xl">
            {" "}
            UNIQUE{" "}
          </p>
          <p className="inline md:block text-black text-2xl md:text-5xl">
            COSMETICS.
          </p>
        </div>
      </div>
      <Tech />
      <Project widthContainer={"w-10/12"} textAlign={"items-center"} />
      <Contacts />
    </div>
  );
});
