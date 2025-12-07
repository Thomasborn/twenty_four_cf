import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light border-t-4 border-black">
      {/* Running Text Pattern */}
      <div className="overflow-hidden bg-brand-red py-3 border-b-4 border-black whitespace-nowrap">
        <div className="inline-block animate-[scroll_20s_linear_infinite]">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-display text-2xl md:text-4xl text-white mx-4 uppercase">
              Never Skip For Caffeine • Open 24 Hours •
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Block 1: Contact */}
        <div className="p-8 border-b-4 lg:border-b-0 md:border-r-4 border-brand-light/20 border-white/20">
          <h3 className="font-display text-4xl mb-6 text-brand-gold">Contact</h3>
          <p className="font-sans text-lg mb-2">Blok M / Barito</p>
          <p className="font-sans text-lg mb-4">South Jakarta</p>
          <a href="#" className="inline-block border-2 border-brand-light px-4 py-2 hover:bg-brand-light hover:text-brand-dark transition-colors uppercase font-bold">
            WhatsApp Us
          </a>
        </div>

        {/* Block 2: Hours */}
        <div className="p-8 border-b-4 lg:border-b-0 lg:border-r-4 border-brand-light/20 border-white/20">
          <h3 className="font-display text-4xl mb-6 text-brand-red">Hours</h3>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border-4 border-brand-light flex items-center justify-center animate-spin-slow">
              <span className="font-bold text-xl">24</span>
            </div>
            <div>
              <p className="font-display text-2xl">Always Open.</p>
              <p className="font-marker text-brand-tan">Yes, even at 4 AM.</p>
            </div>
          </div>
        </div>

        {/* Block 3: Social */}
        <div className="p-8 border-b-4 lg:border-b-0 md:border-r-4 border-brand-light/20 border-white/20">
          <h3 className="font-display text-4xl mb-6">Stalk Us</h3>
          <ul className="space-y-3 font-bold text-xl">
            <li><a href="#" className="hover:text-brand-gold hover:underline decoration-wavy">Instagram</a></li>
            <li><a href="#" className="hover:text-brand-gold hover:underline decoration-wavy">TikTok</a></li>
            <li><a href="#" className="hover:text-brand-gold hover:underline decoration-wavy">Spotify Playlist</a></li>
          </ul>
        </div>

        {/* Block 4: Logo */}
        <div className="p-8 flex flex-col justify-between bg-white text-black">
          <h2 className="font-display text-5xl leading-none uppercase">Twenty<br />Four<br />Coffee</h2>
          <p className="font-marker text-xl mt-4 text-right transform -rotate-6">#tfcbuddies</p>
        </div>
      </div>

      <div className="bg-black text-white text-center py-4 font-mono text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} Twenty Four Coffee. Design Concept inspired by Oatly. <br className="md:hidden" />
        <span className="hidden md:inline"> | </span>
        <a href="https://github.com/Thomasborn/Thomasborn" target="_blank" rel="noreferrer" className="hover:text-brand-gold hover:underline">Dev by Thomasborn</a>
      </div>
    </footer>
  );
};