"use client"

import { BarChart3, BrainCircuit, CandlestickChart, ExternalLink, Github, Globe, KeyRound, Search, Sparkles } from "lucide-react"
import Image from "next/image"
import { useMemo, useState, type CSSProperties, type ReactNode } from "react"

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { useLanguage, useT } from "@/lib/i18n"
import { PROJECT_TYPES, PROJECTS, type Project, type ProjectType } from "@/lib/projects"

const TYPE_ICON = { ai: Sparkles, web: Globe, data: BarChart3, trading: CandlestickChart, ml: BrainCircuit } as const

const number = (i: number) => `#${String(i + 1).padStart(3, "0")}`

/** Fondo de la tarjeta: degradado del color del tipo principal hacia una versión más clara. */
function cardStyle(type: ProjectType): CSSProperties {
  const c = PROJECT_TYPES[type].color
  return { background: `linear-gradient(150deg, ${c}, color-mix(in srgb, ${c} 62%, white))` }
}

export default function Projects() {
  const t = useT().projects
  const { lang } = useLanguage()
  const [query, setQuery] = useState("")
  const [type, setType] = useState<ProjectType | "all">("all")
  const [open, setOpen] = useState<number | null>(null)

  const indexed = useMemo(() => PROJECTS.map((p, i) => ({ p, i })), [])
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return indexed.filter(({ p }) =>
      (type === "all" || p.types.includes(type)) &&
      (!q || [p.title[lang], p.summary[lang], ...p.stack].some((s) => s.toLowerCase().includes(q))))
  }, [indexed, query, type, lang])

  const counts = useMemo(() => {
    const c = {} as Record<ProjectType, number>
    for (const p of PROJECTS) for (const k of p.types) c[k] = (c[k] ?? 0) + 1
    return c
  }, [])

  const selected = open === null ? null : PROJECTS[open]

  return (
    <section id="projects" className="bg-card px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-accent sm:text-4xl">{t.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">{t.subtitle}</p>
          </div>
          <label className="relative block w-full sm:w-72">
            <span className="sr-only">{t.search}</span>
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              className="w-full rounded-full border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
            />
          </label>
        </div>

        <div role="group" aria-label={t.filter} className="mb-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
          <Chip active={type === "all"} color="#475569" onClick={() => setType("all")}>
            {t.all} <span className="opacity-70">{PROJECTS.length}</span>
          </Chip>
          {(Object.keys(PROJECT_TYPES) as ProjectType[]).map((k) => (
            <Chip key={k} active={type === k} color={PROJECT_TYPES[k].color} onClick={() => setType(k)}>
              {PROJECT_TYPES[k].label[lang]} <span className="opacity-70">{counts[k] ?? 0}</span>
            </Chip>
          ))}
        </div>

        <p aria-live="polite" className="mb-6 rounded-xl border border-border bg-background px-4 py-2.5 text-center text-sm text-muted-foreground">
          <span className="font-medium text-accent">{t.showing(visible.length)}</span> ({t.total}: {PROJECTS.length})
        </p>

        {visible.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">{t.empty}</p>
        ) : (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map(({ p, i }) => (
              <li key={p.slug}>
                <ProjectCard project={p} index={i} lang={lang} label={t.open} onOpen={() => setOpen(i)} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <Dialog open={selected !== null} onOpenChange={(o) => !o && setOpen(null)}>
        {selected && open !== null ? (
          <DialogContent closeLabel={t.close} className="max-w-2xl">
            <ProjectDetail project={selected} index={open} lang={lang} t={t} />
          </DialogContent>
        ) : null}
      </Dialog>
    </section>
  )
}

function Chip({ active, color, onClick, children }: { active: boolean; color: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      style={{ borderColor: color, ...(active ? { background: color, color: "white" } : { color }) }}
      className="shrink-0 rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {children}
    </button>
  )
}

function Artwork({ project, className = "" }: { project: Project; className?: string }) {
  const Icon = TYPE_ICON[project.types[0]]
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt=""
        width={800}
        height={500}
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
        className={`h-full w-full object-cover object-top ${className}`}
      />
    )
  }
  // Sin captura: ícono del tipo sobre una retícula, para que la tarjeta no quede vacía.
  return (
    <div className={`grid h-full w-full place-items-center bg-[radial-gradient(circle,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:14px_14px] ${className}`}>
      <Icon className="h-16 w-16 text-white/90 drop-shadow-lg" strokeWidth={1.5} />
    </div>
  )
}

function TypePills({ types, lang }: { types: ProjectType[]; lang: "es" | "en" }) {
  return (
    <div className="flex flex-wrap justify-center gap-1.5">
      {types.map((k) => (
        <span
          key={k}
          style={{ background: `color-mix(in srgb, ${PROJECT_TYPES[k].color} 70%, black)` }}
          className="rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm"
        >
          {PROJECT_TYPES[k].label[lang]}
        </span>
      ))}
    </div>
  )
}

function ProjectCard({ project, index, lang, label, onOpen }: {
  project: Project
  index: number
  lang: "es" | "en"
  label: string
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${label}: ${project.title[lang]}`}
      style={cardStyle(project.types[0])}
      className="group relative flex h-full w-full flex-col items-center rounded-2xl p-4 pt-12 text-left shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold text-slate-800 shadow-sm">
        {number(index)}
      </span>
      <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-black/10 shadow-inner ring-1 ring-white/20">
        <Artwork project={project} className="transition duration-500 group-hover:scale-105" />
      </div>
      <h3 className="mt-4 text-center text-xl font-extrabold text-white [text-shadow:0_2px_6px_rgba(0,0,0,.25)]">
        {project.title[lang]}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-center text-[13px] leading-snug text-white/90">{project.summary[lang]}</p>
      <div className="mt-3">
        <TypePills types={project.types} lang={lang} />
      </div>
    </button>
  )
}

function ProjectDetail({ project, index, lang, t }: {
  project: Project
  index: number
  lang: "es" | "en"
  t: ReturnType<typeof useT>["projects"]
}) {
  return (
    <article>
      <header style={cardStyle(project.types[0])} className="relative px-5 pb-5 pt-12 sm:px-8">
        <span className="absolute left-5 top-4 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold text-slate-800 sm:left-8">
          {number(index)}
        </span>
        <div className="mx-auto aspect-[16/10] w-full max-w-md overflow-hidden rounded-xl bg-black/10 shadow-lg ring-1 ring-white/25">
          <Artwork project={project} />
        </div>
        <DialogTitle className="mt-4 text-center text-2xl font-extrabold text-white [text-shadow:0_2px_6px_rgba(0,0,0,.25)] sm:text-3xl">
          {project.title[lang]}
        </DialogTitle>
        <div className="mt-2">
          <TypePills types={project.types} lang={lang} />
        </div>
      </header>

      <div className="space-y-5 px-5 py-6 sm:px-8">
        <DialogDescription className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.summary[lang]}
        </DialogDescription>

        {project.highlights.length > 0 && (
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground">{t.highlights}</h4>
            <ul className="space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h.en} className="flex gap-2 text-sm text-muted-foreground">
                  <span style={{ color: PROJECT_TYPES[project.types[0]].color }} aria-hidden>▸</span>
                  {h[lang]}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground">{t.stack}</h4>
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <li key={s} className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-foreground">{s}</li>
            ))}
          </ul>
        </div>

        {project.credentials && (
          <p className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs text-muted-foreground">
            <KeyRound size={14} className="shrink-0 text-accent" />
            <span className="font-medium text-foreground">{t.demo}:</span> <code>{project.credentials}</code>
          </p>
        )}

        <div className="flex flex-wrap gap-3 pt-1">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
              <ExternalLink size={16} /> {t.live}
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
              <Github size={16} /> {t.code}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
