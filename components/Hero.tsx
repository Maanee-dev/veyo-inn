
import React, { useEffect, useState } from 'react';

interface HeroProps {
  onDiscover?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscover }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset * 0.2);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-6 sm:px-12 md:px-24 lg:px-40 bg-[#0c1414]">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 scale-110 origin-center"
        style={{ transform: `scale(1.1) translateY(${offset}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2400" 
          className="w-full h-full object-cover opacity-60"
          alt="Island Sanctuary"
        />
        <div className="absolute inset-0 overlay-luxury" />
      </div>
      
      <div className="relative z-10 max-w-7xl w-full">
        <div className="mb-6 md:mb-10 lg:mb-16 reveal-up overflow-hidden">
          <span className="text-white/30 text-[8px] sm:text-[10px] uppercase tracking-[0.6em] sm:tracking-[0.9em] font-medium block">
            Nature as the architect
          </span>
        </div>
        
        <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[11rem] font-serif text-white leading-[0.85] md:leading-[0.8] tracking-tighter mb-10 md:mb-16 lg:mb-28 reveal-up" style={{ transitionDelay: '0.2s' }}>
          Explore <br />
          <span className="serif-italic opacity-90 block mt-2 md:mt-4 lg:mt-8">your world</span>
        </h1>
        
        <div className="max-w-xs sm:max-w-md lg:max-w-xl reveal-up" style={{ transitionDelay: '0.4s' }}>
          <p className="text-white/40 text-xs sm:text-sm md:text-xl lg:text-2xl font-light leading-relaxed mb-12 md:mb-20 lg:mb-28 pl-6 md:pl-10 lg:pl-16 border-l border-white/5">
            A sanctuary crafted for the quiet moments between the tides. Experience the silent luxury of Fulhadhoo.
          </p>
          
          <button 
            onClick={onDiscover}
            className="group flex items-center gap-6 md:gap-12 lg:gap-20 text-white text-[8px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.7em] font-bold"
          >
            <span className="relative">
              The Journey Begins
              <span className="absolute -bottom-3 lg:-bottom-4 left-0 w-full h-px bg-white/10 group-hover:bg-white/40 transition-all duration-1000" />
            </span>
            <div className="w-12 sm:w-20 md:w-32 h-[1px] bg-white/5 group-hover:w-20 sm:group-hover:w-48 group-hover:bg-white/20 transition-all duration-1000" />
          </button>
        </div>
      </div>
      
      {/* Bottom info bar */}
      <div className="absolute bottom-8 md:bottom-12 lg:bottom-20 left-6 sm:left-12 md:left-24 lg:left-40 right-6 sm:right-12 md:right-24 lg:right-40 flex items-center justify-between text-white/20 text-[6px] sm:text-[8px] uppercase tracking-[0.4em] sm:tracking-[0.7em] font-bold reveal-up" style={{ transitionDelay: '0.8s' }}>
        <div className="flex gap-6 sm:gap-12 items-center">
          <span className="text-white">01</span>
          <div className="h-[1px] w-20 sm:w-48 md:w-80 bg-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 scale-x-0 origin-left animate-[progress_20s_linear_infinite]" />
          </div>
          <span>03</span>
        </div>
        <div className="hidden sm:block text-white/10">Baa Atoll Biosphere Reserve</div>
      </div>
    </div>
  );
};
