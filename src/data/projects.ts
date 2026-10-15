import { Project } from '../types.ts';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'scan-pos',
    name: 'Scan POS',
    domain: 'scan-pos.pages.dev',
    url: 'https://scan-pos.pages.dev/',
    category: 'Retail / Inventarios',
    categorySlug: 'retail',
    shortDescription: 'Sistema de punto de venta y lectura de códigos de barra para comercios. Control de inventario ágil y cobro en mostrador.',
    fullDescription: 'Aplicación web de punto de venta diseñada para comercios y control de productos. Incluye lectura de códigos de barra, gestión de catálogo y cálculo de cobro en mostrador.',
    techStack: ['Vite', 'JavaScript', 'Tailwind CSS', 'Web APIs'],
    techStackSummary: 'Vite • Web APIs • Tailwind',
    highlights: [
      'Lectura de códigos de barra mediante cámara web o escáner',
      'Gestión de catálogo de productos e inventario',
      'Cálculo de cobro y registro de transacciones locales'
    ],
    version: 'En línea',
    faviconUrl: 'https://scan-pos.pages.dev/favicon.svg'
  },
  {
    id: 'flickwallet',
    name: 'FlickWallet',
    domain: 'flickwallet.pages.dev',
    url: 'https://flickwallet.pages.dev/',
    category: 'Fintech UI',
    categorySlug: 'fintech',
    shortDescription: 'Panel de control financiero y billetera digital. Monitor de transferencias, balances y métricas de gastos en tiempo real.',
    fullDescription: 'Interfaz de billetera digital con visualización de saldos, movimientos recientes, registro de transacciones y diseño adaptable.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'SPA'],
    techStackSummary: 'React • Componentes Modulares • SPA',
    highlights: [
      'Visualización de balance y métricas de gastos',
      'Historial de movimientos con estados de transacción',
      'Interfaz modular para gestión de cuentas'
    ],
    version: 'En línea',
    faviconUrl: 'https://flickwallet.pages.dev/apple-touch-icon.png'
  },
  {
    id: 'cotizador-express',
    name: 'Cotizador Express',
    domain: 'cotizador-expres.pages.dev',
    url: 'https://cotizador-expres.pages.dev',
    category: 'Automatización',
    categorySlug: 'automation',
    shortDescription: 'Generador instantáneo de presupuestos y cotizaciones para empresas. Cálculos paramétricos y desglose automático de costos.',
    fullDescription: 'Herramienta para crear y exportar cotizaciones y presupuestos desglosados, facilitando el cálculo de mano de obra, materiales y costos finales.',
    techStack: ['JavaScript', 'HTML5', 'CSS', 'Cloudflare Pages'],
    techStackSummary: 'JavaScript • Cloudflare Pages • CSS',
    highlights: [
      'Cálculo automático de subtotales, márgenes e impuestos',
      'Generación de presupuestos listos para imprimir o compartir',
      'Despliegue estático rápido y accesible'
    ],
    version: 'En línea',
    faviconUrl: 'https://cotizador-expres.pages.dev/favicon.png'
  },
  {
    id: 'codewave-ai',
    name: 'CodeWave AI',
    domain: 'code-wave.pages.dev',
    url: 'https://code-wave.pages.dev',
    category: 'Lab & Pipelines IA',
    categorySlug: 'ai',
    shortDescription: 'Suite con más de 10 demos interactivos de interfaz moderna y conexión a modelos de lenguaje (Gemini) para procesamiento de datos.',
    fullDescription: 'Laboratorio de pruebas con demos interactivos que exploran la conexión con modelos de inteligencia artificial y componentes modernos de interfaz.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    techStackSummary: 'React • Gemini API • Microinteracciones',
    highlights: [
      'Múltiples demos interactivos para pruebas de interfaz',
      'Conexión directa con la API de Gemini',
      'Procesamiento interactivo de texto y respuestas en tiempo real'
    ],
    version: 'En línea',
    faviconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='10' fill='%23050505'/%3E%3Cdefs%3E%3ClinearGradient id='cwg' x1='6' y1='10' x2='34' y2='30' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0%25' stop-color='%2300f0ff'/%3E%3Cstop offset='45%25' stop-color='%2300e5ff'/%3E%3Cstop offset='75%25' stop-color='%2300f5c4'/%3E%3Cstop offset='100%25' stop-color='%2334d399'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M15 11L7 20L15 29' stroke='url(%23cwg)' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Cpath d='M25 11L33 20L25 29' stroke='url(%23cwg)' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E"
  }
];
