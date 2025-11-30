import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ángel Ramos | Data Analyst & Software Developer",
  description:
    "Professional portfolio of Ángel Ramos - Data Analyst and Software Developer specializing in Python, SQL, Power BI, and web development.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'auto';
                const html = document.documentElement;
                
                if (theme === 'auto') {
                  const hour = new Date().getHours();
                  const isDark = hour < 6 || hour >= 18;
                  html.classList.toggle('dark', isDark);
                } else {
                  html.classList.toggle('dark', theme === 'dark');
                }
              })()
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
