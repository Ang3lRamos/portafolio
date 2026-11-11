import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const TO = "angelf.ramosc@unac.edu.co"

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(5000),
  // Campo trampa: invisible para personas; si viene lleno, lo llenó un bot.
  website: z.string().max(500).optional(),
})

/** Escapa el texto del visitante antes de meterlo en el HTML del correo. */
function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)
}

export async function POST(request: NextRequest) {
  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }
  const { name, email, message, website } = parsed.data
  if (website) {
    return NextResponse.json({ success: true }) // al bot se le responde igual, sin enviar nada
  }
  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] falta RESEND_API_KEY")
    return NextResponse.json({ error: "unavailable" }, { status: 503 })
  }

  try {
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: TO,
      replyTo: email,
      subject: `Nuevo mensaje de ${name.slice(0, 60)}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<h2>Nuevo mensaje de contacto</h2>
<p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Mensaje:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    })
    if (error) throw new Error(error.message)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[contact] no se pudo enviar:", err)
    return NextResponse.json({ error: "send_failed" }, { status: 502 })
  }
}
