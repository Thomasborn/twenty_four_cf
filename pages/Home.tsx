import React from 'react';
import { BrutalistButton } from '../components/ui/BrutalistButton';
import { Sticker } from '../components/ui/Sticker';
import { Clock, MapPin, Coffee, Utensils, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { localImages, specificImages } from '../data/localImages';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden pt-20">
      {/* Sticky Badge */}
      <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-30 animate-bounce-slow hover:animate-none pointer-events-none">
        <Sticker text="Open 24/7" color="red" rotation="-rotate-6" className="w-24 h-24 md:w-32 md:h-32 text-xs md:text-base border-4 border-black shadow-hard pointer-events-auto" />
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row border-b-4 border-black">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-brand-light relative">
          <div className="hidden lg:block absolute top-12 left-12 w-24 h-24 bg-brand-gold rounded-full opacity-50 mix-blend-multiply blur-xl"></div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] leading-[0.9] uppercase mb-8 relative z-10 break-words">
            Never <br />
            <span className="text-brand-red inline-block transform -rotate-2">Skip</span> For <br />
            Caffeine
          </h1>

          <p className="font-sans text-lg md:text-xl lg:text-2xl font-bold mb-10 max-w-md border-l-4 border-black pl-6 py-2 bg-white transform -rotate-1 shadow-hard">
            The coffee shop that literally never sleeps. <br />
            <span className="font-marker text-brand-red mt-2 block text-xl">Blok M / Barito</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/locations" className="w-full sm:w-auto">
              <BrutalistButton className="w-full justify-center">Visit Us Now</BrutalistButton>
            </Link>
            <Link to="/menu" className="w-full sm:w-auto">
              <BrutalistButton variant="secondary" className="w-full justify-center">Check Menu</BrutalistButton>
            </Link>
          </div>
        </div>

        {/* Right: Collage */}
        <div className="w-full lg:w-1/2 bg-brand-dark relative min-h-[50vh] lg:min-h-auto overflow-hidden group border-t-4 lg:border-t-0 lg:border-l-4" style={{ borderColor: 'var(--cornflower-blue)', backgroundColor: 'var(--cornflower-blue)' }}>
          <img
            src={specificImages.coffeeTexture}
            alt="Coffee texture"
            className="absolute inset-0 w-full h-full object-cover opacity-0 mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            {/* Collage Elements */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 transform group-hover:scale-105 transition-transform duration-500">
              <img
                src={specificImages.interior}
                className="w-full h-full object-cover border-4 border-brand-light shadow-hard-white transform rotate-3"
                alt="Interior"
              />
              <img
                src={specificImages.coffeeCup}
                className="absolute -bottom-12 -left-8 sm:-left-12 w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-black rounded-full shadow-hard transform -rotate-12 hover:rotate-12 transition-transform duration-300"
                alt="Coffee Cup"
              />
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-brand-gold p-4 border-4 border-black transform rotate-6 shadow-hard z-10">
                <span className="font-display text-2xl uppercase leading-none block text-center">Bakmi<br />24</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Why Open? */}
      <section className="py-16 md:py-24 px-4 bg-brand-red text-brand-light border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-center mb-16 leading-none">
            IT'S 3 AM. <br />
            YOU'RE HUNGRY. <br />
            <span className="text-black bg-brand-gold px-2 md:px-4 transform -skew-x-12 inline-block mt-2">WE'RE AWAKE.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 px-4 md:px-0">
            {/* Card 1 */}
            <div className="bg-brand-light text-black p-6 md:p-8 border-4 border-black shadow-hard transform rotate-1 md:rotate-2 hover:-rotate-1 transition-transform">
              <Coffee className="w-12 h-12 mb-4" />
              <h3 className="font-display text-3xl md:text-4xl mb-2">Caffeine</h3>
              <p className="font-bold text-lg leading-relaxed">Espresso machine stays hot 24/7. No "last order" nonsense here. Just pure energy.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white text-black p-6 md:p-8 border-4 border-black shadow-hard transform -rotate-1 md:-rotate-1 hover:rotate-1 transition-transform z-10 relative">
              <Utensils className="w-12 h-12 mb-4 text-brand-red" />
              <h3 className="font-display text-3xl md:text-4xl mb-2">Noodles</h3>
              <p className="font-bold text-lg leading-relaxed">Our Bakmi 24 is scientifically proven to taste 200% better after midnight.</p>
              <div className="absolute -top-4 -right-4 bg-black text-white px-2 py-1 font-marker text-sm rotate-6">Hot!</div>
            </div>
            {/* Card 3 */}
            <div className="bg-brand-tan text-black p-6 md:p-8 border-4 border-black shadow-hard transform rotate-1 md:rotate-3 hover:rotate-0 transition-transform">
              <Clock className="w-12 h-12 mb-4" />
              <h3 className="font-display text-3xl md:text-4xl mb-2">Community</h3>
              <p className="font-bold text-lg leading-relaxed">Work, study, or just stare at the wall. We are your chaotic third place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Timeline */}
      <section className="py-16 md:py-24 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center md:text-left mb-12">
            <h2 className="font-display text-4xl md:text-6xl border-b-4 border-black inline-block pb-2 transform -rotate-1">24 Hours in South Jakarta</h2>
          </div>

          {/* Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-4 gap-6 no-scrollbar snap-x snap-mandatory">
            {[
              { time: "07:00", label: "Morning Rush", desc: "Espresso & Croissant", rotate: "rotate-1", color: "bg-white" },
              { time: "13:00", label: "Lunch Break", desc: "Rice Bowls & Iced Latte", rotate: "-rotate-2", color: "bg-brand-tan" },
              { time: "20:00", label: "Hangout", desc: "Community & Vibes", rotate: "rotate-2", color: "bg-brand-gold" },
              { time: "02:00", label: "Late Night", desc: "Bakmi & Deep Talks", rotate: "-rotate-1", color: "bg-white" },
            ].map((item, i) => (
              <div key={i} className={`flex-none w-64 md:w-auto snap-center flex flex-col items-center text-center p-6 border-4 border-black shadow-hard ${item.rotate} ${item.color} transition-transform hover:scale-105`}>
                <span className="font-display text-3xl md:text-4xl bg-black text-white px-3 py-1 mb-4 transform -rotate-2">{item.time}</span>
                <h4 className="font-bold text-xl md:text-2xl uppercase mb-2">{item.label}</h4>
                <p className="font-marker text-lg text-brand-red">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Community Grid (Instagram style) */}
      <section className="bg-black py-20 px-4 border-t-4 border-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
            THE <span className="text-brand-gold underline decoration-wavy">#TFCBUDDIES</span> FEED
          </h2>
          <p className="text-white font-mono mb-12 uppercase tracking-widest text-sm md:text-base">Tag us to get featured (or roasted)</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-12">
            {localImages.slice(0, 6).map((src, i) => (
              <div key={i} className="relative group aspect-square overflow-hidden border-2 border-white cursor-pointer">
                <img
                  src={src}
                  alt="Community"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-red/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex flex-col items-center text-white">
                    <Instagram size={32} />
                    <span className="font-display text-xl mt-2">View Post</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <BrutalistButton variant="outline" className="text-white border-white hover:bg-white hover:text-black hover:border-white w-full sm:w-auto">
              Follow @twntyfour.kyaimaja
            </BrutalistButton>
          </a>
        </div>
      </section>

      {/* Location Banner */}
      <section className="relative h-[60vh] flex items-center justify-center bg-brand-tan border-t-4 border-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent"></div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-black rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 border-8 border-white opacity-20 rotate-12"></div>

        <div className="relative z-10 text-center p-8 bg-white border-4 border-black shadow-hard-lg max-w-2xl transform rotate-1 mx-4">
          <MapPin className="w-16 h-16 mx-auto mb-4 text-brand-red animate-bounce" />
          <h2 className="font-display text-4xl md:text-7xl uppercase mb-4">Find Us Before You Sleep</h2>
          <p className="font-bold text-lg md:text-xl mb-8">Blok M / Barito • South Jakarta</p>
          <div className="flex flex-col gap-3">
            <Link to="/locations" className="bg-black text-white font-display text-xl md:text-2xl py-3 px-6 uppercase hover:bg-brand-red transition-colors border-2 border-transparent">
              Get Directions
            </Link>
            <a href="#" className="font-marker text-lg md:text-xl underline hover:text-brand-red">WhatsApp Us for a table</a>
          </div>
        </div>
      </section>
    </div>
  );
};