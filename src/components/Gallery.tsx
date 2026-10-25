import { useCallback, useEffect, useRef, useState } from 'react'
import { PHOTOS, VIDEOS } from '../data/content'

function Lightbox({ index, onClose, onMove }: { index: number; onClose: () => void; onMove: (d: number) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const photo = PHOTOS[index]

  useEffect(() => {
    closeRef.current?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, onMove])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visor de fotografías" onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
        <figcaption>{photo.caption} · {index + 1}/{PHOTOS.length}</figcaption>
      </figure>
      <button ref={closeRef} type="button" className="lb-btn lb-close" onClick={onClose} aria-label="Cerrar">×</button>
      <button type="button" className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); onMove(-1) }} aria-label="Foto anterior">‹</button>
      <button type="button" className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); onMove(1) }} aria-label="Foto siguiente">›</button>
    </div>
  )
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null)
  const close = useCallback(() => setOpen(null), [])
  const move = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + PHOTOS.length) % PHOTOS.length)), [])

  return (
    <section id="galeria" className="section section-soft" aria-labelledby="galeria-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">Así trabajamos</p>
          <h2 id="galeria-title">Nuestro proceso y nuestro equipo</h2>
          <p>Fotografías y videos reales de nuestra operación de trazo y corte.</p>
        </header>

        <ul className="gallery">
          {PHOTOS.map((p, i) => (
            <li key={p.src} className={`reveal${p.tall ? ' tall' : ''}`}>
              <button type="button" onClick={() => setOpen(i)} aria-label={`Ampliar: ${p.caption}`}>
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
                <span>{p.caption}</span>
              </button>
            </li>
          ))}
        </ul>

        <h3 className="videos-title reveal">Videos de la operación de corte</h3>
        <ul className="videos">
          {VIDEOS.map((v) => (
            <li key={v.id} className={`video reveal ${v.orientation}`}>
              <video controls preload="none" playsInline poster={v.poster} aria-label={v.title}>
                <source src={v.src} type="video/mp4" />
                Su navegador no puede reproducir este video.
              </video>
              <p>{v.title}</p>
            </li>
          ))}
        </ul>
      </div>
      {open !== null && <Lightbox index={open} onClose={close} onMove={move} />}
    </section>
  )
}
