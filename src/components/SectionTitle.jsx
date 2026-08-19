import React from 'react';

const SectionTitle = ({
  title,
  subtitle,
  badge,
  align = 'center', // center | left
  dark = false,
  className = ''
}) => {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClasses} ${className} mb-10 md:mb-14`}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#09090B] bg-[#09090B]/5 border border-[#09090B]/15 rounded mb-3">
          {badge}
        </span>
      )}
      
      <h2 
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase leading-tight font-sans ${
          dark ? 'text-white' : 'text-[#09090B]'
        }`}
      >
        {title}
      </h2>

      {/* DACOTA Red Accent Line */}
      <div className={`h-1 w-20 bg-[#D32F2F] mt-3 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>

      {subtitle && (
        <p 
          className={`mt-4 text-sm sm:text-base max-w-2xl font-normal leading-relaxed ${
            dark ? 'text-[#A1A1AA]' : 'text-[#52525B]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
