import { IMAGES } from '../data/content'
import { SITE } from '../data/site'
import { whatsappUrl } from '../lib/links'
import { ArrowIcon, PinIcon, WhatsAppIcon } from './Icons'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <img
        className="hero-bg"
        src={IMAGES.tendido}
        alt="Equipo de Innovar extendiendo el material sobre la mesa de corte"
        width={1600}
        height={1200}
        // React 18 solo reconoce el atributo en minúsculas
        {...{ fetchpriority: 'high' }}
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="eyebrow">
          <PinIcon /> {SITE.city}, {SITE.region} · {SITE.country}
        </p>
        <h1 id="hero-title">
          Precisión en cada trazo.
          <span> Calidad en cada corte.</span>
        </h1>
        <p className="hero-lead">
          En Innovar Trazo y Corte Textil trabajamos para atender los requerimientos de las empresas de confección, con
          orientación a la calidad, el cumplimiento y la mejora continua.
        </p>
        <div className="hero-actions">
          <a className="btn btn-accent btn-lg" href="#cotizacion">
            Solicitar cotización <ArrowIcon />
          </a>
          <a className="btn btn-ghost btn-lg" href="#servicios">Conocer nuestros servicios</a>
        </div>
        <ul className="hero-points">
          <li>Trazo y corte textil para empresas de confección</li>
          <li>
            Cotice por{' '}
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} /> WhatsApp
            </a>{' '}
            o correo
          </li>
        </ul>
      </div>
    </section>
  )
}
