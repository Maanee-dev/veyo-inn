
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
    { name: 'Arrival', href: '#logistics' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 px-8 md:px-24 lg:px-32 py-10 md:py-14 ${
        scrolled ? 'bg-white/95 backdrop-blur-2xl border-b border-stone-50 py-8 md:py-10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <a href="/" className="group flex flex-col">
            <h1 className={`text-2xl md:text-4xl font-serif tracking-tighter transition-colors duration-1000 ${scrolled ? 'text-stone-900' : 'text-white'}`}>
              Veyo Inn
            </h1>
            <span className={`text-[9px] uppercase tracking-[0.8em] font-bold mt-2 transition-colors duration-1000 ${scrolled ? 'text-stone-300' : 'text-white/40'}`}>
              Maldives
            </span>
          </a>
          
          <div className="hidden lg:flex items-center gap-24">
             {navLinks.map((item) => (
               <a 
                key={item.name}
                href={item.href} 
                className={`text-[10px] font-bold tracking-[0.6em] uppercase hover:opacity-40 transition-all duration-700 ${
                  scrolled ? 'text-stone-500' : 'text-white'
                }`}
               >
                 {item.name}
               </a>
             ))}
          </div>

          <div className="flex items-center gap-16">
            <button 
              onClick={onBookNow}
              className={`hidden md:block text-[10px] font-bold uppercase tracking-[0.6em] px-12 py-4 transition-all duration-1000 border ${
                scrolled ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' : 'border-white/30 text-white hover:bg-white hover:text-stone-900'
              }`}
            >
              Reservations
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className={`p-2 transition-colors duration-1000 ${scrolled ? 'text-stone-900' : 'text-white'}`}
            >
              <Menu size={32} strokeWidth={1} />
            </button>
          </div>
        </div>
      </nav>

      {/* Luxury Fullscreen Overlay */}
      <div className={`fixed inset-0 z-[100] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 bg-[#1a2b2a] flex flex-col items-center justify-center text-white px-8">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-12 right-12 md:top-24 md:right-32 p-8 text-white/30 hover:text-white transition-colors"
          >
            <X size={56} strokeWidth={1} />
          </button>
          
          <div className="space-y-16 text-center max-w-5xl">
            <p className="text-[10px] uppercase tracking-[1.2em] text-white/10 font-bold mb-24">The Sanctuary Hub</p>
            {navLinks.map((item, i) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block text-6xl md:text-[10rem] font-serif hover:italic hover:opacity-40 transition-all duration-1000 leading-none"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="absolute bottom-24 w-full flex flex-col md:flex-row justify-between px-32 items-center gap-16 text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold">
             <div className="flex gap-16">
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
