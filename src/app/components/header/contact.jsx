import React, { memo } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Axios } from "@/app/libs/axios";
export default memo(async function Contact() {
  const infoAdmin = (await Axios.get("/info")).data;
  return (
    <>
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
    </>
  );
}
)