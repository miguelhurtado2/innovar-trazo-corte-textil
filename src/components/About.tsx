import { ABOUT, IMAGES, PILLARS } from '../data/content'

export function Pillars() {
  return (
    <section className="section section-soft" aria-labelledby="pilares-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">Propuesta de valor</p>
          <h2 id="pilares-title">Lo que guía nuestro trabajo</h2>
          <p>Seis pilares que orientan cada servicio de trazo y corte que prestamos.</p>
        </header>
        <ul className="pillars">
          {PILLARS.map((p, i) => (
            <li key={p.title} className="pillar reveal">
              <span className="pillar-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="nosotros" className="section" aria-labelledby="nosotros-title">
      <div className="container about">
        <div className="about-media reveal">
          <img src={IMAGES.equipo1} alt="Equipo de Innovar Trazo y Corte Textil con camiseta institucional" width={1280} height={960} loading="lazy" />
        </div>
        <div className="about-copy reveal">
          <p className="kicker">Quiénes somos</p>
          <h2 id="nosotros-title">Un equipo enfocado en el trazo y el corte</h2>
          <p className="lead">{ABOUT.intro}</p>
          <div className="mv">
            <article className="mv-card">
              <h3>Misión</h3>
              <p>{ABOUT.mission}</p>
            </article>
            <article className="mv-card">
              <h3>Visión</h3>
              <p>{ABOUT.vision}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
