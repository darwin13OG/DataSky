import React, { useState } from 'react';

interface ProjectBadgeIconProps {
  id: string;
  name: string;
  domain: string;
  size?: 'md' | 'lg' | 'xl';
}

export const ProjectBadgeIcon: React.FC<ProjectBadgeIconProps> = ({
  id,
  name,
  domain,
  size = 'md'
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const containerSizes = {
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-14 h-14'
  }[size];

  const iconSizes = {
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  }[size];

  // Bespoke Original Vector Icons for each project
  const renderFallbackIcon = () => {
    switch (id) {
      case 'scan-pos':
        return (
          <svg className={`${iconSizes} text-emerald-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 9v6M10 9v6M14 9v6M17 9v6" />
            <line x1="2" y1="12" x2="22" y2="12" stroke="#10B981" strokeWidth="1.5" strokeDasharray="2 1" />
          </svg>
        );
      case 'flickwallet':
        return (
          <svg className={`${iconSizes} text-blue-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
            <circle cx="17" cy="15" r="1.5" fill="#60A5FA" />
          </svg>
        );
      case 'cotizador-express':
        return (
          <svg className={`${iconSizes} text-amber-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'codewave-ai':
        return (
          <svg className={`${iconSizes} text-purple-400`} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z"
              fill="url(#codewaveGrad)"
            />
            <circle cx="12" cy="12" r="3" fill="#FFFFFF" fillOpacity="0.8" />
            <defs>
              <linearGradient id="codewaveGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" />
                <stop offset="0.5" stopColor="#818CF8" />
                <stop offset="1" stopColor="#C084FC" />
              </linearGradient>
            </defs>
          </svg>
        );
      default:
        return (
          <svg className={`${iconSizes} text-salvia`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );
    }
  };

  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  return (
    <div
      className={`${containerSizes} rounded-lg bg-[#161917] border border-salvia/30 flex items-center justify-center p-2 relative shadow-xs overflow-hidden shrink-0 group-hover:border-salvia transition-colors`}
    >
      {/* Background ambient tint */}
      <div className="absolute inset-0 bg-salvia/5 group-hover:bg-salvia/10 transition-colors" />

      {/* Try to display Google Favicon, fallback cleanly to original SVG */}
      {!imageFailed ? (
        <>
          <img
            src={faviconUrl}
            alt={`${name} Favicon`}
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
