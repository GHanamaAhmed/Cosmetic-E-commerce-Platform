import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


export default function Contact() {
  return (
		<>
			<li className=" flex flex-row-reverse gap-4">
				<ul>
					<a href="https://github.com/GHanamaAhmed" target="_blank">
						{" "}
						<FaFacebookF size={19}  className="w-8 dark:fill-darkContent fill-lightContent" />
					</a>
				</ul>
				<ul>
					<a href="https://github.com/GHanamaAhmed" target="_blank">
						{" "}
						<FaInstagram size={20} className="w-8 dark:fill-darkContent fill-lightContent" />
					</a>
				</ul>
			</li>
		</>
	);
}
