import { PROCESS_MAP, SERVICES } from '../data/content'
import { whatsappUrl } from '../lib/links'
import { ArrowIcon, CheckIcon, WhatsAppIcon } from './Icons'

export function Services() {
  return (
    <section id="servicios" className="section" aria-labelledby="servicios-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">Servicios</p>
          <h2 id="servicios-title">Trazo y corte textil para su confección</h2>
          <p>Un servicio pensado para compradores empresariales que necesitan resolver el trazo y el corte de su material.</p>
        </header>

        <div className="services">
          {SERVICES.map((s) => (
            <article key={s.id} className="service reveal">
              <img src={s.image} alt={s.imageAlt} width={960} height={1280} loading="lazy" />
              <div className="service-body">
                <h3>{s.name}</h3>
                <p>{s.description}</p>

                <h4>¿A quién atendemos?</h4>
                <ul className="checks">
                  {s.audience.map((a) => (
                    <li key={a}><CheckIcon /> {a}</li>
                  ))}
                </ul>

                <p className="benefit"><strong>Beneficio para usted:</strong> {s.benefit}</p>

                <h4>Flujo de nuestro servicio</h4>
                <ol className="flow-mini" aria-label="Etapas del servicio">
                  {PROCESS_MAP.flow.map((f) => (<li key={f}>{f}</li>))}
                </ol>

                <div className="service-actions">
                  <a className="btn btn-accent" href="#cotizacion">Solicitar cotización <ArrowIcon /></a>
                  <a
                    className="btn btn-wa"
                    href={whatsappUrl(`Hola, deseo cotizar el servicio de ${s.name.toLowerCase()} con Innovar Trazo y Corte Textil.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon /> Cotizar por WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="muted center reveal">
          ¿Necesita algo más para su producción? Escríbanos y cuéntenos su caso.
        </p>
      </div>
    </section>
  )
}
