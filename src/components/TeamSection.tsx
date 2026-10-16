import React from 'react';
import { ENGINEERS_DATA, WHATSAPP_URL } from '../data/team.ts';
import { FloatUpReveal } from './FloatUpReveal.tsx';

export const TeamSection: React.FC = () => {
  return (
    <section id="equipo" className="py-14 sm:py-16 border-t border-[#252321]/10 dark:border-[#383532]">
      {/* Section Introduction */}
      <FloatUpReveal delayMs={60} distancePx={30}>
        <div className="max-w-xl mb-8">
          <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#252321] dark:text-[#FFFDF9]">
            Quiénes estamos detrás
          </h2>
          <p className="text-xs sm:text-sm text-[#252321]/75 dark:text-[#FFFDF9]/75 mt-2 leading-relaxed">
            Somos tres especialistas que trabajamos directo contigo. Te entregamos tu página o sistema funcionando, te enseñamos a manejarlo y te damos soporte continuo.
          </p>
        </div>
      </FloatUpReveal>

      {/* Grid of the 3 Specialists with Staggered Upward Float */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono mb-6">
        {ENGINEERS_DATA.map((eng, index) => (
          <FloatUpReveal key={eng.id} delayMs={index * 120} distancePx={40}>
            <div
              className="h-full p-4 rounded-lg border border-[#252321]/15 dark:border-[#383532] bg-white/50 dark:bg-[#1E1C1A]/70 hover:border-[#B0A8A0] transform-gpu hover:-translate-y-1 transition-transform duration-200 flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div>
                <p className="text-[10px] text-[#B0A8A0] uppercase font-bold tracking-wider">
                  Especialista {eng.number}
                </p>
                
                <h3 className="font-title font-bold text-base text-[#252321] dark:text-[#FFFDF9] mt-1">
                  {eng.name}
                </h3>
                
                <p className="text-xs text-[#B0A8A0] mt-0.5 font-medium">
                  {eng.role}
                </p>

                <p className="text-[11px] text-[#252321]/80 dark:text-[#FFFDF9]/80 mt-2.5 font-sans leading-relaxed">
                  {eng.bio}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-4 pt-2.5 border-t border-[#252321]/10 dark:border-[#383532]/40 flex flex-wrap gap-1 text-[10px] text-[#252321]/80 dark:text-[#FFFDF9]/70">
                {eng.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-1.5 py-0.5 rounded bg-[#252321]/5 dark:bg-[#1A1817]/60 border border-[#252321]/10 dark:border-[#383532]/50 font-sans"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FloatUpReveal>
        ))}
      </div>

      {/* Trust & Direct Attention Note */}
      <FloatUpReveal delayMs={140} distancePx={28}>
        <div className="p-4 rounded-lg border border-[#252321]/10 dark:border-[#383532] bg-white/30 dark:bg-[#1E1C1A]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <span className="text-[#252321]/75 dark:text-[#FFFDF9]/75 text-center sm:text-left">
            Hablas y coordinas directamente con nosotros tres, sin intermediarios.
          </span>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B0A8A0] hover:underline font-bold whitespace-nowrap"
          >
            Conversar por WhatsApp →
          </a>
        </div>
      </FloatUpReveal>
    </section>
  );
};
