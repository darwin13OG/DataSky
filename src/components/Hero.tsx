import React, { useState } from 'react';
import { GITHUB_ORG_URL, WHATSAPP_URL, CONTACT_EMAIL } from '../data/team.ts';
import { DataSkyLogo } from './DataSkyLogo.tsx';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="pt-16 sm:pt-24 pb-16 relative">
      {/* Top Engineering Availability Badge */}
      <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-salvia/30 bg-salvia/10 text-oliva dark:text-salvia transition-all hover:bg-salvia/15">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-salvia opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-salvia"></span>
          </span>
          3 Desarrolladores Full-Stack
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono text-oliva/60 dark:text-almendra/60 border border-oliva/10 dark:border-oliva-border/40">
          <span>Medellín / Remote</span>
          <span>·</span>
          <span className="text-salvia font-medium">Capacidad Inmediata</span>
        </div>
      </div>

      {/* Main Headline with Heavy Space Grotesk 900 */}
      <h1 className="font-title font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.93] mb-6 text-oliva dark:text-almendra">
        Software directo, <br className="hidden sm:inline" />
        <span className="text-salvia">rápido y a medida.</span>
      </h1>

      {/* Narrative Lead */}
      <p className="text-base sm:text-lg max-w-xl text-oliva/80 dark:text-almendra/70 mb-8 leading-relaxed font-normal">
        Construimos sistemas de inventario, herramientas internas con IA y plataformas comerciales.
        Desarrollado directamente por ingenieros, sin intermediarios.
      </p>

      {/* Action Buttons & Quick Copy */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-title font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded bg-oliva text-almendra dark:bg-salvia dark:text-oliva-dark hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm"
        >
          <span>Iniciar Proyecto por WhatsApp</span>
          <span className="font-mono text-sm">→</span>
        </a>

        <a
          href={GITHUB_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-title font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded border border-oliva/20 dark:border-oliva-border bg-white/40 dark:bg-oliva-surface/50 text-oliva dark:text-almendra hover:border-salvia hover:text-salvia dark:hover:text-salvia active:scale-[0.98] transition-all flex items-center gap-2"
        >
          {/* GitHub Vector SVG */}
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>GitHub Org</span>
        </a>

        {/* Copy Email Fast Action */}
        <button
          onClick={handleCopyEmail}
          className="font-mono text-xs px-3.5 py-3 rounded border border-oliva/15 dark:border-oliva-border/60 hover:border-salvia text-oliva/70 dark:text-almendra/70 hover:text-salvia dark:hover:text-salvia transition-colors flex items-center gap-2 cursor-pointer"
          title="Copiar correo de contacto"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          <span>{copiedEmail ? '¡Copiado al portapapeles!' : CONTACT_EMAIL}</span>
        </button>
      </div>

      {/* Studio Value Highlights in Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6 border-t border-oliva/10 dark:border-oliva-border/40 text-xs font-mono">
        <div className="p-3 rounded border border-oliva/10 dark:border-oliva-border/40 bg-white/30 dark:bg-oliva-surface/40">
          <p className="text-[10px] text-salvia uppercase">Velocidad</p>
          <p className="font-title font-bold text-sm text-oliva dark:text-almendra mt-0.5">Semana 1</p>
          <p className="text-[11px] text-oliva/50 dark:text-almendra/50 mt-0.5">Primer prototipo funcional</p>
        </div>
        <div className="p-3 rounded border border-oliva/10 dark:border-oliva-border/40 bg-white/30 dark:bg-oliva-surface/40">
          <p className="text-[10px] text-salvia uppercase">Propiedad</p>
          <p className="font-title font-bold text-sm text-oliva dark:text-almendra mt-0.5">100% Tuyo</p>
          <p className="text-[11px] text-oliva/50 dark:text-almendra/50 mt-0.5">Repositorio y despliegue</p>
        </div>
        <div className="p-3 rounded border border-oliva/10 dark:border-oliva-border/40 bg-white/30 dark:bg-oliva-surface/40">
          <p className="text-[10px] text-salvia uppercase">Contacto</p>
          <p className="font-title font-bold text-sm text-oliva dark:text-almendra mt-0.5">Ingenieros</p>
          <p className="text-[11px] text-oliva/50 dark:text-almendra/50 mt-0.5">Cero intermediarios</p>
        </div>
        <div className="p-3 rounded border border-oliva/10 dark:border-oliva-border/40 bg-white/30 dark:bg-oliva-surface/40">
          <p className="text-[10px] text-salvia uppercase">Arquitectura</p>
          <p className="font-title font-bold text-sm text-oliva dark:text-almendra mt-0.5">Serverless</p>
          <p className="text-[11px] text-oliva/50 dark:text-almendra/50 mt-0.5">Cero mantenimiento ocioso</p>
        </div>
      </div>
    </section>
  );
};
