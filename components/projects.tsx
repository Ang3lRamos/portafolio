"use client"
import { ArrowUpRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Chatbot Ingenia - IA Conversacional",
      description:
        "Aplicación de chatbot inteligente con flujos de n8n, RAG (Retrieval-Augmented Generation) y LLM. Integración con Supabase para datos y Redis para caché. Credenciales de prueba - Email: angel@ingenia.com | Contraseña: ingenia123",
      tags: ["Next.js", "n8n", "Supabase", "Redis", "LLM", "RAG"],
      link: "https://ingenia.singularity.cyou/chat-ingenia",
    },
    {
      title: "Pokedex",
      description:
        "Aplicación interactiva de Pokédex con búsqueda, filtrado por tipo y detalles de cada Pokémon. Consumo de API REST para obtener datos en tiempo real.",
      tags: ["React", "API REST", "TypeScript"],
      link: "https://pokedex-angel.netlify.app/",
    },
    {
      title: "Dashboard de Power BI - Análisis de Datos",
      description:
        "Dashboard interactivo desarrollado con Databricks y Spark para análisis de datos en tiempo real, procesamiento de grandes volúmenes de información y visualizaciones avanzadas.",
      tags: ["Databricks", "Spark", "Python", "Power BI"],
      link: "https://app.powerbi.com/view?r=eyJrIjoiOGJmZWVkZTctNzNmMC00OTZjLWFlNGItZmUwNzY1ODRhNmM0IiwidCI6IjRkZDEzM2ZkLWNhMmEtNDA5OC1hZTkxLTBlYWEwYzU4MjNiOCIsImMiOjR9",
    },
    {
      title: "Data Cleaning Project",
      description:
        "Proyecto de extracción, limpieza y procesamiento de datos con Pandas. Incluye análisis exploratorio, visualizaciones con Matplotlib y pruebas unitarias con Pytest.",
      tags: ["Python", "Pandas", "Matplotlib", "Pytest", "SQL", "Jupyter"],
      link: "https://github.com/Ang3lRamos/data-cleaning-project.git",
    },
    {
      title: "API con Node.js",
      description: "Estructura CRUD conectada a base de datos, manejo de autenticación y autorización.",
      tags: ["Node.js", "JavaScript", "REST API"],
    },
    {
      title: "Modelo ML Básico",
      description: "Predicción simple usando scikit-learn, entrenamiento y evaluación de modelos.",
      tags: ["Python", "Machine Learning", "scikit-learn"],
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-accent">Proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border border-border rounded-lg p-4 sm:p-6 hover:border-accent transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                <h3 className="text-base sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors flex-1">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className="text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  size={18}
                />
              </div>

              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
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
