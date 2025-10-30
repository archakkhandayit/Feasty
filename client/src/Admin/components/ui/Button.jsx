import React from 'react';

// Removed type aliases and interface

const baseStyles = "inline-flex items-center justify-center font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-150 ease-in-out";

// Removed type annotation
const variantStyles = {
  primary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500",
  secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400",
  danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
};

// Removed type annotation
const sizeStyles = {
  sm: "px-2.5 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

// Removed : React.FC<ButtonProps>
const Button = ({ children, variant = 'primary', size = 'md', className, ...props }) => {
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;