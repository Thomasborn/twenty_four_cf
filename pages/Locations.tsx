import React from 'react';
import { BrutalistButton } from '../components/ui/BrutalistButton';
import { MapPin, Phone, Clock } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-brand-tan">
      <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        {/* Left Info Panel */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center overflow-y-auto">
          <h1 className="font-display text-7xl md:text-9xl uppercase leading-[0.8] mb-12 text-brand-dark">
            Find<br/>Us<br/><span className="text-white text-stroke-black">Here</span>
          </h1>

          <div className="space-y-8 bg-white border-4 border-black p-8 shadow-hard transform rotate-1">
             <div className="flex items-start gap-4">
               <MapPin className="w-8 h-8 mt-1 text-brand-red flex-shrink-0" />
               <div>
                 <h3 className="font-display text-3xl uppercase mb-1">Blok M / Barito</h3>
                 <p className="font-sans text-xl font-bold">Jl. Kyai Maja No. 24</p>
                 <p className="font-sans text-lg">South Jakarta, Indonesia</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <Clock className="w-8 h-8 mt-1 text-brand-gold flex-shrink-0" />
               <div>
                 <h3 className="font-display text-3xl uppercase mb-1">Operating Hours</h3>
                 <p className="font-sans text-xl font-bold">Monday - Sunday</p>
                 <p className="font-sans text-lg">00:00 - 23:59 (Literally 24/7)</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <Phone className="w-8 h-8 mt-1 flex-shrink-0" />
               <div>
                 <h3 className="font-display text-3xl uppercase mb-1">Contact</h3>
                 <p className="font-sans text-lg underline decoration-wavy cursor-pointer">
                   +62 812 3456 7890
                 </p>
                 <p className="font-sans text-sm mt-1 text-gray-500">WhatsApp Available</p>
               </div>
             </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <BrutalistButton>Open in Maps</BrutalistButton>
            <BrutalistButton variant="outline" className="bg-white">WhatsApp Us</BrutalistButton>
          </div>
        </div>

        {/* Right Map Mock */}
        <div className="w-full lg:w-1/2 bg-gray-300 border-t-4 lg:border-t-0 lg:border-l-4 border-black relative">
          <div className="absolute inset-0 bg-cover bg-center grayscale opacity-80 hover:grayscale-0 transition-all duration-500" style={{backgroundImage: 'url(https://picsum.photos/1200/1200?random=map)'}}></div>
          
          {/* Fake Map UI Elements */}
          <div className="absolute top-8 right-8 bg-white border-4 border-black p-4 shadow-hard">
            <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center animate-bounce">
              <MapPin className="text-white w-8 h-8" />
            </div>
          </div>
          
          <div className="absolute bottom-8 left-8 bg-brand-gold border-4 border-black p-4 max-w-xs shadow-hard -rotate-2">
            <p className="font-marker text-lg text-center">Parking is available. <br/> Don't worry.</p>
          </div>
        </div>
      </div>
    </div>
  );
};