import React from 'react';
import { GITHUB_ORG_URL, WHATSAPP_URL, CONTACT_EMAIL } from '../data/team.ts';
import { DataSkyLogo } from './DataSkyLogo.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-[#252321]/15 dark:border-[#383532] text-xs font-mono transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Brand */}
        <div className="flex items-center justify-center gap-2.5">
          <DataSkyLogo size="md" />
          <span className="font-title font-black text-lg tracking-tighter uppercase flex items-center">
            <span className="text-[#252321] dark:text-[#FFFDF9]">DATA</span>
            <span className="text-[#B0A8A0]">SKY</span>
          </span>
        </div>

        {/* Centered Friendly Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-[#252321]/80 dark:text-[#FFFDF9]/80">
          <a href="#proyectos" className="hover:text-[#B0A8A0] transition-colors">
            Lo que hacemos
          </a>
          <a href="#equipo" className="hover:text-[#B0A8A0] transition-colors">
            Quiénes somos
          </a>
          <a href="#faq" className="hover:text-[#B0A8A0] transition-colors">
            Preguntas frecuentes
          </a>
          <a href="#contacto" className="hover:text-[#B0A8A0] transition-colors">
            Contacto
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B0A8A0] hover:underline font-bold"
          >
            WhatsApp Directo ↗
          </a>
          <a
            href={GITHUB_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252321]/60 dark:text-[#FFFDF9]/60 hover:text-[#B0A8A0]"
          >
            GitHub
          </a>
        </div>

        {/* Official Email */}
        <div className="pt-2 border-t border-[#252321]/10 dark:border-[#383532]/40 w-full flex items-center justify-center gap-2 text-[11px] text-[#252321]/75 dark:text-[#FFFDF9]/75">
          <span className="text-[#252321]/60 dark:text-[#FFFDF9]/60">Correo Oficial:</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#B0A8A0] hover:underline font-bold">
            {CONTACT_EMAIL}
          </a>
        </div>

        {/* Bottom Baseline Centered */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#252321]/50 dark:text-[#FFFDF9]/50 pt-1">
          <span>DataSky © {new Date().getFullYear()} — Soluciones fáciles y a la medida para tu negocio.</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#B0A8A0] transition-colors cursor-pointer py-1 font-medium"
            title="Volver arriba"
          >
            Volver arriba ↑
          </button>
        </div>

      </div>
    </footer>
  );
};
