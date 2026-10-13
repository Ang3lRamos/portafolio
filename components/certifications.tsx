"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useT } from "@/lib/i18n"

export default function Certifications() {
  const t = useT().certifications
  const certificates = t.items
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const current = certificates[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {certificates.map((cert, idx) => (
          <div
            key={cert.title}
            onClick={() => {
              setCurrentIndex(idx)
              setIsOpen(true)
            }}
            className="group cursor-pointer bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="mb-3 h-32 sm:h-40 relative rounded overflow-hidden bg-muted flex items-center justify-center">
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                fill
                className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-2 group-hover:text-primary">
              {cert.title}
            </h3>
            <p className="text-xs text-muted-foreground">{cert.platform}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header del modal */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {currentIndex + 1} {t.of} {certificates.length}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mt-1 line-clamp-2">{current.title}</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-muted rounded-lg transition-colors">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="flex-1 overflow-auto p-4 sm:p-6">
              <div className="relative w-full h-80 sm:h-[500px] mb-6 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={current.image || "/placeholder.svg"}
                  alt={current.title}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{t.platform}</p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">{current.platform}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{t.date}</p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">{current.date}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{t.description}</p>
                  <p className="text-sm text-foreground">{current.description}</p>
                </div>
              </div>
            </div>

            {/* Controles de navegación */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-t border-border bg-muted/50">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors text-sm font-medium"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{t.prev}</span>
              </button>

              {/* Indicador visual */}
              <div className="flex gap-2">
                {certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors text-sm font-medium"
              >
                <span className="hidden sm:inline">{t.next}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}