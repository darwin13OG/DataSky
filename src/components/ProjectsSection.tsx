import React, { useState } from 'react';
import { Project } from '../types.ts';
import { PROJECTS_DATA } from '../data/projects.ts';
import { WHATSAPP_URL } from '../data/team.ts';
import { ProjectBadgeIcon } from './ProjectBadgeIcon.tsx';
import { TechIcon } from './TechIcons.tsx';
import { ProjectModal } from './ProjectModal.tsx';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="py-14 sm:py-16 border-t border-[#252321]/10 dark:border-[#383532]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8">
        <div>
          <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#252321] dark:text-[#FFFDF9]">
            Lo que podemos hacer por tu negocio
          </h2>
          <p className="text-xs sm:text-sm text-[#252321]/75 dark:text-[#FFFDF9]/75 mt-1 max-w-xl">
            Sistemas fáciles de manejar para cobrar rápido, ordenar tus cuentas y atender clientes sin enredarte.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-[#B0A8A0] font-semibold uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B0A8A0]"></span>
          <span>4 Soluciones Listas</span>
        </div>
      </div>

      {/* Clean, Mobile-First Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
        {PROJECTS_DATA.map((project, index) => {
          const displayIndex = String(index + 1).padStart(2, '0');

          return (
            <div
              key={project.id}
              className="group h-full rounded-lg border border-[#252321]/15 dark:border-[#383532] bg-white/50 dark:bg-[#1E1C1A]/70 hover:border-[#B0A8A0] transform-gpu hover:-translate-y-1 transition-transform duration-200 p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div>
                {/* Header line */}
                <div className="flex items-center justify-between gap-2 mb-3 text-[11px] font-mono text-[#252321]/60 dark:text-[#FFFDF9]/60 pb-2 border-b border-[#252321]/10 dark:border-[#383532]/40">
                  <span className="text-[#B0A8A0] font-bold">SOLUCIÓN {displayIndex}</span>
                  <span>{project.category}</span>
                </div>

                {/* Identity */}
                <div className="flex items-start gap-3 mb-3">
                  <ProjectBadgeIcon
                    id={project.id}
                    name={project.name}
                    domain={project.domain}
                    faviconUrl={project.faviconUrl}
                    size="md"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-title font-bold text-base sm:text-lg uppercase tracking-tight text-[#252321] dark:text-[#FFFDF9] group-hover:text-[#B0A8A0] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#252321]/60 dark:text-[#FFFDF9]/60 truncate">
                      {project.domain}
                    </p>
                  </div>
                </div>

                {/* Friendly Description */}
                <p className="text-xs text-[#252321]/85 dark:text-[#FFFDF9]/80 leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Clear Benefit Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#252321]/15 dark:border-[#383532] bg-white/70 dark:bg-[#1A1817]/60 text-[11px] font-sans font-medium text-[#252321]/90 dark:text-[#FFFDF9]/90"
                    >
                      <TechIcon name={tech} className="w-3 h-3" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-[#252321]/10 dark:border-[#383532]/40 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-[#252321]/75 dark:text-[#FFFDF9]/75 hover:text-[#B0A8A0] transition-colors cursor-pointer"
                >
                  Ver cómo funciona
                </button>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-title font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded bg-[#252321] text-[#FFFDF9] dark:bg-[#B0A8A0] dark:text-[#252321] hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-1"
                >
                  <span>Probar en vivo</span>
                  <span className="font-mono text-xs">↗</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Commercial Call to Action Banner */}
      <div className="p-5 sm:p-6 rounded-lg border border-[#252321]/15 dark:border-[#383532] bg-white/40 dark:bg-[#1E1C1A]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="font-title font-bold text-sm sm:text-base text-[#252321] dark:text-[#FFFDF9] uppercase">
            ¿Necesitas algo a la medida de tu negocio?
          </h3>
          <p className="text-xs text-[#252321]/75 dark:text-[#FFFDF9]/75 mt-0.5">
            Dinos qué vendes o qué quieres organizar y te lo armamos listo para usar.
          </p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-title font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded bg-[#252321] text-[#FFFDF9] dark:bg-[#B0A8A0] dark:text-[#252321] hover:opacity-90 transition-all whitespace-nowrap flex items-center gap-2 shrink-0"
        >
          <span>Escribir por WhatsApp →</span>
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
