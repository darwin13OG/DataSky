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
      {/* Official DataSky Vector Logo uploaded by user */}
      <img
        src="/DataSky.svg"
        alt="Logo Oficial DataSky"
        className={`${sizeMap[size]} object-contain transition-transform duration-300 group-hover:scale-105 shrink-0`}
      />

      {withText && (
        <span className="font-title font-black text-lg sm:text-xl tracking-tighter uppercase flex items-center">
          <span className="text-[#252321] dark:text-[#FFFDF9]">DATA</span>
          <span className="text-[#B0A8A0]">SKY</span>
        </span>
      )}
    </div>
  );
};
