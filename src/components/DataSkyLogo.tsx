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

  const svgDimensions = {
    sm: { w: 36, h: 24 },
    md: { w: 46, h: 30 },
    lg: { w: 70, h: 46 },
    xl: { w: 100, h: 65 }
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Cloud SVG with Binary Data Matrix texture matching the uploaded logo */}
      <svg
        viewBox="0 0 100 65"
        className={`${sizeMap[size]} transition-transform duration-300 group-hover:scale-105 shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="DataSky Studio Cloud Logo"
      >
        <defs>
          {/* Cloud Outline Clip Path */}
          <clipPath id="cloudClip">
            <path d="M78.5 24C76.2 11.2 64.8 2 51.5 2C40.6 2 31.2 8.4 26.5 17.5C11.5 18.8 0 31.4 0 46.8C0 62.4 12.6 75 28.2 75H78.8C90.5 75 100 65.5 100 53.8C100 42.6 91.4 33.4 80.5 32.2C79.8 29.3 79.1 26.6 78.5 24Z" />
          </clipPath>

          {/* Gradients */}
          <linearGradient id="cloudBgDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E2B27" />
            <stop offset="50%" stopColor="#161917" />
            <stop offset="100%" stopColor="#25322A" />
          </linearGradient>

          <linearGradient id="cloudStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A3B19B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7E8E76" stopOpacity="0.5" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Cloud Container with Clip */}
        <g clipPath="url(#cloudClip)">
          {/* Base Dark/Olive fill */}
          <rect width="100" height="75" fill="url(#cloudBgDark)" />

          {/* Subtle Ambient Salvia Highlights */}
          <ellipse cx="50" cy="20" rx="35" ry="20" fill="#A3B19B" fillOpacity="0.12" />
          <ellipse cx="75" cy="50" rx="25" ry="15" fill="#A3B19B" fillOpacity="0.15" />

          {/* Binary Matrix Code Pattern inside the cloud */}
          <text
            x="50"
            y="14"
            textAnchor="middle"
            fill="#A3B19B"
            fillOpacity="0.85"
            fontSize="5.2"
            fontFamily="monospace"
            letterSpacing="0.8"
            fontWeight="bold"
          >
            010101010
          </text>
          <text
            x="50"
            y="21"
            textAnchor="middle"
            fill="#A3B19B"
            fillOpacity="0.75"
            fontSize="4.8"
            fontFamily="monospace"
            letterSpacing="0.8"
          >
            1001010110101
          </text>
          <text
            x="50"
            y="28"
            textAnchor="middle"
            fill="#A3B19B"
            fillOpacity="0.9"
            fontSize="4.8"
            fontFamily="monospace"
            letterSpacing="0.6"
          >
            010001110010001101
          </text>
          <text
            x="50"
            y="35"
            textAnchor="middle"
            fill="#C2CEC0"
            fillOpacity="0.95"
            fontSize="4.8"
            fontFamily="monospace"
            letterSpacing="0.5"
            fontWeight="bold"
          >
            00110111100110001100000
          </text>
          <text
            x="50"
            y="42"
            textAnchor="middle"
            fill="#A3B19B"
            fillOpacity="0.85"
            fontSize="4.8"
            fontFamily="monospace"
            letterSpacing="0.5"
          >
            1001100001000100001010011
          </text>
          <text
            x="50"
            y="49"
            textAnchor="middle"
            fill="#A3B19B"
            fillOpacity="0.8"
            fontSize="4.8"
            fontFamily="monospace"
            letterSpacing="0.4"
          >
            0011101101100010100110101
          </text>
          <text
            x="50"
            y="56"
            textAnchor="middle"
            fill="#A3B19B"
            fillOpacity="0.75"
            fontSize="4.8"
            fontFamily="monospace"
            letterSpacing="0.4"
          >
            1101011101010111010001101001
          </text>
          <text
            x="50"
            y="63"
            textAnchor="middle"
            fill="#A3B19B"
            fillOpacity="0.6"
            fontSize="4.8"
            fontFamily="monospace"
            letterSpacing="0.4"
          >
            0101010100101101101110101001
          </text>
        </g>

        {/* Refined Contour Border */}
        <path
          d="M78.5 24C76.2 11.2 64.8 2 51.5 2C40.6 2 31.2 8.4 26.5 17.5C11.5 18.8 0 31.4 0 46.8C0 62.4 12.6 75 28.2 75H78.8C90.5 75 100 65.5 100 53.8C100 42.6 91.4 33.4 80.5 32.2C79.8 29.3 79.1 26.6 78.5 24Z"
          stroke="url(#cloudStroke)"
          strokeWidth="1.8"
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
