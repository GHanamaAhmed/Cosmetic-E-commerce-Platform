"use client";

import React, { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { BsCreditCard2FrontFill, BsTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { CiCreditCard2 } from "react-icons/ci";
export default function page() {
	const [isEtat, SetIsetat] = useState(true);
  const [name,SetName]= useState('Name');
	const [num, setisnum] = useState("Number");
  const [mail,setmail] = useState('Mail');
  const [Rip,setRip]= useState('Rip');
  const[adress,setadress] = useState('Address');

	return (
		<div className="w-full min-w-full pt-[75px]  h-[80vh]  flex flex-col justify-center items-center  ">
      <p className="text-5xl ">user information</p>
			<div className=" w-5/6 h-4/6 flex flex-col justify-center items-center gap-3 ">
				<div className="flex flex-row-reverse justify-center gap-10 items-center w-full">
					<label htmlFor="username">
						{" "}
						<FaUser className="text-mainColor" />{" "}
					</label>
					<input
						name="username"
						type="text"
						className="placeholder:text-left placeholder:px-3 w-1/2 md:w-1/3 border-2 border-mainColor outline-emerald-600 rounded-lg m-2 disabled:bg-gray-300 disabled:placeholder:text-gray-600"
						disabled={isEtat}
						placeholder={`${isEtat ? name : ""}`}
					/>
				</div>
				<div className="flex flex-row-reverse justify-center gap-10 items-center w-full">
					<label htmlFor="Number">
						<BsTelephoneFill className="text-mainColor" />{" "}
					</label>
					<input
						name="Number"
						type="tel"
						className="placeholder:text-left placeholder:px-3 w-1/2 md:w-1/3 border-2 border-mainColor outline-emerald-600 rounded-lg m-2 disabled:bg-gray-300 disabled:placeholder:text-gray-600"
						disabled={isEtat}
						placeholder={`${isEtat ? num : ""}`}
					/>
				</div>
				<div className="flex flex-row-reverse justify-center gap-10 items-center w-full">
					<label htmlFor="email">
						<SiGmail className="text-mainColor" />
					</label>
					<input
						name="email"
						type="email"
						className="placeholder:text-left placeholder:px-3 w-1/2 md:w-1/3 border-2 border-mainColor outline-emerald-600 rounded-lg m-2 disabled:bg-gray-300 disabled:placeholder:text-gray-600"
						disabled={isEtat}
						placeholder={`${isEtat ? mail : ""}`}
					/>
				</div>
				<div className="flex flex-row-reverse justify-center gap-10 items-center w-full">
					<label htmlFor="ausama">
						<BsCreditCard2FrontFill className="text-mainColor" />
					</label>
					<input
						name="ausama"
						type="text"
						className="placeholder:text-left placeholder:px-3 w-1/2 md:w-1/3 border-2 border-mainColor outline-emerald-600 rounded-lg m-2 disabled:bg-gray-300 disabled:placeholder:text-gray-600"
						disabled={isEtat}
						placeholder={`${isEtat ? Rip : ""}`}
					/>
				</div>
				<div className="flex flex-row-reverse justify-center gap-10 items-center w-full">
					<label htmlFor="@">
						{" "}
						<FaHome className="text-mainColor" />
					</label>
					<input
						name="@"
						type="text"
						className="placeholder:text-left placeholder:px-3 w-1/2 md:w-1/3 border-2 border-mainColor outline-emerald-600 rounded-lg m-2 disabled:bg-gray-300 disabled:placeholder:text-gray-600"
						disabled={isEtat}
						placeholder={`${isEtat ? adress : ""}`}
					/>
				</div>
				<div className="h-max w-full flex flex-row gap-4 px-10 py-3">
					<button
						onClick={() => {
							SetIsetat(false);
						}}
						className="bg-mainColor text-white p-1 md:p-2 md:text-lg rounded-lg"
					>
						edit
					</button>
					<button
						onClick={() => {
							SetIsetat(true);
						}}
						className="bg-emerald-600 text-white p-1 md:p-2 md:text-lg rounded-lg "
					>
						save
					</button>
				</div>
			</div>
		</div>
	);
}
