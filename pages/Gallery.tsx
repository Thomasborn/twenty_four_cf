import React from 'react';
import { localImages } from '../data/localImages';

export const Gallery: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-6xl md:text-8xl text-white text-center mb-4">
          Photo Dump
        </h1>
        <p className="font-marker text-2xl text-brand-gold text-center mb-16 transform -rotate-1">
          POV: You are caffeinated.
        </p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {localImages.map((src, i) => (
            <div key={i} className={`relative break-inside-avoid group ${i % 3 === 0 ? 'mt-12' : ''}`}>
              <div className={`
                 bg-white p-2 border-4 border-white 
                 transition-transform duration-300 group-hover:scale-105 group-hover:z-10 relative
                 ${i % 2 === 0 ? 'rotate-1' : '-rotate-2'}
               `}>
                <img
                  src={src}
                  alt="Gallery Item"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-brand-red text-white font-display uppercase px-2 py-1 text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  {['Vibe', 'Coffee', 'Late Night', 'Friends', 'Bakmi', 'Interior', 'Pour over', 'Espresso', 'Chills'][i]}
                </div>
              </div>
              {/* Decorative tape effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/20 backdrop-blur-sm transform -rotate-2 z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};