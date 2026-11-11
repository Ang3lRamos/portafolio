import PDFDocument from "pdfkit"
import fs from "node:fs"
import path from "node:path"

const doc = new PDFDocument({ margin: 50 })
const filePath = path.join(process.cwd(), "public", "cv.pdf")

// Crear carpeta public si no existe
if (!fs.existsSync(path.join(process.cwd(), "public"))) {
  fs.mkdirSync(path.join(process.cwd(), "public"), { recursive: true })
}

const stream = fs.createWriteStream(filePath)
doc.pipe(stream)

// Encabezado
doc.fontSize(24).font("Helvetica-Bold").text("ÁNGEL RAMOS", { align: "center" })
doc.fontSize(12).font("Helvetica").text("ANALISTA DE DATOS | DESARROLLADOR DE SOFTWARE", { align: "center" })
doc
  .fontSize(10)
  .text("📧 angelf.ramosc@unac.edu.co | 📱 +57 320 225 9640 | 🔗 github.com/Ang3lRamos", { align: "center" })
doc.moveDown(0.5)

// Perfil
doc.fontSize(12).font("Helvetica-Bold").text("PERFIL", { underline: true })
doc
  .fontSize(10)
  .font("Helvetica")
  .text(
    "Analista de Datos y Desarrollador de Software con experiencia en automatización de procesos, construcción de soluciones analíticas y desarrollo de aplicaciones. Especializado en Python, SQL, Power BI y Microsoft Azure para el diseño de pipelines ETL, modelado de datos y creación de dashboards de alto impacto. Capaz de integrar análisis, desarrollo y operación mediante prácticas ágiles, optimización de flujos y aplicación de ingeniería de datos. Enfocado en transformar información compleja en soluciones funcionales y decisiones estratégicas basadas en datos.",
    { align: "justify" },
  )
doc.moveDown(0.5)

// Educación
doc.fontSize(12).font("Helvetica-Bold").text("EDUCACIÓN", { underline: true })
doc.fontSize(10).font("Helvetica-Bold").text("Corporación Universitaria Adventista")
doc.fontSize(10).font("Helvetica").text("Ingeniería de Sistemas | 2021 - 2025")
doc.moveDown(0.3)

// Certificaciones
doc.fontSize(12).font("Helvetica-Bold").text("CERTIFICACIONES Y COMPETENCIAS", { underline: true })
doc
  .fontSize(10)
  .font("Helvetica")
  .list([
    "Certificación en Análisis de Datos - Udemy",
    "Certificación en Python para Data Science - Udemy",
    "Programación Web desde Cero - Egg Cooperation",
    "Certificación en Power BI - Udemy",
    "Desarrollo Ágil y Scrum - Udemy",
  ])
doc.moveDown(0.3)

// Experiencia Laboral
doc.fontSize(12).font("Helvetica-Bold").text("EXPERIENCIA LABORAL", { underline: true })

doc.fontSize(11).font("Helvetica-Bold").text("Analista de Operaciones | Oct 2025 - Presente")
doc
  .fontSize(10)
  .font("Helvetica")
  .list([
    "Gestión y análisis de inventarios para mejorar la eficiencia operativa",
    "Automatización de controles y procesos utilizando herramientas basadas en datos",
    "Creación de reportes y dashboards para monitoreo de KPIs operativos",
    "Liderazgo de equipos para optimizar procesos y reducir tiempos de operación",
  ])

doc.fontSize(11).font("Helvetica-Bold").text("Analista de Datos | Enero 2025 - Junio 2025")
doc
  .fontSize(10)
  .font("Helvetica")
  .list([
    "Desarrollo de dashboards interactivos en Power BI para visualización de KPIs corporativos",
    "Automatización de procesos de extracción y transformación de datos mediante Python (Pandas) y SQL",
    "Optimización de consultas SQL complejas para mejorar el rendimiento de reportes analíticos",
    "Implementación de soluciones de análisis de datos en Azure, integrando pipelines ETL",
    "Colaboración en equipos ágiles (Scrum) para entrega iterativa de soluciones de Business Intelligence",
  ])
doc.moveDown(0.3)

// Habilidades Técnicas
doc.fontSize(12).font("Helvetica-Bold").text("HABILIDADES TÉCNICAS", { underline: true })
doc.fontSize(10).font("Helvetica")
doc.text("Lenguajes & Frameworks: Python, Java, JavaScript/TypeScript, Node.js, Spring Boot, FastAPI")
doc.text("Cloud & DevOps: Microsoft Azure, Azure Data Factory, AWS")
doc.text("Desarrollo Web: HTML, CSS, React, Next.js")
doc.text("Análisis de Datos: Power BI, Pandas, Excel")
doc.text("Metodologías: Scrum, Desarrollo Ágil, DataOps, MLOps")
doc.text("Bases de Datos: PostgreSQL, MySQL, Supabase")

doc.end()

stream.on("finish", () => {
  console.log("✅ CV PDF generado en public/cv.pdf")
})

stream.on("error", (err) => {
  console.error("❌ Error generando PDF:", err)
})
