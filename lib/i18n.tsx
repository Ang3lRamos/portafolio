"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Lang = "es" | "en"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")

  useEffect(() => {
    let initial: Lang = "es"
    try {
      const saved = localStorage.getItem("lang")
      if (saved === "es" || saved === "en") {
        initial = saved
      } else if (!navigator.language.toLowerCase().startsWith("es")) {
        initial = "en"
      }
    } catch {
      // localStorage may be unavailable; keep default
    }
    setLangState(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title =
      lang === "es"
        ? "Ángel Ramos | Analista de Automatización y BI · Desarrollador Full-Stack"
        : "Ángel Ramos | Automation & BI Analyst · Full-Stack Developer"
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem("lang", next)
    } catch {
      // ignore
    }
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}

/** Returns the content dictionary for the active language. */
export function useT() {
  const { lang } = useLanguage()
  return content[lang]
}

type Bi = { es: string; en: string }

const nav = {
  es: [
    { label: "Sobre mí", id: "about" },
    { label: "Habilidades", id: "skills" },
    { label: "Proyectos", id: "projects" },
    { label: "Experiencia", id: "experience" },
    { label: "Certificaciones", id: "certifications" },
    { label: "Contacto", id: "contact" },
  ],
  en: [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ],
}

type Project = { title: Bi; description: Bi; demo?: string; tags: string[]; link: string }

const projects: Project[] = [
  {
    title: { es: "Chatbot Ingenia - IA Conversacional", en: "Ingenia Chatbot - Conversational AI" },
    description: {
      es: "Chatbot inteligente con flujos en n8n, RAG (Retrieval-Augmented Generation) y LLM. Integración con Supabase para datos y Redis para caché.",
      en: "Intelligent chatbot built with n8n workflows, RAG (Retrieval-Augmented Generation) and LLMs. Uses Supabase for data and Redis for caching.",
    },
    demo: "angel@ingenia.com / ingenia123",
    tags: ["Next.js", "n8n", "Supabase", "Redis", "LLM", "RAG"],
    link: "https://ingenia.singularity.cyou/chat-ingenia",
  },
  {
    title: { es: "Aqua Bear - Sistema de Reservas", en: "Aqua Bear - Booking System" },
    description: {
      es: "Aplicación full-stack de reservas con autenticación de usuarios y panel de administración para gestionar clases. Control de acceso basado en roles (RBAC) que separa las funciones de cliente y administrador.",
      en: "Full-stack booking application with user authentication and an admin dashboard to manage classes. Role-based access control (RBAC) separates client and administrator features.",
    },
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    link: "https://aqua-bear.vercel.app",
  },
  {
    title: { es: "Dashboard de Power BI - Análisis de Datos", en: "Power BI Dashboard - Data Analysis" },
    description: {
      es: "Dashboard interactivo desarrollado con Databricks y Spark para el procesamiento de grandes volúmenes de información y visualizaciones avanzadas.",
      en: "Interactive dashboard built with Databricks and Spark to process large data volumes and deliver advanced visualizations.",
    },
    tags: ["Databricks", "Spark", "Python", "Power BI"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiOGJmZWVkZTctNzNmMC00OTZjLWFlNGItZmUwNzY1ODRhNmM0IiwidCI6IjRkZDEzM2ZkLWNhMmEtNDA5OC1hZTkxLTBlYWEwYzU4MjNiOCIsImMiOjR9",
  },
  {
    title: { es: "Proyecto de Limpieza de Datos", en: "Data Cleaning Project" },
    description: {
      es: "Extracción, limpieza y procesamiento de datos con Pandas. Incluye análisis exploratorio, visualizaciones con Matplotlib y pruebas unitarias con Pytest.",
      en: "Data extraction, cleaning and processing with Pandas. Includes exploratory analysis, Matplotlib visualizations and unit tests with Pytest.",
    },
    tags: ["Python", "Pandas", "Matplotlib", "Pytest", "SQL", "Jupyter"],
    link: "https://github.com/Ang3lRamos/data-cleaning-project.git",
  },
  {
    title: { es: "Modelo Predictivo con scikit-learn", en: "Predictive Model with scikit-learn" },
    description: {
      es: "Modelo de machine learning con scikit-learn: preparación de datos, entrenamiento y evaluación de modelos.",
      en: "Machine learning model with scikit-learn: data preparation, model training and evaluation.",
    },
    tags: ["Python", "Machine Learning", "scikit-learn"],
    link: "https://colab.research.google.com/drive/1icWFIpgn5dAl5sfqFTPXwcHnBKyKS8j0?usp=sharing",
  },
  {
    title: { es: "Pokédex", en: "Pokédex" },
    description: {
      es: "Aplicación interactiva con búsqueda, filtrado por tipo y detalle de cada Pokémon, consumiendo una API REST en tiempo real.",
      en: "Interactive app with search, type filtering and detail views, consuming a REST API in real time.",
    },
    tags: ["React", "TypeScript", "API REST"],
    link: "https://pokedex-angel.netlify.app/",
  },
]

type Job = { title: Bi; company: string; period: Bi; summary?: Bi; bullets: Bi[] }

const jobs: Job[] = [
  {
    title: { es: "Analista de Automatización y BI", en: "Automation & BI Analyst" },
    company: "WTW",
    period: { es: "Abr 2026 - Actualidad", en: "Apr 2026 - Present" },
    summary: {
      es: "Desarrollo tableros y automatizaciones que reemplazan el reporte manual en la operación de seguros y la analítica de talento humano.",
      en: "I build dashboards and automations that replace manual reporting in insurance operations and HR analytics.",
    },
    bullets: [
      {
        es: "Desarrollé tableros en Power BI de endosos, siniestros y cumplimiento de ANS, con más de 54 medidas DAX y ~32 mil casos monitoreados",
        en: "Developed Power BI dashboards for endorsements, claims and SLA compliance, including 54+ DAX measures and ~32K cases tracked",
      },
      {
        es: "Construí un RPA en C# que automatiza las renovaciones de pólizas colectivas de autos con 5 aseguradoras: SURA, Allianz, AXA, MAPFRE y HDI",
        en: "Built an RPA solution in C# that automates group auto policy renewals across 5 insurers: SURA, Allianz, AXA, MAPFRE and HDI",
      },
      {
        es: "Creé pipelines de datos en Python y migré macros VBA a Python para generar reportes más rápido y sin errores",
        en: "Created Python data pipelines and migrated VBA macros to Python for faster, error-free reporting",
      },
      {
        es: "Documenté cada solución con guías técnicas y manuales de usuario para asegurar su adopción",
        en: "Documented every solution with technical guides and user manuals to ensure team adoption",
      },
    ],
  },
  {
    title: { es: "Analista de Operaciones", en: "Operations Analyst" },
    company: "Inversiones Manpe",
    period: { es: "Oct 2025 - Dic 2025", en: "Oct 2025 - Dec 2025" },
    bullets: [
      {
        es: "Gestión y análisis de inventarios para mejorar la eficiencia operativa",
        en: "Managed and analyzed inventory to improve operational efficiency",
      },
      {
        es: "Automatización de controles y procesos utilizando herramientas basadas en datos",
        en: "Automated controls and processes using data-driven tools",
      },
      {
        es: "Creación de reportes y dashboards para monitoreo de KPIs operativos",
        en: "Built reports and dashboards to monitor operational KPIs",
      },
      {
        es: "Liderazgo de equipos para optimizar procesos y reducir tiempos de operación",
        en: "Led teams to optimize processes and reduce operating times",
      },
    ],
  },
  {
    title: { es: "Analista de Datos (Práctica profesional)", en: "Data Analyst Intern" },
    company: "Bancolombia",
    period: { es: "Ene 2025 - Jul 2025", en: "Jan 2025 - Jul 2025" },
    bullets: [
      {
        es: "Desarrollo de dashboards interactivos en Power BI para visualización de KPIs corporativos y toma de decisiones",
        en: "Built interactive Power BI dashboards to visualize corporate KPIs and support decision making",
      },
      {
        es: "Automatización de procesos de extracción y transformación de datos mediante Python (Pandas) y SQL",
        en: "Automated data extraction and transformation processes using Python (Pandas) and SQL",
      },
      {
        es: "Optimización de consultas SQL complejas para mejorar el rendimiento de reportes analíticos",
        en: "Optimized complex SQL queries to improve analytical report performance",
      },
      {
        es: "Implementación de soluciones de análisis de datos en Azure, integrando pipelines ETL",
        en: "Implemented data analysis solutions on Azure, integrating ETL pipelines",
      },
      {
        es: "Colaboración en equipos ágiles (Scrum) para entrega iterativa de soluciones de Business Intelligence",
        en: "Collaborated in agile (Scrum) teams to iteratively deliver Business Intelligence solutions",
      },
    ],
  },
  {
    title: { es: "Analista de Datos Freelance", en: "Freelance Data Analyst" },
    company: "Profesional Independiente",
    period: { es: "Feb 2024 - Oct 2024", en: "Feb 2024 - Oct 2024" },
    summary: {
      es: "Proporcioné servicios de análisis de datos a diversos clientes, transformando datos complejos en insights accionables. Trabajé directamente con stakeholders para entender sus necesidades y entregar soluciones a la medida.",
      en: "Provided data analysis services to a range of clients, turning complex data into actionable insights. Worked directly with stakeholders to understand business needs and deliver tailored solutions.",
    },
    bullets: [
      {
        es: "Desarrollé dashboards interactivos en Power BI/Excel para visualización de KPIs y métricas clave",
        en: "Developed interactive Power BI/Excel dashboards to visualize KPIs and key metrics",
      },
      {
        es: "Realicé análisis exploratorio y limpieza de datos utilizando Python, R y SQL",
        en: "Performed exploratory analysis and data cleaning using Python, R and SQL",
      },
      {
        es: "Generé reportes automatizados que redujeron el tiempo de análisis manual",
        en: "Delivered automated reports that reduced manual analysis time",
      },
      {
        es: "Trabajé con conjuntos de datos de retail, finanzas y salud",
        en: "Worked with datasets from the retail, finance and healthcare industries",
      },
      {
        es: "Implementé modelos predictivos estadísticos para pronósticos y optimización",
        en: "Implemented statistical predictive models for forecasting and optimization",
      },
    ],
  },
]

type Cert = { title: string; platform: string; date: Bi; image: string; description: Bi }

const certificates: Cert[] = [
  {
    title: "Power BI + IA",
    platform: "Daxus Latam",
    date: { es: "Enero 2026", en: "January 2026" },
    image: "/images/PowerBi+Ia.png",
    description: {
      es: "Power BI potenciado con inteligencia artificial",
      en: "Power BI enhanced with artificial intelligence",
    },
  },
  {
    title: "Six Sigma White Belt",
    platform: "Council for Six Sigma Certification",
    date: { es: "Septiembre 2025", en: "September 2025" },
    image: "/images/Six-sigma.png",
    description: {
      es: "Fundamentos de Six Sigma para la optimización de procesos",
      en: "Six Sigma fundamentals for process optimization",
    },
  },
  {
    title: "Scrum Foundation Professional Certification",
    platform: "Certiprof",
    date: { es: "20 de octubre de 2024", en: "October 20, 2024" },
    image: "/images/Scrum.png",
    description: { es: "Certificación profesional en Scrum", en: "Professional certification in Scrum" },
  },
  {
    title: "Fundamentals of the Databricks Lakehouse Platform",
    platform: "Databricks Academy",
    date: { es: "23 de septiembre de 2024", en: "September 23, 2024" },
    image: "/images/Databricks.png",
    description: {
      es: "Fundamentos de la plataforma Databricks Lakehouse",
      en: "Fundamentals of the Databricks Lakehouse platform",
    },
  },
  {
    title: "Microsoft SQL Server: Análisis de datos con Tableau",
    platform: "Udemy",
    date: { es: "21 de agosto de 2024", en: "August 21, 2024" },
    image: "/images/SqlServer_Tableau.jpg",
    description: {
      es: "Análisis de datos con SQL Server e integración con Tableau",
      en: "Data analysis with SQL Server and Tableau integration",
    },
  },
  {
    title: "Python 3: Análisis y visualización de datos",
    platform: "Udemy",
    date: { es: "21 de agosto de 2024", en: "August 21, 2024" },
    image: "/images/Python_Datos.jpg",
    description: {
      es: "Análisis y visualización de datos con Python",
      en: "Data analysis and visualization with Python",
    },
  },
  {
    title: "Curso Completo de Bases de datos MongoDB y NoSQL",
    platform: "Udemy",
    date: { es: "24 de julio de 2023", en: "July 24, 2023" },
    image: "/images/Mongo.jpg",
    description: { es: "Bases de datos NoSQL con MongoDB", en: "NoSQL databases with MongoDB" },
  },
  {
    title: "Programación web desde cero",
    platform: "Egg Cooperation",
    date: { es: "29 de mayo de 2023", en: "May 29, 2023" },
    image: "/images/Egg.png",
    description: {
      es: "Programación web: HTML, CSS y JavaScript",
      en: "Web programming: HTML, CSS and JavaScript",
    },
  },
  {
    title: "SQL: Creación de Bases de Datos (De cero a profesional)",
    platform: "Udemy",
    date: { es: "3 de mayo de 2023", en: "May 3, 2023" },
    image: "/images/MySql.jpg",
    description: {
      es: "Diseño, creación y gestión de bases de datos SQL",
      en: "Design, creation and management of SQL databases",
    },
  },
]

const skills = {
  es: [
    { title: "Datos & BI", skills: ["Python", "SQL", "Power BI", "DAX", "Pandas", "ETL", "Databricks"] },
    { title: "Automatización & IA", skills: ["RPA", "C#", "n8n", "LLM", "RAG", "VBA → Python"] },
    { title: "Backend", skills: ["Java", "Spring Boot", "Node.js", "APIs REST", "PostgreSQL", "Supabase"] },
    { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { title: "Cloud & DevOps", skills: ["Azure", "Docker", "Git", "GitHub", "Azure DevOps"] },
    { title: "Metodologías", skills: ["Scrum", "Agile", "Six Sigma", "Documentación técnica"] },
  ],
  en: [
    { title: "Data & BI", skills: ["Python", "SQL", "Power BI", "DAX", "Pandas", "ETL", "Databricks"] },
    { title: "Automation & AI", skills: ["RPA", "C#", "n8n", "LLM", "RAG", "VBA → Python"] },
    { title: "Backend", skills: ["Java", "Spring Boot", "Node.js", "REST APIs", "PostgreSQL", "Supabase"] },
    { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { title: "Cloud & DevOps", skills: ["Azure", "Docker", "Git", "GitHub", "Azure DevOps"] },
    { title: "Methodologies", skills: ["Scrum", "Agile", "Six Sigma", "Technical documentation"] },
  ],
}

function pick<T extends Record<string, unknown>>(items: T[], lang: Lang) {
  return items.map((item) => {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(item)) {
      if (v && typeof v === "object" && "es" in v && "en" in v) {
        out[k] = (v as Bi)[lang]
      } else if (Array.isArray(v)) {
        out[k] = v.map((x) => (x && typeof x === "object" && "es" in x ? (x as Bi)[lang] : x))
      } else {
        out[k] = v
      }
    }
    return out
  })
}

function build(lang: Lang) {
  const es = lang === "es"
  return {
    nav: nav[lang],
    hero: {
      greeting: es ? "Hola," : "Hi,",
      iam: es ? "Soy" : "I'm",
      role: es
        ? "Analista de Automatización y BI · Desarrollador Full-Stack"
        : "Automation & BI Analyst · Full-Stack Developer",
      intro: es
        ? "Reemplazo procesos manuales por tableros, automatizaciones y aplicaciones web. Trabajo con Power BI, Python, SQL y RPA en seguros y banca, y construyo productos full-stack con React, Next.js y Node.js."
        : "I replace manual processes with dashboards, automations and web applications. I work with Power BI, Python, SQL and RPA in insurance and banking, and build full-stack products with React, Next.js and Node.js.",
      cv: es ? "Descargar CV" : "Download CV",
      contact: es ? "Contactarme" : "Contact me",
    },
    about: {
      title: es ? "Sobre mí" : "About me",
      p1: es
        ? "Ingeniero de Sistemas y Analista de Automatización y BI en WTW, con experiencia en los sectores financiero y asegurador (Bancolombia, WTW). Me especializo en identificar procesos manuales y repetitivos y reemplazarlos por tableros confiables y automatizaciones que se ejecutan solas."
        : "Systems Engineer and Automation & BI Analyst at WTW, with experience in the financial and insurance sectors (Bancolombia, WTW). I specialize in identifying manual, repetitive processes and replacing them with reliable dashboards and automations that run on their own.",
      p2a: es ? "También desarrollo aplicaciones full-stack con" : "I also build full-stack applications with",
      p2stack: "React, Next.js, Node.js, Java, Spring Boot, Supabase, PostgreSQL & Azure",
      p2b: es
        ? ", desde la base de datos y la API hasta la interfaz, aplicando Scrum, arquitectura limpia y pruebas automatizadas."
        : ", from the database and API to the user interface, applying Scrum, clean architecture and automated testing.",
      p3: es
        ? "Me apasiona combinar datos, automatización e inteligencia artificial (n8n, LLM, RAG) para crear soluciones con impacto real en el negocio."
        : "I'm passionate about combining data, automation and artificial intelligence (n8n, LLMs, RAG) to build solutions with real business impact.",
      education: es ? "Educación" : "Education",
      degree: es ? "Ingeniería de Sistemas" : "B.S. in Systems Engineering",
      contact: es ? "Contacto" : "Contact",
      phone: es ? "Teléfono" : "Phone",
    },
    skills: { title: es ? "Habilidades" : "Skills", categories: skills[lang] },
    projects: {
      title: es ? "Proyectos" : "Projects",
      demo: es ? "Credenciales de prueba" : "Demo credentials",
      items: pick(projects, lang) as { title: string; description: string; demo?: string; tags: string[]; link: string }[],
    },
    experience: {
      title: es ? "Experiencia" : "Experience",
      items: pick(jobs, lang) as { title: string; company: string; period: string; summary?: string; bullets: string[] }[],
    },
    certifications: {
      title: es ? "Certificaciones" : "Certifications",
      subtitle: es
        ? "Certificaciones profesionales y cursos completados en plataformas líderes de formación"
        : "Professional certifications and completed courses from leading learning platforms",
      of: es ? "de" : "of",
      platform: es ? "Plataforma" : "Platform",
      date: es ? "Fecha de certificación" : "Certification date",
      description: es ? "Descripción" : "Description",
      prev: es ? "Anterior" : "Previous",
      next: es ? "Siguiente" : "Next",
      items: pick(certificates, lang) as { title: string; platform: string; date: string; image: string; description: string }[],
    },
    contact: {
      title: es ? "Contacto" : "Contact",
      phone: es ? "Teléfono" : "Phone",
      social: es ? "Redes" : "Social",
      name: es ? "Tu nombre" : "Your name",
      namePh: es ? "Ej: Juan Pérez" : "e.g. Jane Smith",
      email: es ? "Tu email" : "Your email",
      emailPh: es ? "tu.email@ejemplo.com" : "your.email@example.com",
      message: es ? "Tu mensaje" : "Your message",
      messagePh: es ? "Cuéntame qué tienes en mente..." : "Tell me what you have in mind...",
      required: es ? "Por favor completa todos los campos" : "Please fill in all fields",
      sendError: es ? "Error al enviar el mensaje" : "The message could not be sent",
      unknownError: es ? "Error desconocido" : "Unknown error",
      sending: es ? "Enviando..." : "Sending...",
      sent: es ? "¡Mensaje enviado!" : "Message sent!",
      send: es ? "Enviar mensaje" : "Send message",
    },
    footer: {
      rights: es ? "Todos los derechos reservados." : "All rights reserved.",
      built: es ? "Diseñado y desarrollado con React y Next.js" : "Designed and built with React & Next.js",
    },
    theme: { light: es ? "Modo claro" : "Light mode", dark: es ? "Modo oscuro" : "Dark mode" },
    langLabel: es ? "Cambiar idioma" : "Change language",
  }
}

const content = { es: build("es"), en: build("en") }

export const LINKEDIN_URL = "https://www.linkedin.com/in/angelramos-528974231"
export const GITHUB_URL = "https://github.com/Ang3lRamos"
export const EMAIL = "angelf.ramosc@unac.edu.co"
export const PHONE = "+57 320 225 9640"
