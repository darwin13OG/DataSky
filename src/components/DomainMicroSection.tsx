import React from 'react';
import { WHATSAPP_URL } from '../data/team.ts';
import { FloatUpReveal } from './FloatUpReveal.tsx';

export const DomainMicroSection: React.FC = () => {
  return (
    <section id="dominio" className="py-14 sm:py-16 border-t border-zinc-200 dark:border-white/10 relative">
      {/* Header */}
      <FloatUpReveal delayMs={60} distancePx={28}>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8">
          <div>
            <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-zinc-900 dark:text-[#FFFDF9]">
              Empieza con tu Subdominio{' '}
              <span className="font-serif italic font-bold normal-case text-emerald-600 dark:text-emerald-400 underline decoration-emerald-500/50 decoration-2 underline-offset-4 tracking-normal inline-block ml-0.5">
                gratis
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-[#FFFDF9]/80 mt-1 max-w-xl">
              Puedes usar tu enlace gratuito o conectar tu dominio propio:
            </p>
          </div>
        </div>
      </FloatUpReveal>

      {/* Visual 2-Card Comparative Module */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
        {/* Option 1: Subdominio pages.dev Gratis */}
        <FloatUpReveal delayMs={100} distancePx={36}>
          <div className="group relative h-full rounded-2xl border border-emerald-500/40 dark:border-emerald-500/30 bg-white/95 dark:bg-[#1C1A18]/90 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-[0_0_28px_-5px_rgba(16,185,129,0.22)] overflow-hidden">
            {/* Top Laser Accent */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent opacity-80" />

            <div>
              {/* Badge & Category */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 border border-emerald-500/35 text-emerald-800 dark:text-emerald-300">
                  <span>✓</span>
                  <span>Subdominio Gratis</span>
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  $0 / mes
                </span>
              </div>

              {/* Simulated Browser URL bar */}
              <div className="px-3.5 py-2 rounded-lg bg-zinc-100/90 dark:bg-black/40 border border-zinc-200/90 dark:border-white/10 flex items-center gap-2 text-xs font-mono mb-4 text-zinc-800 dark:text-[#FFFDF9]/90 select-none">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">https://</span>
                <span className="font-semibold text-zinc-900 dark:text-white">tunegocio</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">.pages.dev</span>
              </div>

              <h3 className="font-title font-bold text-lg uppercase tracking-tight text-zinc-900 dark:text-[#FFFDF9] mb-2">
                Subdominio .pages.dev
              </h3>

              {/* Clean Checklist without dense walls of text */}
              <ul className="space-y-2 text-xs text-zinc-700 dark:text-[#FFFDF9]/80 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span>Sin costo mensual ni pagos de mantenimiento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span>Carga rápida en red mundial (Cloudflare).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span>Certificado de seguridad SSL (https) incluido.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span>Listo para compartir directo por WhatsApp y redes.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-600 dark:text-[#FFFDF9]/70">
              <span>Para empezar hoy</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Totalmente funcional</span>
            </div>
          </div>
        </FloatUpReveal>

        {/* Option 2: Dominio Propio (.com / .co) */}
        <FloatUpReveal delayMs={180} distancePx={36}>
          <div className="group relative h-full rounded-2xl border border-cyan-500/40 dark:border-cyan-500/30 bg-white/95 dark:bg-[#1C1A18]/90 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_0_28px_-5px_rgba(6,182,212,0.22)] overflow-hidden">
            {/* Top Laser Accent */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent opacity-80" />

            <div>
              {/* Badge & Category */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/15 border border-cyan-500/35 text-cyan-800 dark:text-cyan-300">
                  <span>★</span>
                  <span>Opcional</span>
                </span>
                <span className="text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400">
                  A tu nombre
                </span>
              </div>

              {/* Simulated Browser URL bar */}
              <div className="px-3.5 py-2 rounded-lg bg-zinc-100/90 dark:bg-black/40 border border-zinc-200/90 dark:border-white/10 flex items-center gap-2 text-xs font-mono mb-4 text-zinc-800 dark:text-[#FFFDF9]/90 select-none">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">https://</span>
                <span className="font-semibold text-zinc-900 dark:text-white">tunegocio</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">.com</span>
              </div>

              <h3 className="font-title font-bold text-lg uppercase tracking-tight text-zinc-900 dark:text-[#FFFDF9] mb-2">
                Dominio Propio (.com, .co)
              </h3>

              {/* Clean Checklist without dense walls of text */}
              <ul className="space-y-2 text-xs text-zinc-700 dark:text-[#FFFDF9]/80 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span>Si ya lo tienes o deseas comprarlo, lo conectamos gratis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span>Comprado y registrado a tu nombre (tú eres el único dueño).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span>Misma velocidad y seguridad SSL sin pagos mensuales a nosotros.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span>Mayor presencia de marca si tu empresa lo prefiere.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-600 dark:text-[#FFFDF9]/70">
              <span>Configuración incluida</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">Sin ataduras</span>
            </div>
          </div>
        </FloatUpReveal>
      </div>

      {/* Quick Action Footer Note */}
      <FloatUpReveal delayMs={240} distancePx={26}>
        <div className="p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-[#1E1C1A]/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono shadow-xs">
          <p className="text-zinc-700 dark:text-[#FFFDF9]/80 text-center sm:text-left font-sans">
            ¿Tienes dudas sobre cuál te conviene? Te asesoramos en 2 minutos por WhatsApp.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-title font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-[#FFFDF9] shadow-sm hover:shadow-[0_0_18px_rgba(6,182,212,0.4)] active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
          >
            Preguntar por WhatsApp →
          </a>
        </div>
      </FloatUpReveal>
    </section>
  );
};
