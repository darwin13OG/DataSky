import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.tsx';
import { DataSkyLogo } from './DataSkyLogo.tsx';
import { WHATSAPP_URL } from '../data/team.ts';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="border-b border-[#252321]/10 dark:border-[#383532] backdrop-blur-md bg-[#FFFDF9]/90 dark:bg-[#1A1817]/90 sticky top-0 z-50 px-4 sm:px-6 py-3.5 transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand Link with Cloud Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B0A8A0] rounded-sm"
          aria-label="DataSky Inicio"
        >
          <DataSkyLogo size="md" />
          <span className="font-title font-black text-lg sm:text-xl tracking-tighter uppercase flex items-center">
            <span className="text-[#252321] dark:text-[#FFFDF9]">DATA</span>
            <span className="text-[#B0A8A0]">SKY</span>
          </span>
        </a>

        {/* Desktop Navigation Links & Actions */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs font-semibold">
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold tracking-wide" aria-label="Navegación principal">
            <a
              href="#proyectos"
              className="text-[#252321]/80 dark:text-[#FFFDF9]/80 hover:text-[#B0A8A0] dark:hover:text-[#B0A8A0] transition-colors py-1"
            >
              Lo que hacemos
            </a>
            <a
              href="#equipo"
              className="text-[#252321]/80 dark:text-[#FFFDF9]/80 hover:text-[#B0A8A0] dark:hover:text-[#B0A8A0] transition-colors py-1"
            >
              Quiénes somos
            </a>
            <a
              href="#marca"
              className="text-[#252321]/80 dark:text-[#FFFDF9]/80 hover:text-[#B0A8A0] dark:hover:text-[#B0A8A0] transition-colors py-1"
            >
              Tu marca
            </a>
            <a
              href="#faq"
              className="text-[#252321]/80 dark:text-[#FFFDF9]/80 hover:text-[#B0A8A0] dark:hover:text-[#B0A8A0] transition-colors py-1"
            >
              Preguntas
            </a>
            <a
              href="#contacto"
              className="text-[#252321]/80 dark:text-[#FFFDF9]/80 hover:text-[#B0A8A0] dark:hover:text-[#B0A8A0] transition-colors py-1"
            >
              Contacto
            </a>
          </nav>

          {/* Theme Switcher with Vector SVG Sun & Moon */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-[#252321]/15 dark:border-[#383532] hover:border-[#B0A8A0] dark:hover:border-[#B0A8A0] transition-colors flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B0A8A0]"
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'}
          >
            {theme === 'dark' ? (
              <svg
                className="w-4 h-4 text-[#B0A8A0] transition-transform duration-200 hover:rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-[#252321] transition-transform duration-200 hover:-rotate-12"
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
            className="hidden sm:inline-flex items-center gap-1.5 font-title font-bold text-[11px] uppercase tracking-wider px-3.5 py-2 rounded bg-[#B0A8A0]/20 text-[#252321] dark:text-[#FFFDF9] border border-[#B0A8A0]/30 hover:bg-[#B0A8A0] hover:text-[#252321] dark:hover:bg-[#B0A8A0] dark:hover:text-[#252321] transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B0A8A0]"></span>
            Contacto
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-[#252321]/20 dark:border-[#383532] text-[#252321] dark:text-[#FFFDF9] hover:border-[#B0A8A0]"
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
        <div className="md:hidden mt-3 pt-3 border-t border-[#252321]/10 dark:border-[#383532] max-w-4xl mx-auto flex flex-col gap-2 font-title font-bold text-xs uppercase tracking-wider pb-2">
          <a
            href="#proyectos"
            onClick={closeMobileMenu}
            className="px-3 py-2 rounded hover:bg-[#B0A8A0]/10 text-[#252321] dark:text-[#FFFDF9]"
          >
            Lo que hacemos
          </a>
          <a
            href="#equipo"
            onClick={closeMobileMenu}
            className="px-3 py-2 rounded hover:bg-[#B0A8A0]/10 text-[#252321] dark:text-[#FFFDF9]"
          >
            Quiénes somos
          </a>
          <a
            href="#marca"
            onClick={closeMobileMenu}
            className="px-3 py-2 rounded hover:bg-[#B0A8A0]/10 text-[#252321] dark:text-[#FFFDF9]"
          >
            Tu marca desde cero
          </a>
          <a
            href="#faq"
            onClick={closeMobileMenu}
            className="px-3 py-2 rounded hover:bg-[#B0A8A0]/10 text-[#252321] dark:text-[#FFFDF9]"
          >
            Preguntas frecuentes
          </a>
          <a
            href="#contacto"
            onClick={closeMobileMenu}
            className="px-3 py-2 rounded hover:bg-[#B0A8A0]/10 text-[#252321] dark:text-[#FFFDF9]"
          >
            Hablemos de tu negocio
          </a>
          <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#252321]/10 dark:border-[#383532]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded bg-[#252321] text-[#FFFDF9] dark:bg-[#B0A8A0] dark:text-[#252321] font-bold text-[11px]"
            >
              WhatsApp Directo →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
