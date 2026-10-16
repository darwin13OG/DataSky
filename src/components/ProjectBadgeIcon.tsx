import React, { useState } from 'react';

interface ProjectBadgeIconProps {
  id: string;
  name: string;
  domain: string;
  faviconUrl?: string;
  size?: 'md' | 'lg' | 'xl';
}

export const ProjectBadgeIcon: React.FC<ProjectBadgeIconProps> = ({
  id,
  name,
  domain,
  faviconUrl,
  size = 'md'
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const containerSizes = {
    md: 'w-10 h-10',
    lg: 'w-11 h-11',
    xl: 'w-12 h-12'
  }[size];

  const iconSizes = {
    md: 'w-5 h-5',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  }[size];

  // Clean fallback icons
  const renderFallbackIcon = () => {
    switch (id) {
      case 'scan-pos':
        return (
          <svg className={`${iconSizes} text-salvia`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 9v6M10 9v6M14 9v6M17 9v6" />
          </svg>
        );
      case 'flickwallet':
        return (
          <svg className={`${iconSizes} text-salvia`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
            <circle cx="17" cy="15" r="1.5" fill="currentColor" />
          </svg>
        );
      case 'cotizador-express':
        return (
          <svg className={`${iconSizes} text-salvia`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <line x1="8" y1="7" x2="16" y2="7" />
            <line x1="8" y1="11" x2="16" y2="11" />
            <line x1="8" y1="15" x2="12" y2="15" />
          </svg>
        );
      case 'codewave-ai':
        return (
          <svg className={`${iconSizes} text-salvia`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
            <line x1="14" y1="4" x2="10" y2="20" strokeWidth="1.5" />
          </svg>
        );
      default:
        return (
          <svg className={`${iconSizes} text-salvia`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
        );
    }
  };

  // Direct live asset verified on the server
  const liveFavicon =
    faviconUrl ||
    (id === 'scan-pos'
      ? 'https://scan-pos.pages.dev/favicon.svg'
      : id === 'flickwallet'
      ? 'https://flickwallet.pages.dev/apple-touch-icon.png'
      : id === 'cotizador-express'
      ? 'https://cotizador-expres.pages.dev/favicon.png'
      : id === 'codewave-ai'
      ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='10' fill='%23050505'/%3E%3Cdefs%3E%3ClinearGradient id='cwg' x1='6' y1='10' x2='34' y2='30' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0%25' stop-color='%2300f0ff'/%3E%3Cstop offset='45%25' stop-color='%2300e5ff'/%3E%3Cstop offset='75%25' stop-color='%2300f5c4'/%3E%3Cstop offset='100%25' stop-color='%2334d399'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M15 11L7 20L15 29' stroke='url(%23cwg)' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Cpath d='M25 11L33 20L25 29' stroke='url(%23cwg)' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E"
      : `https://www.google.com/s2/favicons?domain=${domain}&sz=128`);

  return (
    <div
      className={`${containerSizes} rounded-lg bg-[#1E1C1A] border border-[#B0A8A0]/30 flex items-center justify-center p-1.5 relative shadow-xs overflow-hidden shrink-0 group-hover:border-[#B0A8A0] transition-colors`}
    >
      {!imageFailed ? (
        <>
          <img
            src={liveFavicon}
            alt={name}
            className={`w-full h-full object-contain relative z-10 transition-opacity duration-200 ${
              imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageFailed(true)}
          />
          {!imageLoaded && (
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              {renderFallbackIcon()}
            </div>
          )}
        </>
      ) : (
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {renderFallbackIcon()}
        </div>
      )}
    </div>
  );
};
