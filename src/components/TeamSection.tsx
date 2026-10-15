import React from 'react';
import { ENGINEERS_DATA, GITHUB_ORG_URL } from '../data/team.ts';

export const TeamSection: React.FC = () => {
  return (
    <section id="equipo" className="py-14 sm:py-16 border-t border-oliva/10 dark:border-oliva-border/40">
      {/* Section Introduction */}
      <div className="max-w-xl mb-8">
        <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-oliva dark:text-almendra">
          El Equipo
        </h2>
        <p className="text-xs sm:text-sm text-oliva/70 dark:text-almendra/70 mt-2 leading-relaxed">
          Los tres desarrollamos full-stack. Diseñamos arquitectura, programamos y desplegamos juntos cada proyecto de inicio a fin, sin intermediarios.
        </p>
      </div>

      {/* Grid of the 3 Engineers - Equal Full-Stack Developers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono mb-6">
        {ENGINEERS_DATA.map((eng) => (
          <div
            key={eng.id}
            className="h-full p-4 rounded-lg border border-oliva/10 dark:border-oliva-border bg-white/40 dark:bg-oliva-surface hover:border-salvia/50 transform-gpu hover:-translate-y-1 transition-transform duration-200 flex flex-col justify-between shadow-2xs hover:shadow-md"
          >
            <div>
              <p className="text-[10px] text-salvia uppercase font-bold tracking-wider">
                Técnico {eng.number}
              </p>
              
              <h3 className="font-title font-bold text-base text-oliva dark:text-almendra mt-1">
                {eng.name}
              </h3>
              
              <p className="text-xs text-salvia mt-0.5 font-medium">
                {eng.role}
              </p>

              <p className="text-[11px] text-oliva/85 dark:text-almendra/80 mt-2.5 font-sans leading-relaxed">
                {eng.bio}
              </p>
            </div>

            {/* Skills */}
            <div className="mt-4 pt-2.5 border-t border-oliva/10 dark:border-oliva-border/40 flex flex-wrap gap-1 text-[10px] text-oliva/80 dark:text-almendra/70">
              {eng.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-1.5 py-0.5 rounded bg-oliva/5 dark:bg-oliva-dark/50 border border-oliva/10 dark:border-oliva-border/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Collective Note */}
      <div className="p-4 rounded-lg border border-oliva/10 dark:border-oliva-border/50 bg-white/20 dark:bg-oliva-surface/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        <span className="text-oliva/70 dark:text-almendra/70 text-center sm:text-left">
          Código y contribuciones conjuntas en la organización oficial de GitHub.
        </span>

        <a
          href={GITHUB_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-salvia hover:underline font-bold whitespace-nowrap"
        >
          github.com/DataSky-Studio →
        </a>
      </div>
    </section>
  );
};
