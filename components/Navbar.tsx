
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  onBookNow?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onBookNow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Sanctuaries', href: '#rooms' },
    { name: 'Essence', href: '#about' },
    { name: 'Rituals', href: '#experiences' },
    { name: 'Arrival', href: '#logistics' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-12 lg:px-24 py-6 md:py-10 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-stone-100 py-4 md:py-6' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex flex-col">
            <h1 className={`text-xl md:text-3xl font-serif tracking-tighter transition-colors duration-700 ${scrolled ? 'text-stone-900' : 'text-white'}`}>
              Veyo Inn
            </h1>
            <span className={`text-[7px] md:text-[9px] uppercase tracking-[0.8em] font-bold mt-1 transition-colors duration-700 ${scrolled ? 'text-stone-300' : 'text-white/40'}`}>
              Sanctuary
            </span>
          </a>
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className={`p-2 rounded-full transition-all duration-700 ${scrolled ? 'text-stone-900 bg-stone-50' : 'text-white bg-white/10 backdrop-blur-md'}`}
          >
            <Menu size={24} className="md:w-8 md:h-8" strokeWidth={1} />
          </button>
        </div>
      </nav>

      {/* Fullscreen Overlay */}
      <div className={`fixed inset-0 z-[100] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 bg-[#0c1414] flex flex-col items-center justify-center text-white px-6">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 p-4 text-white/30 hover:text-white transition-colors">
            <X size={40} strokeWidth={1} />
          </button>
          
          <div className="space-y-8 md:space-y-12 text-center">
            <p className="text-[10px] uppercase tracking-[1em] text-white/10 font-bold mb-12">Navigate</p>
            {navLinks.map((item, i) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block text-4xl md:text-8xl font-serif hover:italic hover:opacity-40 transition-all duration-700 leading-none tracking-tighter"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
