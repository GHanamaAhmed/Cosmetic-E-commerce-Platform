import Del from "@/app/components/orders/Del";
import Information from "@/app/components/orders/Information";
import Product from "@/app/components/orders/products";
import Payment from "@/app/components/orders/Payment";
import React from "react";

export default function page() {
	return (
		<div className="w-full h-full flex flex-col-reverse md:flex-row-reverse justify-evenly items-center pt-[80px] gap-10 px-5 z-50">
			<div className="w-full h-full flex flex-col justify-evenly items-center ">
				<Product />
				<Del />

				<Payment />
			</div>
			<div className="w-full h-full flex flex-col justify-evenly items-center">
				<Information />
			</div>
		</div>
	);
}
