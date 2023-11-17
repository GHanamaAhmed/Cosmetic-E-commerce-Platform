/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			FontFace:{
				"Hacen-Tunisia":"Hacen Tunisia"
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				solidHeading: "#42446E",
				darkContent: "#666666",
				SolidHeadingDarkMode: "#cccccc",
				lightContent: "#A7A7A7",
				buttonText: "#018C0F",
				buttonSuccess: "#D7FFE0",
				darkMode: "#191919",
				textLight: "#d9d9d9",
				cardDark: "#363636",
				darkModeSecondary: "#141414",
				caderSection:"#F4F6F5"
			},
		},
	},
	plugins: [],
};
