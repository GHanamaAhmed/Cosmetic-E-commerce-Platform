"use client";
import { memo, useLayoutEffect, useState } from "react";
import DarkMode from "./darkMode";
import Contact from "./contact";
import NavBarPages from "./navBarPages";

export default function Header() {
	const [isMenuActive, setIsMenuActive] = useState(false);
	const [positionScroll, setPositinScroll] = useState(0);
	const [headerPosition, setHeaderPosition] = useState("");

	useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            	const handlePosition = () => {
								if (positionScroll < window.scrollY) {
									if (!isMenuActive) {
										setHeaderPosition("-translate-y-full");
									}
								} else {
									setHeaderPosition("");
								}
								setPositinScroll(window.scrollY);
							};

							window.addEventListener("scroll", handlePosition);

							return () => window.removeEventListener("scroll", handlePosition);
	
        }
	}, [isMenuActive, positionScroll]);

	const handleMenu = () => {
		setIsMenuActive((prevValue) => !prevValue);
	};

	return (
		<header
			className={`w-full fixed bg- z-50 bg-white ${headerPosition} duration-500 dark:bg-darkMode flex items-center justify-around py-2`}
		>
			<img src="./../../favicon.ico" className="h-10" alt="icon" />
			<div
				className="flex flex-col items-center gap-1 cursor-pointer md:hidden"
				onClick={handleMenu}
			>
				<div
					className={`h-1 w-6 rounded-lg bg-darkMode dark:bg-lightContent duration-300 ${
						isMenuActive ? "-translate-x-4" : ""
					}`}
				></div>
				<div
					className={`h-1 w-6 rounded-lg bg-darkMode dark:bg-lightContent duration-300 ${
						isMenuActive ? "-translate-x-2" : ""
					}`}
				></div>
				<div className="h-1 w-6 rounded-lg bg-darkMode dark:bg-lightContent"></div>
			</div>
			<div className="md:flex justify-between items-center gap-15 hidden">
				<NavBarPages />
				<ul className="flex justify-between items-center gap-3">
					<Contact />
					{/* Additional list items */}
					<li className="ml-3">
						<DarkMode />
					</li>
				</ul>
			</div>
		</header>
	);
}
