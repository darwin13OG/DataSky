import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '../types.ts';
import { ProjectBadgeIcon } from './ProjectBadgeIcon.tsx';
import { TechIcon } from './TechIcons.tsx';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FFFDF9] dark:bg-[#1E1C1A] border border-[#252321]/20 dark:border-[#383532] rounded-xl shadow-2xl p-5 sm:p-6 my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md border border-[#252321]/15 dark:border-[#383532] text-[#252321]/70 dark:text-[#FFFDF9]/70 hover:text-[#B0A8A0] transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-start gap-3.5 mb-4 pr-6">
          <ProjectBadgeIcon
            id={project.id}
            name={project.name}
            domain={project.domain}
            faviconUrl={project.faviconUrl}
            size="lg"
          />
          <div>
            <h3 className="font-title font-bold text-xl uppercase tracking-tight text-[#252321] dark:text-[#FFFDF9]">
              {project.name}
            </h3>
            <p className="text-xs font-mono text-[#B0A8A0] mt-0.5">
              {project.category} · {project.domain}
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-4">
          <p className="text-xs sm:text-sm text-[#252321]/85 dark:text-[#FFFDF9]/80 leading-relaxed font-sans">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Business Benefits */}
        <div className="mb-4">
          <h4 className="font-title font-bold text-xs uppercase tracking-wider text-[#252321]/60 dark:text-[#FFFDF9]/60 mb-2">
            Lo que ganas en tu negocio
          </h4>
          <ul className="space-y-1.5 text-xs text-[#252321]/85 dark:text-[#FFFDF9]/85 font-sans">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#B0A8A0] font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features / Capabilities */}
        <div className="mb-5">
          <h4 className="font-title font-bold text-xs uppercase tracking-wider text-[#252321]/60 dark:text-[#FFFDF9]/60 mb-2">
            Incluye
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 text-[11px] font-sans font-medium px-2.5 py-1 rounded border border-[#252321]/15 dark:border-[#383532] text-[#252321]/90 dark:text-[#FFFDF9]/90 bg-white/50 dark:bg-[#1A1817]/60"
              >
                <TechIcon name={tech} className="w-3 h-3" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-[#252321]/10 dark:border-[#383532]/60 flex items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="text-xs font-mono px-3.5 py-2 rounded border border-[#252321]/20 dark:border-[#383532] text-[#252321] dark:text-[#FFFDF9] hover:border-[#B0A8A0] cursor-pointer"
          >
            Cerrar
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-title font-bold uppercase tracking-wider px-4 py-2 rounded bg-[#252321] text-[#FFFDF9] dark:bg-[#B0A8A0] dark:text-[#252321] hover:opacity-90 flex items-center gap-1"
          >
            <span>Probar en vivo</span>
            <span className="font-mono text-xs">↗</span>
          </a>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};
