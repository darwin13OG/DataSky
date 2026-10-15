import React, { useState } from 'react';
import { CONTACT_EMAIL, WHATSAPP_URL, WHATSAPP_PHONE } from '../data/team.ts';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contacto" className="py-14 sm:py-16 border-t border-oliva/10 dark:border-oliva-border/40">
      <div className="max-w-xl mb-8">
        <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-oliva dark:text-almendra">
          Contacto
        </h2>
        <p className="text-xs sm:text-sm text-oliva/70 dark:text-almendra/70 mt-1 leading-relaxed">
          Escríbenos directamente para conversar sobre tu proyecto y coordinar con el equipo técnico.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* WhatsApp Direct Card */}
        <div className="p-5 rounded-lg border border-salvia/30 bg-salvia/10 dark:bg-oliva-surface flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold text-salvia uppercase block mb-1">
              WhatsApp
            </span>
            <h3 className="font-title font-bold text-base text-oliva dark:text-almendra">
              +57 {WHATSAPP_PHONE}
            </h3>
            <p className="text-xs text-oliva/70 dark:text-almendra/70 mt-1">
              Comunicación directa con los desarrolladores.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 font-title font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded bg-salvia text-oliva-dark hover:opacity-90 transition-all text-center flex items-center justify-center gap-1.5"
          >
            <span>Escribir por WhatsApp</span>
            <span className="font-mono text-xs">→</span>
          </a>
        </div>

        {/* Email Card */}
        <div className="p-5 rounded-lg border border-oliva/10 dark:border-oliva-border bg-white/40 dark:bg-oliva-surface flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold text-salvia uppercase block mb-1">
              Correo Electrónico
            </span>
            <h3 className="font-title font-bold text-base text-oliva dark:text-almendra truncate">
              {CONTACT_EMAIL}
            </h3>
            <p className="text-xs text-oliva/70 dark:text-almendra/70 mt-1">
              Canal oficial de DataSky Studio.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex-1 font-title font-bold text-xs uppercase tracking-wider px-3.5 py-2.5 rounded bg-oliva text-almendra dark:bg-oliva-dark border border-oliva/20 dark:border-oliva-border hover:border-salvia text-center transition-all"
            >
              Abrir correo
            </a>
            <button
              onClick={handleCopyEmail}
              className="font-mono text-xs px-3.5 py-2.5 rounded border border-oliva/20 dark:border-oliva-border hover:border-salvia text-oliva/80 dark:text-almendra/80 hover:text-salvia transition-colors cursor-pointer"
              title="Copiar correo"
            >
              {copied ? 'Copiado' : 'Copiar'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
