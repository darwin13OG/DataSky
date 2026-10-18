import React, { useState } from 'react';
import { CONTACT_EMAIL, WHATSAPP_URL, WHATSAPP_PHONE } from '../data/team.ts';
import { FloatUpReveal } from './FloatUpReveal.tsx';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contacto" className="py-14 sm:py-16 border-t border-zinc-200 dark:border-white/10 relative">
      <FloatUpReveal delayMs={60} distancePx={30}>
        <div className="max-w-xl mb-8">
          <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-zinc-900 dark:text-[#FFFDF9]">
            Hablemos de tu negocio
          </h2>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-[#FFFDF9]/80 mt-1 leading-relaxed">
            Escríbenos directamente para conversar sobre lo que necesitas, resolver dudas y darte un precio claro sin compromiso.
          </p>
        </div>
      </FloatUpReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* WhatsApp Direct Card with Emerald Neon Glow */}
        <FloatUpReveal delayMs={100} distancePx={38}>
          <div className="relative group overflow-hidden h-full p-5 sm:p-6 rounded-xl border border-emerald-500/35 dark:border-emerald-500/30 bg-white/95 dark:bg-[#1C1A18]/90 backdrop-blur-md shadow-md hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.25)] hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between active:scale-[0.98]">
            {/* Laser top highlight */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div>
              <div className="inline-flex items-center px-2.5 py-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono font-bold uppercase mb-2.5">
                <span>WhatsApp Directo</span>
              </div>
              <h3 className="font-title font-bold text-lg sm:text-xl text-zinc-900 dark:text-[#FFFDF9]">
                +57 {WHATSAPP_PHONE}
              </h3>
              <p className="text-xs text-zinc-700 dark:text-[#FFFDF9]/75 mt-1.5 leading-relaxed">
                Te respondemos rápido para revisar qué necesitas en tu negocio.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 font-title font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-[#FFFDF9] shadow-[0_0_15px_-2px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Escribir por WhatsApp</span>
              <span className="font-mono text-xs">→</span>
            </a>
          </div>
        </FloatUpReveal>

        {/* Email Card with Cyan Laser Accent */}
        <FloatUpReveal delayMs={200} distancePx={38}>
          <div className="relative group overflow-hidden h-full p-5 sm:p-6 rounded-xl border border-cyan-500/35 dark:border-white/10 bg-white/95 dark:bg-[#1C1A18]/90 backdrop-blur-md shadow-md hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.22)] hover:border-cyan-500 transition-all duration-300 flex flex-col justify-between active:scale-[0.98]">
            {/* Laser top highlight */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              <div className="inline-flex items-center px-2.5 py-1 rounded-md border border-cyan-500/30 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 text-[10px] font-mono font-bold uppercase mb-2.5">
                <span>Correo Electrónico</span>
              </div>
              <h3 className="font-title font-bold text-base sm:text-lg text-zinc-900 dark:text-[#FFFDF9] truncate">
                {CONTACT_EMAIL}
              </h3>
              <p className="text-xs text-zinc-700 dark:text-[#FFFDF9]/75 mt-1.5 leading-relaxed">
                Canal oficial para propuestas detalladas y acuerdos de trabajo.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex-1 font-title font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white/10 dark:text-[#FFFDF9] border border-transparent dark:border-white/10 text-center transition-all"
              >
                Abrir correo
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg border border-zinc-300 dark:border-white/10 hover:border-cyan-500 bg-white/80 dark:bg-white/5 text-zinc-700 dark:text-[#FFFDF9]/80 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all duration-200 cursor-pointer active:scale-90 flex items-center justify-center shrink-0"
                title={copied ? 'Correo copiado' : 'Copiar correo'}
                aria-label="Copiar correo"
              >
                <div className="relative w-4 h-4 flex items-center justify-center">
                  {/* Vector Copy Icon */}
                  <svg
                    className={`w-4 h-4 transition-all duration-200 absolute inset-0 ${
                      copied ? 'opacity-0 scale-75 rotate-45' : 'opacity-100 scale-100 rotate-0 text-zinc-600 dark:text-[#FFFDF9]/70'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  {/* Vector Chulo (Checkmark) Icon */}
                  <svg
                    className={`w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-all duration-200 absolute inset-0 ${
                      copied ? 'opacity-100 scale-110 rotate-0' : 'opacity-0 scale-50 -rotate-45'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </FloatUpReveal>
      </div>
    </section>
  );
};
