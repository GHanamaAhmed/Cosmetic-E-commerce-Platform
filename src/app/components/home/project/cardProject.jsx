import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function CardProject({
	title,
	description,
	img,
	colors,
	urlGithub,
	url,
}) {
	return (
		<div className="rounded-md w-64 h-600px overflow-hidden flex shadow-2xl flex-col items-center">
			<div className="h-5/6 w-full relative img-project">
				<img className="h-full w-full" src={img} alt="" />
				<div className="view-more-card absolute w-full h-full -z-10 justify-center bg-black bg-opacity-40 flex items-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
					<p className="text-white underline">View more</p>
				</div>
			</div>
			<div className="w-11/12 h-3/5 flex flex-col justify-between pb-5 pt-2 items-center gap-1">
				<p className="text-xl font-bol">{title}</p>
				<p className="text-sm text-justify text-darkContent">{description}</p>
				<div className="flex flex-row w-full justify-normal gap-4 items-center">
					<p className="inline font-semibold text-solidHeading">الالوان: </p>
					{colors.map((color, index) => (
						<div
							key={index}
							className={`rounded-full z-50 w-4 h-4 ${color}`}
						></div>
					))}
				</div>
				<div className="flex justify-between w-full">
					<div className="flex items-center gap-2">
						<Link
							href={url}
							className="border-b border-black text-sm font-hacen-tunisia"
						>
							الطلب
						</Link>
					</div>
					<div className="flex items-center gap-2">
						<FiShoppingCart />

						<Link href={urlGithub} className="border-b border-black"></Link>
					</div>
				</div>
			</div>
		</div>
	);
}
