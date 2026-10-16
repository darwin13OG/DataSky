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
      {/* Sleek Cloud SVG with Warm Gray & Smoke Black palette */}
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
            <stop offset="0%" stopColor="#2F2C2A" />
            <stop offset="50%" stopColor="#252321" />
            <stop offset="100%" stopColor="#1E1C1A" />
          </linearGradient>

          {/* Stroke Gradient */}
          <linearGradient id="cloudStrokeGrad" x1="20" y1="10" x2="80" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D5CFC9" />
            <stop offset="60%" stopColor="#B0A8A0" />
            <stop offset="100%" stopColor="#8C847C" />
          </linearGradient>
        </defs>

        {/* Clipped Binary Data Matrix inside Cloud */}
        <g clipPath="url(#dataSkyCloudClip)">
          {/* Background fill */}
          <rect width="100" height="64" fill="url(#cloudInnerGrad)" />

          {/* Subtle Ambient warm glow in center */}
          <circle cx="50" cy="30" r="22" fill="#B0A8A0" fillOpacity="0.16" />

          {/* Clean Matrix Lines */}
          <text x="50" y="21" textAnchor="middle" fill="#B0A8A0" fillOpacity="0.8" fontSize="4.6" fontFamily="monospace" letterSpacing="0.8" fontWeight="600">
            01010110
          </text>
          <text x="50" y="27" textAnchor="middle" fill="#D5CFC9" fillOpacity="0.9" fontSize="4.6" fontFamily="monospace" letterSpacing="0.7" fontWeight="bold">
            100101101010
          </text>
          <text x="50" y="33" textAnchor="middle" fill="#B0A8A0" fillOpacity="0.85" fontSize="4.6" fontFamily="monospace" letterSpacing="0.6">
            0011011110011
          </text>
          <text x="50" y="39" textAnchor="middle" fill="#B0A8A0" fillOpacity="0.8" fontSize="4.6" fontFamily="monospace" letterSpacing="0.5">
            1010010110100
          </text>
          <text x="50" y="45" textAnchor="middle" fill="#B0A8A0" fillOpacity="0.75" fontSize="4.6" fontFamily="monospace" letterSpacing="0.5">
            0101010011010
          </text>
          <text x="50" y="50" textAnchor="middle" fill="#B0A8A0" fillOpacity="0.65" fontSize="4.6" fontFamily="monospace" letterSpacing="0.5">
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
          <span className="text-[#252321] dark:text-[#FFFDF9]">DATA</span>
          <span className="text-[#B0A8A0]">SKY</span>
          <span className="text-[10px] font-mono font-normal px-1.5 py-0.5 rounded border border-[#B0A8A0]/40 text-[#B0A8A0] ml-1.5 uppercase">
            STUDIO
          </span>
        </span>
      )}
    </div>
  );
};
