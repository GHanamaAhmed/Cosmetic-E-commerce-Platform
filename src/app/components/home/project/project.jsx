
import TitleSection from '../titleSection'
import CardProject from './cardProject'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
export default function Project({textAlign,widthContainer}) {
    const [widthScreen, setWidthScreen] = useState(globalThis.innerWidth)
    useEffect(() => {
        globalThis.addEventListener("resize", () => {
            setWidthScreen(() => globalThis.innerWidth)
        })
        return () => globalThis.removeEventListener("resize", () => { })
    }, [])
    return (
			<div className="w-full h-full flex flex-col items-center gap-5">
				<TitleSection
					title={"Projects"}
					subTitle={"Things I’ve built so far"}
					textAlign={textAlign}
				/>
				<div className="w-full h-full flex justify-around">
					{widthScreen >= 768 ? (
						<div className="w-full h-full flex flex-col items-center gap-5">
							<div className={`${widthContainer} h-fit flex gap-y-5 justify-between`}>
								<CardProject
									img={"/img/Rectangle 4.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
								<CardProject
									img={"/img/Rectangle 6.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
								<CardProject
									img={"/img/Rectangle 8.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
							</div>
							<div className={`${widthContainer} flex gap-y-5 justify-between`}>
								<CardProject
									img={"/img/Rectangle 12.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
								<CardProject
									img={"/img/Rectangle 13.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
								<CardProject
									img={"/img/Rectangle 14.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
							</div>
						</div>
					) : (
						<Swiper
							modules={[Navigation, A11y]}
							spaceBetween={10}
							slidesPerView={widthScreen < 640 ? 1 : 2}
						>
							<SwiperSlide className="content-center flex justify-center">
								<CardProject
									img={"/img/Rectangle 4.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
							</SwiperSlide>
							<SwiperSlide className="content-center flex justify-center">
								<CardProject
									img={"/img/Rectangle 6.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
							</SwiperSlide>
							<SwiperSlide className="content-center flex justify-center">
								<CardProject
									img={"/img/Rectangle 8.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
							</SwiperSlide>
							<SwiperSlide className="content-center flex justify-center">
								<CardProject
									img={"/img/Rectangle 12.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
							</SwiperSlide>
							<SwiperSlide className="content-center flex justify-center">
								<CardProject
									img={"/img/Rectangle 13.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
							</SwiperSlide>
							<SwiperSlide className="content-center flex justify-center">
								<CardProject
									img={"/img/Rectangle 14.png"}
									title={"المنتج"}
									description={"lorem ipsum sdssdfka;sdlfkjldskjf"}
									colors={["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"]}
									url={""}
									urlGithub={""}
								/>
							</SwiperSlide>
						</Swiper>
					)}
				</div>
			</div>
		);
}
