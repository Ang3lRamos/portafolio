"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { useT } from "@/lib/i18n"

export default function Certifications() {
  const t = useT().certifications
  const certificates = t.items
  const [open, setOpen] = useState<number | null>(null)
  const current = open === null ? null : certificates[open]
  const go = (step: number) => setOpen((i) => (i === null ? i : (i + step + certificates.length) % certificates.length))

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{t.title}</h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">{t.subtitle}</p>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert, idx) => (
          <li key={cert.title}>
            <button
              type="button"
              onClick={() => setOpen(idx)}
              className="group h-full w-full rounded-lg border border-border bg-card p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div className="relative mb-3 flex h-32 items-center justify-center overflow-hidden rounded bg-muted sm:h-40">
                <Image src={cert.image} alt="" fill sizes="(min-width: 1024px) 260px, 45vw"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-foreground group-hover:text-accent">{cert.title}</h3>
              <p className="text-xs text-muted-foreground">{cert.platform}</p>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={current !== null} onOpenChange={(o) => !o && setOpen(null)}>
        {current && open !== null ? (
          <DialogContent closeLabel={t.close} className="flex max-w-3xl flex-col">
            <div className="border-b border-border p-4 pr-14 sm:p-6 sm:pr-14">
              <p className="text-xs text-muted-foreground sm:text-sm">
                {open + 1} {t.of} {certificates.length}
              </p>
              <DialogTitle className="mt-1 line-clamp-2 text-lg font-bold text-foreground sm:text-xl">{current.title}</DialogTitle>
            </div>

            <div className="p-4 sm:p-6">
              <div className="relative mb-6 h-72 w-full overflow-hidden rounded-lg bg-muted sm:h-[460px]">
                <Image src={current.image} alt={current.title} fill sizes="(min-width: 768px) 720px, 95vw" className="object-contain p-4" />
              </div>
              <dl className="grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{t.platform}</dt>
                  <dd className="text-sm font-semibold text-foreground sm:text-base">{current.platform}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{t.date}</dt>
                  <dd className="text-sm font-semibold text-foreground sm:text-base">{current.date}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{t.description}</dt>
                  <DialogDescription asChild><dd className="text-sm text-foreground">{current.description}</dd></DialogDescription>
                </div>
              </dl>
            </div>

            <div className="flex items-center justify-between border-t border-border bg-muted/30 p-4 sm:p-6">
              <button type="button" onClick={() => go(-1)}
                className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
                <ChevronLeft className="h-4 w-4" /> <span className="hidden sm:inline">{t.prev}</span>
              </button>
              <div className="flex gap-2">
                {certificates.map((c, idx) => (
                  <button key={c.title} type="button" onClick={() => setOpen(idx)} aria-label={c.title} aria-current={idx === open}
                    className={`h-2 rounded-full transition-all ${idx === open ? "w-6 bg-accent" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
                ))}
              </div>
              <button type="button" onClick={() => go(1)}
                className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
                <span className="hidden sm:inline">{t.next}</span> <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </section>
  )
}
