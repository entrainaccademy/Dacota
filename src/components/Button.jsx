import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  onClick,
  variant = 'primary', // primary | secondary | outline | accentRed | text
  size = 'md', // sm | md | lg
  type = 'button',
  className = '',
  icon: Icon = null,
  iconPosition = 'right',
  disabled = false
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#09090B] disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wider uppercase',
    md: 'px-5 py-2.5 text-sm tracking-wider uppercase',
    lg: 'px-7 py-3.5 text-base tracking-wider uppercase'
  };

  const variantStyles = {
    primary: 'bg-[#09090B] text-white hover:bg-[#D32F2F] active:bg-[#B71C1C] shadow-md border border-transparent',
    secondary: 'bg-[#18181B] text-white hover:bg-[#27272A] active:bg-[#09090B] shadow-md border border-transparent',
    outline: 'bg-transparent text-[#09090B] border-2 border-[#09090B] hover:bg-[#09090B] hover:text-white',
    outlineRed: 'bg-transparent text-[#D32F2F] border-2 border-[#D32F2F] hover:bg-[#D32F2F] hover:text-white',
    accentRed: 'bg-[#D32F2F] text-white hover:bg-[#B71C1C] shadow-md border border-transparent',
    text: 'bg-transparent text-[#09090B] hover:text-[#D32F2F] p-0 shadow-none'
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2" />}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {content}
    </button>
  );
};

export default Button;
