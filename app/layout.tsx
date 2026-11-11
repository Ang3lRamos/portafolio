import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const SITE = "https://portfolioangeldev.netlify.app"
const DESCRIPTION =
  "Portfolio of Ángel Ramos - Automation & BI Analyst and Full-Stack Developer. Power BI, Python, SQL, RPA, AI agents with Claude, DevOps on AWS, React and Next.js."

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Ángel Ramos | Automation & BI Analyst · Full-Stack Developer",
  description: DESCRIPTION,
  openGraph: {
    title: "Ángel Ramos · Portfolio",
    description: DESCRIPTION,
    url: SITE,
    images: ["/projects/a2tradingbot.webp"],
    type: "website",
  },
}

// Aplica el tema antes de pintar para evitar el destello: el guardado, o el del sistema.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // El script cambia la clase de <html> antes de hidratar; la advertencia de React es esperada.
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
