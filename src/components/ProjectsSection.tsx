import React, { useState } from 'react';
import { Project } from '../types.ts';
import { PROJECTS_DATA, getGoogleFaviconUrl } from '../data/projects.ts';
import { ProjectModal } from './ProjectModal.tsx';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { label: 'Todos (4)', value: 'all' },
    { label: 'Retail & POS', value: 'retail' },
    { label: 'Fintech UI', value: 'fintech' },
    { label: 'Automatización', value: 'automation' },
    { label: 'Lab & IA', value: 'ai' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.categorySlug === selectedCategory);

  return (
    <section id="proyectos" className="py-16 border-t border-oliva/10 dark:border-oliva-border/40">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
        <div>
          <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-oliva dark:text-almendra">
            Proyectos en Producción
          </h2>
          <p className="text-xs text-oliva/60 dark:text-almendra/60 mt-1">
            Sistemas desplegados y funcionales. Favicons obtenidos dinámicamente vía Google Favicon API.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-salvia"></span>
          <span className="text-xs font-mono text-salvia font-semibold uppercase">04 Despliegues</span>
        </div>
      </div>

      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 mb-6 rounded-lg bg-oliva/5 dark:bg-oliva-surface border border-oliva/10 dark:border-oliva-border/60 max-w-fit">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
              selectedCategory === cat.value
                ? 'bg-salvia text-oliva-dark font-bold shadow-xs'
                : 'text-oliva/70 dark:text-almendra/70 hover:text-oliva dark:hover:text-almendra hover:bg-white/40 dark:hover:bg-oliva-dark/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects List rendered from JSON */}
      <div className="space-y-4">
        {filteredProjects.map((project) => {
          const faviconSrc = getGoogleFaviconUrl(project.domain, 64);

          return (
            <div
              key={project.id}
              className="p-5 sm:p-6 rounded-lg border border-oliva/10 dark:border-oliva-border bg-white/50 dark:bg-oliva-surface hover:border-salvia/60 dark:hover:border-salvia/60 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              {/* Project Left Side: Dynamic Favicon + Metadata */}
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <img
                    src={faviconSrc}
                    alt={`${project.name} Favicon`}
                    className="w-10 h-10 rounded-md mt-0.5 bg-white p-1.5 border border-oliva/10 dark:border-oliva-border shadow-2xs object-contain group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23A3B19B"%3E%3Cpath d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-oliva-surface" title="En línea"></div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-title font-bold text-lg uppercase tracking-tight text-oliva dark:text-almendra group-hover:text-salvia transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-salvia/20 text-oliva dark:text-almendra font-medium">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-xs text-oliva/70 dark:text-almendra/70 mt-1 max-w-xl leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-2.5 text-[11px] font-mono text-oliva/50 dark:text-almendra/50">
                    <span className="text-salvia/90 font-medium">{project.techStackSummary}</span>
                    <span className="text-oliva/30 dark:text-almendra/30">·</span>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-oliva/70 dark:text-almendra/70 hover:text-salvia hover:underline cursor-pointer flex items-center gap-1"
                      title="Ver arquitectura y detalles"
                    >
                      <span>Ver detalles</span>
                      <span className="text-[10px]">ℹ</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Right Side: Actions */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-oliva/10 dark:border-oliva-border/40 shrink-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-title font-bold text-xs uppercase tracking-wider text-salvia hover:underline whitespace-nowrap flex items-center gap-1.5 py-1.5 px-3 rounded sm:p-0 hover:bg-salvia/10 sm:hover:bg-transparent transition-all"
                >
                  <span>Ver App</span>
                  <span className="text-sm">↗</span>
                </a>

                <span className="text-[10px] font-mono text-oliva/40 dark:text-almendra/40">
                  {project.domain}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for detailed inspection */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
