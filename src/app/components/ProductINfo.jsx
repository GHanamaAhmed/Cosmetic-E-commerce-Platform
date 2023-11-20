import Image from "next/image";
import React from "react";

export default function ProductINfo() {
	return (
		<div className=" w-full h-full ">
			<div className="w-10/12 h-fit  p-2 bg-SolidHeadingDarkMode">
				<p className="text-2xl ">في سلتك</p>
			</div>
			<div className="w-full flex flex-row justify-between items-center gap-5">
				<div className="w-full">
					<p className="text-lg ">المجموع الفرعي</p>
					<p className="text-lg ">التوصيل</p>
					<p className="text-lg ">التخفيض</p>
					<p className="text-lg  font-semibold">المجموع</p>
				</div>
				<div className="w-full h-full gap-5">
					<p className="text-lg ">3300دج</p>
					<p className="text-lg ">3300دج</p>
					<p className="text-lg ">3300دج</p>
					<p className="text-lg  font-semibold">9900دج</p>
				</div>
			</div>
			<div className="w-10/12 h-full flex flex-col my-3 bg-lightContent ">
				<p className="text-lg ">مكان التوصيل</p>
				<div className="flex flex-row w-full gap-5">
					{" "}
					<label htmlFor="agence">التوصيل للمكتب</label>
					<input
						type="radio"
						name="home"
						id="agence"
						value={"choice"}
						className="accent-black accent scale-125"
					/>
				</div>
				<div className="flex flex-row w-full gap-5">
					<label htmlFor="home"> التوصيل للمنزل &#8205; &#8205;</label>
					<input
						type="radio"
						name="home"
						id="home"
						value={"choice"}
						className="accent-black accent scale-125"
					/>
				</div>
			</div>
			<div className=" w-1/2 h-1/2 flex flex-col gap-5 ">
				<div className="flex flex-row gap-5 ">
					<Image
						src={"/img/feature-product-1.jpg"}
						width={200}
						height={200}
						className="rounded-lg"
					/>
					<div>
						<p className="text-lg ">3300دج</p>
						<p className="text-lg ">3300دج</p>
						<p className="text-lg ">3300دج</p>
					</div>
				</div>
				<div className="flex flex-row gap-5 ">
					<Image
						src={"/img/feature-product-1.jpg"}
						width={200}
						height={200}
						className="rounded-lg"
					/>
					<div>
						<p className="text-lg ">3300دج</p>
						<p className="text-lg ">3300دج</p>
						<p className="text-lg ">3300دج</p>
					</div>
				</div>
			</div>
		</div>
	);
}
