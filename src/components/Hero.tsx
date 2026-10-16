import React, { useState } from 'react';
import { GITHUB_ORG_URL, WHATSAPP_URL, CONTACT_EMAIL } from '../data/team.ts';
import { DataSkyLogo } from './DataSkyLogo.tsx';
import { FloatUpReveal } from './FloatUpReveal.tsx';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 relative">
      {/* Top Badge: Clear & Friendly with Official Logo */}
      <FloatUpReveal delayMs={100} distancePx={28}>
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium border border-[#B0A8A0]/30 bg-[#B0A8A0]/10 text-[#252321] dark:text-[#FFFDF9] mb-6">
          <DataSkyLogo size="sm" />
          <span className="w-1 h-1 rounded-full bg-[#B0A8A0]"></span>
          <span>3 Especialistas listos para tu negocio</span>
        </div>
      </FloatUpReveal>

      {/* Main Headline with Heavy Space Grotesk 900 */}
      <FloatUpReveal delayMs={220} distancePx={36}>
        <h1 className="font-title font-black text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] text-[#252321] dark:text-[#FFFDF9] mb-6">
          Hacemos que tu negocio venda más, <br className="hidden sm:inline" />
          <span className="text-[#B0A8A0]">fácil y por internet.</span>
        </h1>
      </FloatUpReveal>

      {/* Direct, non-technical commercial lead */}
      <FloatUpReveal delayMs={340} distancePx={32}>
        <p className="text-base sm:text-lg max-w-xl text-[#252321]/85 dark:text-[#FFFDF9]/80 mb-8 leading-relaxed font-normal">
          Te creamos tu página web, tienda online o sistema a la medida. ¿Aún no tienes nombre o logotipo para tu negocio? Te ayudamos a construir tu marca desde cero para que salgas a vender sin complicaciones.
        </p>
      </FloatUpReveal>

      {/* Action Buttons & Clean Copy Email */}
      <FloatUpReveal delayMs={460} distancePx={30}>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-title font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded bg-[#252321] text-[#FFFDF9] dark:bg-[#B0A8A0] dark:text-[#252321] hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>Escríbenos por WhatsApp</span>
            <span className="font-mono text-xs">→</span>
          </a>

          <a
            href="#proyectos"
            className="font-title font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded border border-[#252321]/20 dark:border-[#383532] bg-white/40 dark:bg-[#1E1C1A]/50 text-[#252321] dark:text-[#FFFDF9] hover:border-[#B0A8A0] hover:text-[#B0A8A0] dark:hover:text-[#B0A8A0] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>Ver lo que hemos hecho</span>
          </a>

          {/* Copy Email Fast Action */}
          <button
            onClick={handleCopyEmail}
            className="font-mono text-xs px-3.5 py-3 rounded border border-[#252321]/15 dark:border-[#383532]/60 hover:border-[#B0A8A0] text-[#252321]/70 dark:text-[#FFFDF9]/70 hover:text-[#B0A8A0] dark:hover:text-[#B0A8A0] transition-colors flex items-center gap-2 cursor-pointer"
            title="Copiar correo"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            <span>{copiedEmail ? 'Copiado al portapapeles' : CONTACT_EMAIL}</span>
          </button>
        </div>
      </FloatUpReveal>
    </section>
  );
};
