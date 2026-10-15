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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-almendra dark:bg-oliva-surface border border-oliva/20 dark:border-oliva-border rounded-xl shadow-2xl p-5 sm:p-6 my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md border border-oliva/15 dark:border-oliva-border text-oliva/70 dark:text-almendra/70 hover:text-salvia transition-colors cursor-pointer"
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
            <h3 className="font-title font-bold text-xl uppercase tracking-tight text-oliva dark:text-almendra">
              {project.name}
            </h3>
            <p className="text-xs font-mono text-salvia mt-0.5">
              {project.category} · {project.domain}
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-4">
          <p className="text-xs sm:text-sm text-oliva/80 dark:text-almendra/80 leading-relaxed font-sans">
            {project.fullDescription}
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="font-title font-bold text-xs uppercase tracking-wider text-oliva/60 dark:text-almendra/60 mb-2">
            Características
          </h4>
          <ul className="space-y-1 text-xs text-oliva/80 dark:text-almendra/80 font-sans">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-salvia font-bold mt-0.5">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <h4 className="font-title font-bold text-xs uppercase tracking-wider text-oliva/60 dark:text-almendra/60 mb-2">
            Tecnologías
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded border border-oliva/15 dark:border-oliva-border/60 text-oliva/85 dark:text-almendra/85 bg-white/40 dark:bg-oliva-dark/40"
              >
                <TechIcon name={tech} className="w-3 h-3" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-oliva/10 dark:border-oliva-border/60 flex items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="text-xs font-mono px-3.5 py-2 rounded border border-oliva/20 dark:border-oliva-border text-oliva dark:text-almendra hover:border-salvia cursor-pointer"
          >
            Cerrar
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-title font-bold uppercase tracking-wider px-4 py-2 rounded bg-salvia text-oliva-dark hover:opacity-90 flex items-center gap-1"
          >
            <span>Abrir en vivo</span>
            <span className="font-mono text-xs">↗</span>
          </a>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};
