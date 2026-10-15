import React, { useState } from 'react';
import { Project } from '../types.ts';
import { PROJECTS_DATA } from '../data/projects.ts';
import { GITHUB_ORG_URL } from '../data/team.ts';
import { ProjectBadgeIcon } from './ProjectBadgeIcon.tsx';
import { TechIcon } from './TechIcons.tsx';
import { ProjectModal } from './ProjectModal.tsx';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="py-14 sm:py-16 border-t border-oliva/10 dark:border-oliva-border/40">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8">
        <div>
          <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-oliva dark:text-almendra">
            Proyectos Destacados
          </h2>
          <p className="text-xs sm:text-sm text-oliva/70 dark:text-almendra/70 mt-1 max-w-xl">
            Sistemas funcionales desarrollados y desplegados por el equipo.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-salvia font-semibold uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-salvia"></span>
          <span>4 Proyectos</span>
        </div>
      </div>

      {/* Clean, Mobile-First Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
        {PROJECTS_DATA.map((project, index) => {
          const displayIndex = String(index + 1).padStart(2, '0');

          return (
            <div
              key={project.id}
              className="group rounded-lg border border-oliva/15 dark:border-oliva-border/70 bg-white/40 dark:bg-oliva-surface/70 hover:border-salvia/60 transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between"
            >
              <div>
                {/* Header line */}
                <div className="flex items-center justify-between gap-2 mb-3 text-[11px] font-mono text-oliva/50 dark:text-almendra/50 pb-2 border-b border-oliva/10 dark:border-oliva-border/40">
                  <span className="text-salvia font-bold">PROYECTO {displayIndex}</span>
                  <span>{project.category}</span>
                </div>

                {/* Identity */}
                <div className="flex items-start gap-3 mb-3">
                  <ProjectBadgeIcon
                    id={project.id}
                    name={project.name}
                    domain={project.domain}
                    size="md"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-title font-bold text-lg uppercase tracking-tight text-oliva dark:text-almendra group-hover:text-salvia transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-[11px] font-mono text-oliva/50 dark:text-almendra/50 truncate">
                      {project.domain}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-oliva/80 dark:text-almendra/75 leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Technologies with original icons */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-oliva/15 dark:border-oliva-border/60 bg-white/50 dark:bg-oliva-dark/50 text-[10px] font-mono text-oliva/80 dark:text-almendra/80"
                    >
                      <TechIcon name={tech} className="w-3 h-3" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-oliva/10 dark:border-oliva-border/40 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-oliva/70 dark:text-almendra/70 hover:text-salvia transition-colors cursor-pointer"
                >
                  Detalles
                </button>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-title font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded bg-oliva text-almendra dark:bg-salvia dark:text-oliva-dark hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-1"
                >
                  <span>Ver app</span>
                  <span className="font-mono text-xs">↗</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub Call to Action Banner */}
      <div className="p-5 sm:p-6 rounded-lg border border-oliva/15 dark:border-oliva-border/60 bg-white/30 dark:bg-oliva-surface/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="font-title font-bold text-sm sm:text-base text-oliva dark:text-almendra uppercase">
            Más proyectos en GitHub
          </h3>
          <p className="text-xs text-oliva/70 dark:text-almendra/70 mt-0.5">
            Explora más repositorios y código abierto en nuestra organización.
          </p>
        </div>

        <a
          href={GITHUB_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-title font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded border border-oliva/20 dark:border-oliva-border hover:border-salvia text-oliva dark:text-almendra hover:text-salvia transition-all whitespace-nowrap flex items-center gap-2 shrink-0"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>github.com/DataSky-Studio</span>
        </a>
      </div>

      {/* Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
