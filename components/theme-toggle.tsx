"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get saved preference from localStorage
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light"
    setTheme(savedTheme)
    setMounted(true)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (mode: "light" | "dark") => {
    const html = document.documentElement

    html.style.opacity = "0.9"
    html.style.transition = "opacity 0.3s ease-in-out, background-color 0.4s ease-in-out, color 0.4s ease-in-out"

    setTimeout(() => {
      html.classList.toggle("dark", mode === "dark")
      html.style.opacity = "1"
    }, 150)
  }

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) return null

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-full p-1 border border-border transition-colors duration-300">
      <button
        onClick={() => handleThemeChange("light")}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === "light" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        title="Modo claro"
      >
        <Sun size={16} />
      </button>

      <button
        onClick={() => handleThemeChange("dark")}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === "dark" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        title="Modo oscuro"
      >
        <Moon size={16} />
      </button>
    </div>
  )
}
