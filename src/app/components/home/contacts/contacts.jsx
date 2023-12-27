import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Axios } from "@/app/libs/axios";
export default async function Contacts() {
  const infoAdmin = (await Axios.get("/info")).data;
  return (
    <div className="flex flex-col w-full items-center justify-center mt-6 mb-3 py-2">
      <div className="w-10/12 flex flex-col md:flex-row md:items-center md:justify-between">
        <img src="./img/logo 2.svg" alt="" width={90} />
        <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
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
