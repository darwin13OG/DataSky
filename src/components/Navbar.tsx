import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.tsx';
import { DataSkyLogo } from './DataSkyLogo.tsx';
import { WHATSAPP_URL } from '../data/team.ts';
import { smoothScrollToElement } from '../hooks/useLenisScroll.ts';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId);
    closeMobileMenu();
  };

  return (
    <header className="relative border-b border-[#252321]/10 dark:border-white/10 backdrop-blur-md bg-[#FFFDF9]/90 dark:bg-[#181615]/90 sticky top-0 z-50 px-4 sm:px-6 py-3.5">
      {/* Subtle Cyan Bottom Glow Beam */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand Link with Cloud Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm cursor-pointer"
          aria-label="DataSky Inicio"
        >
          <DataSkyLogo size="md" />
          <span className="font-title font-black text-lg sm:text-xl tracking-tighter uppercase flex items-center">
            <span className="text-[#252321] dark:text-[#FFFDF9]">DATA</span>
            <span className="text-[#B0A8A0] group-hover:text-cyan-400 transition-colors">SKY</span>
          </span>
        </a>

        {/* Desktop Navigation Links & Actions */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs font-semibold">
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wide" aria-label="Navegación principal">
            <a
              href="#proyectos"
              onClick={(e) => handleNavClick(e, 'proyectos')}
              className="relative py-1 text-zinc-700 dark:text-[#FFFDF9]/80 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-500 after:to-teal-400 hover:after:w-full after:transition-all after:duration-300 after:rounded-full"
            >
              Lo que hacemos
            </a>
            <a
              href="#equipo"
              onClick={(e) => handleNavClick(e, 'equipo')}
              className="relative py-1 text-zinc-700 dark:text-[#FFFDF9]/80 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-500 after:to-teal-400 hover:after:w-full after:transition-all after:duration-300 after:rounded-full"
            >
              Quiénes somos
            </a>
            <a
              href="#marca"
              onClick={(e) => handleNavClick(e, 'marca')}
              className="relative py-1 text-zinc-700 dark:text-[#FFFDF9]/80 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-500 after:to-teal-400 hover:after:w-full after:transition-all after:duration-300 after:rounded-full"
            >
              Tu marca
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, 'faq')}
              className="relative py-1 text-zinc-700 dark:text-[#FFFDF9]/80 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-500 after:to-teal-400 hover:after:w-full after:transition-all after:duration-300 after:rounded-full"
            >
              Preguntas
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, 'contacto')}
              className="relative py-1 text-zinc-700 dark:text-[#FFFDF9]/80 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-500 after:to-teal-400 hover:after:w-full after:transition-all after:duration-300 after:rounded-full"
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

          {/* Contact Button on the right that takes vivid color on hover */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn hidden sm:inline-flex items-center gap-2 font-title font-bold text-[11px] uppercase tracking-wider px-3.5 py-2 rounded-lg border border-zinc-300 dark:border-white/15 bg-white/90 dark:bg-white/5 text-zinc-800 dark:text-[#FFFDF9] hover:bg-gradient-to-r hover:from-cyan-600 hover:via-teal-600 hover:to-emerald-600 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(6,182,212,0.45)] active:scale-95 transition-all duration-300"
            title="Escribir por WhatsApp"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981] group-hover/btn:bg-white group-hover/btn:shadow-none transition-colors" />
            <span>Contacto</span>
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

      {/* Mobile Dropdown Menu with smooth sliding transitions */}
      <div
        className={`md:hidden flex flex-col gap-1 transition-all duration-300 ease-in-out overflow-hidden text-xs font-semibold ${
          mobileMenuOpen
            ? 'max-h-[500px] opacity-100 mt-3 pt-3 pb-2 border-t border-[#252321]/10 dark:border-[#383532]'
            : 'max-h-0 opacity-0 mt-0 pt-0 pb-0 border-t-0 pointer-events-none'
        }`}
      >
        <a
          href="#proyectos"
          onClick={(e) => handleNavClick(e, 'proyectos')}
          className="px-3.5 py-2.5 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 text-[#252321] dark:text-[#FFFDF9] transition-all duration-200 active:scale-[0.98]"
        >
          Lo que hacemos
        </a>
        <a
          href="#equipo"
          onClick={(e) => handleNavClick(e, 'equipo')}
          className="px-3.5 py-2.5 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 text-[#252321] dark:text-[#FFFDF9] transition-all duration-200 active:scale-[0.98]"
        >
          Quiénes somos
        </a>
        <a
          href="#marca"
          onClick={(e) => handleNavClick(e, 'marca')}
          className="px-3.5 py-2.5 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 text-[#252321] dark:text-[#FFFDF9] transition-all duration-200 flex items-center justify-between active:scale-[0.98]"
        >
          <span>Tu marca desde cero</span>
          <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono font-semibold px-2 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20">3 Pasos</span>
        </a>
        <a
          href="#faq"
          onClick={(e) => handleNavClick(e, 'faq')}
          className="px-3.5 py-2.5 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 text-[#252321] dark:text-[#FFFDF9] transition-all duration-200 active:scale-[0.98]"
        >
          Preguntas frecuentes
        </a>
        <a
          href="#contacto"
          onClick={(e) => handleNavClick(e, 'contacto')}
          className="px-3.5 py-2.5 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 text-[#252321] dark:text-[#FFFDF9] transition-all duration-200 active:scale-[0.98]"
        >
          Hablemos de tu negocio
        </a>
        <div className="pt-2.5 mt-1 border-t border-zinc-200/60 dark:border-white/10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center py-3 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold text-xs border border-emerald-400/25 active:scale-[0.98] transition-all duration-200"
          >
            WhatsApp Directo ↗
          </a>
        </div>
      </div>
    </header>
  );
};
