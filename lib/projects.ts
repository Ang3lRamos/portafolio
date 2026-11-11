// Proyectos del portafolio. Para agregar uno, añade un objeto a PROJECTS: el número (#001…),
// los filtros y el contador se calculan solos.

export type Bi = { es: string; en: string }

export type ProjectType = "ai" | "web" | "data" | "trading" | "ml"

export const PROJECT_TYPES: Record<ProjectType, { label: Bi; color: string }> = {
  ai: { label: { es: "IA", en: "AI" }, color: "#8b5cf6" },
  web: { label: { es: "Web", en: "Web" }, color: "#3b82f6" },
  data: { label: { es: "Datos", en: "Data" }, color: "#f59e0b" },
  trading: { label: { es: "Trading", en: "Trading" }, color: "#10b981" },
  ml: { label: { es: "ML", en: "ML" }, color: "#ec4899" },
}

export type Project = {
  slug: string
  /** El primer tipo define el color de la tarjeta. */
  types: ProjectType[]
  title: Bi
  summary: Bi
  highlights: Bi[]
  stack: string[]
  /** Captura en /public/projects (1600×1000, tomada al doble de resolución). Sin imagen se dibuja un ícono del tipo. */
  image?: string
  demo?: string
  repo?: string
  credentials?: string
}

export const PROJECTS: Project[] = [
  {
    slug: "a2tradingbot",
    types: ["trading", "ai", "data"],
    title: { es: "a2tradingbot", en: "a2tradingbot" },
    summary: {
      es: "Dos bots de trading de cripto en papel operando 24/7. Claude revisa cada señal con JSON validado, con backtesting sin trampas y un dashboard en vivo.",
      en: "Two crypto paper-trading bots running 24/7. Claude reviews every signal through validated JSON, with honest backtesting and a live dashboard.",
    },
    highlights: [
      { es: "Pipeline de datos idempotente con más de 175 mil velas horarias desde 2019", en: "Idempotent data pipeline with 175k+ hourly candles since 2019" },
      { es: "Evaluación estadística pre-registrada de la IA con bootstrap por bloques", en: "Pre-registered statistical evaluation of the AI with block bootstrap" },
      { es: "Dashboard en Next.js con precios en vivo y alertas por Telegram", en: "Next.js dashboard with live prices and Telegram alerts" },
    ],
    stack: ["Python", "Claude", "PostgreSQL", "Next.js", "Binance API", "Telegram"],
    image: "/projects/a2tradingbot.webp",
    demo: "https://web-pi-inky-0cgra45qzm.vercel.app",
    repo: "https://github.com/Ang3lRamos/a2tradingbot",
  },
  {
    slug: "olla",
    types: ["ai", "web"],
    title: { es: "Olla", en: "Olla" },
    summary: {
      es: "Planificador de menús con IA para hogares colombianos: el modelo elige del catálogo y el código calcula cantidades y precios.",
      en: "AI meal planner for Colombian households: the model picks from the catalog and the code calculates quantities and prices.",
    },
    highlights: [
      { es: "La salida del modelo se valida con zod y se sanea antes de usarla", en: "Model output is validated with zod and sanitized before use" },
      { es: "Reintentos con backoff y prompts que reparan el esquema", en: "Retries with backoff and schema-repair prompts" },
      { es: "Seguridad por fila (RLS) para varios hogares, probada en Postgres real", en: "Multi-household row-level security tested on real Postgres" },
    ],
    stack: ["Next.js 16", "Supabase", "zod", "Vitest", "TypeScript"],
    image: "/projects/olla.webp",
    demo: "https://olla-alpha.vercel.app",
    repo: "https://github.com/Ang3lRamos/Olla",
  },
  {
    slug: "agente-ventas",
    types: ["ai", "web"],
    title: { es: "Agente de ventas con IA", en: "AI sales agent" },
    summary: {
      es: "Agente conversacional para una perfumería: busca en el catálogo real, arma pedidos y escala a un humano cuando hace falta.",
      en: "Conversational agent for a perfume store: searches the real catalog, builds orders and escalates to a human when needed.",
    },
    highlights: [
      { es: "Herramientas (tool use) con la API de Anthropic", en: "Tool use with the Anthropic API" },
      { es: "Memoria de la conversación entre mensajes", en: "Conversation memory across messages" },
      { es: "Cada herramienta tiene pruebas unitarias", en: "Every tool is unit-tested" },
    ],
    stack: ["Next.js", "Anthropic API", "Supabase", "TypeScript"],
    repo: "https://github.com/Ang3lRamos/perfumer-a",
  },
  {
    slug: "mega-optica",
    types: ["web"],
    title: { es: "Mega Óptica", en: "Mega Óptica" },
    summary: {
      es: "Sistema de visiometría ocupacional en producción: pacientes, historias clínicas, acceso por roles e informes en PDF.",
      en: "Occupational visiometry system in production: patients, clinical records, role-based access and PDF reports.",
    },
    highlights: [
      { es: "Generación de informes clínicos en PDF", en: "Clinical PDF report generation" },
      { es: "Acceso por roles para personal y administración", en: "Role-based access for staff and admins" },
    ],
    stack: ["Next.js", "Supabase", "shadcn/ui", "react-pdf"],
    image: "/projects/mega-optica.webp",
    demo: "https://mega-optica.vercel.app",
    repo: "https://github.com/Ang3lRamos/mega-optica",
  },
  {
    slug: "aqua-bear",
    types: ["web"],
    title: { es: "Aqua Bear", en: "Aqua Bear" },
    summary: {
      es: "Plataforma de reservas para un club de natación, con autenticación y panel de administración para gestionar las clases.",
      en: "Booking platform for a swim club, with authentication and an admin dashboard to manage classes.",
    },
    highlights: [
      { es: "Calendario de reservas de clases", en: "Class booking calendar" },
      { es: "Control de acceso por roles (RBAC) entre clientes y administradores", en: "Role-based access control (RBAC) between clients and admins" },
    ],
    stack: ["Next.js 15", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/aqua-bear.webp",
    demo: "https://aqua-bear.vercel.app",
    repo: "https://github.com/Ang3lRamos/aqua-bear",
  },
  {
    slug: "atelier",
    types: ["web", "ai"],
    title: { es: "Átelier", en: "Átelier" },
    summary: {
      es: "E-commerce de moda con un chatbot que responde solo con datos reales de la tienda mediante function calling.",
      en: "Fashion e-commerce with a chatbot that answers only with real store data through function calling.",
    },
    highlights: [
      { es: "Carrito, favoritos y panel de administración", en: "Cart, favorites and admin panel" },
      { es: "Control de acceso por roles (RBAC)", en: "Role-based access control (RBAC)" },
    ],
    stack: ["Next.js 15", "Supabase", "OpenRouter", "TypeScript"],
    repo: "https://github.com/Ang3lRamos/Tienda",
  },
  {
    slug: "ingenia",
    types: ["ai"],
    title: { es: "Chatbot Ingenia", en: "Ingenia Chatbot" },
    summary: {
      es: "Chatbot académico con flujos en n8n, RAG y LLM, con Supabase para los datos y Redis como caché.",
      en: "Academic chatbot built with n8n workflows, RAG and LLMs, using Supabase for data and Redis for caching.",
    },
    highlights: [
      { es: "Arquitectura RAG sobre documentos propios", en: "RAG architecture over custom documents" },
      { es: "Orquestación de flujos con n8n", en: "Workflow orchestration with n8n" },
    ],
    stack: ["Next.js", "n8n", "Supabase", "Redis", "LLM", "RAG"],
    demo: "https://ingenia.singularity.cyou/chat-ingenia",
    credentials: "angel@ingenia.com / ingenia123",
  },
  {
    slug: "mt5bot",
    types: ["trading"],
    title: { es: "mt5bot", en: "mt5bot" },
    summary: {
      es: "Bot para MetaTrader 5 con núcleo de lógica pura, filtro de riesgo PASS/BLOCK, tamaño por riesgo, backtest con Monte Carlo y kill switch.",
      en: "MetaTrader 5 bot with a pure-logic core, PASS/BLOCK risk filter, risk-based sizing, Monte Carlo backtest and kill switch.",
    },
    highlights: [
      { es: "Las pruebas corren sin MetaTrader instalado", en: "Tests run without MetaTrader installed" },
      { es: "Simulación de Monte Carlo sobre el backtest", en: "Monte Carlo simulation over the backtest" },
    ],
    stack: ["Python", "MetaTrader 5", "SQLite", "pytest"],
    repo: "https://github.com/Ang3lRamos/a1Tradingbot-",
    demo: "https://web-gzse.vercel.app",
  },
  {
    slug: "powerbi-bigdata",
    types: ["data"],
    title: { es: "Dashboard de Power BI", en: "Power BI dashboard" },
    summary: {
      es: "Dashboard interactivo construido sobre Databricks y Spark para procesar grandes volúmenes de datos.",
      en: "Interactive dashboard built on Databricks and Spark to process large data volumes.",
    },
    highlights: [{ es: "Procesamiento distribuido con Spark", en: "Distributed processing with Spark" }],
    stack: ["Databricks", "Spark", "Python", "Power BI"],
    demo: "https://app.powerbi.com/view?r=eyJrIjoiOGJmZWVkZTctNzNmMC00OTZjLWFlNGItZmUwNzY1ODRhNmM0IiwidCI6IjRkZDEzM2ZkLWNhMmEtNDA5OC1hZTkxLTBlYWEwYzU4MjNiOCIsImMiOjR9",
  },
  {
    slug: "data-cleaning",
    types: ["data"],
    title: { es: "Limpieza y validación de datos", en: "Data cleaning & validation" },
    summary: {
      es: "Extracción, limpieza y procesamiento de datos con Pandas, con análisis exploratorio, gráficos y pruebas unitarias.",
      en: "Data extraction, cleaning and processing with Pandas, with exploratory analysis, charts and unit tests.",
    },
    highlights: [{ es: "Calidad de datos asegurada con pytest", en: "Data quality enforced with pytest" }],
    stack: ["Python", "Pandas", "Matplotlib", "pytest", "SQL", "Jupyter"],
    repo: "https://github.com/Ang3lRamos/data-cleaning-project",
    demo: "https://web-hpco.vercel.app",
  },
  {
    slug: "predictive-model",
    types: ["ml", "data"],
    title: { es: "Modelo predictivo", en: "Predictive model" },
    summary: {
      es: "Modelo de machine learning con scikit-learn: preparación de datos, entrenamiento y evaluación.",
      en: "Machine learning model with scikit-learn: data preparation, training and evaluation.",
    },
    highlights: [{ es: "Notebook reproducible en Google Colab", en: "Reproducible notebook on Google Colab" }],
    stack: ["Python", "scikit-learn", "Pandas"],
    repo: "https://github.com/Ang3lRamos/modelo-predictivo",
    demo: "https://web-zpvk.vercel.app",
  },
  {
    slug: "pokedex",
    types: ["web"],
    title: { es: "Pokédex", en: "Pokédex" },
    summary: {
      es: "App interactiva con búsqueda, filtros por tipo y ficha de detalle, consumiendo una API REST en tiempo real.",
      en: "Interactive app with search, type filters and detail views, consuming a REST API in real time.",
    },
    highlights: [{ es: "Más de 1.300 registros con búsqueda instantánea", en: "1,300+ entries with instant search" }],
    stack: ["React", "TypeScript", "REST API"],
    image: "/projects/pokedex.webp",
    demo: "https://pokedex-angel.netlify.app/",
  },
]
