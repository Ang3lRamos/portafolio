"use client"

import { useT } from "@/lib/i18n"

export default function Experience() {
  const t = useT().experience

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-accent">{t.title}</h2>

        <div className="space-y-8 sm:space-y-12">
          {t.items.map((job) => (
            <div key={job.company + job.period} className="border-l-2 border-accent pl-4 sm:pl-8 relative">
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full -left-[7px] sm:-left-[9px] top-0"></div>

              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{job.title}</h3>
                    <p className="text-accent text-sm sm:text-base font-medium">{job.company}</p>
                  </div>
                  <span className="text-accent text-xs sm:text-base font-medium shrink-0">{job.period}</span>
                </div>

                {job.summary && <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">{job.summary}</p>}

                <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                      <span className="text-accent mt-1 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
