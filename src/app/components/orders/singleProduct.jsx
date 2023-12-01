import Image from 'next/image'
import React from 'react'

export default function SingleProduct({color, type, product ,price,items,total}) {
  return (
		<div className="w-full  flex flex-col md:flex-row-reverse  md:justify-end gap-5 ">
			<div className=" w-full items-center h-full flex flex-col md:flex-row-reverse md:gap-3 md:items-end ">
				<Image
					className=" my-2 ml-2 object-cover rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
					src="/img/feature-product-1.jpg"
					width={300}
					height={300}
					alt="img"
				/>
				<div className="w-full flex flex-row-reverse md:flex-col justify-center items-end  mb-3">
					<p>{color || type || "color/type"}</p>
					<p>size</p>
				</div>
			</div>
			<div className="w-full flex flex-row-reverse justify-evenly gap-3 mt-3  ">
				<p className="text-sky-900 font-semibold">{product || "product name"}</p>
				<p className="font-mono">{price || "100$"} </p>
				<p>{items || "5"} </p>
				<p className="font-mono">{total || "500$"} </p>
			</div>
		</div>
	);
}
