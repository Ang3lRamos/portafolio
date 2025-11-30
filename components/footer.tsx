"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">© {currentYear} Ángel Ramos. Todos los derechos reservados.</p>
        <p className="text-muted-foreground text-xs mt-2">Diseñado y desarrollado con React & Next.js</p>
      </div>
    </footer>
  )
}
