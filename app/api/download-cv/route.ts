import { NextResponse } from "next/server"

export async function GET() {
  const cvContent = `
ÁNGEL RAMOS
ANALISTA DE DATOS | DESARROLLADOR DE SOFTWARE

CONTACTO
Teléfono: +57 320 225 9640
Email: angelf.ramosc@unac.edu.co
GitHub: github.com/Ang3lRamos
LinkedIn: linkedin.com/in/angel-ramos-528974231

PERFIL
Analista de Datos y Desarrollador de Software con experiencia en automatización de procesos, construcción de soluciones analíticas y desarrollo de aplicaciones. Especializado en Python, SQL, Power BI y Microsoft Azure para el diseño de pipelines ETL, modelado de datos y creación de dashboards de alto impacto. Capaz de integrar análisis, desarrollo y operación mediante prácticas ágiles, optimización de flujos y aplicación de ingeniería de datos. Enfocado en transformar información compleja en soluciones funcionales y decisiones estratégicas basadas en datos.

EDUCACIÓN
Corporación Universitaria Adventista
Ingeniería de Sistemas
2021 - 2025

CERTIFICACIONES Y COMPETENCIAS
• Certificación en Análisis de Datos - Udemy
• Certificación en Python para Data Science - Udemy
• Programación Web desde Cero - Egg Cooperation
• Certificación en Power BI - Udemy
• Desarrollo Ágil y Scrum - Udemy

EXPERIENCIA LABORAL

Analista de Operaciones
Oct 2025 - Presente
• Gestión y análisis de inventarios para mejorar la eficiencia operativa
• Automatización de controles y procesos utilizando herramientas basadas en datos
• Creación de reportes y dashboards para monitoreo de KPIs operativos
• Liderazgo de equipos para optimizar procesos y reducir tiempos de operación

Analista de Datos
Enero 2025 - Junio 2025
• Desarrollo de dashboards interactivos en Power BI para visualización de KPIs corporativos y toma de decisiones
• Automatización de procesos de extracción y transformación de datos mediante Python (Pandas) y SQL
• Optimización de consultas SQL complejas para mejorar el rendimiento de reportes analíticos
• Implementación de soluciones de análisis de datos en Azure, integrando pipelines ETL
• Colaboración en equipos ágiles (Scrum) para entrega iterativa de soluciones de Business Intelligence
• Automatización de reportes mediante Python y consultas SQL, integrados con Excel y Power BI

HABILIDADES TÉCNICAS

Lenguajes & Frameworks
• Python, Java, JavaScript/TypeScript
• Node.js, Spring Boot, FastAPI

Cloud & DevOps
• Microsoft Azure, Azure Data Factory, AWS

Desarrollo Web
• HTML, CSS, React, Next.js

Análisis de Datos
• Power BI, Pandas, Excel

Metodologías
• Scrum, Desarrollo Ágil, DataOps, MLOps

Bases de Datos
• PostgreSQL, MySQL, Supabase
`

  const pdfContent = Buffer.from(cvContent, "utf-8")

  return new NextResponse(pdfContent, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Angel_Ramos_CV.pdf"',
    },
  })
}
