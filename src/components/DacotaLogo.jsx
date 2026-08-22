import React from 'react';

/**
 * DACOTA Official Brand Logo Component
 * Renders official brand logo image from /image/logo.jpeg
 */
const DacotaLogo = ({ variant = 'dark', className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-10',
    lg: 'h-10 sm:h-14'
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      {variant === 'light' ? (
        // Dark background (e.g. Footer): background container or inverted rendering
        <div className="bg-white px-2.5 py-1 rounded shadow-sm inline-flex items-center justify-center">
          <img
            src="/image/logo.png"
            alt="DACOTA Commercial Kitchen Equipment"
            className={`${sizeClasses[size]} w-auto object-contain`}
          />
        </div>
      ) : (
        // Light background (e.g. Navbar, Header, Cards)
        <img
          src="/image/logo.png"
          alt="DACOTA Commercial Kitchen Equipment"
          className={`${sizeClasses[size]} w-auto object-contain`}
        />
      )}
    </div>
  );
};

export default DacotaLogo;
