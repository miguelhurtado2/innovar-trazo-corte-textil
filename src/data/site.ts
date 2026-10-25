/**
 * CONFIGURACIÓN CENTRAL DE INNOVAR TRAZO Y CORTE TEXTIL
 * ------------------------------------------------------
 * Todos los datos de contacto y de identidad de la empresa viven aquí.
 * Cambie un dato en este archivo y se actualizará en todo el sitio
 * (encabezado, botones, formulario, pie de página, SEO y datos estructurados).
 *
 * No agregue dirección, horarios, redes sociales, certificaciones, precios,
 * plazos ni cifras hasta que estén confirmados oficialmente.
 */

export const SITE = {
  name: 'Innovar Trazo y Corte Textil',
  shortName: 'Innovar',
  slogan: 'Precisión en cada trazo. Calidad en cada corte.',
  city: 'Medellín',
  region: 'Antioquia',
  country: 'Colombia',
  countryCode: 'CO',

  /** Servicio confirmado. Para agregar servicios nuevos use SERVICES en content.ts */
  mainService: 'Trazo y corte textil para empresas de confección',

  whatsapp: {
    /** Texto para mostrar en pantalla */
    display: '300 214 5884',
    /** Número en formato internacional, sin signos */
    international: '573002145884',
    /** Mensaje inicial sugerido */
    message:
      'Hola, estoy interesado en los servicios de Innovar Trazo y Corte Textil y deseo solicitar una cotización.',
  },

  email: {
    address: 'direccionycomercial.innovar@gmail.com',
    subject: 'Solicitud de cotización - Innovar Trazo y Corte Textil',
  },

  /**
   * Redes sociales: déjelo vacío hasta contar con las direcciones oficiales.
   * Ejemplo: { label: 'Instagram', url: 'https://www.instagram.com/usuario' }
   */
  social: [] as { label: string; url: string }[],

  /**
   * Respuesta para consultas sobre condiciones comerciales aún no definidas
   * públicamente (plazos, pagos, cantidades mínimas, cobertura, transporte).
   * EDITABLE: reemplácela cuando la empresa defina sus políticas.
   */
  pendingPolicyAnswer:
    'Estas condiciones se definen con nuestro equipo comercial al preparar su cotización. Escríbanos por WhatsApp o por correo y le indicaremos los detalles según su caso.',
} as const

export const SEO = {
  title: 'Trazo y corte textil en Medellín | Innovar Trazo y Corte Textil',
  description:
    'Innovar Trazo y Corte Textil: servicio de trazo y corte textil para empresas de confección en Medellín, Antioquia. Solicite su cotización por WhatsApp o correo.',
  keywords:
    'trazo y corte textil, trazo textil Medellín, corte textil Medellín, servicio de corte para confección, trazo y corte para confeccionistas, maquila de corte Medellín, Innovar Trazo y Corte Textil',
} as const
