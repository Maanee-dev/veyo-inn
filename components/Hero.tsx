
import React, { useEffect, useState } from 'react';

interface HeroProps {
  onDiscover?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscover }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset * 0.3);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-6 sm:px-12 lg:px-24 bg-[#0c1414]">
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
          className="w-full h-full object-cover opacity-40 brightness-[0.7] saturate-[0.8]"
        >
          <source src="https://Kurevi.com/IMG_0449.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1414]/80 via-[#0c1414]/20 to-[#0c1414]" />
      </div>
      
      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <div className="reveal-up overflow-hidden mb-6 lg:mb-12">
          <div className="flex items-center gap-4 lg:gap-6">
            <span className="text-white/40 text-[9px] md:text-[11px] uppercase tracking-[1em] md:tracking-[1.5em] font-semibold block">
              The Island Issue
            </span>
            <div className="h-px w-12 md:w-24 bg-white/10" />
            <span className="text-white/20 text-[9px] uppercase tracking-widest font-bold">Vol. 01 / Baa Atoll</span>
          </div>
        </div>
        
        <h1 className="text-[16vw] lg:text-[14rem] font-serif text-white leading-[0.85] md:leading-[0.75] tracking-tighter mb-12 lg:mb-32 reveal-up" style={{ transitionDelay: '0.2s' }}>
          Simple <br />
          <span className="serif-italic opacity-90 block mt-4 lg:mt-8 translate-x-[2vw] lg:translate-x-32 text-stone-400">Beauty</span>
        </h1>
        
        <div className="reveal-up flex flex-col items-start gap-8 lg:gap-12" style={{ transitionDelay: '0.4s' }}>
          <div className="max-w-md">
            <p className="text-white/40 text-sm md:text-lg font-light leading-relaxed mb-10 md:mb-12 tracking-wide">
              A sanctuary of quiet luxury on Fulhadhoo Island. Where the turquoise ocean meets the emerald jungle in perfect harmony.
            </p>
            <button 
              onClick={onDiscover}
              className="group flex items-center gap-6 lg:gap-10 text-white text-[11px] lg:text-[13px] uppercase tracking-[0.8em] md:tracking-[1em] font-bold"
            >
              <span className="relative">
                The Stay
                <span className="absolute -bottom-4 md:-bottom-6 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-1000" />
              </span>
              <div className="w-16 md:w-48 h-[1px] bg-white/20 group-hover:w-64 group-hover:bg-white transition-all duration-1000" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Editorial Footer */}
      <div className="absolute bottom-8 md:bottom-12 left-6 sm:left-12 lg:left-24 right-6 sm:right-12 lg:right-24 flex items-end justify-between text-white/20 text-[9px] uppercase tracking-[1.2em] font-bold reveal-up" style={{ transitionDelay: '0.6s' }}>
        <div className="flex flex-col gap-4 md:gap-6">
          <span className="text-white/40 hidden sm:block">Established 2025</span>
          <div className="h-16 md:h-24 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </div>
        <div className="text-right flex flex-col items-end gap-2 md:gap-4">
          <p className="italic font-serif text-sm md:text-base tracking-normal opacity-40">Local Sanctuary. UNESCO Biosphere.</p>
          <div className="w-16 md:w-24 h-[1px] bg-white/5" />
        </div>
      </div>
    </div>
  );
};
