import React from 'react';
import { GITHUB_ORG_URL, WHATSAPP_URL, CONTACT_EMAIL } from '../data/team.ts';
import { DataSkyLogo } from './DataSkyLogo.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-oliva/10 dark:border-oliva-border/40 text-xs font-mono transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Main Footer Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <DataSkyLogo size="sm" />
            <span className="font-title font-bold text-sm uppercase tracking-tight text-oliva dark:text-almendra">
              DataSky Studio
            </span>
          </div>

          {/* Quick Clean Navigation Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-oliva/70 dark:text-almendra/70">
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
        </div>

        {/* Clean Developers Credit & Official Email */}
        <div className="pt-4 border-t border-oliva/10 dark:border-oliva-border/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[11px] text-oliva/70 dark:text-almendra/70">
          <div>
            <span className="font-semibold text-salvia uppercase">Técnicos Desarrolladores:</span>{' '}
            <span>Darwin Alzate</span> · <span>Jose Manuel Posada Muñoz</span> · <span>Matyas García</span>
          </div>
          <div>
            <span className="text-oliva/50 dark:text-almendra/50">Correo:</span>{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-salvia hover:underline font-bold">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex justify-between items-center text-[11px] text-oliva/40 dark:text-almendra/40 pt-2">
          <span>DataSky Studio © {new Date().getFullYear()}</span>
          <button
            onClick={scrollToTop}
            className="hover:text-salvia transition-colors cursor-pointer"
            title="Volver arriba"
          >
            Volver arriba ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
