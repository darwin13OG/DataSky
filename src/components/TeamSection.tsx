import React from 'react';
import { ENGINEERS_DATA, WHATSAPP_URL } from '../data/team.ts';
import { FloatUpReveal } from './FloatUpReveal.tsx';

export const TeamSection: React.FC = () => {
  // Permanent identifiable branding colors for each technician from the start
  const engineerAccents = [
    {
      // Technician 1: Darwin (Cyan / Blue accent)
      cardBorder: 'border-cyan-500/50 dark:border-cyan-400/40 hover:border-cyan-500 shadow-[0_0_22px_-4px_rgba(6,182,212,0.18)] dark:shadow-[0_0_25px_-5px_rgba(6,182,212,0.25)]',
      badge: 'text-cyan-800 dark:text-cyan-300 bg-cyan-500/15 border-cyan-500/35',
      role: 'text-cyan-700 dark:text-cyan-400 font-semibold',
      laser: 'via-cyan-400/80',
      dot: 'bg-cyan-400 shadow-[0_0_6px_#22d3ee]',
      tag: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-900 dark:text-cyan-200'
    },
    {
      // Technician 2: Jose (Emerald Green accent)
      cardBorder: 'border-emerald-500/50 dark:border-emerald-400/40 hover:border-emerald-500 shadow-[0_0_22px_-4px_rgba(16,185,129,0.18)] dark:shadow-[0_0_25px_-5px_rgba(16,185,129,0.25)]',
      badge: 'text-emerald-800 dark:text-emerald-300 bg-emerald-500/15 border-emerald-500/35',
      role: 'text-emerald-700 dark:text-emerald-400 font-semibold',
      laser: 'via-emerald-400/80',
      dot: 'bg-emerald-400 shadow-[0_0_6px_#34d399]',
      tag: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-900 dark:text-emerald-200'
    },
    {
      // Technician 3: Matyas (Warm Amber / Gold accent)
      cardBorder: 'border-amber-500/50 dark:border-amber-400/40 hover:border-amber-500 shadow-[0_0_22px_-4px_rgba(245,158,11,0.18)] dark:shadow-[0_0_25px_-5px_rgba(245,158,11,0.25)]',
      badge: 'text-amber-800 dark:text-amber-300 bg-amber-500/15 border-amber-500/35',
      role: 'text-amber-700 dark:text-amber-400 font-semibold',
      laser: 'via-amber-400/80',
      dot: 'bg-amber-400 shadow-[0_0_6px_#fbbf24]',
      tag: 'bg-amber-500/10 border-amber-500/25 text-amber-900 dark:text-amber-200'
    }
  ];

  return (
    <section id="equipo" className="py-14 sm:py-16 border-t border-zinc-200 dark:border-white/10 relative">
      {/* Section Introduction */}
      <FloatUpReveal delayMs={60} distancePx={30}>
        <div className="max-w-xl mb-8">
          <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold mb-1.5">
            Equipo Técnico
          </div>
          <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-zinc-900 dark:text-[#FFFDF9]">
            Quiénes estamos detrás
          </h2>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-[#FFFDF9]/80 mt-2 leading-relaxed">
            Somos tres técnicos en desarrollo Full Stack con la misma preparación y experiencia. Desarrollamos desde la interfaz web hasta la lógica del sistema y las bases de datos para que tu negocio o empresa nunca se quede esperando.
          </p>
        </div>
      </FloatUpReveal>

      {/* Grid of the 3 Technicians with Permanent Identifiable Colors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono mb-6">
        {ENGINEERS_DATA.map((eng, index) => {
          const accent = engineerAccents[index] || engineerAccents[0];

          return (
            <FloatUpReveal key={eng.id} delayMs={index * 120} distancePx={40}>
              <div
                className={`relative group h-full p-5 sm:p-6 rounded-xl border bg-white/95 dark:bg-[#1C1A18]/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.98] flex flex-col justify-between overflow-hidden ${accent.cardBorder}`}
              >
                {/* Permanent subtle laser beam on top with hover intensification */}
                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent ${accent.laser} to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300 laser-beam-animated`} />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md border ${accent.badge}`}>
                      Técnico {eng.number}
                    </span>
                  </div>
                  
                  <h3 className="font-title font-bold text-base sm:text-lg text-zinc-900 dark:text-[#FFFDF9] mt-1 transition-colors">
                    {eng.name}
                  </h3>
                  
                  <p className={`text-xs mt-0.5 ${accent.role}`}>
                    {eng.role}
                  </p>

                  <p className="text-xs text-zinc-700 dark:text-[#FFFDF9]/80 mt-3 font-sans leading-relaxed">
                    {eng.bio}
                  </p>
                </div>

                {/* Skills with colorful subtle badges */}
                <div className="mt-5 pt-3.5 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px]">
                  {eng.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-0.5 rounded-md border font-sans font-medium transition-colors ${accent.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FloatUpReveal>
          );
        })}
      </div>

      {/* Trust & Direct Attention Note with high contrast in light & dark mode */}
      <FloatUpReveal delayMs={140} distancePx={28}>
        <div className="p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-[#1E1C1A]/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono shadow-xs">
          <div className="flex items-center gap-2 text-zinc-800 dark:text-[#FFFDF9]/80 text-center sm:text-left">
            <span className="font-medium">Hablas y coordinas directamente con nosotros tres, sin intermediarios.</span>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-700 dark:text-cyan-300 hover:text-cyan-800 dark:hover:text-cyan-200 font-bold whitespace-nowrap px-3.5 py-1.5 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
          >
            Conversar por WhatsApp →
          </a>
        </div>
      </FloatUpReveal>
    </section>
  );
};
