import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Locations', path: '/locations' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-light border-b-4 border-black h-20 flex items-center justify-between px-4 md:px-8 transition-all duration-300">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 group z-50">
          <div className="w-12 h-12 bg-brand-red rounded-full border-4 border-black flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="font-display text-white text-xl leading-none pt-1">24</span>
          </div>
          <span className="font-display text-2xl tracking-tighter hidden md:block uppercase">Twenty Four Coffee</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.filter(l => l.name !== 'Locations').map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`font-bold uppercase tracking-wide border-b-2 hover:bg-black hover:text-white transition-colors px-1 ${location.pathname === link.path ? 'border-brand-red text-brand-red' : 'border-transparent text-black'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/locations" className="bg-black text-white px-6 py-2 font-display uppercase tracking-wider hover:bg-brand-red transition-colors border-2 border-transparent hover:border-black transform hover:-rotate-2 shadow-hard hover:shadow-none hover:translate-y-1">
            Visit Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden p-2 border-4 border-black bg-white hover:bg-brand-red hover:text-white transition-colors z-50 shadow-hard active:shadow-none active:translate-y-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-brand-light z-40 flex flex-col pt-24 px-6 pb-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
           <div className="flex flex-col gap-4 mt-4">
            {links.map((link, index) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`
                  text-5xl md:text-6xl font-display uppercase text-black 
                  hover:text-brand-red hover:translate-x-4 transition-all duration-200
                  ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
                `}
              >
                {link.name}
              </Link>
            ))}
           </div>
           
           <div className="mt-auto mb-8 pt-12">
              <Link 
                to="/locations" 
                className="block bg-brand-red text-white text-center py-6 text-3xl font-display uppercase border-4 border-black shadow-hard active:shadow-none active:translate-y-1 transform -rotate-1"
              >
                Get Directions
              </Link>
              <p className="font-marker text-2xl rotate-2 text-brand-dark mt-8 text-center">Never Skip For Caffeine</p>
           </div>
        </div>
      )}
    </>
  );
};