"use client"
import { ArrowUpRight } from "lucide-react"
import { useT } from "@/lib/i18n"

export default function Projects() {
  const t = useT().projects

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-accent">{t.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {t.items.map((project) => (
            <a
              key={project.link}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border border-border rounded-lg p-4 sm:p-6 hover:border-accent transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-accent/20 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                <h3 className="text-base sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors flex-1">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className="text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                  size={18}
                />
              </div>

              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              {project.demo && (
                <p className="text-xs text-muted-foreground mb-4">
                  <span className="font-medium text-foreground">{t.demo}:</span> {project.demo}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-card border border-border text-accent transition-all duration-300 hover:bg-accent hover:text-background hover:scale-105 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
