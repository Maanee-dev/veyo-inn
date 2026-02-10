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
      {/* Cinematic Video Background */}
      <div 
        className="absolute inset-0 z-0 origin-center overflow-hidden"
        style={{ transform: `scale(1.1) translateY(${offset}px)` }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 brightness-[0.6] saturate-[0.7]"
        >
          <source src="https://Kurevi.com/IMG_0449.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1414]/90 via-[#0c1414]/10 to-[#0c1414]" />
      </div>
      
      <div className="relative z-10 w-full max-w-[1600px] mx-auto pt-20">
        <div className="reveal-up overflow-hidden mb-8 md:mb-16">
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-[10px] md:text-[12px] uppercase tracking-[1.5em] font-bold block leading-none">
              The Architecture Issue
            </span>
            <div className="h-[1px] grow max-w-[100px] bg-white/10" />
          </div>
        </div>
        
        <h1 className="text-[18vw] md:text-[14rem] lg:text-[18rem] font-serif text-white leading-[0.8] tracking-tighter mb-16 md:mb-32 reveal-up" style={{ transitionDelay: '0.2s' }}>
          Quiet <br />
          <span className="serif-italic opacity-80 block translate-x-[4vw] md:translate-x-40 text-stone-400">Luxury</span>
        </h1>
        
        <div className="reveal-up flex flex-col md:flex-row items-start md:items-end justify-between gap-12" style={{ transitionDelay: '0.4s' }}>
          <div className="max-w-md">
            <p className="text-white/40 text-base md:text-xl font-light leading-relaxed mb-12 tracking-tight text-balance">
              Experience modern loft living in the heart of Fulhadhoo. Architectural sanctuaries designed for those who seek beauty in simplicity.
            </p>
            <button 
              onClick={onDiscover}
              className="group flex items-center gap-10 text-white text-[11px] md:text-[13px] uppercase tracking-[1em] font-bold"
            >
              <span className="relative py-2">
                Explore The Lofts
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-1000" />
              </span>
              <div className="w-12 md:w-40 h-[1px] bg-white/20 group-hover:w-64 group-hover:bg-white transition-all duration-1000" />
            </button>
          </div>
          
          <div className="hidden lg:flex flex-col items-end gap-4 text-white/20 text-[10px] uppercase tracking-[1em] font-bold">
            <p>Baa Atoll</p>
            <p>UNESCO Biosphere</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-40 reveal-up" style={{ transitionDelay: '0.8s' }}>
        <div className="h-16 w-[1px] bg-gradient-to-b from-white to-transparent" />
        <span className="text-white text-[9px] uppercase tracking-[0.8em] font-bold">Scroll</span>
      </div>
    </div>
  );
};