"use client"

import { useT, EMAIL, PHONE } from "@/lib/i18n"

export default function About() {
  const t = useT().about
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-foreground">{t.title}</h2>

        <div className="bg-card rounded-lg p-6 sm:p-8 md:p-12 shadow-sm border border-border">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t.p1}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t.p2a} <span className="text-accent font-semibold">{t.p2stack}</span>
              {t.p2b}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t.p3}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
              <div>
                <h3 className="text-accent font-semibold mb-2 sm:mb-4 text-sm sm:text-base">{t.education}</h3>
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">{t.degree}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Corporación Universitaria Adventista</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">2021 - 2025</p>
                </div>
              </div>
              <div>
                <h3 className="text-accent font-semibold mb-2 sm:mb-4 text-sm sm:text-base">{t.contact}</h3>
                <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <p className="text-muted-foreground break-all">
                    <span className="font-medium text-foreground">Email:</span> {EMAIL}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">{t.phone}:</span> {PHONE}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
