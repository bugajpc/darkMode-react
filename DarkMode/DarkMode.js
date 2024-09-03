import { useEffect, useState } from "react"

function DarkMode() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    useEffect(() => {
        document.body.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div className="toggle-switch">
            <input onChange={toggleTheme} type="checkbox" checked={theme === "dark"} className="theme-checkbox"></input>
        </div>
    )
}
export default DarkMode