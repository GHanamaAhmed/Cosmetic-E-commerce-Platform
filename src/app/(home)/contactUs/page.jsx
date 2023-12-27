import { Axios } from "@/app/libs/axios";
import React from "react";

export default async function Page() {
  const infoAdmin = (await Axios.get("/info")).data;
  return (
    <div className="w-full h-full justify-center flex  pt-[55px] md:pt-[75px] ">
      <div className="w-10/12 flex flex-col">
        <p className="text-3xl">اتصل بنا</p>
        <div className="flex gap-2 text-darkContent">
          <p>للتواصل بنا عبر الايميل: </p>
          <a href={infoAdmin?.email} target="_blank" rel="noopener noreferrer">
            {infoAdmin?.email}
          </a>
        </div>
        <div className="flex gap-2 text-darkContent">
          <p>للتواصل بنا عبر الفيسبوك: </p>
          <a
            href={infoAdmin?.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            انقر هنا
          </a>
        </div>
        <div className="flex gap-2 text-darkContent">
          <p>للتواصل بنا عبر الانستغرام: </p>
          <a
            href={infoAdmin?.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            انقر هنا
          </a>
        </div>
        <div className="flex gap-2 text-darkContent">
          <p>للتواصل بنا عبر الهاتف: </p>
          <a href={infoAdmin?.phone} target="_blank" rel="noopener noreferrer">
            {infoAdmin?.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
