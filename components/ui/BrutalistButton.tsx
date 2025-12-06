import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  className?: string;
}

export const BrutalistButton: React.FC<BrutalistButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-display uppercase tracking-wider transition-all duration-200 transform border-4 border-black hover:-translate-y-1 active:translate-y-0 active:shadow-none";
  
  const variants = {
    primary: "bg-brand-red text-white hover:rotate-1 shadow-hard",
    secondary: "bg-brand-gold text-black hover:-rotate-1 shadow-hard",
    outline: "bg-transparent text-black hover:bg-black hover:text-white shadow-hard"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} px-8 py-4 text-xl md:text-2xl ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-6 h-6 stroke-[3]" />}
      </span>
    </button>
  );
};