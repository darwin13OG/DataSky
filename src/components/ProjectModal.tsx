import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '../types.ts';
import { ProjectBadgeIcon } from './ProjectBadgeIcon.tsx';
import { TechIcon } from './TechIcons.tsx';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(project);
  const [isOpen, setIsOpen] = useState(false);

  // Sync project prop with internal state for smooth entrance & exit animations
  useEffect(() => {
    if (project) {
      setActiveProject(project);
      // Trigger animation on next frame to ensure initial styles are rendered
      const raf = requestAnimationFrame(() => {
        setIsOpen(true);
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setIsOpen(false);
      const timeout = setTimeout(() => {
        setActiveProject(null);
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [project]);

  // Smooth close handler with exit animation
  const handleSmoothClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 240);
  };

  // Lock body scroll and handle escape key
  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSmoothClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeProject]);

  if (!activeProject) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto ${
        isOpen ? 'bg-black/80 backdrop-blur-sm opacity-100' : 'bg-black/0 backdrop-blur-none opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      onClick={handleSmoothClose}
    >
      <div
        className={`relative w-full max-w-lg bg-white/95 dark:bg-[#1C1A18]/95 border border-zinc-200 dark:border-white/10 rounded-2xl shadow-2xl p-5 sm:p-6 my-auto text-left transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${
          isOpen
            ? 'scale-100 translate-y-0 opacity-100 shadow-[0_0_50px_-10px_rgba(6,182,212,0.25)]'
            : 'scale-95 translate-y-4 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top laser shine beam */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent rounded-t-2xl pointer-events-none" />

        {/* Close Button with Tactile Micro-Interaction */}
        <button
          onClick={handleSmoothClose}
          className="group absolute top-4 right-4 p-2 rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-[#FFFDF9]/60 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 active:scale-90 transition-all duration-200 cursor-pointer"
          aria-label="Cerrar ventana"
        >
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-start gap-3.5 mb-4 pr-8">
          <ProjectBadgeIcon
            id={activeProject.id}
            name={activeProject.name}
            domain={activeProject.domain}
            faviconUrl={activeProject.faviconUrl}
            size="lg"
          />
          <div>
            <h3 className="font-title font-bold text-xl uppercase tracking-tight text-zinc-900 dark:text-[#FFFDF9]">
              {activeProject.name}
            </h3>
            <p className="text-xs font-mono text-cyan-700 dark:text-cyan-300 mt-0.5 font-medium">
              {activeProject.category} · Caso de Ejemplo
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-4">
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-[#FFFDF9]/85 leading-relaxed font-sans">
            {activeProject.fullDescription}
          </p>
        </div>

        {/* Key Business Benefits */}
        <div className="mb-4">
          <h4 className="font-title font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-[#FFFDF9]/60 mb-2">
            Lo que ganas en tu negocio
          </h4>
          <ul className="space-y-1.5 text-xs text-zinc-800 dark:text-[#FFFDF9]/85 font-sans">
            {activeProject.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features / Capabilities */}
        <div className="mb-5">
          <h4 className="font-title font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-[#FFFDF9]/60 mb-2">
            Incluye
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {activeProject.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 text-[11px] font-sans font-medium px-2.5 py-1 rounded-md border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 bg-zinc-50 dark:bg-white/5"
              >
                <TechIcon name={tech} className="w-3 h-3 text-cyan-500" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions with Tactile Micro-Interactions */}
        <div className="pt-3.5 border-t border-zinc-200 dark:border-white/10 flex items-center justify-end gap-2.5">
          <button
            onClick={handleSmoothClose}
            className="text-xs font-mono px-3.5 py-2 rounded-lg border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-[#FFFDF9] hover:bg-zinc-100 dark:hover:bg-white/5 active:scale-95 cursor-pointer transition-all duration-200"
          >
            Cerrar
          </button>
          <a
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-title font-bold uppercase tracking-wider px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-95 flex items-center gap-1.5 transition-all duration-200"
          >
            <span>Ver demo</span>
            <span className="font-mono text-xs">↗</span>
          </a>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};
