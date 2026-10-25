import { FAQ } from '../data/content'

export function Faq() {
  return (
    <section id="faq" className="section section-soft" aria-labelledby="faq-title">
      <div className="container faq-wrap">
        <header className="section-head reveal">
          <p className="kicker">Preguntas frecuentes</p>
          <h2 id="faq-title">Resolvemos sus dudas</h2>
        </header>
        <div className="faq reveal">
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
