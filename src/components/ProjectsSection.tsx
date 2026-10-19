import React, { useState } from 'react';
import { Project } from '../types.ts';
import { PROJECTS_DATA } from '../data/projects.ts';
import { WHATSAPP_URL } from '../data/team.ts';
import { ProjectBadgeIcon } from './ProjectBadgeIcon.tsx';
import { TechIcon } from './TechIcons.tsx';
import { ProjectModal } from './ProjectModal.tsx';
import { FloatUpReveal } from './FloatUpReveal.tsx';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'system' | 'web'>('all');

  const handleCopyUrl = (projectId: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(projectId);
    setTimeout(() => {
      setCopiedId((curr) => (curr === projectId ? null : curr));
    }, 2200);
  };

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedFilter === 'system') return project.group === 'system';
    if (selectedFilter === 'web') return project.group === 'web';
    return true;
  });

  return (
    <section id="proyectos" className="py-14 sm:py-16 border-t border-zinc-200 dark:border-white/10 relative">
      {/* Section Header without glowing dots */}
      <FloatUpReveal delayMs={60} distancePx={30}>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold mb-1.5">
              Portafolio de Trabajo
            </div>
            <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-zinc-900 dark:text-[#FFFDF9]">
              Lo que podemos hacer por tu negocio
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-[#FFFDF9]/80 mt-1 max-w-xl">
              Sistemas de gestión empresarial y plataformas web funcionales. Puedes probar las demos directamente:
            </p>
          </div>
        </div>

        {/* Clean Filter Pills without glowing dots */}
        <div className="flex flex-wrap items-center gap-2 mb-8 select-none">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-xs'
                : 'bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-[#FFFDF9]/70 hover:bg-zinc-200/80 dark:hover:bg-white/10'
            }`}
          >
            Todos (4)
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('system')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              selectedFilter === 'system'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-xs'
                : 'bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-[#FFFDF9]/70 hover:bg-zinc-200/80 dark:hover:bg-white/10'
            }`}
          >
            Sistemas de Gestión (2)
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('web')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              selectedFilter === 'web'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-xs'
                : 'bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-[#FFFDF9]/70 hover:bg-zinc-200/80 dark:hover:bg-white/10'
            }`}
          >
            Plataformas Web (2)
          </button>
        </div>
      </FloatUpReveal>

      {/* Projects Showcase with Browser Mockup Header & Vector Copy Button */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8">
        {filteredProjects.map((project, index) => {
          const displayIndex = String(index + 1).padStart(2, '0');
          const isCopied = copiedId === project.id;

          return (
            <FloatUpReveal key={project.id} delayMs={index * 110} distancePx={42}>
              <div
                className="group relative h-full rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-[#1C1A18]/90 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.22)] active:scale-[0.99] overflow-hidden"
              >
                {/* Top Browser Window Bar with macOS dots, Copy Vector Button & Clean Demo Badge */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-100/90 dark:bg-black/30 border-b border-zinc-200 dark:border-white/10 text-[10px] font-mono select-none">
                  {/* macOS-style window action dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>

                  {/* Vector Copy Link Button with Smooth Checkmark (Chulo) Transition */}
                  <button
                    type="button"
                    onClick={() => handleCopyUrl(project.id, project.url)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 dark:bg-white/5 hover:bg-zinc-200/70 dark:hover:bg-white/10 border border-zinc-200/90 dark:border-white/10 text-zinc-700 dark:text-[#FFFDF9]/80 transition-all duration-200 cursor-pointer text-[10px] font-mono active:scale-95"
                    title={isCopied ? 'Enlace copiado' : 'Copiar enlace de la demo'}
                    aria-label={`Copiar enlace de ${project.name}`}
                  >
                    <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                      {/* Vector Copy Icon */}
                      <svg
                        className={`w-3.5 h-3.5 transition-all duration-200 absolute inset-0 ${
                          isCopied ? 'opacity-0 scale-75 rotate-45' : 'opacity-100 scale-100 rotate-0 text-zinc-500 dark:text-zinc-400'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      {/* Chulo (Checkmark) Icon */}
                      <svg
                        className={`w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 transition-all duration-200 absolute inset-0 ${
                          isCopied ? 'opacity-100 scale-110 rotate-0' : 'opacity-0 scale-50 -rotate-45'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{isCopied ? 'Copiado' : 'Copiar link'}</span>
                  </button>

                  {/* Clean Demo Badge (No glowing dots) */}
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border border-cyan-500/25">
                    Demo
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header line with clean numerical index */}
                    <div className="flex items-center justify-between gap-2 mb-3 text-[11px] font-mono text-zinc-600 dark:text-[#FFFDF9]/60 pb-2 border-b border-zinc-100 dark:border-white/5">
                      <span className="text-cyan-700 dark:text-cyan-400 font-bold tracking-wider">
                        {displayIndex}
                      </span>
                      <span className="truncate text-[10px] text-zinc-500 dark:text-[#FFFDF9]/70 font-sans font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Identity: Icon + Name */}
                    <div className="flex items-start gap-3.5 mb-3.5">
                      <div className="p-1.5 rounded-lg bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-xs group-hover:border-cyan-500/40 transition-colors shrink-0">
                        <ProjectBadgeIcon
                          id={project.id}
                          name={project.name}
                          domain={project.domain}
                          faviconUrl={project.faviconUrl}
                          size="md"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-title font-bold text-base sm:text-lg uppercase tracking-tight text-zinc-900 dark:text-[#FFFDF9] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-[11px] font-mono text-zinc-500 dark:text-[#FFFDF9]/60 truncate">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    {/* Friendly Description with high contrast in Light Mode */}
                    <p className="text-xs text-zinc-700 dark:text-[#FFFDF9]/85 leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Support Icons & Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech) => (
                        <div
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-cyan-500/25 dark:border-white/10 bg-cyan-50/70 dark:bg-white/5 text-[11px] font-sans font-medium text-cyan-900 dark:text-cyan-200"
                        >
                          <TechIcon name={tech} className="w-3 h-3 text-cyan-600 dark:text-cyan-400 shrink-0" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons with Tactile Micro-Interactions */}
                  <div className="pt-3.5 border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono text-zinc-700 dark:text-[#FFFDF9]/75 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer py-1 font-medium flex items-center gap-1.5 active:scale-95"
                    >
                      <span>Ver detalles</span>
                      <span className="text-[10px]">→</span>
                    </button>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-title font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-[#FFFDF9] shadow-[0_0_15px_-2px_rgba(6,182,212,0.4)] hover:shadow-[0_0_22px_rgba(6,182,212,0.6)] active:scale-[0.97] transition-all flex items-center gap-1.5 shrink-0"
                    >
                      <span>Probar demo</span>
                      <span className="font-mono text-xs">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </FloatUpReveal>
          );
        })}
      </div>

      {/* Commercial Call to Action Banner */}
      <FloatUpReveal delayMs={140} distancePx={32}>
        <div className="relative overflow-hidden p-5 sm:p-6 rounded-2xl border border-zinc-300/80 dark:border-white/15 bg-white/95 dark:bg-[#1E1C1A]/95 backdrop-blur-md shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
          
          <div className="text-center sm:text-left">
            <h3 className="font-title font-bold text-sm sm:text-base text-zinc-900 dark:text-[#FFFDF9] uppercase">
              ¿Tu negocio necesita algo adaptado a tu medida?
            </h3>
            <p className="text-xs text-zinc-700 dark:text-[#FFFDF9]/80 mt-0.5 max-w-xl">
              Creamos tu tienda virtual, catálogo web con WhatsApp o sistema de control a tu medida exacta.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-title font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-[#FFFDF9] shadow-[0_0_20px_-3px_rgba(16,185,129,0.35)] hover:shadow-[0_0_28px_rgba(6,182,212,0.5)] active:scale-[0.98] transition-all whitespace-nowrap flex items-center gap-2 shrink-0"
          >
            <span>Cotizar mi idea por WhatsApp →</span>
          </a>
        </div>
      </FloatUpReveal>

      {/* Modal with smooth entrance/exit */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
