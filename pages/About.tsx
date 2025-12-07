import React from 'react';
import { Sticker } from '../components/ui/Sticker';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-brand-light overflow-hidden">
      {/* Header */}
      <section className="py-20 px-4 text-center border-b-4 border-black relative">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-gold rounded-full opacity-50 blur-2xl animate-pulse"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-8">
            We Opened A Coffee Shop <br/> And <span className="text-brand-red text-stroke-black">Forgot</span> To Close.
          </h1>
          <p className="font-sans text-xl md:text-2xl font-bold max-w-2xl mx-auto transform -rotate-1 bg-white p-4 border-4 border-black shadow-hard">
            It started with a caffeine addiction and ended up as a 24-hour community hub in South Jakarta.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-brand-dark text-white p-12 md:p-20 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-black relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
           <h2 className="font-display text-5xl mb-6 text-brand-gold">The Origin Story</h2>
           <p className="font-sans text-lg mb-6 leading-relaxed">
             Back in 2023, we realized something. Jakarta sleeps, but the hustle doesn't. And neither does the hunger for good Bakmi at 3 AM.
           </p>
           <p className="font-sans text-lg mb-6 leading-relaxed">
             So we took a small corner in Blok M, painted it with loud colors, bought a serious espresso machine, and decided to throw away the "Closed" sign.
           </p>
           <p className="font-marker text-2xl text-brand-red transform rotate-1 mt-4">
             Literally. We lost the key to the front door.
           </p>
        </div>
        <div className="bg-brand-red p-12 md:p-20 flex items-center justify-center border-b-4 border-black md:border-b-0">
           <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop" 
                alt="Coffee Shop Vibe" 
                className="relative w-full h-full object-cover border-4 border-white grayscale hover:grayscale-0 transition-all duration-500"
              />
              <Sticker text="Since 2023" color="gold" className="absolute -top-6 -left-6 rotate-12" />
           </div>
        </div>
      </section>

      {/* Team / Vibe */}
      <section className="py-20 px-4 bg-brand-tan">
         <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-6xl text-center mb-16">The Night Shift Crew</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { name: "Barista Budi", role: "Head of Caffeine", quote: "Sleep is for the weak.", img: "https://images.unsplash.com/photo-1583336137694-2453e925b682?q=80&w=400&auto=format&fit=crop" },
                 { name: "Chef Sari", role: "Noodle Master", quote: "Spicy level 5 is weak.", img: "https://images.unsplash.com/photo-1589571894960-20bbe2815d09?q=80&w=400&auto=format&fit=crop" },
                 { name: "Bang Edu", role: "Social Manager", quote: "Tag us or else.", img: "" },
               ].map((member, i) => (
                 <div key={i} className="bg-white border-4 border-black p-4 pb-8 transform hover:-translate-y-2 transition-transform shadow-hard">
                    <div className="aspect-square bg-gray-200 mb-4 border-2 border-black overflow-hidden">
                       <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                    </div>
                    <h3 className="font-display text-3xl uppercase mb-1">{member.name}</h3>
                    <p className="font-sans font-bold text-brand-red mb-4 uppercase text-sm tracking-wider">{member.role}</p>
                    <p className="font-marker text-xl text-center">"{member.quote}"</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};