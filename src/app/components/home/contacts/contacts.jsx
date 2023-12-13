"use client";
import { useAppSelector } from "@/app/hooks/reduxHooks";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
export default function Contacts() {
  const { infoAdmin } = useAppSelector((store) => store.account);
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
          <ul className="flex gap-2">
            <li className=" flex flex-row-reverse gap-4">
              <ul>
                <a href={infoAdmin?.instagram} target="_blank">
                  {" "}
                  <FaFacebookF
                    size={19}
                    className="w-8 dark:fill-darkContent fill-lightContent"
                  />
                </a>
              </ul>
              <ul>
                <a href={infoAdmin?.facebook} target="_blank">
                  {" "}
                  <FaInstagram
                    size={20}
                    className="w-8 dark:fill-darkContent fill-lightContent"
                  />
                </a>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="divided w-10/12 h-px my-4 fill-darkModeSecondary bg-lightContent dark:bg-darkContent"></div>
    </div>
  );
}
