"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

interface Certificate {
  id: number
  title: string
  platform: string
  date: string
  image: string
  description: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Microsoft SQL Server: Análisis de datos con Tableau",
    platform: "Udemy",
    date: "21 de agosto de 2024",
    image: "/images/sqlserver_tableau.jpg",
    description: "Certificación en análisis de datos SQL Server e integración con Tableau",
  },
  {
    id: 2,
    title: "Python 3: Análisis y visualización de datos",
    platform: "Udemy",
    date: "21 de agosto de 2024",
    image: "/images/python_datos.jpg",
    description: "Especialización en análisis de datos y visualización con Python",
  },
  {
    id: 3,
    title: "Curso Completo de Bases de datos MongoDB y NoSQL",
    platform: "Udemy",
    date: "24 de julio de 2023",
    image: "/images/mongo.jpg",
    description: "Dominio de bases de datos NoSQL con MongoDB",
  },
  {
    id: 4,
    title: "Fundamentals of the Databricks Lakehouse Platform",
    platform: "Databricks Academy",
    date: "23 de septiembre de 2024",
    image: "/images/databricks.png",
    description: "Certificación en Databricks Lakehouse Platform",
  },
  {
    id: 5,
    title: "Scrum Foundation Professional Certification",
    platform: "Certiprof",
    date: "20 de octubre de 2024",
    image: "/images/scrum.png",
    description: "Certificación profesional en metodologías Scrum",
  },
  {
    id: 6,
    title: "Programación web desde cero",
    platform: "Egg Cooperation",
    date: "29 de mayo de 2023",
    image: "/images/egg.png",
    description: "Formación completa en programación web: HTML, CSS y JavaScript",
  },
  {
    id: 7,
    title: "SQL: Creación de Bases de Datos (De cero a profesional)",
    platform: "Udemy",
    date: "3 de mayo de 2023",
    image: "/images/mysql.jpg",
    description: "Certificación profesional en creación y gestión de bases de datos SQL",
  },
  {
    id: 8,
    title: "Six Sigma White Belt",
    platform: "Council for Six Sigma Certification",
    date: "Septiembre 2025",
    image: "/images/six-sigma.png",
    description: "Certificación Six Sigma White Belt para optimización de procesos",
  },
]

export default function Certifications() {
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
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certificaciones</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Certificaciones profesionales y cursos completados de plataformas líderes en educación
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {certificates.map((cert, idx) => (
          <div
            key={cert.id}
            onClick={() => {
              setCurrentIndex(idx)
              setIsOpen(true)
            }}
            className="group cursor-pointer bg-white border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="mb-3 h-32 sm:h-40 relative rounded overflow-hidden bg-gray-100">
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-2 group-hover:text-blue-600">
              {cert.title}
            </h3>
            <p className="text-xs text-muted-foreground">{cert.platform}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header del modal */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {currentIndex + 1} de {certificates.length}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mt-1 line-clamp-2">{current.title}</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="flex-1 overflow-auto p-4 sm:p-6">
              <div className="relative w-full h-80 sm:h-[500px] mb-6 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={current.image || "/placeholder.svg"}
                  alt={current.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Plataforma</p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">{current.platform}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Fecha de Certificación</p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">{current.date}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Descripción</p>
                  <p className="text-sm text-foreground">{current.description}</p>
                </div>
              </div>
            </div>

            {/* Controles de navegación */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-t border-border bg-gray-50">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors text-sm font-medium"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Anterior</span>
              </button>

              {/* Indicador visual */}
              <div className="flex gap-2">
                {certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors text-sm font-medium"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
