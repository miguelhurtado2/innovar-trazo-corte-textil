import { NAV } from '../data/content'
import { SITE } from '../data/site'
import { mailtoUrl, whatsappUrl } from '../lib/links'
import logo from '../assets/logo.webp'
import { MailIcon, PinIcon, WhatsAppIcon } from './Icons'

export function Footer() {
  return (
    <footer id="contacto" className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="footer-brand" href="#inicio" aria-label={`${SITE.name} — inicio`}>
            <img src={logo} alt="" width={56} height={56} loading="lazy" />
            <span><strong>INNOVAR</strong><small>Trazo y corte textil</small></span>
          </a>
          <p className="footer-about">Trazo y corte textil para empresas de confección.</p>
          <p className="footer-loc"><PinIcon /> {SITE.city}, {SITE.region}, {SITE.country}</p>
        </div>

        <nav aria-label="Pie de página">
          <h2>Navegación</h2>
          <ul>
            {NAV.filter((n) => n.id !== 'contacto').map((n) => (
              <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>
            ))}
            <li><a href="#cotizacion">Solicitar cotización</a></li>
            <li><a href="#/privacidad">Política de privacidad</a></li>
          </ul>
        </nav>

        <div>
          <h2>Contacto comercial</h2>
          <ul className="footer-contact">
            <li><WhatsAppIcon size={18} /> <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">{SITE.whatsapp.display}</a></li>
            <li><MailIcon size={18} /> <a href={mailtoUrl()}>{SITE.email.address}</a></li>
            {SITE.social.map((s) => (
              <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a Innovar Trazo y Corte Textil"
    >
      <WhatsAppIcon size={28} />
      <span>Cotizar por WhatsApp</span>
    </a>
  )
}
