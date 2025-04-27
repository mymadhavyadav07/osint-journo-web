import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  href,
}) => {
  const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50';
  
  const variantClasses = {
    primary: 'bg-lime-500 hover:bg-lime-600 text-gray-900 border border-transparent',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-lime-500 border border-lime-500/30',
    outline: 'bg-transparent hover:bg-lime-500/10 text-lime-500 border border-lime-500',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;