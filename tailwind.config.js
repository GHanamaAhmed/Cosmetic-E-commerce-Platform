/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      FontFace: {
        "Hacen-Tunisia": "Hacen Tunisia",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        solidHeading: "#42446E",
        darkContent: "#2f3e46",
        SolidHeadingDarkMode: "#cccccc",
        basketColor:"#403A63",
        scandaryColor:"#1FAB71",
        lightContent: "#A7A7A7",
        buttonText: "#018C0F",
        buttonSuccess: "#D7FFE0",
        darkMode: "#191919",
        textLight: "#d9d9d9",
        cardDark: "#363636",
        darkModeSecondary: "#141414",
        caderSection: "#F4F6F5",
        mainColor: "rgb(59 130 246)",
      },
      keyframes:{
				appear: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				  }
			}
    },
  },
  plugins: [],
};
