import Product from '@/app/components/orders/products';
import React from 'react'

export default function page() {
  return (
		<div className="w-full h-full flex flex-col-reverse md:flex-row-reverse justify-evenly items-center pt-[80px] gap-10 px-5">
			<div className="w-full h-full flex flex-col justify-evenly items-center ">
				 <Product/>  
				<div>deliveary</div>
				<div>payment</div>
			</div>
			<div className="w-full h-full flex flex-col justify-evenly items-center">
				information
			</div>
		</div>
	);
}
