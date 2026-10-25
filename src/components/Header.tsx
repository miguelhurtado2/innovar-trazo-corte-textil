import { useState } from 'react'
import { NAV } from '../data/content'
import { SITE } from '../data/site'
import { whatsappUrl } from '../lib/links'
import logo from '../assets/logo.webp'
import { WhatsAppIcon } from './Icons'

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" onClick={close} aria-label={`${SITE.name} — ir al inicio`}>
          <img src={logo} alt="" width={48} height={48} />
          <span className="brand-text">
            <strong>INNOVAR</strong>
            <small>Trazo y corte textil</small>
          </span>
        </a>

        <nav id="menu" className={`nav${open ? ' is-open' : ''}`} aria-label="Principal">
          <ul>
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={close}>{n.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a className="btn btn-wa-outline" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a>
            <a className="btn btn-accent" href="#cotizacion" onClick={close}>Solicitar cotización</a>
          </div>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
