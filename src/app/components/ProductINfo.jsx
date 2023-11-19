import React from 'react'

export default function ProductINfo() {
  return (
		<div className=" w-full h-full">
			<div className="w-10/12 h-fit  p-2 bg-SolidHeadingDarkMode">
				<p className="text-2xl ">في سلتك</p>
			</div>
			<div className='w-full flex flex-row justify-between items-center gap-5'>
				<div className='w-full'>
					<p className="text-lg ">المجموع الفرعي</p>
					<p className="text-lg ">التوصيل</p>
					<p className="text-lg ">التخفيض</p>
					<p className="text-lg  font-semibold">المجموع</p>
				</div>
				<div className='w-full h-full gap-5'>
					<p className="text-lg ">3300دج</p>
					<p className="text-lg ">3300دج</p>
					<p className="text-lg ">3300دج</p>
					<p className="text-lg  font-semibold">9900دج</p>
				</div>
			</div>
			<div></div>
			<div></div>
		</div>
	);
}
