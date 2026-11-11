"use client"

import { BarChart3, BrainCircuit, CandlestickChart, ExternalLink, Github, Globe, KeyRound, Search, Sparkles } from "lucide-react"
import Image from "next/image"
import { useMemo, useState, type ReactNode } from "react"

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { useLanguage, useT } from "@/lib/i18n"
import { PROJECT_TYPES, PROJECTS, type Project, type ProjectType } from "@/lib/projects"

const TYPE_ICON = { ai: Sparkles, web: Globe, data: BarChart3, trading: CandlestickChart, ml: BrainCircuit } as const

const number = (i: number) => `#${String(i + 1).padStart(3, "0")}`

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
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-3xl font-bold text-accent sm:text-4xl">{t.title}</h2>
        <p className="mb-8 text-sm text-muted-foreground sm:text-base">{t.subtitle}</p>

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Los filtros saltan de línea: nunca quedan cortados. */}
          <div role="group" aria-label={t.filter} className="flex flex-wrap gap-2">
            <Chip active={type === "all"} onClick={() => setType("all")} count={PROJECTS.length}>{t.all}</Chip>
            {(Object.keys(PROJECT_TYPES) as ProjectType[]).map((k) => (
              <Chip key={k} active={type === k} onClick={() => setType(k)} count={counts[k] ?? 0} dot={PROJECT_TYPES[k].color}>
                {PROJECT_TYPES[k].label[lang]}
              </Chip>
            ))}
          </div>
          <label className="relative block w-full lg:w-64">
            <span className="sr-only">{t.search}</span>
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </label>
        </div>

        <p aria-live="polite" className="mb-4 text-xs text-muted-foreground sm:text-sm">
          {t.showing(visible.length)} · {t.total}: {PROJECTS.length}
        </p>

        {visible.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border py-12 text-center text-sm text-muted-foreground">{t.empty}</p>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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

function Chip({ active, onClick, count, dot, children }: {
  active: boolean
  onClick: () => void
  count: number
  dot?: string
  children: ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
        active
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border bg-background text-muted-foreground hover:border-accent hover:text-accent"
      }`}
    >
      {dot && <span className="size-2 rounded-full" style={{ background: dot }} aria-hidden />}
      {children}
      <span className={active ? "opacity-80" : "opacity-60"}>{count}</span>
    </button>
  )
}

function Artwork({ project }: { project: Project }) {
  const Icon = TYPE_ICON[project.types[0]]
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt=""
        width={800}
        height={500}
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    )
  }
  // Sin captura: ícono del tipo sobre una retícula suave, en los colores del sitio.
  return (
    <div className="grid h-full w-full place-items-center bg-secondary bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:16px_16px]">
      <Icon className="h-12 w-12 text-accent" strokeWidth={1.5} />
    </div>
  )
}

function TypeTags({ types, lang }: { types: ProjectType[]; lang: "es" | "en" }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {types.map((k) => (
        <li key={k} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-0.5 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full" style={{ background: PROJECT_TYPES[k].color }} aria-hidden />
          {PROJECT_TYPES[k].label[lang]}
        </li>
      ))}
    </ul>
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
      className="group flex h-full w-full flex-col overflow-hidden rounded-lg border border-border bg-background text-left transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
        <Artwork project={project} />
        <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-0.5 font-mono text-xs font-semibold text-foreground shadow-sm backdrop-blur">
          {number(index)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-accent sm:text-lg">
          {project.title[lang]}
        </h3>
        <p className="mt-1.5 mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{project.summary[lang]}</p>
        <div className="mt-auto">
          <TypeTags types={project.types} lang={lang} />
        </div>
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
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-secondary">
        <Artwork project={project} />
      </div>

      <div className="space-y-5 p-5 sm:p-7">
        <header className="space-y-2">
          <span className="font-mono text-xs font-semibold text-muted-foreground">{number(index)}</span>
          <DialogTitle className="text-2xl font-bold text-foreground sm:text-3xl">{project.title[lang]}</DialogTitle>
          <TypeTags types={project.types} lang={lang} />
        </header>

        <DialogDescription className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.summary[lang]}
        </DialogDescription>

        {project.highlights.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-semibold text-accent">{t.highlights}</h4>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h.en} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 shrink-0 text-accent" aria-hidden>•</span>
                  {h[lang]}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="mb-2 text-sm font-semibold text-accent">{t.stack}</h4>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">{s}</li>
            ))}
          </ul>
        </div>

        {project.credentials && (
          <p className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs text-muted-foreground">
            <KeyRound size={14} className="shrink-0 text-accent" />
            <span className="font-medium text-foreground">{t.demo}:</span> <code className="font-mono">{project.credentials}</code>
          </p>
        )}

        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30">
              <ExternalLink size={16} /> {t.live}
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/10">
              <Github size={16} /> {t.code}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
