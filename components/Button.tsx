
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  Icon?: React.ElementType; // Optional icon component
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  Icon,
  ...props
}) => {
  const baseStyle = "font-press-start focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-200 ease-in-out transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center justify-center rounded-md shadow-md";
  
  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-consultancy-cta hover:bg-consultancy-cta-hover focus:ring-consultancy-cta text-white';
      break;
    case 'secondary':
      variantStyle = 'bg-consultancy-accent hover:bg-sky-400 focus:ring-consultancy-accent text-white';
      break;
    case 'danger':
      variantStyle = 'bg-consultancy-error hover:bg-red-500 focus:ring-consultancy-error text-white';
      break;
  }

  let sizeStyle = '';
  let iconSize = 'w-4 h-4';
  switch (size) {
    case 'sm':
      sizeStyle = 'px-4 py-2 text-xs';
      iconSize = 'w-3 h-3';
      break;
    case 'md':
      sizeStyle = 'px-6 py-2.5 text-sm';
      break;
    case 'lg':
      sizeStyle = 'px-8 py-3 text-base';
      iconSize = 'w-5 h-5';
      break;
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {Icon && <Icon className={`mr-2 ${iconSize}`} aria-hidden="true" />}
      {children}
    </button>
  );
};
