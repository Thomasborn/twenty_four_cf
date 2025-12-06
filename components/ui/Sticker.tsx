import React from 'react';

interface StickerProps {
  text: string;
  color?: 'red' | 'gold' | 'dark' | 'white';
  rotation?: string;
  className?: string;
  animate?: boolean;
}

export const Sticker: React.FC<StickerProps> = ({ 
  text, 
  color = 'red', 
  rotation = 'rotate-12',
  className = '',
  animate = false
}) => {
  const colors = {
    red: 'bg-brand-red text-white',
    gold: 'bg-brand-gold text-black',
    dark: 'bg-brand-dark text-white',
    white: 'bg-white text-black border-2 border-black'
  };

  return (
    <div className={`
      inline-flex items-center justify-center 
      rounded-full p-4 md:p-6 
      font-marker text-center leading-none
      shadow-hard
      ${colors[color]} 
      ${rotation}
      ${animate ? 'animate-pulse' : ''}
      ${className}
    `}>
      <span className="text-sm md:text-lg lg:text-xl font-bold uppercase tracking-widest block transform">
        {text}
      </span>
    </div>
  );
};