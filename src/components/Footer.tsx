import React from 'react';
import { GITHUB_ORG_URL, WHATSAPP_URL, CONTACT_EMAIL } from '../data/team.ts';
import { DataSkyLogo } from './DataSkyLogo.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-oliva/15 dark:border-oliva-border/40 text-xs font-mono transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Brand */}
        <div className="flex items-center justify-center gap-2.5">
          <DataSkyLogo size="sm" />
          <span className="font-title font-bold text-sm uppercase tracking-tight text-oliva dark:text-almendra">
            DataSky Studio
          </span>
        </div>

        {/* Centered Navigation Links on Mobile and Desktop */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-oliva/80 dark:text-almendra/80">
          <a href="#proyectos" className="hover:text-salvia transition-colors">
            Proyectos
          </a>
          <a href="#equipo" className="hover:text-salvia transition-colors">
            Equipo
          </a>
          <a href="#faq" className="hover:text-salvia transition-colors">
            FAQ
          </a>
          <a href="#contacto" className="hover:text-salvia transition-colors">
            Contacto
          </a>
          <a
            href={GITHUB_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-salvia hover:underline font-bold"
          >
            GitHub ↗
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-salvia hover:underline font-bold"
          >
            WhatsApp ↗
          </a>
        </div>

        {/* Official Email */}
        <div className="pt-2 border-t border-oliva/10 dark:border-oliva-border/30 w-full flex items-center justify-center gap-2 text-[11px] text-oliva/75 dark:text-almendra/75">
          <span className="text-oliva/60 dark:text-almendra/60">Correo Oficial:</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-salvia hover:underline font-bold">
            {CONTACT_EMAIL}
          </a>
        </div>

        {/* Bottom Baseline Centered */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-oliva/50 dark:text-almendra/50 pt-1">
          <span>DataSky Studio © {new Date().getFullYear()} — Software directo, rápido y a medida.</span>
          <button
            onClick={scrollToTop}
            className="hover:text-salvia transition-colors cursor-pointer py-1 font-medium"
            title="Volver arriba"
          >
            Volver arriba ↑
          </button>
        </div>

      </div>
    </footer>
  );
};
