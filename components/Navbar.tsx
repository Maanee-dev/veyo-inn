
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
    { name: 'Experiences', href: '#experiences' },
    { name: 'Heritage', href: '#about' },
    { name: 'The Journey', href: '#logistics' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 px-8 md:px-24 lg:px-32 py-8 md:py-12 ${
        scrolled ? 'bg-white/95 backdrop-blur-2xl border-b border-stone-100 py-6 md:py-8' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <a href="/" className="group flex flex-col">
            <h1 className={`text-2xl md:text-3xl font-serif tracking-tighter transition-colors duration-700 ${scrolled ? 'text-stone-900' : 'text-white'}`}>
              Veyo Inn
            </h1>
            <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.7em] font-bold mt-1.5 transition-colors duration-700 ${scrolled ? 'text-stone-400' : 'text-white/40'}`}>
              Maldives
            </span>
          </a>
          
          <div className="hidden lg:flex items-center gap-20">
             {navLinks.map((item) => (
               <a 
                key={item.name}
                href={item.href} 
                className={`text-[10px] font-bold tracking-[0.5em] uppercase hover:opacity-40 transition-all duration-500 ${
                  scrolled ? 'text-stone-600' : 'text-white'
                }`}
               >
                 {item.name}
               </a>
             ))}
          </div>

          <div className="flex items-center gap-12">
            <button 
              onClick={onBookNow}
              className={`hidden md:block text-[9px] font-bold uppercase tracking-[0.5em] px-10 py-3.5 transition-all duration-700 border ${
                scrolled ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' : 'border-white/30 text-white hover:bg-white hover:text-stone-900'
              }`}
            >
              Reservations
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className={`p-2 transition-colors duration-700 ${scrolled ? 'text-stone-900' : 'text-white'}`}
            >
              <Menu size={28} strokeWidth={1} />
            </button>
          </div>
        </div>
      </nav>

      {/* Luxury Fullscreen Overlay */}
      <div className={`fixed inset-0 z-[100] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 bg-[#1a2b2a] flex flex-col items-center justify-center text-white px-8">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-12 right-12 md:top-20 md:right-24 p-6 text-white/30 hover:text-white transition-colors"
          >
            <X size={48} strokeWidth={1} />
          </button>
          
          <div className="space-y-12 text-center max-w-4xl">
            <p className="text-[10px] uppercase tracking-[1em] text-white/20 font-bold mb-16">The Sanctuary Navigation</p>
            {navLinks.map((item, i) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block text-5xl md:text-8xl font-serif hover:italic hover:opacity-40 transition-all duration-700 leading-none"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="absolute bottom-24 w-full flex flex-col md:flex-row justify-between px-24 items-center gap-12 text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">
             <div className="flex gap-12">
               <a href="#" className="hover:text-white transition-colors">Instagram</a>
               <a href="#" className="hover:text-white transition-colors">Concierge</a>
             </div>
             <p>FULHADHOO • BAA ATOLL • MALDIVES</p>
          </div>
        </div>
      </div>
    </>
  );
};
