import { Project } from '../types.ts';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'scan-pos',
    name: 'Scan POS',
    domain: 'scan-pos.pages.dev',
    url: 'https://scan-pos.pages.dev/',
    category: 'Para Tiendas y Comercios',
    categorySlug: 'retail',
    group: 'system',
    shortDescription: 'Cobra en el mostrador leyendo códigos de barra y lleva la cuenta de lo que te queda en el negocio sin usar cuadernos ni enredos.',
    fullDescription: 'Sistema fácil para atender clientes rápido en el mostrador: escaneas los productos con la cámara de tu celular o un lector, calcula el cobro al instante y te descuenta el producto del inventario para que sepas qué tienes y qué te falta.',
    techStack: ['Cobro en Caja', 'Lector de Barras', 'Control de Stock'],
    techStackSummary: 'Caja rápida • Control de productos • Para celular o PC',
    highlights: [
      'Escanea productos con la cámara de tu celular o lector de código',
      'Suma la cuenta y calcula las vueltas en un segundo sin equivocarte',
      'Te muestra cuánto vendiste en el día y qué productos se están agotando'
    ],
    version: 'En línea',
    faviconUrl: 'https://scan-pos.pages.dev/favicon.svg'
  },
  {
    id: 'cotizador-express',
    name: 'Cotizador Express',
    domain: 'cotizador-expres.pages.dev',
    url: 'https://cotizador-expres.pages.dev',
    category: 'Para Dar Precios a Clientes',
    categorySlug: 'automation',
    group: 'system',
    shortDescription: 'Dile al cliente cuánto le vale tu trabajo o producto en segundos, con todo sumado y listo para mandar por WhatsApp.',
    fullDescription: 'Calculadora hecha para no perder clientes por demorarse cotizando. Pones los materiales o servicios, calcula tu ganancia automáticamente y te deja la cotización bonita y lista para compartir.',
    techStack: ['Cotizaciones WhatsApp', 'Cálculo de Ganancia', 'Listo para Imprimir'],
    techStackSummary: 'Cálculo al instante • WhatsApp directo • Sin cuentas a mano',
    highlights: [
      'Calcula materiales, tiempo de trabajo y tu ganancia sin calculadora',
      'Crea una cotización con aspecto profesional en segundos',
      'Mándasela de inmediato al cliente por WhatsApp para cerrar la venta'
    ],
    version: 'En línea',
    faviconUrl: 'https://cotizador-expres.pages.dev/favicon.png'
  },
  {
    id: 'flickwallet',
    name: 'FlickWallet',
    domain: 'flickwallet.pages.dev',
    url: 'https://flickwallet.pages.dev/',
    category: 'Para tu Dinero y Ganancias',
    categorySlug: 'fintech',
    group: 'web',
    shortDescription: 'Mira lo que entra, lo que sale y tus ganancias del mes en una sola pantalla limpia y ordenada, sin necesidad de ser contador.',
    fullDescription: 'Un panel sencillo para tener todas las cuentas de tu negocio al día. Anotas tus ventas, registras lo que pagaste a proveedores y miras de inmediato si tu negocio está ganando plata este mes.',
    techStack: ['Control de Gastos', 'Ganancias del Mes', 'Historial Limpio'],
    techStackSummary: 'Saldos al día • Ingresos y salidas • Fácil de entender',
    highlights: [
      'Mira tu saldo y tus ganancias reales en tiempo real',
      'Registra pagos de clientes y gastos a proveedores en un toque',
      'Todo ordenado para que nunca se te pierda un peso'
    ],
    version: 'En línea',
    faviconUrl: 'https://flickwallet.pages.dev/apple-touch-icon.png'
  },
  {
    id: 'codewave-ai',
    name: 'CodeWave',
    domain: 'code-wave.pages.dev',
    url: 'https://code-wave.pages.dev/',
    category: 'Portafolio de Demos Interactivos',
    categorySlug: 'portfolio',
    group: 'web',
    shortDescription: 'Sitio web y portafolio interactivo con muestras funcionales de componentes visuales, interfaces dinámicas y experiencias web en vivo.',
    fullDescription: 'Plataforma web y portafolio interactivo desarrollado para exhibir demostraciones en vivo, prototipos de interfaces y experiencias digitales modernas con interacción fluida.',
    techStack: ['Portafolio Web', 'Demos Interactivos', 'UI Moderna'],
    techStackSummary: 'Portafolio digital • Demos en vivo • Experiencias interactivas',
    highlights: [
      'Exhibe muestras funcionales de interfaces y experiencias interactivas',
      'Demuestra la calidad visual y fluidez que construimos en plataformas web',
      'Navegación ultrarrápida adaptada a cualquier celular o computador'
    ],
    version: 'En línea',
    faviconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='10' fill='%23050505'/%3E%3Cdefs%3E%3ClinearGradient id='cwg' x1='6' y1='10' x2='34' y2='30' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0%25' stop-color='%2300f0ff'/%3E%3Cstop offset='45%25' stop-color='%2300e5ff'/%3E%3Cstop offset='75%25' stop-color='%2300f5c4'/%3E%3Cstop offset='100%25' stop-color='%2334d399'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M15 11L7 20L15 29' stroke='url(%23cwg)' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Cpath d='M25 11L33 20L25 29' stroke='url(%23cwg)' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E"
  }
];
