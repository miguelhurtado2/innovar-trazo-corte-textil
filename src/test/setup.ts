import '@testing-library/jest-dom/vitest'

// jsdom no implementa estas funciones de desplazamiento
window.scrollTo = () => {}
Element.prototype.scrollIntoView = () => {}
