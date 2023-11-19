import Payment from '@/app/components/payment';
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
		<div className="w-full h-full flex flex-col items-center pt-[75px] gap-10">
			<div className="relative w-[98%] h-36   ">
				<Image
					src="/img/headerimg.jpg"
					fill
					className="z-0 brightness-50 blur-[0.5px]"
				/>

				<p className="absolute z-50 text-3xl text-white bottom-5 right-5">
					{" "}
					الدفع النهائي{" "}
				</p>
			</div>
			<div className="w-11/12 flex flex-col justify-between items-start border-b-2">
				{" "}
				<p className="text-2xl"> المعلومات</p>
			</div>
			<Payment />
		</div>
	);
}
