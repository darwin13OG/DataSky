import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  showLabel?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-4 h-4', showLabel = false }) => {
  const normalized = name.toLowerCase().trim();

  let iconSvg: React.ReactNode = null;
  let label = name;

  if (normalized.includes('react')) {
    label = 'React';
    iconSvg = (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  } else if (normalized.includes('vite')) {
    label = 'Vite';
    iconSvg = (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M29.5 5.5L16.8 28.3a1 1 0 01-1.6 0L2.5 5.5a1 1 0 011-1.5h25a1 1 0 011 1.5z" fill="url(#viteGradient)" />
        <path d="M19.5 2.5L8.5 15.5h6l-3.5 11 12-14h-6.5l3.5-10z" fill="#FFD62E" />
        <defs>
          <linearGradient id="viteGradient" x1="2" y1="4" x2="30" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else if (normalized.includes('tailwind')) {
    label = 'Tailwind CSS';
    iconSvg = (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
          fill="#38BDF8"
        />
      </svg>
    );
  } else if (normalized.includes('typescript') || normalized === 'ts') {
    label = 'TypeScript';
    iconSvg = (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M12.2 14.8c.4.6 1 .9 1.8.9.8 0 1.3-.4 1.3-.9 0-.6-.5-.8-1.4-1.2l-.7-.3c-1.3-.5-2.2-1.2-2.2-2.5 0-1.6 1.3-2.7 3.3-2.7 1.4 0 2.4.5 3.1 1.4l-1.3 1.2c-.4-.5-.9-.8-1.7-.8-.7 0-1.2.4-1.2.9 0 .5.4.8 1.3 1.1l.7.3c1.5.6 2.4 1.3 2.4 2.6 0 1.8-1.4 2.8-3.5 2.8-1.6 0-2.8-.6-3.6-1.7l1.5-1.1zM5 8.3h7.2v1.9H9.7v7.6H7.5v-7.6H5V8.3z" fill="#FFFFFF" />
      </svg>
    );
  } else if (normalized.includes('javascript') || normalized === 'js') {
    label = 'JavaScript';
    iconSvg = (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M7 16.5c.5.8 1.1 1.3 2.2 1.3 1.1 0 1.8-.6 1.8-1.8v-6.9h2.1v7c0 2.2-1.3 3.1-3.6 3.1-1.7 0-2.8-.7-3.5-2l1-1.3zm8.3-.2c.5.8 1.3 1.3 2.4 1.3 1 0 1.6-.5 1.6-1.1 0-.8-.7-1-1.8-1.5l-.6-.3c-1.7-.7-2.8-1.5-2.8-3.3 0-1.9 1.5-3.3 3.8-3.3 1.7 0 2.8.6 3.6 1.9l-1.6 1.1c-.4-.7-.9-1-1.9-1-.9 0-1.5.5-1.5 1.1 0 .6.5.9 1.5 1.3l.6.3c2 .9 3.1 1.6 3.1 3.5 0 2.1-1.6 3.4-4.1 3.4-2.1 0-3.4-.8-4.2-2.3l1.5-1.2z" fill="#000000" />
      </svg>
    );
  } else if (normalized.includes('cloudflare')) {
    label = 'Cloudflare';
    iconSvg = (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M18.2 10.4c-.4-2.6-2.6-4.5-5.3-4.5-2.3 0-4.3 1.4-5 3.4-.3-.1-.6-.2-.9-.2-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9C1.3 14.5 0 16 0 17.8 0 20.1 1.9 22 4.2 22h13.9c2.7 0 4.9-2.2 4.9-4.9 0-2.4-1.7-4.4-4-4.8.1-.6.2-1.3.2-1.9z" fill="#F38020" />
        <path d="M17.8 17.1c-.2-.1-.4-.2-.7-.2h-8c-.3 0-.5.2-.6.4l-.5 1.3c-.1.2 0 .4.2.4h8.9c.2 0 .4-.2.5-.4l.2-.5c.2-.5 0-.8 0-1z" fill="#FAAD3F" />
      </svg>
    );
  } else if (normalized.includes('gemini') || normalized.includes('ia') || normalized.includes('ai')) {
    label = 'Google Gemini API';
    iconSvg = (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
          fill="url(#geminiGrad)"
        />
        <defs>
          <linearGradient id="geminiGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1BA1E3" />
            <stop offset="0.5" stopColor="#5B7FFF" />
            <stop offset="1" stopColor="#C973FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else if (normalized.includes('node')) {
    label = 'Node.js';
    iconSvg = (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7.2v10.4L12 23l9-5.4V7.2L12 2z" fill="#539E43" />
        <path d="M12 4.2l6.8 3.9v7.8L12 19.8l-6.8-3.9V8.1L12 4.2z" fill="#333333" />
        <path d="M12 6.5l4.5 2.6v5.2L12 16.9l-4.5-2.6V9.1L12 6.5z" fill="#539E43" />
      </svg>
    );
  } else if (normalized.includes('web api') || normalized.includes('barcode') || normalized.includes('scanner')) {
    label = 'Web APIs';
    iconSvg = (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
        <line x1="7" y1="8" x2="7" y2="16" />
        <line x1="10" y1="8" x2="10" y2="16" />
        <line x1="14" y1="8" x2="14" y2="16" />
        <line x1="17" y1="8" x2="17" y2="16" />
      </svg>
    );
  } else if (normalized.includes('localstorage') || normalized.includes('state')) {
    label = 'LocalStorage';
    iconSvg = (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  } else {
    // Elegant fallback icon
    label = name;
    iconSvg = (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h18" />
      </svg>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5" title={label}>
      <span className="shrink-0">{iconSvg}</span>
      {showLabel && <span>{name}</span>}
    </span>
  );
};
