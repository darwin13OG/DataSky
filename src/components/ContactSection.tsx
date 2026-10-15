import React, { useState } from 'react';
import { CONTACT_EMAIL, ALT_CONTACT_EMAIL, WHATSAPP_URL } from '../data/team.ts';

export const ContactSection: React.FC = () => {
  const [projectType, setProjectType] = useState('Punto de Venta / Inventarios (POS)');
  const [timeline, setTimeline] = useState('1 a 2 semanas');
  const [clientMessage, setClientMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateWhatsAppLink = () => {
    const text = `Hola DataSky Studio! Me interesa desarrollar un proyecto:
• Tipo: ${projectType}
• Plazo estimado: ${timeline}
${clientMessage ? `• Detalle: ${clientMessage}` : '• Me gustaría agendar una llamada breve para revisar alcance y cotización.'}`;
    return `https://wa.me/573124093345?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="py-16 border-t border-oliva/10 dark:border-oliva-border/40">
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-salvia/15 text-salvia mb-2 border border-salvia/30">
          <span>Contacto Directo</span>
          <span>·</span>
          <span>Respuesta en menos de 2 horas</span>
        </div>
        <h2 className="font-title font-black text-2xl sm:text-3xl uppercase tracking-tight text-oliva dark:text-almendra">
          Inicia tu Proyecto
        </h2>
        <p className="text-xs sm:text-sm text-oliva/70 dark:text-almendra/70 mt-1 max-w-xl leading-relaxed">
          Escríbenos directamente para conversar sobre tu idea, estimar tiempos y arrancar el desarrollo sin burocracia.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Direct Action Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* WhatsApp Direct Card */}
          <div className="p-5 rounded-lg border border-salvia/40 bg-salvia/10 dark:bg-oliva-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold text-salvia uppercase">Canal Inmediato</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <h3 className="font-title font-bold text-lg text-oliva dark:text-almendra uppercase">
                WhatsApp Directo
              </h3>
              <p className="text-xs text-oliva/75 dark:text-almendra/75 mt-1 leading-relaxed">
                Chatea en tiempo real con uno de los ingenieros. Respondemos de inmediato para agendar o despejar dudas técnicas.
              </p>
              <p className="text-xs font-mono text-salvia mt-2 font-bold">
                +57 312 4093345
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 font-title font-bold text-xs uppercase tracking-wider px-5 py-3 rounded bg-salvia text-oliva-dark hover:opacity-90 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Escribir por WhatsApp</span>
              <span className="text-sm">→</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="p-5 rounded-lg border border-oliva/10 dark:border-oliva-border bg-white/40 dark:bg-oliva-surface flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-salvia uppercase block mb-1">
                Correo Electrónico
              </span>
              <h3 className="font-title font-bold text-base text-oliva dark:text-almendra uppercase">
                {CONTACT_EMAIL}
              </h3>
              <p className="text-xs text-oliva/60 dark:text-almendra/60 mt-0.5">
                O también: {ALT_CONTACT_EMAIL}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-oliva/10 dark:border-oliva-border/40 flex items-center gap-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-title font-bold text-xs uppercase tracking-wider px-3.5 py-2 rounded bg-oliva text-almendra dark:bg-oliva-dark border border-oliva/20 dark:border-oliva-border hover:border-salvia text-center flex-1 transition-all"
              >
                Abrir Correo
              </a>
              <button
                onClick={() => handleCopyEmail(CONTACT_EMAIL)}
                className="font-mono text-xs px-3 py-2 rounded border border-oliva/20 dark:border-oliva-border hover:border-salvia text-oliva/80 dark:text-almendra/80 hover:text-salvia transition-colors cursor-pointer"
                title="Copiar correo"
              >
                {copied ? '✓ Copiado' : 'Copiar'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Quick Proposal Generator */}
        <div className="lg:col-span-7 p-6 rounded-lg border border-oliva/10 dark:border-oliva-border bg-white/40 dark:bg-oliva-surface">
          <h3 className="font-title font-bold text-sm uppercase tracking-tight text-oliva dark:text-almendra mb-1">
            Pre-configurar solicitud rápida
          </h3>
          <p className="text-xs text-oliva/60 dark:text-almendra/60 mb-4">
            Selecciona el tipo de producto para enviarnos los datos clave al WhatsApp.
          </p>

          <div className="space-y-4 text-xs font-mono">
            {/* Project Type */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-salvia font-bold mb-1.5">
                Tipo de Software
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-3 py-2.5 rounded border border-oliva/20 dark:border-oliva-border bg-white/70 dark:bg-oliva-dark text-oliva dark:text-almendra focus:outline-none focus:ring-1 focus:ring-salvia font-sans text-xs"
              >
                <option value="Punto de Venta / Inventarios (POS)">Punto de Venta / Inventarios (POS)</option>
                <option value="Fintech UI / Panel Financiero">Fintech UI / Panel Financiero</option>
                <option value="Cotizador / Generador de Presupuestos">Cotizador / Generador de Presupuestos</option>
                <option value="Pipeline IA con Gemini / Automatización">Pipeline IA con Gemini / Automatización</option>
                <option value="Plataforma Web a Medida / SaaS">Plataforma Web a Medida / SaaS</option>
              </select>
            </div>

            {/* Expected Timeline */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-salvia font-bold mb-1.5">
                Plazo Esperado
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['1 a 2 semanas', '2 a 4 semanas', 'Flexible'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`py-2 px-2 text-center rounded border text-[11px] transition-all cursor-pointer ${
                      timeline === t
                        ? 'border-salvia bg-salvia/20 text-oliva dark:text-almendra font-bold'
                        : 'border-oliva/15 dark:border-oliva-border/60 hover:border-salvia/50 text-oliva/70 dark:text-almendra/70'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Message / Brief */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-salvia font-bold mb-1.5">
                Breve descripción de la necesidad (opcional)
              </label>
              <textarea
                value={clientMessage}
                onChange={(e) => setClientMessage(e.target.value)}
                rows={3}
                placeholder="Ejemplo: Necesitamos automatizar la generación de cotizaciones con exportación a PDF para 5 comerciales..."
                className="w-full px-3 py-2 rounded border border-oliva/20 dark:border-oliva-border bg-white/70 dark:bg-oliva-dark text-oliva dark:text-almendra focus:outline-none focus:ring-1 focus:ring-salvia font-sans text-xs"
              />
            </div>

            {/* Action */}
            <div className="pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full font-title font-bold text-xs uppercase tracking-wider py-3 px-4 rounded bg-oliva text-almendra dark:bg-salvia dark:text-oliva-dark hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <span>Enviar requerimiento pre-armado por WhatsApp</span>
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
