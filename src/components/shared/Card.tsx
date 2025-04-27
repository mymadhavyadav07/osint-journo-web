import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padded?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  padded = true,
}) => {
  const baseClasses = 'rounded-lg bg-gray-800 border border-gray-700';
  const hoverClasses = hoverable ? 'hover:border-lime-500/50 hover:shadow-lg hover:shadow-lime-500/10 transition-all duration-300' : '';
  const paddingClasses = padded ? 'p-6' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;