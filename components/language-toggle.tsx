"use client"

import { useLanguage, useT, type Lang } from "@/lib/i18n"

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const t = useT()
  const options: Lang[] = ["es", "en"]

  return (
    <div
      role="group"
      aria-label={t.langLabel}
      className="flex items-center gap-1 bg-secondary rounded-full p-1 border border-border transition-colors duration-300"
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
            lang === option ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
