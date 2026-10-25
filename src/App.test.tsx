import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import App from './App'
import { SITE } from './data/site'
import { FAQ, NAV } from './data/content'
import { MAIL_TEMPLATE, buildQuoteMessage, mailtoUrl, validateQuote, whatsappUrl } from './lib/links'

beforeEach(() => {
  window.location.hash = ''
})

describe('enlaces comerciales', () => {
  it('WhatsApp usa el número oficial y el mensaje inicial', () => {
    const url = whatsappUrl()
    expect(url.startsWith('https://wa.me/573002145884?text=')).toBe(true)
    expect(decodeURIComponent(url.split('text=')[1])).toBe(SITE.whatsapp.message)
  })

  it('mailto usa el correo oficial y el asunto sugerido', () => {
    const url = mailtoUrl()
    expect(url.startsWith('mailto:direccionycomercial.innovar@gmail.com?subject=')).toBe(true)
    expect(url).toContain('subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Innovar%20Trazo%20y%20Corte%20Textil')
    expect(decodeURIComponent(url)).toContain('Nombre:')
    expect(MAIL_TEMPLATE).toContain('Empresa:')
  })

  it('el mensaje del formulario incluye los datos del cliente', () => {
    const msg = buildQuoteMessage({ name: 'Ana', company: 'Moda SAS', phone: '3001112233', email: 'a@b.co', details: 'Necesito cortar 500 camisetas' })
    expect(msg).toContain('Nombre: Ana')
    expect(msg).toContain('Empresa: Moda SAS')
    expect(msg).toContain('Necesito cortar 500 camisetas')
  })

  it('valida campos obligatorios y formato de correo', () => {
    const errs = validateQuote({ name: '', company: '', phone: '12', email: 'mal', details: 'corto' })
    expect(Object.keys(errs).sort()).toEqual(['company', 'details', 'email', 'name', 'phone'])
    expect(validateQuote({ name: 'Ana', company: 'Moda', phone: '', email: '', details: 'Corte de 300 prendas' })).toEqual({})
  })
})

describe('página', () => {
  it('muestra el título principal y las secciones de navegación', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Precisión en cada trazo\.\s*Calidad en cada corte\./)
    for (const n of NAV) expect(document.getElementById(n.id)).not.toBeNull()
    expect(document.getElementById('cotizacion')).not.toBeNull()
  })

  it('todos los enlaces de WhatsApp apuntan al número oficial', () => {
    const { container } = render(<App />)
    const wa = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me"]'))
    expect(wa.length).toBeGreaterThanOrEqual(5) // encabezado, hero, servicios, cotización, pie, flotante
    wa.forEach((a) => expect(a.href).toContain('wa.me/573002145884'))
    expect(screen.getByLabelText(/Escribir por WhatsApp a Innovar/)).toBeInTheDocument()
  })

  it('todos los enlaces mailto usan el correo oficial', () => {
    const { container } = render(<App />)
    const m = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[href^="mailto:"]'))
    expect(m.length).toBeGreaterThanOrEqual(3)
    m.forEach((a) => expect(a.getAttribute('href')).toContain(SITE.email.address))
  })

  it('los enlaces externos son seguros', () => {
    const { container } = render(<App />)
    container.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]').forEach((a) => expect(a.rel).toContain('noopener'))
  })

  it('no contiene afirmaciones no confirmadas (certificaciones, precios, cifras)', () => {
    const { container } = render(<App />)
    const text = container.textContent ?? ''
    expect(text).not.toMatch(/\bISO\b|certificad|\$\s?\d|años de experiencia|%/i)
  })

  it('las preguntas frecuentes se renderizan completas', () => {
    render(<App />)
    FAQ.forEach((f) => expect(screen.getByText(f.q)).toBeInTheDocument())
  })

  it('las imágenes tienen texto alternativo', () => {
    const { container } = render(<App />)
    container.querySelectorAll('img').forEach((img) => expect(img.hasAttribute('alt')).toBe(true))
  })
})

describe('formulario de cotización', () => {
  it('muestra errores si faltan datos y no abre WhatsApp', () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null)
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: /Enviar por WhatsApp/ }))
    expect(screen.getAllByRole('alert').length).toBeGreaterThanOrEqual(3)
    expect(open).not.toHaveBeenCalled()
  })

  it('abre WhatsApp con el mensaje cuando los datos son válidos', () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null)
    render(<App />)
    const form = screen.getByRole('form', { name: /Formulario de cotización/ })
    fireEvent.change(within(form).getByLabelText(/Nombre/), { target: { value: 'Ana Pérez' } })
    fireEvent.change(within(form).getByLabelText(/Empresa/), { target: { value: 'Moda SAS' } })
    fireEvent.change(within(form).getByLabelText(/¿Qué necesita\?/), { target: { value: 'Corte de 300 camisetas en tela punto' } })
    fireEvent.click(within(form).getByRole('button', { name: /Enviar por WhatsApp/ }))
    expect(open).toHaveBeenCalledTimes(1)
    const url = String(open.mock.calls[0][0])
    expect(url).toContain('https://wa.me/573002145884?text=')
    expect(decodeURIComponent(url)).toContain('Moda SAS')
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})

describe('política de privacidad', () => {
  it('se muestra con la ruta #/privacidad', async () => {
    window.location.hash = '#/privacidad'
    render(<App />)
    expect(await screen.findByRole('heading', { level: 1, name: /Política de privacidad/ })).toBeInTheDocument()
  })
})
