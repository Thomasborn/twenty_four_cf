import React, { useState } from 'react';
import { Sticker } from '../components/ui/Sticker';
import { MenuItem } from '../types';

const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Es Kopi 24', description: 'Our signature blend. Keeps you up until tomorrow.', price: '28k', category: 'coffee', isFeatured: true, image: '/images/menu/black.png' },
  { id: '2', name: 'Black Mamba', description: 'Double espresso, water, ice. No sugar, no mercy.', price: '25k', category: 'coffee', image: '/images/menu/mamba.png' },
  { id: '3', name: 'Bakmi 24 Special', description: 'Chicken, mushroom, chili oil. The midnight savior.', price: '35k', category: 'bakmi', isSpicy: true, isFeatured: true, image: '/images/menu/bakmi.png' },
  { id: '4', name: 'Yamin Manis', description: 'Sweet soy sauce noodles. Comfort in a bowl.', price: '32k', category: 'bakmi', image: '/images/menu/yamin.jpg' },
  { id: '5', name: 'Nasi Gila', description: 'Crazy rice for crazy times. Sausages, meatballs, spice.', price: '30k', category: 'nasi', image: '/images/menu/nasi.png' },
  { id: '6', name: 'Matcha Latte', description: 'Green tea for peace of mind amidst the chaos.', price: '32k', category: 'non-coffee', image: '/images/menu/matcha.jpg' },
  { id: '7', name: 'Chili Oil Wonton', description: 'Spicy dumplings. Warning: Highly Addictive.', price: '28k', category: 'snacks', isSpicy: true, image: '/images/menu/bakmi.png' },
  { id: '8', name: 'Kaya Toast', description: 'Classic snack. Good at 7 AM or 7 PM.', price: '20k', category: 'snacks', image: '/images/menu/Kaya-Toast.jpeg' },
];

export const Menu: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === filter);

  const categories = ['all', 'coffee', 'bakmi', 'nasi', 'snacks', 'non-coffee'];

  return (
    <div className="min-h-screen bg-brand-light pt-28 pb-20">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1 className="font-display text-6xl md:text-8xl uppercase mb-4 relative inline-block">
          The Menu
          <Sticker text="Tasty!" color="gold" className="absolute -top-6 -right-8 md:-top-8 md:-right-12 w-16 h-16 md:w-20 md:h-20 text-xs rotate-12" animate />
        </h1>
        <p className="font-marker text-2xl md:text-3xl text-brand-dark rotate-1 mt-2">That never clocks out.</p>
      </div>

      {/* Menu Board Display */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="relative group">
          {/* Polaroid-style frame */}
          <div className="bg-white p-4 md:p-6 border-4 border-black shadow-hard-lg transform hover:-translate-y-2 transition-all duration-300 rotate-1 hover:rotate-0">
            <div className="border-2 border-gray-200 overflow-hidden">
              <img
                src="/images/menu-board.png"
                alt="Twenty Four Coffee Menu Board"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="font-marker text-xl md:text-2xl text-brand-dark">
                Our Complete Menu Board
              </p>
              <p className="font-sans text-sm text-gray-600 mt-1">
                Swipe or scroll to see all items below ↓
              </p>
            </div>
          </div>

          {/* Decorative stickers */}
          <Sticker
            text="Fresh!"
            color="red"
            className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-20 md:h-20 text-xs -rotate-12"
            animate
          />
          <Sticker
            text="Must Try!"
            color="gold"
            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 text-xs rotate-12"
            animate
          />
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-20 z-20 bg-brand-light/95 backdrop-blur-sm py-4 border-b-4 border-black mb-12">
        <div className="flex flex-nowrap overflow-x-auto md:flex-wrap justify-start md:justify-center gap-3 px-4 max-w-7xl mx-auto no-scrollbar pb-2 md:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                flex-none px-6 py-2 md:py-3 border-4 border-black font-display text-lg md:text-xl uppercase tracking-wider
                transition-all duration-200 shadow-hard
                ${filter === cat ? 'bg-brand-red text-white -translate-y-1' : 'bg-white text-black hover:bg-brand-gold hover:-translate-y-1'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className={`
              relative bg-white border-4 border-black p-5 flex flex-col justify-between h-full
              transition-transform duration-300 hover:-translate-y-2 hover:shadow-hard-lg
              ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
            `}
          >
            {item.isFeatured && (
              <div className="absolute -top-4 -left-4 bg-brand-gold text-black border-4 border-black px-3 py-1 font-display uppercase tracking-widest text-sm shadow-hard z-10 transform -rotate-3">
                Best Seller
              </div>
            )}

            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-3xl md:text-4xl leading-none uppercase">{item.name}</h3>
                {item.isSpicy && <span className="font-marker text-red-600 text-xl animate-pulse ml-2">Hot!</span>}
              </div>

              <div className="w-full aspect-video bg-gray-100 mb-4 overflow-hidden border-2 border-black relative grayscale hover:grayscale-0 transition-all duration-500 group">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 right-0 bg-black text-white font-mono px-2 py-1 text-xs uppercase border-t-2 border-l-2 border-white">
                  {item.category}
                </div>
              </div>

              <p className="font-sans font-bold text-lg leading-tight mb-6 text-gray-800 flex-grow">
                {item.description}
              </p>

              <div className="flex justify-between items-end mt-auto">
                <div className="font-marker text-gray-500 text-sm">#tfcbuddies</div>
                <div className="bg-brand-red text-white font-display text-2xl md:text-3xl px-4 py-1 rounded-full border-4 border-black transform -rotate-2 shadow-hard">
                  {item.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="font-display text-4xl text-gray-400 uppercase">Nothing here yet.</p>
        </div>
      )}
    </div>
  );
};