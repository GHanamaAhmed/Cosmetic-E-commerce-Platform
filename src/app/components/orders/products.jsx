import React from 'react'
import SingleProduct from './singleProduct';

export default function Products() {
  return (
		<div className="w-full h-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-lg m-2">
			<li className="w-full h-5/6 flex flex-col items-end  justify-evenly gap-5 my-2">
				<ul className="w-full flex  items-start justify-center md:justify-end">
					<SingleProduct
						color=""
						type=""
						product=""
						items=""
						price=""
						total=""
					/>
				</ul>
				<ul className="w-full flex  items-start justify-center md:justify-end">
					<SingleProduct
						color=""
						type=""
						product=""
						items=""
						price=""
						total=""
					/>
				</ul>
				<ul className="w-full flex  items-start justify-center md:justify-end">
					<SingleProduct
						color=""
						type=""
						product=""
						items=""
						price=""
						total=""
					/>
				</ul>
			</li>
		</div>
	);
}
