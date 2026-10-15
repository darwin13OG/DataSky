import { Project } from '../types.ts';

export const getGoogleFaviconUrl = (domain: string, size: number = 64): string => {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'scan-pos',
    name: 'Scan POS',
    domain: 'scan-pos.pages.dev',
    url: 'https://scan-pos.pages.dev/',
    category: 'Retail / Inventarios',
    categorySlug: 'retail',
    shortDescription: 'Sistema de punto de venta y lectura de códigos de barra para comercios. Control de inventario ágil y cobro en mostrador.',
    fullDescription: 'Plataforma web de Punto de Venta (POS) diseñada para terminales de venta minorista y control de bodega en tiempo real. Integra escaneo óptico mediante cámara y hardware USB, cálculo instantáneo de cobros e impuestos, y persistencia local para operaciones sin caídas.',
    techStack: ['Vite', 'Web APIs', 'Tailwind CSS', 'LocalStorage Engine', 'Barcode Detection API'],
    techStackSummary: 'Vite • Web APIs • Tailwind',
    highlights: [
      'Lectura de códigos de barra en milisegundos con cámara o escáner USB',
      'Cálculo de tickets, subtotales, IVA y vuelto en tiempo real',
      'Catálogo de inventario rápido con alertas de stock mínimo',
      'Arquitectura offline-first para operar aún con intermitencia de red'
    ],
    metrics: '< 100ms respuesta en escaneo',
    version: 'v2.4 Pro'
  },
  {
    id: 'flickwallet',
    name: 'FlickWallet',
    domain: 'flickwallet.pages.dev',
    url: 'https://flickwallet.pages.dev/',
    category: 'Fintech UI',
    categorySlug: 'fintech',
    shortDescription: 'Panel de control financiero y billetera digital. Monitor de transferencias, balances y métricas de gastos en tiempo real.',
    fullDescription: 'Dashboard de finanzas personales y empresariales enfocado en la visualización clara de flujos de capital, saldos de cuentas corrientes, tarjetas virtuales y categorización algorítmica de egresos mensuales.',
    techStack: ['React', 'Componentes Modulares', 'SPA', 'Tailwind CSS', 'State Management'],
    techStackSummary: 'React • Componentes Modulares • SPA',
    highlights: [
      'Visualización inmediata de balance global y desglose por divisas',
      'Historial de movimientos con filtros instantáneos y estados de pago',
      'Simulador de transferencias internas e interbancarias',
      'Diseño modular desacoplado listo para conectar con APIs bancarias'
    ],
    metrics: '99.9% fluidez en renderizado',
    version: 'v1.8 Core'
  },
  {
    id: 'cotizador-express',
    name: 'Cotizador Express',
    domain: 'cotizador-expres.pages.dev',
    url: 'https://cotizador-expres.pages.dev',
    category: 'Automatización',
    categorySlug: 'automation',
    shortDescription: 'Generador instantáneo de presupuestos y cotizaciones para empresas. Cálculos paramétricos y desglose automático de costos.',
    fullDescription: 'Herramienta pensada para contratistas, agencias y proveedores de servicios que necesitan elaborar cotizaciones formales en menos de 60 segundos con desglose de mano de obra, materiales, descuentos e impuestos.',
    techStack: ['JavaScript', 'Cloudflare Pages', 'CSS Moderno', 'Export Engine', 'HTML5 Canvas'],
    techStackSummary: 'JavaScript • Cloudflare Pages • CSS',
    highlights: [
      'Generación paramétrica de renglones de cotización por horas o ítems',
      'Ajuste dinámico de márgenes de utilidad e impuestos comerciales',
      'Vista previa en tiempo real para exportación directa a PDF limpio',
      'Carga ultraligera con despliegue en CDN global de Cloudflare'
    ],
    metrics: 'Genera cotizaciones en < 30s',
    version: 'v3.1 Production'
  },
  {
    id: 'codewave-ai',
    name: 'CodeWave AI',
    domain: 'code-wave.pages.dev',
    url: 'https://code-wave.pages.dev',
    category: 'Lab & Pipelines IA',
    categorySlug: 'ai',
    shortDescription: 'Suite con más de 10 demos interactivos de interfaz moderna y conexión a modelos de lenguaje (Gemini) para procesamiento de datos.',
    fullDescription: 'Laboratorio técnico con prototipos interactivos que demuestran capacidades avanzadas de ingeniería de prompts, extracción inteligente de información, autocompletado semántico y asistentes integrados sin retrasos.',
    techStack: ['React', 'Gemini API', 'Microinteracciones', 'Prompt Engineering', 'TypeScript'],
    techStackSummary: 'React • Gemini API • Microinteracciones',
    highlights: [
      '10+ experiencias interactivas funcionales en vivo',
      'Conexión optimizada con modelos multimodales Gemini',
      'Procesamiento en streaming con renderizado progresivo',
      'Ejemplos reales aplicados a resumen de documentos y análisis'
    ],
    metrics: '10+ demos en vivo',
    version: 'v4.0 Lab'
  }
];
