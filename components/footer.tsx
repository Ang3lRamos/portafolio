"use client"

import { useT } from "@/lib/i18n"

export default function Footer() {

  const t = useT().footer
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">© {currentYear} Ángel Ramos. {t.rights}</p>
        <p className="text-muted-foreground text-xs mt-2">{t.built}</p>
      </div>
    </footer>
  )
}
