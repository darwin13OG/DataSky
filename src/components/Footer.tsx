import React from 'react';
import { GITHUB_ORG_URL, WHATSAPP_URL, CONTACT_EMAIL, ALT_CONTACT_EMAIL } from '../data/team.ts';
import { DataSkyLogo } from './DataSkyLogo.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-oliva/10 dark:border-oliva-border/40 text-xs font-mono transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Top row with Logo and Quick Links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-3">
            <DataSkyLogo size="sm" />
            <div>
              <span className="font-title font-black text-sm uppercase tracking-tight text-oliva dark:text-almendra">
                DataSky Studio
              </span>
              <p className="text-[11px] text-oliva/60 dark:text-almendra/60 font-mono">
                Colectivo de Software & Arquitectura Web
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="#proyectos"
              className="text-oliva/70 dark:text-almendra/70 hover:text-salvia transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#equipo"
              className="text-oliva/70 dark:text-almendra/70 hover:text-salvia transition-colors"
            >
              Equipo
            </a>
            <a
              href="#faq"
              className="text-oliva/70 dark:text-almendra/70 hover:text-salvia transition-colors"
            >
              FAQ
            </a>
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-salvia hover:underline font-bold"
            >
              GitHub Org ↗
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

        {/* Developers Explicit Mention & Direct Emails */}
        <div className="p-4 rounded-lg border border-oliva/10 dark:border-oliva-border/60 bg-white/30 dark:bg-oliva-surface/60 flex flex-col sm:flex-row justify-between gap-4">
          <div className="text-[11px] text-oliva/70 dark:text-almendra/70 leading-relaxed">
            <span className="font-bold text-salvia uppercase">Ingenieros Desarrolladores:</span>{' '}
            <span>Darwin Alzate</span> · <span>Jose Manuel Posada Muñoz</span> · <span>Matyas García</span>.
          </div>

          <div className="text-[11px] text-oliva/60 dark:text-almendra/60 flex items-center gap-2">
            <span>Contacto:</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-salvia hover:underline">
              {CONTACT_EMAIL}
            </a>
            <span>/</span>
            <a href={`mailto:${ALT_CONTACT_EMAIL}`} className="text-salvia hover:underline">
              {ALT_CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-oliva/50 dark:text-almendra/50 pt-2">
          <div>
            DataSky Studio © {new Date().getFullYear()} — Software directo, rápido y a medida.
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-salvia transition-colors flex items-center gap-1 cursor-pointer"
            title="Volver arriba"
          >
            <span>Volver arriba</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
