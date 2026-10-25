import { defineConfig, type Plugin } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { SITE, SEO } from './src/data/site'

const rawSite = process.env.SITE_URL || 'http://localhost:4173'
const siteUrl = rawSite.replace(/\/+$/, '')

function jsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#negocio`,
        name: SITE.name,
        url: `${siteUrl}/`,
        description: SEO.description,
        telephone: `+${SITE.whatsapp.international}`,
        email: SITE.email.address,
        logo: `${siteUrl}/logo-512.png`,
        image: `${siteUrl}/og-image.jpg`,
        areaServed: { '@type': 'City', name: SITE.city },
        address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressRegion: SITE.region, addressCountry: SITE.countryCode },
        serviceType: SITE.mainService,
      },
      { '@type': 'WebSite', '@id': `${siteUrl}/#web`, url: `${siteUrl}/`, name: SITE.name, inLanguage: 'es-CO' },
    ],
  }
}

function seoPlugin(): Plugin {
  return {
    name: 'innovar-seo',
    transformIndexHtml(html) {
      return html
        .replaceAll('__SITE_URL__', siteUrl)
        .replaceAll('__TITLE__', SEO.title)
        .replaceAll('__DESCRIPTION__', SEO.description)
        .replaceAll('__KEYWORDS__', SEO.keywords)
        .replace('<!--JSON_LD-->', `<script type="application/ld+json">${JSON.stringify(jsonLd())}</script>`)
    },
  }
}

export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), seoPlugin()],
  build: { target: 'es2020', assetsInlineLimit: 2048 },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
})
