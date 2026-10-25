import { SITE } from './site'

import imgTendido from '../assets/tendido.webp'
import imgMesa from '../assets/mesa-corte.webp'
import imgEspuma from '../assets/corte-espuma.webp'
import imgTrazo from '../assets/trazo-papel.webp'
import imgEquipo1 from '../assets/equipo-1.webp'
import imgEquipo2 from '../assets/equipo-2.webp'
import imgDuo from '../assets/equipo-duo.webp'

export const IMAGES = { tendido: imgTendido, mesa: imgMesa, espuma: imgEspuma, trazo: imgTrazo, equipo1: imgEquipo1, equipo2: imgEquipo2, duo: imgDuo }

export const NAV = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'calidad', label: 'Calidad' },
  { id: 'contacto', label: 'Contacto' },
] as const

/** Servicios confirmados. Agregue aquí nuevos servicios cuando la empresa los confirme. */
export interface Service {
  id: string
  name: string
  description: string
  benefit: string
  image: string
  imageAlt: string
  audience: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'trazo-corte',
    name: SITE.mainService,
    description:
      'Realizamos el trazo y el corte del material que su empresa necesita para confeccionar, trabajando sobre los requisitos y especificaciones que usted nos entrega.',
    benefit:
      'Su requerimiento se atiende con personal calificado, herramientas tecnológicas y procesos normalizados, orientados a la calidad y al cumplimiento de lo acordado.',
    image: IMAGES.mesa,
    imageAlt: 'Equipo de Innovar trabajando sobre la mesa de corte con el trazo extendido',
    audience: ['Fabricantes de prendas de vestir', 'Empresas y talleres de confección', 'Marcas de ropa'],
  },
]

export const PILLARS = [
  { title: 'Orientación al cliente', text: 'Los clientes son el centro de lo que hacemos y de cada requerimiento que recibimos.' },
  { title: 'Fidelidad a las especificaciones', text: 'Trabajamos sobre los requisitos y especificaciones que usted define.' },
  { title: 'Cumplimiento', text: 'Nuestros compromisos están orientados a la satisfacción del cliente.' },
  { title: 'Personal calificado', text: 'Capital humano calificado, con formación y recursos para obtener buenos resultados.' },
  { title: 'Procesos normalizados', text: 'Estandarizamos nuestros procesos para evitar no conformidades.' },
  { title: 'Mejora continua', text: 'Medimos, evaluamos y corregimos para mejorar de manera permanente.' },
]

export const ABOUT = {
  intro:
    'Somos una empresa de Medellín dedicada al trazo y corte textil para empresas de confección. Trabajamos para atender los requerimientos de nuestros clientes, con orientación a la calidad, el cumplimiento y la mejora continua.',
  mission:
    'En Innovar Trazo y Corte Textil trabajamos para satisfacer los requerimientos de nuestros clientes, en los requisitos y especificaciones dadas. Para ello contamos con capital humano calificado, herramientas tecnológicas y procesos normalizados, garantizando calidad y generando credibilidad, desarrollando nuevos productos para estar a la vanguardia del mercado.',
  vision:
    'Ser una empresa reconocida en el sector textil por la calidad en el trazo y corte, por su cumplimiento de entrega y su nivel de compromiso y servicio con el cliente, desarrollando una fidelización que nos permita crear nuevas estrategias que generen crecimiento a nuestros grupos de interés, con personal calificado e íntegro, con flexibilidad al cambio y responsabilidad social.',
}

export const QUALITY = {
  policy:
    'Innovar Trazo y Corte Textil asegura el cumplimiento de sus procesos, productos y servicios estableciendo objetivos integrales y corrigiendo actividades que se desvían de la misión y de la visión empresarial. Para ello previene y minimiza las causas que pueden generar afectaciones en la calidad, proporcionando formación y recursos a sus empleados para que colaboren activamente a obtener los mejores resultados y, de esta forma, ser reconocidos en el mercado como una empresa líder.',
  objectives: [
    'Asignar recursos humanos y técnicos para establecer y mejorar procesos y evitar no conformidades de los productos.',
    'Estandarizar los procesos para garantizar la satisfacción de los clientes y crear vínculos de fidelización.',
    'Definir indicadores para medir y hacer seguimiento al estado de la calidad, evaluar los métodos utilizados y promover la mejora continua.',
  ],
  principles: [
    'Los clientes son el centro de lo que hacemos.',
    'El compromiso de los empleados es clave para el logro de la calidad.',
    'La calidad es responsabilidad de todos.',
    'El cumplimiento de nuestros compromisos está orientado a la satisfacción del cliente.',
  ],
  values: ['Cumplimiento', 'Respeto', 'Responsabilidad', 'Calidad', 'Honestidad', 'Compromiso'],
}

/** Mapa de procesos oficial (documento INNOVAR TRAZO Y CORTE TEXTIL). */
export const PROCESS_MAP = {
  input: 'Necesidades y especificaciones del cliente',
  flow: ['Trazo', 'Corte', 'Despacho'],
  output: 'Satisfacción del cliente',
  strategic: ['Dirección estratégica', 'Sistema de calidad'],
  support: ['Impresión', 'Gestión humana', 'Mantenimiento'],
}

export interface GalleryPhoto { src: string; alt: string; caption: string; tall?: boolean }

/** Fotografías reales aportadas por la empresa. Para agregar más, importe la imagen y añádala aquí. */
export const PHOTOS: GalleryPhoto[] = [
  { src: IMAGES.tendido, alt: 'Cuatro integrantes del equipo extendiendo una gran capa de material sobre la mesa de corte', caption: 'Tendido del material sobre la mesa de corte' },
  { src: IMAGES.trazo, alt: 'Papel con el trazo de piezas de prenda impreso, sujeto sobre la mesa', caption: 'Trazo impreso con las piezas ubicadas', tall: true },
  { src: IMAGES.mesa, alt: 'Equipo de Innovar trabajando en la mesa de corte con la máquina de cuchilla vertical', caption: 'Mesa de corte y equipo de trabajo', tall: true },
  { src: IMAGES.espuma, alt: 'Operario cortando con máquina de cuchilla vertical sobre el trazo', caption: 'Corte con máquina de cuchilla vertical', tall: true },
  { src: IMAGES.equipo1, alt: 'Equipo de Innovar Trazo y Corte Textil posando con el logo de la empresa en un parque', caption: 'El equipo de Innovar' },
  { src: IMAGES.duo, alt: 'Dos integrantes del equipo sosteniendo el afiche con el logo de Innovar', caption: 'Equipo comercial de Innovar', tall: true },
  { src: IMAGES.equipo2, alt: 'Siete integrantes del equipo con camiseta institucional en un sendero', caption: 'Nuestro equipo de trabajo', tall: true },
]

export interface VideoItem { id: string; title: string; src: string; poster: string; orientation: 'portrait' | 'landscape' }
const base = import.meta.env.BASE_URL
const v = (id: string) => ({ src: `${base}videos/${id}.mp4`, poster: `${base}videos/${id}.jpg` })

export const VIDEOS: VideoItem[] = [
  { id: 'corte-extremo', title: 'Corte de contornos sobre el tendido', ...v('corte-extremo'), orientation: 'landscape' },
  { id: 'lectura-trazo', title: 'La máquina recorre las líneas del trazo', ...v('lectura-trazo'), orientation: 'portrait' },
  { id: 'corte-piezas', title: 'Corte de piezas siguiendo el trazo', ...v('corte-piezas'), orientation: 'portrait' },
  { id: 'corte-continuo-1', title: 'Operación de corte en mesa · parte 1', ...v('corte-continuo-1'), orientation: 'portrait' },
  { id: 'corte-continuo-2', title: 'Operación de corte en mesa · parte 2', ...v('corte-continuo-2'), orientation: 'portrait' },
]

export const HOW_TO_QUOTE = {
  steps: [
    { title: 'Escríbanos', text: 'Contáctenos por WhatsApp o por correo electrónico, o complete el formulario de esta página.' },
    { title: 'Cuéntenos su requerimiento', text: 'Describa qué necesita y envíe la información que considere útil para entender su trabajo.' },
    { title: 'Reciba la respuesta', text: 'Nuestro equipo comercial revisa su solicitud y se comunica con usted para continuar.' },
  ],
  info: [
    'Nombre de la persona de contacto y de la empresa',
    'Tipo de prenda o producto que va a confeccionar',
    'Material o tela que se va a trazar y cortar',
    'Cantidades y especificaciones o referencias de trazo, si las tiene',
    'Fecha en la que necesita el trabajo',
  ],
}

export const FAQ: { q: string; a: string }[] = [
  { q: '¿Qué servicios ofrece Innovar Trazo y Corte Textil?', a: 'Ofrecemos trazo y corte textil para empresas de confección: fabricantes de prendas de vestir, talleres de confección y marcas de ropa.' },
  { q: '¿Cómo puedo solicitar una cotización?', a: `Puede completar el formulario de esta página, escribirnos por WhatsApp al ${SITE.whatsapp.display} o enviar un correo a ${SITE.email.address}.` },
  { q: '¿Qué información debo suministrar para cotizar?', a: 'Le sugerimos indicar su nombre y empresa, el tipo de prenda o producto, el material, las cantidades, las especificaciones o referencias de trazo si las tiene, y la fecha en que necesita el trabajo.' },
  { q: '¿Cómo puedo enviar los detalles de mi requerimiento?', a: 'Puede escribirnos por WhatsApp o por correo electrónico y adjuntar la información que considere útil para describir su requerimiento.' },
  { q: '¿Cómo puedo comunicarme con la empresa?', a: `Por WhatsApp (${SITE.whatsapp.display}) o por correo electrónico (${SITE.email.address}). También puede usar el formulario de cotización de esta página.` },
  { q: '¿Cuáles son los plazos, las condiciones de pago y las cantidades mínimas?', a: SITE.pendingPolicyAnswer },
]
