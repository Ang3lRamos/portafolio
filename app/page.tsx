"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/lib/i18n"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
