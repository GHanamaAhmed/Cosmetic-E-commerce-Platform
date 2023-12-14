"use client";
import { useAppSelector } from "@/app/hooks/reduxHooks";
import React, { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
export default function Contacts() {
  const { infoAdmin } = useAppSelector((store) => store.account);
  useEffect(()=>console.log(infoAdmin),[infoAdmin])
  return (
    <div className="flex flex-col w-full items-center justify-center mt-6 mb-3 py-2">
      <div className="w-10/12 flex flex-col md:flex-row md:items-center md:justify-between">
        <img src="./img/logo 2.svg" alt="" width={90} />
        <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
          <div className="flex gap-2 md:gap-10 w-full justify-between">
            <p className="text-solidHeading dark:text-lightContent">
              {infoAdmin?.email}
            </p>
            <p className="text-solidHeading dark:text-lightContent">
              {infoAdmin?.phone}
            </p>
          </div>
          {(infoAdmin?.facebook || infoAdmin?.instagram) && (
            <ul className=" flex flex-row-reverse gap-4">
              {infoAdmin?.facebook && (
                <li>
                  <a href={infoAdmin?.facebook} target="_blank">
                    {" "}
                    <FaFacebookF
                      size={19}
                      className="w-8 dark:fill-darkContent fill-lightContent"
                    />
                  </a>
                </li>
              )}
              {infoAdmin?.instagram && (
                <li>
                  <a href={infoAdmin?.instagram} target="_blank">
                    {" "}
                    <FaInstagram
                      size={20}
                      className="w-8 dark:fill-darkContent fill-lightContent"
                    />
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
      <div className="divided w-10/12 h-px my-4 fill-darkModeSecondary bg-lightContent dark:bg-darkContent"></div>
    </div>
  );
}
