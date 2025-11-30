import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Por favor completa todos los campos" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Por favor ingresa un email válido" }, { status: 400 })
    }

    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "angelf.ramosc@unac.edu.co",
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (response.error) {
      throw new Error(response.error.message)
    }

    console.log("[Contact Form] Email enviado exitosamente:", response.data?.id)

    return NextResponse.json(
      {
        success: true,
        message: "¡Mensaje enviado exitosamente!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[Contact Form Error]:", error)
    return NextResponse.json({ error: "Error al procesar tu mensaje. Por favor intenta de nuevo." }, { status: 500 })
  }
}
