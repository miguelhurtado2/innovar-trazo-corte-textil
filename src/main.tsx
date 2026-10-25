import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/manrope'
import './styles.css'
import App from './App'

const el = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// El HTML publicado viene prerenderizado (SEO); en desarrollo se monta desde cero.
if (el.firstElementChild) hydrateRoot(el, app)
else createRoot(el).render(app)
