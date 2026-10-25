# Innovar Trazo y Corte Textil — sitio web

Sitio empresarial en React + Vite + TypeScript, prerenderizado para SEO y listo para GitHub Pages.

## Comandos
- `npm install` — instala dependencias
- `npm run dev` — desarrollo local
- `npm test` — pruebas (enlaces de WhatsApp/correo, formulario, contenido)
- `npm run build` — compila, prerenderiza y genera sitemap.xml, robots.txt y 404.html
- `npm run preview` — sirve la versión compilada

## Dónde editar
- **Datos de contacto, nombre, SEO:** `src/data/site.ts` (se actualiza en todo el sitio).
- **Textos, servicios, fotos, videos, preguntas frecuentes:** `src/data/content.ts`.
- **Respuesta sobre plazos/pagos/mínimos:** `pendingPolicyAnswer` en `site.ts` (editable hasta definir políticas).
- **Redes sociales:** `social` en `site.ts` (vacío hasta tener las cuentas oficiales).
- **Fotos nuevas:** copie la imagen a `src/assets/`, impórtela en `content.ts` y agréguela a `PHOTOS`. Videos: `public/videos/` y `VIDEOS`.

## Publicar en GitHub Pages
1. Cree un repositorio en GitHub y suba este proyecto a la rama `main`.
2. En *Settings → Pages*, elija **Source: GitHub Actions**.
3. Cada `git push` a `main` ejecuta `.github/workflows/deploy.yml` (pruebas, build y despliegue). La URL, el canonical, el sitemap y las etiquetas Open Graph se calculan solos.
4. Con dominio propio, configúrelo en *Settings → Pages*; el workflow lo detecta.

## Después de publicar (SEO)
- Registre el sitio en Google Search Console y envíe `sitemap.xml`.
- Cree y verifique la ficha de Google Business Profile (necesita dirección o área de servicio confirmada).
- Pida a clientes reales reseñas en Google; no agregue testimonios inventados.

## Pendientes que dependen de la empresa
- Confirmar autorización de uso de las fotos y videos donde aparece el personal.
- Dirección, horarios, redes y certificaciones: no se incluyeron por no estar confirmados.
- Revisar la política de privacidad con un asesor legal (Ley 1581 de 2012).
- Los formularios abren WhatsApp o el correo del cliente; no hay servidor que reciba datos.
