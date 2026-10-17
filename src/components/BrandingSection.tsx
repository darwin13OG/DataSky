import React, { useState } from 'react';
import { WHATSAPP_URL } from '../data/team.ts';
import { FloatUpReveal } from './FloatUpReveal.tsx';

interface BrandStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: (props: { className?: string }) => React.ReactElement;
  highlight: string;
}

const BRAND_STEPS: BrandStep[] = [
  {
    step: '01',
    subtitle: 'Paso 01',
    title: 'Nombre e Idea',
    description: 'Elegimos un nombre memorable, sonoro y comercial para tu negocio, asegurando que esté libre para tu dominio web y redes sociales.',
    deliverables: ['Propuestas de nombres reales', 'Revisión de dominio web', 'Definición de propuesta de valor'],
    highlight: 'Bautizamos tu negocio',
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
    description: 'Diseñamos tu logotipo oficial en vectores nítidos, seleccionamos tus colores corporativos y tipografía para que proyectes seriedad y confianza.',
    deliverables: ['Logo oficial en SVG y PNG', 'Paleta de colores corporativa', 'Favicon y foto de perfil para WhatsApp'],
    highlight: 'Tu identidad visual completa',
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
    description: 'Montamos tu página web o catálogo en línea con tu nueva marca aplicada, lista para que compartas tu enlace por WhatsApp y comiences a vender.',
    deliverables: ['Página web o tienda online en vivo', 'Dominio y hosting configurados', 'Enlace listo para compartir y vender'],
    highlight: 'Listo para salir al mercado',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export const BrandingSection: React.FC = () => {
  // Mobile touch interaction: track active tapped card to provide rich mobile feedback
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const brandWhatsAppUrl = `${WHATSAPP_URL}?text=${encodeURIComponent('¡Hola DataSky! Me interesa crear mi marca desde cero (nombre, logo y página web). ¿Cómo podemos empezar?')}`;

  return (
    <section id="marca" className="py-14 sm:py-16 border-t border-[#252321]/10 dark:border-[#383532] relative">
      {/* Section Header */}
      <FloatUpReveal delayMs={60} distancePx={30}>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8">
          <div>
            {/* Top Label */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-mono font-semibold border border-[#B0A8A0]/30 bg-[#B0A8A0]/10 text-[#252321] dark:text-[#FFFDF9] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B0A8A0] animate-pulse"></span>
              <span>¿Sin logo o nombre?</span>
            </div>

            <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#252321] dark:text-[#FFFDF9]">
              Construimos tu marca desde cero
            </h2>
            <p className="text-xs sm:text-sm text-[#252321]/80 dark:text-[#FFFDF9]/80 mt-1 max-w-xl leading-relaxed">
              No tienes que preocuparte por nada si estás empezando. Te ayudamos a estructurar la identidad de tu negocio y te dejamos la web lista para salir a vender.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-[#B0A8A0] font-semibold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B0A8A0]"></span>
            <span>Ruta en 3 Pasos</span>
          </div>
        </div>
      </FloatUpReveal>

      {/* Interactive 3-Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {BRAND_STEPS.map((stepItem, index) => {
          const isActive = activeStepIndex === index;
          const Icon = stepItem.icon;

          return (
            <FloatUpReveal key={stepItem.step} delayMs={index * 120} distancePx={36}>
              <div
                onClick={() => setActiveStepIndex(index)}
                className={`group h-full rounded-lg border transition-all duration-300 p-5 flex flex-col justify-between cursor-pointer select-none relative overflow-hidden backdrop-blur-md transform-gpu ${
                  isActive
                    ? 'border-[#B0A8A0] bg-white/70 dark:bg-[#1E1C1A]/90 shadow-md ring-1 ring-[#B0A8A0]/40 -translate-y-1'
                    : 'border-[#252321]/15 dark:border-[#383532] bg-white/50 dark:bg-[#1E1C1A]/70 hover:border-[#B0A8A0] hover:-translate-y-1.5 hover:shadow-lg'
                } active:scale-[0.98]`}
              >
                {/* Subtle top indicator bar on mobile & desktop */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                    isActive ? 'bg-[#B0A8A0]' : 'bg-transparent group-hover:bg-[#B0A8A0]/60'
                  }`}
                />

                <div>
                  {/* Step Header with highlighted badge */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#252321]/10 dark:border-[#383532]/40">
                    <span className="text-[11px] font-mono font-bold tracking-wider text-[#B0A8A0] uppercase">
                      {stepItem.subtitle}
                    </span>

                    {/* Number Badge that changes tone on hover and active */}
                    <span
                      className={`font-title font-black text-xs px-2.5 py-1 rounded transition-colors duration-200 ${
                        isActive
                          ? 'bg-[#252321] text-[#FFFDF9] dark:bg-[#B0A8A0] dark:text-[#252321]'
                          : 'bg-[#252321]/5 dark:bg-[#FFFDF9]/10 text-[#252321]/80 dark:text-[#FFFDF9]/80 group-hover:bg-[#252321] group-hover:text-[#FFFDF9] dark:group-hover:bg-[#B0A8A0] dark:group-hover:text-[#252321]'
                      }`}
                    >
                      {stepItem.step}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div
                      className={`p-2 rounded-md transition-colors duration-200 ${
                        isActive
                          ? 'bg-[#B0A8A0]/20 text-[#252321] dark:text-[#FFFDF9]'
                          : 'bg-[#252321]/5 dark:bg-[#FFFDF9]/5 text-[#B0A8A0] group-hover:bg-[#B0A8A0]/20 group-hover:text-[#252321] dark:group-hover:text-[#FFFDF9]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-title font-bold text-lg uppercase tracking-tight text-[#252321] dark:text-[#FFFDF9] group-hover:text-[#B0A8A0] transition-colors">
                      {stepItem.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#252321]/80 dark:text-[#FFFDF9]/80 leading-relaxed mb-4">
                    {stepItem.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-1.5 pt-2 border-t border-[#252321]/5 dark:border-[#383532]/30">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#252321]/50 dark:text-[#FFFDF9]/50 block mb-1">
                      Qué te entregamos:
                    </span>
                    {stepItem.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[11px] text-[#252321]/85 dark:text-[#FFFDF9]/80 font-sans"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B0A8A0] shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile tap hint / Active footer */}
                <div className="mt-4 pt-3 border-t border-[#252321]/10 dark:border-[#383532]/40 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#B0A8A0] font-medium">{stepItem.highlight}</span>
                  <span className="text-[#252321]/40 dark:text-[#FFFDF9]/40 text-[10px] sm:hidden">
                    {isActive ? '● Seleccionado' : 'Toca para ver'}
                  </span>
                </div>
              </div>
            </FloatUpReveal>
          );
        })}
      </div>

      {/* Commercial Call to Action Banner */}
      <FloatUpReveal delayMs={140} distancePx={30}>
        <div className="p-5 sm:p-6 rounded-lg border border-[#252321]/15 dark:border-[#383532] bg-white/40 dark:bg-[#1E1C1A]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-title font-bold text-sm sm:text-base text-[#252321] dark:text-[#FFFDF9] uppercase">
              ¿Quieres lanzar tu marca y página web con nosotros?
            </h3>
            <p className="text-xs text-[#252321]/75 dark:text-[#FFFDF9]/75 mt-0.5 max-w-xl">
              Coordinas directamente con nosotros tres por WhatsApp. Te asesoramos desde el nombre hasta tener tu sistema en vivo.
            </p>
          </div>

          <a
            href={brandWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-title font-bold text-xs uppercase tracking-wider px-5 py-3 rounded bg-[#252321] text-[#FFFDF9] dark:bg-[#B0A8A0] dark:text-[#252321] hover:opacity-90 active:scale-[0.98] transition-all whitespace-nowrap flex items-center gap-2 shrink-0 shadow-xs"
          >
            <span>Crear mi marca por WhatsApp →</span>
          </a>
        </div>
      </FloatUpReveal>
    </section>
  );
};
