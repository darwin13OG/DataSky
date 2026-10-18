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
      {/* Top Badge: Clear & Friendly with Official Logo, clean with no blinking dots */}
      <FloatUpReveal delayMs={100} distancePx={28}>
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium border border-cyan-500/30 dark:border-cyan-400/30 bg-white/95 dark:bg-[#1E1C1A]/90 text-zinc-900 dark:text-[#FFFDF9] mb-6 shadow-[0_0_15px_-2px_rgba(6,182,212,0.18)] backdrop-blur-md">
          <DataSkyLogo size="sm" />
          <span className="text-xs font-semibold">Técnicos en Programación de Software</span>
        </div>
      </FloatUpReveal>

      {/* Main Headline with Heavy Space Grotesk 900 and pure blue fluid animated liquid gradient */}
      <FloatUpReveal delayMs={220} distancePx={36}>
        <h1 className="font-title font-black text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] text-zinc-900 dark:text-[#FFFDF9] mb-6">
          Hacemos que tu negocio venda más, <br className="hidden sm:inline" />
          <span className="text-fluid-gradient">
            fácil y por internet.
          </span>
        </h1>
      </FloatUpReveal>

      {/* Direct, non-technical commercial lead with sharp contrast in light mode */}
      <FloatUpReveal delayMs={340} distancePx={32}>
        <p className="text-base sm:text-lg max-w-xl text-zinc-800 dark:text-[#FFFDF9]/85 mb-8 leading-relaxed font-normal">
          Te creamos tu página web, tienda online o sistema a la medida. ¿Aún no tienes nombre o logotipo para tu negocio? Te ayudamos a construir tu marca desde cero para que salgas a vender sin complicaciones.
        </p>
      </FloatUpReveal>

      {/* Action Buttons & Clean Copy Email without blinking dots */}
      <FloatUpReveal delayMs={460} distancePx={30}>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* Primary Action: Modern Neon Glowing Button with crisp WhatsApp icon */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-px rounded-lg overflow-hidden font-title font-bold text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.97] shadow-[0_0_20px_-3px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.45)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative px-6 py-3.5 rounded-[7px] bg-zinc-950 dark:bg-[#121110] text-[#FFFDF9] flex items-center gap-2.5 transition-colors group-hover:bg-zinc-900">
              <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.94-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.167 8.167 0 01-1.25-4.37c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.187 8.187 0 012.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.18-.47-.3z"/>
              </svg>
              <span>Escríbenos por WhatsApp</span>
              <span className="font-mono text-xs text-cyan-300 group-hover:translate-x-0.5 transition-transform">→</span>
            </span>
          </a>

          {/* Secondary Action: Redirect to GitHub with official GitHub symbol */}
          <a
            href={GITHUB_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group font-title font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-lg border border-zinc-300 dark:border-white/15 bg-white/90 dark:bg-[#1E1C1A]/80 text-zinc-900 dark:text-[#FFFDF9] hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-300 hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)] active:scale-[0.97] transition-all duration-200 flex items-center gap-2.5 backdrop-blur-sm"
          >
            {/* Official GitHub Vector SVG Symbol */}
            <svg className="w-4 h-4 fill-current text-zinc-800 dark:text-[#FFFDF9] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-200 shrink-0" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Ver lo que hemos hecho</span>
            <span className="font-mono text-xs opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>

          {/* Copy Email Fast Action with Vector Icon -> Chulo Transition */}
          <button
            onClick={handleCopyEmail}
            className="font-mono text-xs px-3.5 py-3 rounded-lg border border-zinc-300 dark:border-[#383532] hover:border-cyan-500 bg-white/90 dark:bg-[#1E1C1A]/60 text-zinc-800 dark:text-[#FFFDF9]/70 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all flex items-center gap-2 cursor-pointer active:scale-[0.97]"
            title={copiedEmail ? 'Copiado al portapapeles' : 'Copiar correo'}
          >
            <div className="relative w-3.5 h-3.5 flex items-center justify-center">
              <svg
                className={`w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 transition-all duration-200 absolute inset-0 ${
                  copiedEmail ? 'opacity-0 scale-75 rotate-45' : 'opacity-100 scale-100 rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <svg
                className={`w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 transition-all duration-200 absolute inset-0 ${
                  copiedEmail ? 'opacity-100 scale-110 rotate-0' : 'opacity-0 scale-50 -rotate-45'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>{copiedEmail ? 'Copiado' : CONTACT_EMAIL}</span>
          </button>
        </div>
      </FloatUpReveal>
    </section>
  );
};
