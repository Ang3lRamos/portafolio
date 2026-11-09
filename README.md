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
  - proyectos con enlaces;
  - habilidades;
  - certificaciones;
  - contacto.
- **Formulario de contacto:** una ruta de API de Next.js valida los datos y envía el mensaje a mi correo con [Resend](https://resend.com).
- **CV descargable:** una ruta de API lo entrega, y un script con pdfkit genera la versión en PDF.

## Stack

- **Next.js 16** (App Router) con React 19 y TypeScript
- **Tailwind CSS v4** y componentes de shadcn/ui
- **Resend** para el correo y **pdfkit** para el PDF del CV
- **lucide-react** para los íconos

## Estructura

```
app/
  page.tsx              una sola página con todas las secciones
  api/contact/          envío del formulario de contacto (Resend)
  api/download-cv/      descarga del CV
components/             una sección por archivo, más los selectores de idioma y de tema
lib/i18n.tsx            textos en español e inglés, y datos de experiencia y proyectos
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

Para regenerar el PDF del CV, usa `node scripts/generate-cv.js`.
