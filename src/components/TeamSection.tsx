import React from 'react';
import { ENGINEERS_DATA, GITHUB_ORG_URL } from '../data/team.ts';

export const TeamSection: React.FC = () => {
  return (
    <section id="equipo" className="py-16 border-t border-oliva/10 dark:border-oliva-border/40">
      {/* Section Introduction */}
      <div className="max-w-xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-salvia/15 text-salvia mb-2 border border-salvia/30">
          <span>Estructura Técnica</span>
          <span>·</span>
          <span>Sin Intermediarios</span>
        </div>
        <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-oliva dark:text-almendra">
          El Equipo
        </h2>
        <p className="text-xs sm:text-sm text-oliva/70 dark:text-almendra/70 mt-2 leading-relaxed">
          Los tres cubrimos todo el ciclo de desarrollo. Nos dividimos la arquitectura, auditamos el código internamente y garantizamos que la entrega funcione sin errores.
        </p>
      </div>

      {/* Grid of the 3 Engineers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono mb-8">
        {ENGINEERS_DATA.map((eng) => (
          <div
            key={eng.id}
            className="p-5 rounded-lg border border-oliva/10 dark:border-oliva-border bg-white/40 dark:bg-oliva-surface hover:border-salvia/60 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-salvia uppercase tracking-wider">
                  Ingeniería {eng.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-salvia/50"></span>
              </div>
              
              <h3 className="font-title font-bold text-base text-oliva dark:text-almendra tracking-tight">
                {eng.name}
              </h3>
              
              <p className="text-salvia font-semibold text-xs mt-0.5">
                {eng.role}
              </p>

              <p className="text-[11px] text-oliva/60 dark:text-almendra/60 mt-2 leading-normal">
                {eng.specialty}
              </p>

              <p className="text-[11px] text-oliva/75 dark:text-almendra/75 mt-3 leading-relaxed font-sans">
                {eng.bio}
              </p>
            </div>

            {/* Skills tags */}
            <div className="mt-4 pt-3 border-t border-oliva/10 dark:border-oliva-border/40">
              <div className="flex flex-wrap gap-1 text-[10px] text-oliva/60 dark:text-almendra/60">
                {eng.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-1.5 py-0.5 rounded bg-oliva/5 dark:bg-oliva-dark/60 border border-oliva/10 dark:border-oliva-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Collective Banner */}
      <div className="p-4 sm:p-5 rounded-lg border border-salvia/30 bg-salvia/10 dark:bg-salvia/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-salvia/20 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-salvia" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </div>
          <div>
            <h4 className="font-title font-bold text-sm text-oliva dark:text-almendra uppercase">
              Repositorio de la Organización
            </h4>
            <p className="text-xs text-oliva/70 dark:text-almendra/70 mt-0.5">
              Revisa commits, estándares de código y arquitecturas abiertas en GitHub.
            </p>
          </div>
        </div>

        <a
          href={GITHUB_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-title font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded bg-oliva text-almendra dark:bg-salvia dark:text-oliva-dark hover:opacity-90 transition-all whitespace-nowrap self-start sm:self-center flex items-center gap-1.5"
        >
          <span>Visitar github.com/DataSky-Studio</span>
          <span>↗</span>
        </a>
      </div>
    </section>
  );
};
