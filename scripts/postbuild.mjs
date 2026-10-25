// Posprocesado: prerenderiza el HTML (SEO) y genera sitemap, robots y 404.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const siteUrl = (process.env.SITE_URL || 'http://localhost:4173').replace(/\/+$/, '')
const dist = resolve('dist')

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const html = readFileSync(`${dist}/index.html`, 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('No se encontró el marcador <!--app-html--> en dist/index.html')

const out = html.replace('<!--app-html-->', render())
writeFileSync(`${dist}/index.html`, out)
writeFileSync(`${dist}/404.html`, out)

const today = new Date().toISOString().slice(0, 10)
writeFileSync(
  `${dist}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
)
writeFileSync(`${dist}/robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
writeFileSync(`${dist}/.nojekyll`, '')

rmSync(resolve('dist-ssr'), { recursive: true, force: true })
console.log(`✔ Prerender, sitemap.xml, robots.txt y 404.html generados (SITE_URL=${siteUrl})`)
