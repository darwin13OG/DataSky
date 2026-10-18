import React from 'react';
import { WHATSAPP_URL } from '../data/team.ts';
import { FloatUpReveal } from './FloatUpReveal.tsx';

interface BrandStep {
  step: string;
  subtitle: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: (props: { className?: string }) => React.ReactElement;
  highlight: string;
  themeColor: {
    cardBorder: string;
    badge: string;
    subtitle: string;
    laser: string;
    check: string;
  };
}

const BRAND_STEPS: BrandStep[] = [
  {
    step: '01',
    subtitle: 'Paso 01',
    title: 'Nombre e Idea',
    description: 'Elegimos un nombre claro y comercial para tu negocio, revisando que esté libre para tu dominio web y redes sociales.',
    deliverables: ['Propuestas de nombres reales', 'Dominio gratis .pages.dev o tu propio dominio', 'Definición clara de lo que ofreces'],
    highlight: 'Bautizamos tu negocio',
    themeColor: {
      cardBorder: 'border-cyan-500/45 dark:border-cyan-400/35 shadow-[0_0_22px_-5px_rgba(6,182,212,0.18)] dark:shadow-[0_0_25px_-5px_rgba(6,182,212,0.22)] hover:border-cyan-500',
      badge: 'text-cyan-800 dark:text-cyan-300 bg-cyan-500/15 border-cyan-500/35',
      subtitle: 'text-cyan-700 dark:text-cyan-400',
      laser: 'via-cyan-400/80',
      check: 'text-cyan-600 dark:text-cyan-400'
    },
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    step: '02',
    subtitle: 'Paso 02',
    title: 'Logo y Colores',
    description: 'Diseñamos tu logotipo oficial en vectores nítidos, seleccionamos tus colores corporativos y tipografía para que tu negocio proyecte seriedad.',
    deliverables: ['Logo oficial en SVG y PNG', 'Paleta de colores corporativa', 'Favicon e icono para WhatsApp'],
    highlight: 'Identidad visual limpia',
    themeColor: {
      cardBorder: 'border-amber-500/45 dark:border-amber-400/35 shadow-[0_0_22px_-5px_rgba(245,158,11,0.18)] dark:shadow-[0_0_25px_-5px_rgba(245,158,11,0.22)] hover:border-amber-500',
      badge: 'text-amber-800 dark:text-amber-300 bg-amber-500/15 border-amber-500/35',
      subtitle: 'text-amber-700 dark:text-amber-400',
      laser: 'via-amber-400/80',
      check: 'text-amber-600 dark:text-amber-400'
    },
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 21a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    step: '03',
    subtitle: 'Paso 03',
    title: 'Lanzamiento Web',
    description: 'Montamos tu página web o catálogo en línea con tu marca aplicada, lista para que compartas tu enlace por WhatsApp y comiences a atender clientes.',
    deliverables: ['Página web o catálogo funcionando', 'Sin pagos mensuales obligatorios', 'Enlace listo para compartir y atender'],
    highlight: 'Listo para salir al aire',
    themeColor: {
      cardBorder: 'border-emerald-500/45 dark:border-emerald-400/35 shadow-[0_0_22px_-5px_rgba(16,185,129,0.18)] dark:shadow-[0_0_25px_-5px_rgba(16,185,129,0.22)] hover:border-emerald-500',
      badge: 'text-emerald-800 dark:text-emerald-300 bg-emerald-500/15 border-emerald-500/35',
      subtitle: 'text-emerald-700 dark:text-emerald-400',
      laser: 'via-emerald-400/80',
      check: 'text-emerald-600 dark:text-emerald-400'
    },
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export const BrandingSection: React.FC = () => {
  const brandWhatsAppUrl = `${WHATSAPP_URL}?text=${encodeURIComponent('¡Hola DataSky! Me interesa crear mi marca desde cero (nombre, logo y página web). ¿Cómo podemos empezar?')}`;

  return (
    <section id="marca" className="py-14 sm:py-16 border-t border-zinc-200 dark:border-white/10 relative">
      {/* Section Header */}
      <FloatUpReveal delayMs={60} distancePx={30}>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8">
          <div>
            {/* Top Label with vivid cyan glow */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold border border-cyan-500/30 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 mb-3 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <span>¿Sin logo o nombre?</span>
            </div>

            <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-zinc-900 dark:text-[#FFFDF9]">
              Construimos tu marca desde cero
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-[#FFFDF9]/80 mt-1 max-w-xl leading-relaxed">
              No tienes que preocuparte si apenas estás empezando. Te ayudamos a estructurar la identidad de tu negocio y te dejamos la web lista para atender clientes.
            </p>
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-white/5 text-xs font-mono text-zinc-700 dark:text-[#B0A8A0] font-semibold uppercase self-start sm:self-auto">
            <span>Ruta en 3 Pasos</span>
          </div>
        </div>
      </FloatUpReveal>

      {/* 3-Step Cards with Visual Previews and No Exaggerations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {BRAND_STEPS.map((stepItem, index) => {
          const Icon = stepItem.icon;
          const { themeColor } = stepItem;

          return (
            <FloatUpReveal key={stepItem.step} delayMs={index * 120} distancePx={36}>
              <div
                className={`relative h-full rounded-xl border transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden backdrop-blur-md transform-gpu bg-white/95 dark:bg-[#1C1A18]/90 hover:-translate-y-1.5 active:scale-[0.98] ${themeColor.cardBorder}`}
              >
                {/* Laser Top Shimmer Beam */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent ${themeColor.laser} to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300 laser-beam-animated`}
                />

                <div>
                  {/* Step Header with highlighted badge */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-200/80 dark:border-white/10">
                    <span className={`text-[11px] font-mono font-bold tracking-wider uppercase ${themeColor.subtitle}`}>
                      {stepItem.subtitle}
                    </span>

                    {/* Step Number Badge */}
                    <span
                      className={`font-title font-black text-xs px-2.5 py-1 rounded-md border ${themeColor.badge}`}
                    >
                      {stepItem.step}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className={`p-2.5 rounded-lg border ${themeColor.badge}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-title font-bold text-lg uppercase tracking-tight text-zinc-900 dark:text-[#FFFDF9]">
                      {stepItem.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-700 dark:text-[#FFFDF9]/80 leading-relaxed mb-3">
                    {stepItem.description}
                  </p>

                  {/* Visual Reinforcement Preview for Each Step */}
                  {stepItem.step === '01' && (
                    <div className="mb-3.5 px-3 py-1.5 rounded-lg bg-zinc-100/80 dark:bg-black/30 border border-zinc-200/90 dark:border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-zinc-600 dark:text-[#FFFDF9]/70 truncate text-[11px]">tunegocio.pages.dev</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 flex items-center gap-1">
                        <span>✓</span>
                        <span className="text-[10px]">sin costo</span>
                      </span>
                    </div>
                  )}

                  {stepItem.step === '02' && (
                    <div className="mb-3.5 px-3 py-1.5 rounded-lg bg-zinc-100/80 dark:bg-black/30 border border-zinc-200/90 dark:border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-cyan-500 shadow-xs" title="#06b6d4" />
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-xs" title="#10b981" />
                        <span className="w-3.5 h-3.5 rounded-full bg-amber-500 shadow-xs" title="#f59e0b" />
                      </div>
                      <span className="text-zinc-600 dark:text-[#FFFDF9]/70 text-[10px] font-semibold">Paleta + Vector</span>
                    </div>
                  )}

                  {stepItem.step === '03' && (
                    <div className="mb-3.5 px-3 py-1.5 rounded-lg bg-zinc-100/80 dark:bg-black/30 border border-zinc-200/90 dark:border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <span className="flex items-center gap-1.5 text-zinc-600 dark:text-[#FFFDF9]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Web & Catálogo</span>
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">Celular y PC</span>
                    </div>
                  )}

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-zinc-200/80 dark:border-white/5">
                    <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 font-semibold ${themeColor.subtitle}`}>
                      Qué te entregamos:
                    </span>
                    {stepItem.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[11px] text-zinc-800 dark:text-[#FFFDF9]/85 font-sans"
                      >
                        <span className={`font-bold shrink-0 text-xs ${themeColor.check}`}>✓</span>
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Permanent Card Footer with clear highlight */}
                <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className={`font-semibold ${themeColor.subtitle}`}>{stepItem.highlight}</span>
                  <span className="text-zinc-500 dark:text-[#FFFDF9]/50 text-[10px]">Listo para tu negocio</span>
                </div>
              </div>
            </FloatUpReveal>
          );
        })}
      </div>

      {/* Direct Conversion Callout */}
      <FloatUpReveal delayMs={200} distancePx={30}>
        <div className="p-5 sm:p-6 rounded-xl border border-zinc-200/90 dark:border-white/10 bg-white/95 dark:bg-[#1C1A18]/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h3 className="font-title font-bold text-sm sm:text-base text-zinc-900 dark:text-[#FFFDF9]">
              ¿Tienes una idea en mente y quieres empezar a darle forma?
            </h3>
            <p className="text-xs text-zinc-700 dark:text-[#FFFDF9]/75 mt-0.5 max-w-xl">
              Escríbenos y te decimos qué opciones tienes para tu nombre, logo y página web, con presupuesto claro sin compromiso.
            </p>
          </div>

          <a
            href={brandWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-title font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-95 transition-all whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Cotizar mi marca por WhatsApp →</span>
          </a>
        </div>
      </FloatUpReveal>
    </section>
  );
};
