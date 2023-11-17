import { useState, useLayoutEffect, memo } from "react"
import { CiDark, CiLight } from "react-icons/ci";
export default memo(function DarkMode() {
    const [theme, setTheme] = useState('light')
    useLayoutEffect(() => {
        if (theme == 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }, [theme])
    const toglgeDarkMode = () => {
        setTheme((prevValue) => theme == "dark" ? "light" : "dark")
    }
    return (
			<div>
				<input type="checkbox" className="checkbox" id="checkbox" />
				<label onClick={toglgeDarkMode} htmlFor="checkbox" className="label">
					<CiDark color="white" />

					<CiLight color="white" />
					<div
						className={`ball ${theme == "dark" ? "translate-x-6" : ""}`}
					></div>
				</label>
			</div>
		);
})