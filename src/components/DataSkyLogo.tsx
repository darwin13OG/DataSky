import React from 'react';

interface DataSkyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
}

export const DataSkyLogo: React.FC<DataSkyLogoProps> = ({
  className = '',
  size = 'md',
  withText = false
}) => {
  const sizeMap = {
    sm: 'w-7 h-5',
    md: 'w-9 h-6',
    lg: 'w-14 h-9',
    xl: 'w-20 h-13'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Sleek, Proportionate Cloud SVG with Data Matrix inside */}
      <svg
        viewBox="0 0 100 64"
        className={`${sizeMap[size]} transition-all duration-300 group-hover:scale-105 shrink-0 drop-shadow-sm`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo DataSky Studio"
      >
        <defs>
          {/* Classic Cloud Silhouette ClipPath */}
          <clipPath id="dataSkyCloudClip">
            <path d="M25 52h48a13 13 0 0 0 13-13 13 13 0 0 0-10-12.7 20 20 0 0 0-38-6.3A15 15 0 0 0 20 34a14 14 0 0 0 5 18z" />
          </clipPath>

          {/* Cloud Core Gradient */}
          <linearGradient id="cloudInnerGrad" x1="10" y1="10" x2="90" y2="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E2621" />
            <stop offset="50%" stopColor="#161917" />
            <stop offset="100%" stopColor="#253028" />
          </linearGradient>

          {/* Stroke Gradient */}
          <linearGradient id="cloudStrokeGrad" x1="20" y1="10" x2="80" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C2CEC0" />
            <stop offset="60%" stopColor="#A3B19B" />
            <stop offset="100%" stopColor="#7E8E76" />
          </linearGradient>
        </defs>

        {/* Clipped Binary Data Matrix inside Cloud */}
        <g clipPath="url(#dataSkyCloudClip)">
          {/* Background fill */}
          <rect width="100" height="64" fill="url(#cloudInnerGrad)" />

          {/* Subtle Ambient Salvia glow in center */}
          <circle cx="50" cy="30" r="22" fill="#A3B19B" fillOpacity="0.16" />

          {/* High-tech Binary Matrix Lines */}
          <text x="50" y="21" textAnchor="middle" fill="#A3B19B" fillOpacity="0.8" fontSize="4.6" fontFamily="monospace" letterSpacing="0.8" fontWeight="600">
            01010110
          </text>
          <text x="50" y="27" textAnchor="middle" fill="#C2CEC0" fillOpacity="0.9" fontSize="4.6" fontFamily="monospace" letterSpacing="0.7" fontWeight="bold">
            100101101010
          </text>
          <text x="50" y="33" textAnchor="middle" fill="#A3B19B" fillOpacity="0.85" fontSize="4.6" fontFamily="monospace" letterSpacing="0.6">
            0011011110011
          </text>
          <text x="50" y="39" textAnchor="middle" fill="#A3B19B" fillOpacity="0.8" fontSize="4.6" fontFamily="monospace" letterSpacing="0.5">
            1010010110100
          </text>
          <text x="50" y="45" textAnchor="middle" fill="#A3B19B" fillOpacity="0.75" fontSize="4.6" fontFamily="monospace" letterSpacing="0.5">
            0101010011010
          </text>
          <text x="50" y="50" textAnchor="middle" fill="#A3B19B" fillOpacity="0.65" fontSize="4.6" fontFamily="monospace" letterSpacing="0.5">
            10101101001
          </text>
        </g>

        {/* Crisp Cloud Contour Stroke */}
        <path
          d="M25 52h48a13 13 0 0 0 13-13 13 13 0 0 0-10-12.7 20 20 0 0 0-38-6.3A15 15 0 0 0 20 34a14 14 0 0 0 5 18z"
          stroke="url(#cloudStrokeGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {withText && (
        <span className="font-title font-black text-xl tracking-tighter uppercase flex items-center">
          <span className="text-oliva dark:text-almendra">DATA</span>
          <span className="text-salvia">SKY</span>
          <span className="text-[10px] font-mono font-normal px-1.5 py-0.5 rounded border border-salvia/40 text-salvia ml-1.5 uppercase">
            STUDIO
          </span>
        </span>
      )}
    </div>
  );
};
