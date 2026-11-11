# Portafolio · Ángel Ramos

Mi sitio personal: experiencia, proyectos, habilidades y certificaciones como Analista de Automatización y BI y desarrollador full-stack. Es bilingüe (español e inglés) y tiene formulario de contacto y CV descargable.

**Sitio:** https://portfolioangeldev.netlify.app

*Personal portfolio website, bilingual (ES/EN), with a working contact form and downloadable CV.*

## Funcionalidades

- **Bilingüe ES/EN:** todo el contenido sale de un diccionario tipado en [`lib/i18n.tsx`](lib/i18n.tsx) y se cambia con un botón, sin recargar la página.
- **Tema claro y oscuro.**
- **Secciones:**
  - inicio;
  - sobre mí;
  - experiencia, con WTW, Bancolombia, Inversiones Manpe y trabajo independiente;
  - proyectos en tarjetas de colores por tipo (IA, Web, Datos, Trading, ML), con buscador, filtros y una ficha de detalle;
  - habilidades;
  - certificaciones;
  - contacto.
- **Formulario de contacto:** una ruta de API de Next.js valida los datos con zod, escapa el contenido, descarta bots con un campo trampa y envía el mensaje a mi correo con [Resend](https://resend.com).
- **CV:** el botón abre el CV publicado; `npm run cv` genera una versión en PDF con pdfkit.

## Stack

- **Next.js 16** (App Router) con React 19 y TypeScript
- **Tailwind CSS v4** y componentes de shadcn/ui
- **Radix Dialog** para los modales accesibles (Esc, foco atrapado)
- **zod** y **Resend** para el formulario, **pdfkit** para el PDF del CV
- **lucide-react** para los íconos

## Estructura

```
app/
  page.tsx              una sola página con todas las secciones
  api/contact/          envío del formulario de contacto (Resend)
components/             una sección por archivo, más los selectores de idioma y de tema
components/ui/          botón y modal reutilizables
lib/projects.ts         proyectos: agregar uno es agregar un objeto a la lista
lib/i18n.tsx            textos en español e inglés, experiencia y certificaciones
public/projects/        capturas de los proyectos (800×500, WebP)
scripts/generate-cv.js  genera public/cv.pdf
```

## Correr en local

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Crea un archivo `.env.local` con la llave de Resend, necesaria para el formulario:

   ```env
   RESEND_API_KEY=tu-llave
   ```

3. Arranca el servidor:

   ```bash
   npm run dev
   ```

   Abre http://localhost:3000.

Para regenerar el PDF del CV, usa `npm run cv`. Antes de subir cambios: `npm run lint` y `npm run build`.
