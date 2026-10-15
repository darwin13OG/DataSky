import React, { useState } from 'react';
import { Project } from '../types.ts';
import { PROJECTS_DATA } from '../data/projects.ts';
import { GITHUB_ORG_URL } from '../data/team.ts';
import { ProjectBadgeIcon } from './ProjectBadgeIcon.tsx';
import { TechIcon } from './TechIcons.tsx';
import { ProjectModal } from './ProjectModal.tsx';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="proyectos" className="py-16 sm:py-20 border-t border-oliva/10 dark:border-oliva-border/40">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-salvia/15 text-salvia mb-2 border border-salvia/30">
            <span>Producción Activa</span>
            <span>·</span>
            <span>Casos Reales</span>
          </div>
          <h2 className="font-title font-black text-3xl sm:text-4xl uppercase tracking-tight text-oliva dark:text-almendra">
            Proyectos Seleccionados
          </h2>
          <p className="text-xs sm:text-sm text-oliva/70 dark:text-almendra/70 mt-1 max-w-xl leading-relaxed">
            Una muestra de plataformas y herramientas construidas por el colectivo. Código directo desplegado en la nube.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-salvia font-semibold uppercase">04 Despliegues Activos</span>
        </div>
      </div>

      {/* Innovative Showcase Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-10">
        {PROJECTS_DATA.map((project, index) => {
          const isExpanded = expandedId === project.id;
          const displayIndex = String(index + 1).padStart(2, '0');

          return (
            <div
              key={project.id}
              className="group relative rounded-xl border border-oliva/15 dark:border-oliva-border/70 bg-white/40 dark:bg-oliva-surface/75 hover:border-salvia/60 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Card Top Console Header */}
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-oliva/10 dark:border-oliva-border/50 text-[11px] font-mono">
                  <span className="text-salvia font-bold tracking-wider">
                    // DEPLOYMENT {displayIndex}
                  </span>
                  <div className="flex items-center gap-2 text-oliva/50 dark:text-almendra/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Identity & Main Info */}
                <div className="flex items-start gap-3.5 mb-4">
                  <ProjectBadgeIcon
                    id={project.id}
                    name={project.name}
                    domain={project.domain}
                    size="lg"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-title font-black text-xl uppercase tracking-tight text-oliva dark:text-almendra group-hover:text-salvia transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-salvia/20 text-salvia font-semibold shrink-0">
                        {project.version}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-oliva/50 dark:text-almendra/50 mt-0.5 truncate">
                      {project.domain}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-oliva/80 dark:text-almendra/75 leading-relaxed mb-5">
                  {project.shortDescription}
                </p>

                {/* Technologies with AUTHENTIC ORIGINAL ICONS */}
                <div className="mb-5">
                  <span className="text-[10px] font-mono font-bold text-salvia uppercase block mb-2 tracking-wider">
                    Tecnologías Principales
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <div
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-oliva/15 dark:border-oliva-border/60 bg-white/60 dark:bg-oliva-dark/50 text-[11px] font-mono text-oliva/85 dark:text-almendra/85 shadow-2xs hover:border-salvia/50 transition-colors"
                      >
                        <TechIcon name={tech} className="w-3.5 h-3.5" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expandable Architecture Highlights */}
                {isExpanded && (
                  <div className="p-3.5 rounded-lg bg-oliva/5 dark:bg-oliva-dark/60 border border-oliva/10 dark:border-oliva-border/40 mb-5 animate-fadeIn">
                    <span className="text-[10px] font-mono font-bold text-salvia uppercase block mb-2">
                      Arquitectura & Respaldo
                    </span>
                    <ul className="space-y-1.5 text-xs text-oliva/75 dark:text-almendra/75">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-salvia font-bold mt-0.5">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-oliva/10 dark:border-oliva-border/50 flex items-center justify-between gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => toggleExpand(project.id)}
                  className="text-xs font-mono text-oliva/70 dark:text-almendra/70 hover:text-salvia transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{isExpanded ? 'Ocultar detalles' : 'Ver arquitectura'}</span>
                  <span className="text-xs">{isExpanded ? '▲' : '▼'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="p-2 rounded-md border border-oliva/15 dark:border-oliva-border hover:border-salvia text-oliva/70 dark:text-almendra/70 hover:text-salvia transition-colors cursor-pointer"
                    title="Inspeccionar ficha completa"
                    aria-label={`Ver detalles de ${project.name}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <line x1="12" y1="16" x2="12" y2="12" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="8" r="1" fill="currentColor" />
                    </svg>
                  </button>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-title font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded bg-oliva text-almendra dark:bg-salvia dark:text-oliva-dark hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Probar App</span>
                    <span className="font-mono text-sm">↗</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub Call to Action Banner (As requested: "si quieren ver más que vayan al Github") */}
      <div className="p-6 rounded-xl border border-salvia/30 bg-salvia/10 dark:bg-oliva-surface/80 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-salvia font-bold uppercase">
            <span>Repositorios & Código Abierto</span>
            <span>·</span>
            <span>DataSky Studio</span>
          </div>
          <h3 className="font-title font-bold text-base sm:text-lg text-oliva dark:text-almendra">
            ¿Quieres explorar más proyectos, experimentos y librerías?
          </h3>
          <p className="text-xs text-oliva/70 dark:text-almendra/70 max-w-lg">
            Estos 4 sistemas representan solo una selección de nuestras soluciones. En nuestra organización de GitHub encontrarás código fuente, utilidades modulares y pruebas de concepto.
          </p>
        </div>

        <a
          href={GITHUB_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-title font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded bg-salvia text-oliva-dark hover:bg-salvia-light active:scale-[0.98] transition-all whitespace-nowrap flex items-center gap-2 shadow-sm shrink-0"
        >
          {/* GitHub SVG */}
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>Ir a GitHub (DataSky-Studio)</span>
          <span className="font-mono text-sm">→</span>
        </a>
      </div>

      {/* Deep Inspection Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
