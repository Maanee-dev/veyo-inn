import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  onBookNow?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onBookNow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'The Lofts', href: '#rooms' },
    { name: 'Modern Pantry', href: '#dining' },
    { name: 'Island Life', href: '#experiences' },
    { name: 'Arrival', href: '#logistics' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 px-6 md:px-12 lg:px-24 ${
        scrolled ? 'bg-white/95 backdrop-blur-2xl border-b border-stone-100 py-6 md:py-8' : 'bg-transparent py-10 md:py-16'
      }`}>
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <a href="/" className="flex flex-col group">
            <h1 className={`text-3xl md:text-5xl font-serif tracking-tighter transition-all duration-700 ${scrolled ? 'text-stone-900' : 'text-white'}`}>
              Veyo Inn
            </h1>
            <span className={`text-[9px] md:text-[11px] uppercase tracking-[1.5em] font-bold mt-2 transition-all duration-700 ${scrolled ? 'text-stone-300' : 'text-white/40'}`}>
              Fulhadhoo Island
            </span>
          </a>
          
          <div className="flex items-center gap-8 md:gap-16">
            <button 
              onClick={onBookNow}
              className={`hidden md:block text-[11px] font-bold uppercase tracking-[1em] px-12 py-5 border transition-all duration-1000 rounded-none ${
                scrolled ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-[#0c1414]'
              }`}
            >
              Reserve
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-4 focus:outline-none"
            >
              <span className={`text-[11px] font-bold uppercase tracking-[1em] hidden lg:block transition-colors duration-700 ${scrolled ? 'text-stone-400' : 'text-white/40'}`}>Menu</span>
              <div className={`p-4 transition-all duration-700 rounded-full ${scrolled ? 'text-stone-900 bg-stone-50' : 'text-white bg-white/5 backdrop-blur-3xl border border-white/10 group-hover:bg-white/10'}`}>
                <Menu size={24} strokeWidth={1} className="md:w-8 md:h-8" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay */}
      <div className={`fixed inset-0 z-[100] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 bg-[#0c1414] flex flex-col items-center justify-center text-white px-6">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 p-4 text-white/20 hover:text-white transition-colors group">
            <X size={56} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-700" />
          </button>
          
          <div className="space-y-12 md:space-y-20 text-center max-w-5xl">
            <p className="text-[10px] uppercase tracking-[2em] text-white/5 font-bold mb-20">Navigation</p>
            {navLinks.map((item, i) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block text-5xl md:text-[8vw] font-serif hover:italic hover:text-stone-400 transition-all duration-1000 leading-none tracking-tighter"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="absolute bottom-16 w-full flex flex-col md:flex-row justify-between px-10 md:px-32 items-center gap-12 text-[10px] uppercase tracking-[1em] text-white/10 font-bold">
            <div className="flex gap-16">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://wa.me/9607778888" className="hover:text-white transition-colors">WhatsApp</a>
            </div>
            <p className="hidden md:block">MALDIVES • BAA ATOLL • FULHADHOO</p>
          </div>
        </div>
      </div>
    </>
  );
};