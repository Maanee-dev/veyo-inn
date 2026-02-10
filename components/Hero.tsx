import React, { useEffect, useState } from 'react';

interface HeroProps {
  onDiscover?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscover }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset * 0.4);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-[#0c1414]">
      <div 
        className="absolute inset-0 z-0 origin-center overflow-hidden"
        style={{ transform: `scale(1.1) translateY(${offset}px)` }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 brightness-[0.6]"
        >
          <source src="https://Kurevi.com/IMG_0449.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1414]/90 via-[#0c1414]/10 to-[#0c1414]" />
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto pt-10">
        <div className="reveal-up overflow-hidden mb-6">
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[1em] font-bold block leading-none">
              A Modern Retreat
            </span>
            <div className="h-[1px] grow max-w-[80px] bg-white/10" />
          </div>
        </div>
        
        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-serif text-white leading-[0.9] tracking-tighter mb-12 reveal-up" style={{ transitionDelay: '0.2s' }}>
          Veyo <br />
          <span className="serif-italic opacity-80 block translate-x-4 text-stone-400">Inn</span>
        </h1>
        
        <div className="reveal-up flex flex-col md:flex-row items-start md:items-end justify-between gap-10" style={{ transitionDelay: '0.4s' }}>
          <div className="max-w-md">
            <p className="text-white/40 text-sm md:text-lg font-light leading-relaxed mb-10 tracking-tight text-balance">
              Discover a new standard of loft living on Fulhadhoo Island. Simple, quiet, and contemporary residencies designed for the modern islander.
            </p>
            <button 
              onClick={onDiscover}
              className="group flex items-center gap-8 text-white text-[10px] md:text-[11px] uppercase tracking-[0.6em] font-bold"
            >
              <span className="relative py-2">
                Discover The Lofts
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-1000" />
              </span>
              <div className="w-12 md:w-32 h-[1px] bg-white/20 group-hover:w-48 group-hover:bg-white transition-all duration-1000" />
            </button>
          </div>
          
          <div className="hidden lg:flex flex-col items-end gap-3 text-white/20 text-[9px] uppercase tracking-[1em] font-bold">
            <p>Baa Atoll</p>
            <p>Fulhadhoo Island</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 reveal-up" style={{ transitionDelay: '0.8s' }}>
        <div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent" />
        <span className="text-white text-[8px] uppercase tracking-[0.4em] font-bold">Scroll</span>
      </div>
    </div>
  );
};