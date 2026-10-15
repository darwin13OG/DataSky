import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faq.ts';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Open the first by default
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-16 border-t border-oliva/10 dark:border-oliva-border/40">
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-oliva dark:text-almendra">
            Preguntas Frecuentes
          </h2>
          <p className="text-xs text-oliva/60 dark:text-almendra/60 mt-1">
            Proceso de trabajo, entregables, metodologías y propiedad del código.
          </p>
        </div>
        <span className="text-xs font-mono text-salvia font-semibold hidden sm:inline-block">
          FAQ · Soporte
        </span>
      </div>

      <div className="space-y-3">
        {FAQS_DATA.map((faq) => {
          const isOpen = !!openIds[faq.id];

          return (
            <div
              key={faq.id}
              className="border border-oliva/10 dark:border-oliva-border rounded-lg overflow-hidden bg-white/40 dark:bg-oliva-surface transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="faq-btn w-full p-4 sm:p-5 text-left flex justify-between items-center font-title font-bold text-xs sm:text-sm uppercase tracking-tight text-oliva dark:text-almendra hover:text-salvia dark:hover:text-salvia transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-salvia"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="pr-4">{faq.question}</span>
                <span
                  className="faq-icon text-salvia font-mono text-lg font-bold shrink-0 w-6 h-6 rounded-md bg-salvia/10 flex items-center justify-center transition-transform"
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-oliva/90 dark:text-almendra/85 leading-relaxed border-t border-oliva/5 dark:border-oliva-border/30 font-sans"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
