import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faq.ts';
import { FloatUpReveal } from './FloatUpReveal.tsx';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-14 sm:py-20 border-t border-zinc-200/80 dark:border-zinc-800/60 relative">
      <FloatUpReveal delayMs={60} distancePx={30}>
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-mono mb-3 text-zinc-500 dark:text-[#FFFDF9]/60">
            <span className="font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">04</span>
            <span>/</span>
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-title font-black text-3xl sm:text-4xl uppercase tracking-tight text-zinc-950 dark:text-[#FFFDF9]">
            Respuestas Claras
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-[#FFFDF9]/80 mt-3 leading-relaxed">
            Todo lo que necesitas saber antes de empezar a trabajar juntos, con tiempos, costos y garantías claras.
          </p>
        </div>
      </FloatUpReveal>

      <div className="space-y-3">
        {FAQS_DATA.map((faq, idx) => {
          const isOpen = !!openIds[faq.id];

          return (
            <FloatUpReveal key={faq.id} delayMs={idx * 80} distancePx={32}>
              <div
                className={`rounded-xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                  isOpen
                    ? 'border-cyan-500 dark:border-cyan-400/50 bg-white dark:bg-[#1C1A18]/95 shadow-[0_0_25px_-5px_rgba(6,182,212,0.18)]'
                    : 'border-zinc-200/90 dark:border-white/10 bg-white/95 dark:bg-[#1C1A18]/80 hover:border-cyan-500/40 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.1)]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center font-title font-bold text-xs sm:text-sm uppercase tracking-tight text-zinc-900 dark:text-[#FFFDF9] hover:text-cyan-600 dark:hover:text-cyan-300 active:scale-[0.99] transition-all duration-200 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className={`font-mono text-lg font-bold shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 transform-gpu ${
                      isOpen
                        ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-500/40 shadow-[0_0_8px_rgba(6,182,212,0.25)] rotate-45'
                        : 'bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-[#B0A8A0] rotate-0 group-hover:border-cyan-500/30'
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Soft Sliding Accordion Container */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-700 dark:text-[#FFFDF9]/85 leading-relaxed border-t border-zinc-200/80 dark:border-white/10 font-sans">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </FloatUpReveal>
          );
        })}
      </div>
    </section>
  );
};
