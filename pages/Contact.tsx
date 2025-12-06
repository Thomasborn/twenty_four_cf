import React from 'react';
import { BrutalistButton } from '../components/ui/BrutalistButton';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-brand-light">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
        {/* Left: Form */}
        <div className="w-full lg:w-3/5 p-8 md:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black">
          <h1 className="font-display text-6xl md:text-7xl uppercase mb-8 leading-none">
            Talk to us <br/> about <span className="text-brand-red underline decoration-wavy">Coffee</span>.
          </h1>
          
          <form className="space-y-6 max-w-xl">
            <div className="space-y-2">
              <label className="font-display text-2xl uppercase block">Who are you?</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white border-4 border-black p-4 font-sans text-xl focus:outline-none focus:ring-4 focus:ring-brand-gold shadow-hard transition-all placeholder:text-gray-400"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-display text-2xl uppercase block">How to reply?</label>
              <input 
                type="email" 
                placeholder="email@address.com" 
                className="w-full bg-white border-4 border-black p-4 font-sans text-xl focus:outline-none focus:ring-4 focus:ring-brand-gold shadow-hard transition-all placeholder:text-gray-400"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-display text-2xl uppercase block">What's up?</label>
              <textarea 
                rows={5}
                placeholder="Tell us a joke or ask about beans." 
                className="w-full bg-white border-4 border-black p-4 font-sans text-xl focus:outline-none focus:ring-4 focus:ring-brand-gold shadow-hard transition-all placeholder:text-gray-400"
              ></textarea>
            </div>
            
            <BrutalistButton className="w-full" type="submit">Send It</BrutalistButton>
          </form>
        </div>

        {/* Right: Info & FAQ */}
        <div className="w-full lg:w-2/5 bg-brand-tan p-8 md:p-12 flex flex-col gap-12">
          
          {/* Quick Contact */}
          <div className="bg-white border-4 border-black p-8 shadow-hard transform rotate-1">
             <h3 className="font-display text-3xl mb-6 uppercase">Fast Track</h3>
             <ul className="space-y-4 font-bold text-lg">
               <li className="flex items-center gap-3">
                 <Mail className="w-6 h-6" /> hello@twentyfour.coffee
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="w-6 h-6" /> +62 812 3456 7890
               </li>
               <li className="flex items-center gap-3">
                 <MapPin className="w-6 h-6" /> Blok M, South Jakarta
               </li>
             </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-display text-4xl mb-6 uppercase">F.A.Q.</h3>
            <div className="space-y-4">
               {[
                 { q: "Are you really open 24/7?", a: "Yes. Even on holidays. Even when you are sleeping." },
                 { q: "Is there Wifi?", a: "Fast enough for Zoom, slow enough to make you talk to friends." },
                 { q: "Can I book for events?", a: "Sure. We love chaos. Email us." }
               ].map((item, i) => (
                 <div key={i} className="bg-brand-light border-4 border-black p-4 hover:bg-white transition-colors cursor-help">
                   <p className="font-display text-xl uppercase mb-2 text-brand-red">{item.q}</p>
                   <p className="font-sans font-bold">{item.a}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};