"use client"

import { useT } from "@/lib/i18n"

export default function Skills() {
  const t = useT().skills

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-accent">{t.title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {t.categories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-accent transition-colors duration-300"
            >
              <h3 className="text-base sm:text-lg font-semibold text-accent mb-3 sm:mb-4">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-background px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-muted-foreground border border-border"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
