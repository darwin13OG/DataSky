import React from 'react';
import { GITHUB_ORG_URL, WHATSAPP_URL, CONTACT_EMAIL } from '../data/team.ts';
import { DataSkyLogo } from './DataSkyLogo.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-white/10 text-xs font-mono">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="group flex items-center justify-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm cursor-pointer"
          aria-label="DataSky Inicio"
        >
          <DataSkyLogo size="md" />
          <span className="font-title font-black text-lg sm:text-xl tracking-tighter uppercase flex items-center">
            <span className="text-[#252321] dark:text-[#FFFDF9]">DATA</span>
            <span className="text-[#B0A8A0] group-hover:text-cyan-400 transition-colors">SKY</span>
          </span>
        </a>

        {/* Centered Friendly Navigation Links with smooth scroll */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-zinc-700 dark:text-[#FFFDF9]/80">
          <a
            href="#proyectos"
            onClick={(e) => handleSmoothScroll(e, 'proyectos')}
            className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Lo que hacemos
          </a>
          <a
            href="#equipo"
            onClick={(e) => handleSmoothScroll(e, 'equipo')}
            className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Quiénes somos
          </a>
          <a
            href="#marca"
            onClick={(e) => handleSmoothScroll(e, 'marca')}
            className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Tu marca
          </a>
          <a
            href="#faq"
            onClick={(e) => handleSmoothScroll(e, 'faq')}
            className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Preguntas frecuentes
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleSmoothScroll(e, 'contacto')}
            className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Contacto
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold"
          >
            WhatsApp Directo ↗
          </a>
          <a
            href={GITHUB_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-[#FFFDF9]/60 hover:text-cyan-600 dark:hover:text-cyan-300"
          >
            GitHub
          </a>
        </div>

        {/* Official Email Centered */}
        <div className="pt-2 border-t border-zinc-200 dark:border-white/10 w-full flex items-center justify-center gap-2 text-[11px] text-zinc-600 dark:text-[#FFFDF9]/75">
          <span className="text-zinc-500 dark:text-[#FFFDF9]/60">Correo Oficial:</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-700 dark:text-cyan-300 hover:underline font-bold">
            {CONTACT_EMAIL}
          </a>
        </div>

        {/* Bottom Baseline Centered: Copyright & Back to top */}
        <div className="w-full flex flex-col items-center justify-center gap-2 text-[11px] text-zinc-500 dark:text-[#FFFDF9]/60 pt-2 text-center">
          <p className="text-center font-normal">
            DataSky © {new Date().getFullYear()} — Soluciones fáciles y a la medida para tu negocio.
          </p>
          <button
            onClick={scrollToTop}
            className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer py-1 font-medium inline-flex items-center gap-1 active:scale-95"
            title="Volver arriba"
          >
            <span>Volver arriba ↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
