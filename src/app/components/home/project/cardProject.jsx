import Link from "next/link";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { GrFormNextLink, GrLinkNext, GrLinkPrevious, GrPrevious } from "react-icons/gr";

export default function CardProject({
	title,
	img,
	colors,
	sizes,
	urlGithub,
	url,
}) {
	const [swiper, setSwiper] = useState(null);
	const [selectedColor, setselectedColor] = useState();
	const [selectedSize, setselectedSize] = useState();
	const swiper2 = useSwiper();
	const handlePrevClick = () => {
		if (swiper) {
			swiper.slidePrev();
		}
	};

	const handleNextClick = () => {
		if (swiper) {
			swiper.slideNext();
		}
	};
	return (
		<div className="rounded-md w-[94%] max-w-[280px] h-[400px] overflow-hidden flex shadow-2xl flex-col  justify-between  items-center">
			<div className="relative h-full w-full max-h-[75%] img-project">
				<div className="aspect-w-3 aspect-h-4 relative flex h-full w-full items-center justify-center">
					<div className="absolute flex h-full w-full items-center justify-center">
						<img
							crossOrigin="anonymous"
							className="h-full w-full object-cover"
							src={img}
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="w-11/12 h-3/5 flex flex-col justify-between pb-5 gap-2 pt-2  items-start">
				<p className="font-bol text-xl justify-self-center">{title}</p>
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={10}
					autoHeight={true}
					navigation={{ prevEl: ".prev", nextEl: ".next" }}
					modules={[Navigation]}
					className="w-full shadow-[inset_4px_0px_8px_0px_#edf2f7] rounded-lg "
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => setSwiper(swiper)}
				>
					{sizes.map((size, index) => (
						<SwiperSlide key={index}>
							<button
								onClick={() => setselectedSize(index)}
								className={`${
									index == selectedSize
										? "border-none bg-mainColor text-white"
										: "border-mainColor border-[1.5px]"
								}  font-medium  active:border-none active:bg-mainColor active:text-white p-2 rounded-md`}
							>
								{size}
							</button>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="mt-1 flex flex-row justify-center items-center gap-2">
					<button
						className="rounded-full h-6 w-6 text-center border-2 shadow-emerald-800 hover:text-emerald-500 transition-all duration-300 hover:shadow-lg"
						onClick={() => swiper && swiper.slidePrev()}
					>
						<GrLinkNext className="h-5 w-5  border-black " />
					</button>
					<button
						className="rounded-full h-6 w-6 text-center border-2 shadow-emerald-800 hover:shadow-lg"
						onClick={() => swiper && swiper.slideNext()}
					>
						<GrLinkPrevious className="h-5 w-5  border-black hover:text-emerald-500 transition-all duration-300 " />
					</button>
				</div>
				<div className="flex w-full justify-normal gap-4 items-center">
					<p className="inline font-semibold text-solidHeading">الالوان: </p>
					<Swiper
						slidesPerView={"auto"}
						spaceBetween={10}
						autoHeight={true}
						className="w-full "
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						{colors.map((color, index) => (
							<SwiperSlide>
								<button
									onClick={() => setselectedColor(index)}
									key={index}
									className={`rounded-full shadow-[inset_-0.5px_0.5px_3px_0px_#1a202c] ${
										selectedColor == index ? "ring-4" : ""
									} z-50 w-6 h-6 ${color}`}
								></button>
							</SwiperSlide>
						))}
					</Swiper>
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
					</div>
				</div>
			</div>
		</div>
	);
}
