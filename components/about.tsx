"use client"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-foreground">Sobre mí</h2>

        <div className="bg-card rounded-lg p-6 sm:p-8 md:p-12 shadow-sm border border-border">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Ingeniero de Sistemas con experiencia en automatización de procesos, análisis de datos y desarrollo de
              software backend. Especializado en construir soluciones escalables que integran datos, automatizan flujos
              y optimizan procesos mediante herramientas modernas.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Manejo{" "}
              <span className="text-accent font-semibold">
                Java, Spring Boot, Python, SQL, Power BI, Microsoft Azure, AWS, Node.js y React
              </span>
              . Trabajo bajo metodologías ágiles como Scrum, aplicando arquitectura limpia y pruebas automatizadas.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Me apasiona transformar información compleja en soluciones funcionales y decisiones estratégicas basadas
              en datos. Enfocado en diseñar aplicaciones de alto impacto que generen valor real en los negocios.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
              <div>
                <h3 className="text-accent font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Educación</h3>
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">Ingeniería de Sistemas</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Corporación Universitaria Adventista</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">2021 - 2025</p>
                </div>
              </div>
              <div>
                <h3 className="text-accent font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Contacto</h3>
                <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <p className="text-muted-foreground break-all">
                    <span className="font-medium text-foreground">Email:</span> angelf.ramosc@unac.edu.co
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Teléfono:</span> +57 320 225 9640
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
