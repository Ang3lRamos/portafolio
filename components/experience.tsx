"use client"

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-accent">Experiencia</h2>

        <div className="space-y-8 sm:space-y-12">
          {/* Analista de Operaciones */}
          <div className="border-l-2 border-accent pl-4 sm:pl-8 relative">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full -left-[7px] sm:-left-[9px] top-0"></div>

            <div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Analista de Operaciones</h3>
                  <p className="text-accent text-sm sm:text-base font-medium">Inversiones Manpe</p>
                </div>
                <span className="text-accent text-xs sm:text-base font-medium">Oct 2025 - Presente</span>
              </div>

              <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>Gestión y análisis de inventarios para mejorar la eficiencia operativa</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>Automatización de controles y procesos utilizando herramientas basadas en datos</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>Creación de reportes y dashboards para monitoreo de KPIs operativos</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>Liderazgo de equipos para optimizar procesos y reducir tiempos de operación</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Analista de Datos */}
          <div className="border-l-2 border-accent pl-4 sm:pl-8 relative">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full -left-[7px] sm:-left-[9px] top-0"></div>

            <div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Analista de Datos</h3>
                  <p className="text-accent text-sm sm:text-base font-medium">Bancolombia</p>
                </div>
                <span className="text-accent text-xs sm:text-base font-medium">Enero 2025 - Junio 2025</span>
              </div>

              <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>
                    Desarrollo de dashboards interactivos en Power BI para visualización de KPIs corporativos y toma de
                    decisiones
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>
                    Automatización de procesos de extracción y transformación de datos mediante Python (Pandas) y SQL
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>
                    Optimización de consultas SQL complejas para mejorar el rendimiento de reportes analíticos
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>Implementación de soluciones de análisis de datos en Azure, integrando pipelines ETL</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>
                    Colaboración en equipos ágiles (Scrum) para entrega iterativa de soluciones de Business Intelligence
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-accent pl-4 sm:pl-8 relative">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full -left-[7px] sm:-left-[9px] top-0"></div>

            <div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Analista de Datos Freelance</h3>
                  <p className="text-accent text-sm sm:text-base font-medium">Profesional Independiente</p>
                </div>
                <span className="text-accent text-xs sm:text-base font-medium">Feb 2024 - Oct 2024</span>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                Proporcioné servicios de análisis de datos a diversos clientes, transformando datos complejos en
                insights accionables para la toma de decisiones. Trabajé directamente con stakeholders para comprender
                necesidades del negocio y entregar soluciones personalizadas.
              </p>

              <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>
                    Desarrollé dashboards interactivos en Power BI/Excel para visualización de KPIs y métricas clave
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>Realicé análisis exploratorio y limpieza de datos utilizando Python, R y SQL</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>Generé reportes automatizados que redujeron el tiempo de análisis manual</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>Trabajé con conjuntos de datos de industrias: retail, finanzas y salud</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>Implementé modelos predictivos estadísticos para pronósticos y optimización</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
