import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About, Pillars } from './components/About'
import { Services } from './components/Services'
import { Quality } from './components/Quality'
import { Gallery } from './components/Gallery'
import { HowToQuote, QuoteForm } from './components/QuoteForm'
import { Faq } from './components/Faq'
import { Footer, WhatsAppFloat } from './components/Footer'
import { Privacy } from './components/Privacy'
import { SEO, SITE } from './data/site'

type Route = 'home' | 'privacy'
const routeFromHash = (): Route => (window.location.hash === '#/privacidad' ? 'privacy' : 'home')

export default function App() {
  // El servidor y el primer render del cliente coinciden (home); luego se lee el hash.
  const [route, setRoute] = useState<Route>('home')

  useEffect(() => {
    const sync = () => setRoute(routeFromHash())
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  // Título, desplazamiento a anclas y animaciones de entrada según la ruta.
  useEffect(() => {
    document.title = route === 'privacy' ? `Política de privacidad | ${SITE.name}` : SEO.title

    const hash = window.location.hash.replace('#', '')
    if (route === 'privacy') window.scrollTo(0, 0)
    else if (hash && !hash.startsWith('/')) document.getElementById(hash)?.scrollIntoView()

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((e) => e.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible')
            io.unobserve(en.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [route])

  return (
    <>
      <a className="skip-link" href={route === 'privacy' ? '#main' : '#main-content'}>Saltar al contenido</a>
      <Header />
      {route === 'privacy' ? (
        <Privacy />
      ) : (
        <main id="main-content">
          <Hero />
          <Pillars />
          <About />
          <Services />
          <Quality />
          <Gallery />
          <HowToQuote />
          <QuoteForm />
          <Faq />
        </main>
      )}
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
