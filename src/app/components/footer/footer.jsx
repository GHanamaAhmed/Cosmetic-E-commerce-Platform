import React from 'react'
import NavBarPages from '../header/navBarPages'
export default function Footer() {
    return (
			<div className="flex w-full justify-center items-center md:py-5">
				<div className="flex flex-col md:flex-row justify-between w-10/12">
					<div className="flex flex-row gap-0">
						<NavBarPages />
					</div>
					<p className="text-darkContent dark:text-lightContent">
						Designed and built by{" "}
						<a
							href=""
							className={
								"text-basketColor font-bold"
							}
						>
							Crow
						</a>
					</p>
				</div>
			</div>
		);
}
