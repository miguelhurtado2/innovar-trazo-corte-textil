import { useState } from 'react'
import { HOW_TO_QUOTE } from '../data/content'
import { SITE } from '../data/site'
import { buildQuoteMessage, mailtoUrl, validateQuote, whatsappUrl, type QuoteData, type QuoteErrors } from '../lib/links'
import { CheckIcon, MailIcon, WhatsAppIcon } from './Icons'

const EMPTY: QuoteData = { name: '', company: '', phone: '', email: '', details: '' }

export function HowToQuote() {
  return (
    <section className="section" aria-labelledby="como-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">Cómo trabajar con nosotros</p>
          <h2 id="como-title">Iniciar es sencillo</h2>
          <p>Tres pasos para solicitar su cotización de trazo y corte textil.</p>
        </header>
        <div className="how">
          <ol className="steps">
            {HOW_TO_QUOTE.steps.map((s, i) => (
              <li key={s.title} className="step reveal">
                <span className="step-num" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside className="info-card reveal">
            <h3>Información útil para cotizar</h3>
            <ul className="checks">
              {HOW_TO_QUOTE.info.map((i) => (<li key={i}><CheckIcon /> {i}</li>))}
            </ul>
            <div className="info-actions">
              <a className="btn btn-wa" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Escribir por WhatsApp</a>
              <a className="btn btn-outline" href={mailtoUrl()}><MailIcon /> Escribir por correo</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function QuoteForm() {
  const [data, setData] = useState<QuoteData>(EMPTY)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [notice, setNotice] = useState('')

  const set = (k: keyof QuoteData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }))

  const submit = (channel: 'whatsapp' | 'email') => {
    const errs = validateQuote(data)
    setErrors(errs)
    if (Object.keys(errs).length) {
      setNotice('')
      return
    }
    const msg = buildQuoteMessage(data)
    if (channel === 'whatsapp') {
      window.open(whatsappUrl(msg), '_blank', 'noopener,noreferrer')
      setNotice('Abrimos WhatsApp con su mensaje listo. Solo falta que lo envíe.')
    } else {
      window.location.href = mailtoUrl(msg)
      setNotice('Abrimos su programa de correo con el mensaje listo. Solo falta que lo envíe.')
    }
  }

  const field = (k: keyof QuoteData, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}, required = false) => (
    <div className={`field${errors[k] ? ' has-error' : ''}`}>
      <label htmlFor={`q-${k}`}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      <input id={`q-${k}`} value={data[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `q-${k}-err` : undefined} required={required} {...props} />
      {errors[k] && <p id={`q-${k}-err`} className="err" role="alert">{errors[k]}</p>}
    </div>
  )

  return (
    <section id="cotizacion" className="section section-quote" aria-labelledby="cotizacion-title">
      <div className="container quote">
        <div className="quote-copy reveal">
          <p className="kicker kicker-light">Cotización</p>
          <h2 id="cotizacion-title">Solicite su cotización</h2>
          <p>
            Cuéntenos qué necesita. Al enviar, preparamos el mensaje con sus datos y lo abrimos en WhatsApp o en su correo para que
            usted lo envíe directamente a nuestro equipo comercial.
          </p>
          <ul className="contact-list">
            <li><WhatsAppIcon /> <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp {SITE.whatsapp.display}</a></li>
            <li><MailIcon /> <a href={mailtoUrl()}>{SITE.email.address}</a></li>
          </ul>
        </div>

        <form className="quote-form reveal" noValidate onSubmit={(e) => e.preventDefault()} aria-label="Formulario de cotización">
          {field('name', 'Nombre', { autoComplete: 'name' }, true)}
          {field('company', 'Empresa', { autoComplete: 'organization' }, true)}
          <div className="row2">
            {field('phone', 'Teléfono', { type: 'tel', autoComplete: 'tel', inputMode: 'tel' })}
            {field('email', 'Correo electrónico', { type: 'email', autoComplete: 'email' })}
          </div>
          <div className={`field${errors.details ? ' has-error' : ''}`}>
            <label htmlFor="q-details">¿Qué necesita? <span aria-hidden="true">*</span></label>
            <textarea
              id="q-details"
              rows={5}
              value={data.details}
              onChange={set('details')}
              placeholder="Tipo de prenda o producto, material, cantidades, fecha requerida…"
              aria-invalid={!!errors.details}
              aria-describedby={errors.details ? 'q-details-err' : undefined}
              required
            />
            {errors.details && <p id="q-details-err" className="err" role="alert">{errors.details}</p>}
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-wa btn-lg" onClick={() => submit('whatsapp')}><WhatsAppIcon /> Enviar por WhatsApp</button>
            <button type="button" className="btn btn-outline-light btn-lg" onClick={() => submit('email')}><MailIcon /> Enviar por correo</button>
          </div>
          {notice && <p className="notice" role="status">{notice}</p>}
          <p className="form-note">
            Esta página no almacena su información. Consulte la <a href="#/privacidad">política de privacidad</a>.
          </p>
        </form>
      </div>
    </section>
  )
}
