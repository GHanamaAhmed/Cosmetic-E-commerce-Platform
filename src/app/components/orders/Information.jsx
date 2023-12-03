import Image from 'next/image';
import React from 'react'

export default function Information({username, D_purshase,adress,phone_number ,card, To_gift, date_joined}) {
  return (
		<div className="w-full h-full flex flex-col items-end  justify-evenly gap-5  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-lg m-2">
			<div className="w-full h-full min-h-[75px] flex flex-col md:flex-row-reverse  justify-end items-end gap-2 ">
				<Image
					src={
						"data:image/png;base64,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"
					}
					height={60}
					width={70}
					className="rounded-full m-1 aspect-auto object-cover"
				/>
				<p className="font-mono">
					username : {username || "skoni maryoul"}
				</p>
				<p className="font-mono">date joined : {date_joined || '0/0/2000' } </p>
			</div>
			<div className=" flex flex-col-reverse text-left">
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
