import { SITE } from '../data/site'
import { mailtoUrl } from '../lib/links'

/**
 * Política de privacidad informativa del sitio.
 * RECOMENDACIÓN: revisar con un asesor legal y, si la empresa trata datos
 * personales, completar lo exigido por la Ley 1581 de 2012 (Colombia).
 */
export function Privacy() {
  return (
    <main id="main" className="section privacy">
      <div className="container narrow">
        <p className="kicker">Legal</p>
        <h1>Política de privacidad</h1>
        <p><a href="#inicio">← Volver al inicio</a></p>

        <h2>1. Responsable</h2>
        <p>
          Este sitio web pertenece a {SITE.name}, de {SITE.city}, {SITE.region}, {SITE.country}. Puede escribirnos a{' '}
          <a href={mailtoUrl()}>{SITE.email.address}</a>.
        </p>

        <h2>2. Qué información recibimos</h2>
        <p>
          El formulario de cotización de esta página no envía sus datos a ningún servidor ni los almacena. Lo que usted escribe
          se utiliza únicamente para preparar un mensaje que se abre en WhatsApp o en su programa de correo; el mensaje solo
          llega a nosotros cuando usted decide enviarlo.
        </p>

        <h2>3. Uso de la información</h2>
        <p>
          Los datos que usted nos envíe por WhatsApp o por correo (nombre, empresa, teléfono, correo y descripción de su
          requerimiento) se usarán para responder su solicitud y gestionar la cotización.
        </p>

        <h2>4. Servicios de terceros</h2>
        <p>
          WhatsApp y su proveedor de correo tienen sus propias políticas de privacidad. Este sitio no utiliza cookies de
          publicidad ni herramientas de seguimiento propias.
        </p>

        <h2>5. Sus derechos</h2>
        <p>
          Puede solicitar la consulta, actualización o eliminación de los datos que nos haya enviado escribiendo a{' '}
          {SITE.email.address}.
        </p>

        <h2>6. Cambios</h2>
        <p>Esta política puede actualizarse. La versión vigente es la publicada en esta página.</p>
      </div>
    </main>
  )
}
