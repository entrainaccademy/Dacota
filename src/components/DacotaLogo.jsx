import React from 'react';

/**
 * DACOTA Official Brand Logo Component
 * Clean black & white design with the signature DACOTA red triangle mark element.
 */
const DacotaLogo = ({ variant = 'dark', className = '', size = 'md' }) => {
  const textColor = variant === 'light' ? '#FFFFFF' : '#09090B';
  const subtextColor = variant === 'light' ? '#A1A1AA' : '#52525B';
  const redColor = '#D32F2F';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Signature Red Triangle Mark */}
      <svg
        className={`${sizeClasses[size]} w-auto aspect-square text-[#D32F2F] shrink-0`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="50,8 92,85 8,85" fill={redColor} />
        <polygon points="50,32 75,76 25,76" fill={variant === 'light' ? '#09090B' : '#FAF9F6'} />
        <polygon points="50,48 62,70 38,70" fill={redColor} />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span 
            className="font-extrabold tracking-wider text-xl sm:text-28 border-b-2 border-[#D32F2F] pb-0.5"
            style={{ 
              color: textColor,
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '0.12em',
              fontWeight: 800
            }}
          >
            DACOTA
          </span>
        </div>
        <span 
          className="text-[9px] sm:text-[10px] tracking-widest font-semibold uppercase mt-1"
          style={{ 
            color: subtextColor,
            letterSpacing: '0.22em'
          }}
        >
          KITCHEN EQUIPMENT
        </span>
      </div>
    </div>
  );
};

export default DacotaLogo;
