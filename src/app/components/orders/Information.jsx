import Image from 'next/image';
import React from 'react'
import img from '@/app/../../public/img/54191980.jpg';
export default function Information({username, D_purshase,adress,phone_number ,card, To_gift, date_joined}) {
  return (
		<div className="w-full h-full flex flex-col items-end  justify-evenly shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-lg m-2">
			<div className="w-full h-full   flex flex-col md:flex-row-reverse p-2	rounded-t-lg justify-around items-center bg-gray-200  ">
				<Image
					src={img}
					height={60}
					width={60}
					className=" object-cover rounded-full "
				/>
				<p className="font-mono ">username : {username || "skoni maryoul"}</p>
				<p className="font-mono">date joined : {date_joined || "0/0/2000"} </p>
			</div>
			<div className="w-full h-full flex flex-col-reverse text-left border-t-2 bg-white/0 ">
				<p className="font-mono">for : {To_gift || "me"}</p>
				<p className="font-mono">
					date of purshase : {D_purshase || "1/1/2001"}
				</p>
				<p className="font-mono">adress:{adress || "center of universe"} </p>
				<p className="font-mono">
					phone number used: {phone_number || "0123456789"}{" "}
				</p>
				<p className="font-mono"> golden card : {card || "123456789ABCD"}</p>
			</div>
		</div>
	);
}
