"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import { useT } from "@/lib/i18n"

export default function Hero() {
  const t = useT().hero
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
      <div className="max-w-5xl w-full animate-fade-in">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 font-medium">{t.greeting}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {t.iam} <span className="text-accent">Ángel Ramos</span>
            </h1>
            <h2 className="text-lg sm:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 font-medium">
              {t.role}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-md">
              {t.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-accent/30 text-sm sm:text-base"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1iXlMbIL19fVKFhGpvsRmYg-JHa5s-Cri/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  {t.cv}
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 bg-transparent cursor-pointer transition-all hover:shadow-lg hover:shadow-accent/20 text-sm sm:text-base"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail size={18} className="mr-2" />
                {t.contact}
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80">
              <div className="absolute inset-0 bg-accent rounded-full -z-10"></div>
              <img
                src="/images/Retrato_Formal.jpg"
                alt="Ángel Ramos"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
