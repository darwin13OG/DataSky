import React, { useEffect } from 'react';
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-oliva-dark/80 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-xl border border-oliva/20 dark:border-oliva-border bg-almendra dark:bg-oliva-surface shadow-2xl p-6 sm:p-7 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md border border-oliva/15 dark:border-oliva-border/60 text-oliva/70 dark:text-almendra/70 hover:text-salvia hover:border-salvia transition-colors"
          aria-label="Cerrar modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header with Project Badge Icon */}
        <div className="flex items-start gap-4 mb-5 pr-8">
          <ProjectBadgeIcon
            id={project.id}
            name={project.name}
            domain={project.domain}
            size="xl"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-title font-black text-2xl uppercase tracking-tight text-oliva dark:text-almendra">
                {project.name}
              </h3>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-salvia/20 text-oliva dark:text-almendra">
                {project.category}
              </span>
            </div>
            <p className="text-xs font-mono text-salvia mt-1">
              {project.domain} · {project.version}
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-6 space-y-3">
          <p className="text-sm text-oliva/80 dark:text-almendra/80 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Architecture & Engineering Highlights */}
        <div className="mb-6">
          <h4 className="font-title font-bold text-xs uppercase tracking-wider text-oliva/60 dark:text-almendra/60 mb-3">
            Aspectos de Ingeniería Clave
          </h4>
          <ul className="space-y-2 text-xs text-oliva/80 dark:text-almendra/80">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-salvia font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack List */}
        <div className="mb-6">
          <h4 className="font-title font-bold text-xs uppercase tracking-wider text-oliva/60 dark:text-almendra/60 mb-2">
            Stack Técnico Utilizado
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded border border-oliva/15 dark:border-oliva-border/60 text-oliva/85 dark:text-almendra/85 bg-white/40 dark:bg-oliva-dark/40"
              >
                <TechIcon name={tech} className="w-3.5 h-3.5" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-oliva/10 dark:border-oliva-border/60 flex items-center justify-between gap-3">
          {project.metrics && (
            <span className="text-xs font-mono text-salvia font-semibold">
              ⚡ {project.metrics}
            </span>
          )}
          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onClose}
              className="text-xs font-title font-bold uppercase tracking-wider px-4 py-2.5 rounded border border-oliva/20 dark:border-oliva-border hover:border-salvia text-oliva dark:text-almendra"
            >
              Cerrar
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-title font-bold uppercase tracking-wider px-5 py-2.5 rounded bg-salvia text-oliva-dark hover:opacity-90 flex items-center gap-1.5"
            >
              <span>Abrir App en Vivo</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
