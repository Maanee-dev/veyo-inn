
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  onBookNow?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onBookNow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Rooms', href: '#rooms' },
    { name: 'Our Story', href: '#about' },
    { name: 'Activities', href: '#experiences' },
    { name: 'Getting Here', href: '#logistics' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 px-6 md:px-12 lg:px-24 py-8 md:py-12 ${
        scrolled ? 'bg-white/90 backdrop-blur-2xl border-b border-stone-100 py-6 md:py-8 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <a href="/" className="flex flex-col group">
            <h1 className={`text-2xl md:text-4xl font-serif tracking-tighter transition-colors duration-700 ${scrolled ? 'text-stone-900' : 'text-white'}`}>
              Veyo Inn
            </h1>
            <span className={`text-[8px] md:text-[10px] uppercase tracking-[1.2em] font-bold mt-2 transition-colors duration-700 ${scrolled ? 'text-stone-300' : 'text-white/40'}`}>
              Fulhadhoo Island
            </span>
          </a>
          
          <div className="flex items-center gap-6 md:gap-10">
            <button 
              onClick={onBookNow}
              className={`hidden sm:block text-[10px] font-bold uppercase tracking-[0.8em] px-10 py-4 border transition-all duration-1000 rounded-full ${
                scrolled ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-[#0c1414]'
              }`}
            >
              Book Now
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className={`p-3 rounded-full transition-all duration-700 ${scrolled ? 'text-stone-900 bg-stone-100' : 'text-white bg-white/10 backdrop-blur-xl border border-white/10'}`}
            >
              <Menu size={24} className="md:w-8 md:h-8" strokeWidth={1} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay */}
      <div className={`fixed inset-0 z-[100] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 bg-[#0c1414] flex flex-col items-center justify-center text-white px-6">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 p-4 text-white/20 hover:text-white transition-colors">
            <X size={48} strokeWidth={1} />
          </button>
          
          <div className="space-y-12 md:space-y-16 text-center max-w-5xl">
            <p className="text-[10px] uppercase tracking-[1.5em] text-white/5 font-bold mb-20">Navigation</p>
            {navLinks.map((item, i) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block text-4xl md:text-[7vw] font-serif hover:italic hover:text-stone-400 transition-all duration-1000 leading-none tracking-tighter"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="absolute bottom-16 w-full flex flex-col md:flex-row justify-between px-10 md:px-32 items-center gap-12 text-[9px] uppercase tracking-[0.8em] text-white/20 font-bold">
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://wa.me/9607778888" className="hover:text-white transition-colors">WhatsApp</a>
            </div>
            <p>MALDIVES • BAA ATOLL • FULHADHOO</p>
          </div>
        </div>
      </div>
    </>
  );
};
