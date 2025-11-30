"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
      <div className="max-w-5xl w-full animate-fade-in">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 font-medium">Hola,</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Soy <span className="text-accent">Ángel Ramos</span>
            </h1>
            <h2 className="text-lg sm:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 font-medium">
              Analista de Datos & Desarrollador de Software
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-md">
              Profesional especializado en Python, SQL, Power BI y desarrollo web. Transformo información compleja en
              soluciones funcionales y decisiones estratégicas basadas en datos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-accent/30 text-sm sm:text-base"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1SrA9dKwFcGY3rRd6W01WL3WKnLsnbN3J/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Descargar CV
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 bg-transparent cursor-pointer transition-all hover:shadow-lg hover:shadow-accent/20 text-sm sm:text-base"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail size={18} className="mr-2" />
                Contactarme
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80">
              <div className="absolute inset-0 bg-accent rounded-full -z-10"></div>
              <img
                src="/images/retrato_formal.jpg"
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
