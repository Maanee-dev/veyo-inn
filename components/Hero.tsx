
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1414]/60 via-transparent to-[#0c1414]" />
      </div>
      
      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <div className="reveal-up overflow-hidden mb-12 lg:mb-20">
          <span className="text-white/40 text-[9px] md:text-[11px] uppercase tracking-[1.5em] font-semibold block">
            A Natural Escape
          </span>
        </div>
        
        <h1 className="text-[20vw] sm:text-[18vw] lg:text-[16rem] font-serif text-white leading-[0.7] tracking-tighter mb-16 lg:mb-32 reveal-up" style={{ transitionDelay: '0.2s' }}>
          Simple <br />
          <span className="serif-italic opacity-90 block mt-6 lg:mt-12 translate-x-[2vw] lg:translate-x-24 text-stone-400">Beauty</span>
        </h1>
        
        <div className="reveal-up flex flex-col items-start gap-12" style={{ transitionDelay: '0.4s' }}>
          <button 
            onClick={onDiscover}
            className="group flex items-center gap-10 text-white text-[11px] lg:text-[13px] uppercase tracking-[1em] font-bold"
          >
            <span className="relative">
              Book a Room
              <span className="absolute -bottom-6 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-1000" />
            </span>
            <div className="w-32 lg:w-56 h-[1px] bg-white/20 group-hover:w-72 group-hover:bg-white transition-all duration-1000" />
          </button>
        </div>
      </div>
      
      {/* Editorial Navigation hint */}
      <div className="absolute bottom-16 left-6 sm:left-12 lg:left-24 right-6 sm:right-12 lg:right-24 flex items-end justify-between text-white/20 text-[9px] uppercase tracking-[1em] font-bold reveal-up" style={{ transitionDelay: '0.6s' }}>
        <div className="flex flex-col gap-6">
          <span className="text-white/40">Year 2025</span>
          <div className="h-20 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </div>
        <p className="italic font-serif text-sm tracking-normal opacity-40">Local Home. UNESCO Ocean Zone.</p>
      </div>
    </div>
  );
};
