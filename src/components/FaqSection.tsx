import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faq.ts';
import { FloatUpReveal } from './FloatUpReveal.tsx';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Open first by default
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-16 border-t border-[#252321]/10 dark:border-[#383532]">
      <FloatUpReveal delayMs={60} distancePx={30}>
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#252321] dark:text-[#FFFDF9]">
              Preguntas Frecuentes
            </h2>
            <p className="text-xs sm:text-sm text-[#252321]/75 dark:text-[#FFFDF9]/75 mt-1">
              Todo lo que necesitas saber antes de empezar a trabajar juntos.
            </p>
          </div>
          <span className="text-xs font-mono text-[#B0A8A0] font-semibold hidden sm:inline-block">
            Respuestas Claras
          </span>
        </div>
      </FloatUpReveal>

      <div className="space-y-3">
        {FAQS_DATA.map((faq, idx) => {
          const isOpen = !!openIds[faq.id];

          return (
            <FloatUpReveal key={faq.id} delayMs={idx * 80} distancePx={32}>
              <div
                className="border border-[#252321]/15 dark:border-[#383532] rounded-lg overflow-hidden bg-white/50 dark:bg-[#1E1C1A]/70 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center font-title font-bold text-xs sm:text-sm uppercase tracking-tight text-[#252321] dark:text-[#FFFDF9] hover:text-[#B0A8A0] dark:hover:text-[#B0A8A0] transition-colors cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className="text-[#B0A8A0] font-mono text-lg font-bold shrink-0 w-6 h-6 rounded-md bg-[#B0A8A0]/10 flex items-center justify-center transition-transform"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#252321]/85 dark:text-[#FFFDF9]/85 leading-relaxed border-t border-[#252321]/10 dark:border-[#383532]/40 font-sans"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            </FloatUpReveal>
          );
        })}
      </div>
    </section>
  );
};
