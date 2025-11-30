"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor completa todos los campos")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-accent text-center">Contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Teléfono</h3>
              <a
                href="tel:+573202259640"
                className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <Phone size={20} />
                +57 320 225 9640
              </a>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:angelf.ramosc@unac.edu.co"
                className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2 cursor-pointer text-sm sm:text-base break-all"
              >
                <Mail size={20} className="flex-shrink-0" />
                angelf.ramosc@unac.edu.co
              </a>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4">Redes Sociales</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Ang3lRamos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors cursor-pointer hover:scale-110 transform duration-300"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/angel-ramos-528974231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors cursor-pointer hover:scale-110 transform duration-300"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                Tu nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ej: Juan Pérez"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                required
                className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                Tu email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu.email@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                required
                className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                Tu mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Cuéntame qué tienes en mente..."
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                required
                rows={4}
                className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none cursor-pointer disabled:opacity-50"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-3 sm:px-4 py-2 text-red-400 text-xs sm:text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer transition-all hover:shadow-lg hover:shadow-accent/30 disabled:opacity-50 text-sm sm:text-base"
              disabled={isSubmitted || isLoading}
            >
              {isLoading ? "Enviando..." : isSubmitted ? "¡Mensaje enviado!" : "Enviar Mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
