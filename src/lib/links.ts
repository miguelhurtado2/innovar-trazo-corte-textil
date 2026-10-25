import { SITE } from '../data/site'

export interface QuoteData {
  name: string
  company: string
  phone: string
  email: string
  details: string
}

/** Enlace de conversación de WhatsApp (wa.me). No usa la API oficial de WhatsApp Business. */
export function whatsappUrl(message: string = SITE.whatsapp.message): string {
  return `https://wa.me/${SITE.whatsapp.international}?text=${encodeURIComponent(message)}`
}

/** Plantilla inicial del correo, con campos para completar. */
export const MAIL_TEMPLATE = [
  'Hola, estoy interesado en los servicios de Innovar Trazo y Corte Textil y deseo solicitar una cotización.',
  '',
  'Nombre:',
  'Empresa:',
  'Teléfono:',
  'Correo:',
  'Descripción del requerimiento (tipo de prenda o producto, material, cantidades, fecha requerida):',
  '',
].join('\n')

export function mailtoUrl(body: string = MAIL_TEMPLATE, subject: string = SITE.email.subject): string {
  return `mailto:${SITE.email.address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/** Mensaje completo construido a partir del formulario. */
export function buildQuoteMessage(d: QuoteData): string {
  const lines = [
    'Hola, estoy interesado en los servicios de Innovar Trazo y Corte Textil y deseo solicitar una cotización.',
    '',
    `Nombre: ${d.name.trim()}`,
    `Empresa: ${d.company.trim()}`,
  ]
  if (d.phone.trim()) lines.push(`Teléfono: ${d.phone.trim()}`)
  if (d.email.trim()) lines.push(`Correo: ${d.email.trim()}`)
  lines.push('', 'Requerimiento:', d.details.trim())
  return lines.join('\n')
}

export type QuoteErrors = Partial<Record<keyof QuoteData, string>>

export function validateQuote(d: QuoteData): QuoteErrors {
  const e: QuoteErrors = {}
  if (d.name.trim().length < 2) e.name = 'Escriba su nombre.'
  if (d.company.trim().length < 2) e.company = 'Escriba el nombre de su empresa.'
  if (d.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = 'Revise el formato del correo.'
  if (d.phone.trim() && d.phone.replace(/\D/g, '').length < 7) e.phone = 'Revise el número de teléfono.'
  if (d.details.trim().length < 10) e.details = 'Cuéntenos brevemente qué necesita (mínimo 10 caracteres).'
  return e
}
