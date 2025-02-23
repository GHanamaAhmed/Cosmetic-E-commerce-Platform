import React from 'react'
import { Link } from '@/app/libs/router-events/patch-router/link'
export default function NavBarPages() {
	return (
		<ul className="flex md:flex-row-reverse justify-between flex-col items-start md:items-center my-4 md:my-0 px-3 md:px-0 w-fit gap-4 md:gap-10">
			<li className="dark:text-darkContent text-lightContent cursor-pointer">
				<Link href={"/"}>الصفحة الرائيسة</Link>
			</li>
			<li className="dark:text-darkContent text-lightContent cursor-pointer">
				<Link href={"/contactUs"}>اتصل بنا</Link>
			</li>
			{/* <li className="dark:text-darkContent text-lightContent cursor-pointer">
				<Link href={"/orders"}>history</Link>
			</li> */}
		</ul>
	);
}
