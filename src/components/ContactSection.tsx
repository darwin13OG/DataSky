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
    <section id="contacto" className="py-14 sm:py-16 border-t border-[#252321]/10 dark:border-[#383532]">
      <FloatUpReveal delayMs={60} distancePx={30}>
        <div className="max-w-xl mb-8">
          <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#252321] dark:text-[#FFFDF9]">
            Hablemos de tu negocio
          </h2>
          <p className="text-xs sm:text-sm text-[#252321]/75 dark:text-[#FFFDF9]/75 mt-1 leading-relaxed">
            Escríbenos directamente para conversar sobre lo que necesitas, resolver dudas y darte un precio claro sin compromiso.
          </p>
        </div>
      </FloatUpReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* WhatsApp Direct Card */}
        <FloatUpReveal delayMs={100} distancePx={38}>
          <div className="h-full p-5 rounded-lg border border-[#B0A8A0]/30 bg-[#B0A8A0]/10 dark:bg-[#1E1C1A] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#B0A8A0] uppercase block mb-1">
                WhatsApp Directo
              </span>
              <h3 className="font-title font-bold text-base text-[#252321] dark:text-[#FFFDF9]">
                +57 {WHATSAPP_PHONE}
              </h3>
              <p className="text-xs text-[#252321]/75 dark:text-[#FFFDF9]/75 mt-1">
                Te respondemos rápido para revisar qué necesitas en tu negocio.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 font-title font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded bg-[#252321] text-[#FFFDF9] dark:bg-[#B0A8A0] dark:text-[#252321] hover:opacity-90 transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>Escribir por WhatsApp</span>
              <span className="font-mono text-xs">→</span>
            </a>
          </div>
        </FloatUpReveal>

        {/* Email Card */}
        <FloatUpReveal delayMs={200} distancePx={38}>
          <div className="h-full p-5 rounded-lg border border-[#252321]/10 dark:border-[#383532] bg-white/50 dark:bg-[#1E1C1A] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#B0A8A0] uppercase block mb-1">
                Correo Electrónico
              </span>
              <h3 className="font-title font-bold text-base text-[#252321] dark:text-[#FFFDF9] truncate">
                {CONTACT_EMAIL}
              </h3>
              <p className="text-xs text-[#252321]/75 dark:text-[#FFFDF9]/75 mt-1">
                Canal oficial para propuestas detalladas y acuerdos de trabajo.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex-1 font-title font-bold text-xs uppercase tracking-wider px-3.5 py-2.5 rounded bg-[#252321] text-[#FFFDF9] dark:bg-[#1A1817] border border-[#252321]/20 dark:border-[#383532] hover:border-[#B0A8A0] text-center transition-all"
              >
                Abrir correo
              </a>
              <button
                onClick={handleCopyEmail}
                className="font-mono text-xs px-3.5 py-2.5 rounded border border-[#252321]/20 dark:border-[#383532] hover:border-[#B0A8A0] text-[#252321]/80 dark:text-[#FFFDF9]/80 hover:text-[#B0A8A0] transition-colors cursor-pointer"
                title="Copiar correo"
              >
                {copied ? 'Copiado' : 'Copiar'}
              </button>
            </div>
          </div>
        </FloatUpReveal>
      </div>
    </section>
  );
};
