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
    fullDescription: 'Aplicación web de punto de venta diseñada para comercios y control de productos. Incluye lectura de códigos de barra, gestión de catálogo y cálculo de cobro en mostrador.',
    techStack: ['Vite', 'JavaScript', 'Tailwind CSS', 'Web APIs'],
    techStackSummary: 'Vite • Web APIs • Tailwind',
    highlights: [
      'Lectura de códigos de barra mediante cámara web o escáner',
      'Gestión de catálogo de productos e inventario',
      'Cálculo de cobro y registro de transacciones locales'
    ],
    version: 'En línea'
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
    version: 'En línea'
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
    version: 'En línea'
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
    version: 'En línea'
  }
];
