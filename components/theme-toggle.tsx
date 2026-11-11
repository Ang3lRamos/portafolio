"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useT } from "@/lib/i18n"

// El tema vive en la clase "dark" de <html>, que el script del layout ya puso antes de pintar.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
  return () => observer.disconnect()
}
const isDark = () => document.documentElement.classList.contains("dark")

export default function ThemeToggle() {
  const t = useT().theme
  // En el servidor no se sabe el tema: null deja el botón sin marcar hasta hidratar, sin saltos de tamaño.
  const dark = useSyncExternalStore(subscribe, isDark, () => null)

  const choose = (mode: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", mode === "dark")
    try {
      localStorage.setItem("theme", mode)
    } catch {
      // sin almacenamiento el tema solo dura esta visita
    }
  }

  const option = (mode: "light" | "dark", label: string, Icon: typeof Sun) => {
    const active = dark !== null && (mode === "dark") === dark
    return (
      <button
        type="button"
        onClick={() => choose(mode)}
        aria-pressed={active}
        title={label}
        aria-label={label}
        className={`rounded-full p-2 transition-colors duration-300 ${
          active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Icon size={16} />
      </button>
    )
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-secondary p-1">
      {option("light", t.light, Sun)}
      {option("dark", t.dark, Moon)}
    </div>
  )
}
