import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.tsx';
import { DataSkyLogo } from './DataSkyLogo.tsx';
import { WHATSAPP_URL } from '../data/team.ts';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="border-b border-oliva/10 dark:border-oliva-border/60 backdrop-blur-md bg-almendra/90 dark:bg-oliva-dark/85 sticky top-0 z-50 px-4 sm:px-6 py-3.5 transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand Link with Cloud Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-salvia rounded-sm"
          aria-label="DataSky Studio Inicio"
        >
          <DataSkyLogo size="md" />
          <span className="font-title font-black text-lg sm:text-xl tracking-tighter uppercase flex items-center">
            <span className="text-oliva dark:text-almendra">DATA</span>
            <span className="text-salvia">SKY</span>
            <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded border border-salvia/40 text-salvia ml-1.5 hidden xs:inline-block">
              STUDIO
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links & Actions */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs font-semibold">
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold tracking-wide" aria-label="Navegación principal">
            <a
              href="#proyectos"
              className="text-oliva/80 dark:text-almendra/80 hover:text-salvia dark:hover:text-salvia transition-colors py-1"
            >
              Proyectos
            </a>
            <a
              href="#equipo"
              className="text-oliva/80 dark:text-almendra/80 hover:text-salvia dark:hover:text-salvia transition-colors py-1"
            >
              Equipo
            </a>
            <a
              href="#faq"
              className="text-oliva/80 dark:text-almendra/80 hover:text-salvia dark:hover:text-salvia transition-colors py-1"
            >
              FAQ
            </a>
            <a
              href="#contacto"
              className="text-oliva/80 dark:text-almendra/80 hover:text-salvia dark:hover:text-salvia transition-colors py-1"
            >
              Contacto
            </a>
          </nav>

          {/* Theme Switcher with Vector SVG Sun & Moon */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-oliva/20 dark:border-oliva-border hover:border-salvia dark:hover:border-salvia bg-white/40 dark:bg-oliva-surface/80 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-salvia flex items-center justify-center"
            aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
            title={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
          >
            {theme === 'light' ? (
              /* Icono Sol (Modo Claro activado, pulsar para oscuro) */
              <svg
                className="w-4 h-4 text-oliva transition-transform duration-200 hover:rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              /* Icono Luna (Modo Oscuro activado, pulsar para claro) */
              <svg
                className="w-4 h-4 text-salvia transition-transform duration-200 hover:-rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* WhatsApp Direct CTA button in header (desktop) */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 font-title font-bold text-[11px] uppercase tracking-wider px-3.5 py-2 rounded bg-salvia/20 dark:bg-salvia/20 text-oliva dark:text-almendra border border-salvia/30 hover:bg-salvia hover:text-oliva-dark dark:hover:bg-salvia dark:hover:text-oliva-dark transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-salvia"></span>
            Contacto
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-oliva/20 dark:border-oliva-border text-oliva dark:text-almendra hover:border-salvia"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-oliva/10 dark:border-oliva-border/40 max-w-4xl mx-auto flex flex-col gap-2 font-title font-bold text-xs uppercase tracking-wider pb-2 animate-fadeIn">
          <a
            href="#proyectos"
            onClick={closeMobileMenu}
            className="px-3 py-2 rounded hover:bg-salvia/10 text-oliva dark:text-almendra"
          >
            Proyectos (04 Despliegues)
          </a>
          <a
            href="#equipo"
            onClick={closeMobileMenu}
            className="px-3 py-2 rounded hover:bg-salvia/10 text-oliva dark:text-almendra"
          >
            El Equipo (3 Técnicos)
          </a>
          <a
            href="#faq"
            onClick={closeMobileMenu}
            className="px-3 py-2 rounded hover:bg-salvia/10 text-oliva dark:text-almendra"
          >
            Preguntas Frecuentes
          </a>
          <a
            href="#contacto"
            onClick={closeMobileMenu}
            className="px-3 py-2 rounded hover:bg-salvia/10 text-oliva dark:text-almendra"
          >
            Contacto & Presupuestos
          </a>
          <div className="pt-2 flex items-center justify-between gap-2 border-t border-oliva/10 dark:border-oliva-border/40">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded bg-salvia text-oliva-dark font-bold text-[11px]"
            >
              WhatsApp Directo →
            </a>
            <a
              href="https://github.com/DataSky-Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 rounded border border-oliva/20 dark:border-oliva-border text-center text-[11px]"
            >
              GitHub Org
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
