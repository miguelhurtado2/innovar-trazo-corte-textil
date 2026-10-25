import { PROCESS_MAP, QUALITY } from '../data/content'

export function ProcessMap() {
  const m = PROCESS_MAP
  return (
    <figure className="pmap reveal" aria-labelledby="pmap-title">
      <figcaption id="pmap-title">Mapa de procesos</figcaption>
      <div className="pmap-grid">
        <div className="pmap-box pmap-strategic pmap-s1">{m.strategic[0]}</div>
        <div className="pmap-box pmap-strategic pmap-s2">{m.strategic[1]}</div>

        <div className="pmap-box pmap-io pmap-in">{m.input}</div>
        {m.flow.map((f, i) => (
          <div key={f} className={`pmap-box pmap-step pmap-f${i + 1}`}>{f}</div>
        ))}
        <div className="pmap-box pmap-io pmap-out">{m.output}</div>

        {m.support.map((s, i) => (
          <div key={s} className={`pmap-box pmap-support pmap-u${i + 1}`}>{s}</div>
        ))}
      </div>
      <p className="pmap-legend">
        <span className="dot dot-strategic" /> Estratégicos <span className="dot dot-step" /> Misionales{' '}
        <span className="dot dot-support" /> Apoyo
      </p>
    </figure>
  )
}

export function Quality() {
  return (
    <section id="calidad" className="section section-navy" aria-labelledby="calidad-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">Calidad</p>
          <h2 id="calidad-title">Compromiso con la calidad</h2>
          <p>Nuestra forma de trabajar se apoya en una política, objetivos, principios y valores que orientan cada proceso.</p>
        </header>

        <div className="q-grid">
          <article className="q-card q-policy reveal">
            <h3>Política de calidad</h3>
            <p>{QUALITY.policy}</p>
          </article>

          <article className="q-card reveal">
            <h3>Objetivos de calidad</h3>
            <ol className="q-list">
              {QUALITY.objectives.map((o) => (<li key={o}>{o}</li>))}
            </ol>
          </article>

          <article className="q-card reveal">
            <h3>Principios de calidad</h3>
            <ul className="q-list q-bullets">
              {QUALITY.principles.map((o) => (<li key={o}>{o}</li>))}
            </ul>
          </article>
        </div>

        <div className="values reveal">
          <h3>Valores corporativos</h3>
          <ul>
            {QUALITY.values.map((v) => (<li key={v}>{v}</li>))}
          </ul>
        </div>

        <ProcessMap />
      </div>
    </section>
  )
}
