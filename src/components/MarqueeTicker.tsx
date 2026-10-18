import React from 'react';

const TICKER_ITEMS = [
  { text: 'Dominio gratis .pages.dev sin mensualidades o tu dominio propio', highlight: true },
  { text: 'Optimizado para celular', highlight: false },
  { text: 'Entrega en pocos días', highlight: true },
  { text: 'Atención directa con Darwin, Jose y Matyas', highlight: false },
  { text: 'Páginas web y tiendas funcionales', highlight: false },
  { text: 'Sin pagos mensuales obligatorios', highlight: true },
  { text: 'Sin enredos', highlight: false },
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div
      className="relative w-full overflow-hidden border-y border-zinc-200/80 dark:border-white/10 bg-zinc-50/70 dark:bg-[#151413]/70 backdrop-blur-sm py-2.5 my-6 sm:my-8 select-none"
      aria-label="Información de DataSky"
    >
      {/* Left and right soft edge gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#FFFDF9] dark:from-[#181615] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#FFFDF9] dark:from-[#181615] to-transparent z-10" />

      {/* Continuously rotating marquee track */}
      <div className="flex animate-marquee">
        {/* Double array so rotation is perfectly seamless */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 sm:px-6 whitespace-nowrap text-xs sm:text-[13px] font-title font-semibold tracking-wide"
          >
            <span
              className={
                item.highlight
                  ? 'text-zinc-900 dark:text-[#FFFDF9] font-bold'
                  : 'text-zinc-700 dark:text-[#FFFDF9]/80'
              }
            >
              {item.text}
            </span>
            <span className="text-zinc-300 dark:text-zinc-700 select-none">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
