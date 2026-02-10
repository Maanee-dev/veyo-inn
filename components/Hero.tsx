
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
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-6 sm:px-12 lg:px-24 bg-[#0c1414]">
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div 
        className="absolute inset-0 z-0 origin-center overflow-hidden"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 grayscale-[20%]"
        >
          <source src="https://Kurevi.com/IMG_0449.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1414]/90 via-[#0c1414]/10 to-[#0c1414]" />
      </div>
      
      <div className="relative z-20 w-full max-w-[1600px] mx-auto">
        <div className="reveal-up overflow-hidden mb-6 lg:mb-12">
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-[1.5em] font-bold block leading-none">
              Welcome to Fulhadhoo
            </span>
            <div className="h-px w-16 md:w-32 bg-white/5" />
          </div>
        </div>
        
        <h1 className="text-fluid-hero font-serif text-white leading-[0.8] tracking-tighter mb-12 lg:mb-24 reveal-up" style={{ transitionDelay: '0.2s' }}>
          Your Local <br />
          <span className="serif-italic block mt-4 lg:mt-6 md:pl-[8vw] text-white/30 hover:text-white/80 transition-colors duration-1000">Guest House</span>
        </h1>
        
        <div className="reveal-up flex flex-col sm:flex-row items-start sm:items-end justify-between gap-10" style={{ transitionDelay: '0.4s' }}>
          <div className="max-w-xl">
            <p className="text-white/40 text-sm md:text-xl font-light leading-relaxed mb-8 tracking-tight">
              A modern home in the Maldives. Stay in our unique two-story rooms or book the entire house for your family vacation.
            </p>
            <button 
              onClick={onDiscover}
              className="group flex items-center gap-10 text-white text-[10px] lg:text-[12px] uppercase tracking-[1em] font-bold"
            >
              <span className="relative overflow-hidden block">
                Book Your Stay
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-1000" />
              </span>
              <div className="w-16 md:w-48 h-[1px] bg-white/10 group-hover:w-64 group-hover:bg-white transition-all duration-1000" />
            </button>
          </div>
          
          <div className="hidden lg:flex flex-col items-end gap-4 text-white/10 text-[9px] uppercase tracking-[1.5em] font-bold">
            <span className="hover:text-white/40 transition-colors">2-Floor Suites</span>
            <span className="hover:text-white/40 transition-colors">Shared Kitchen</span>
            <span className="hover:text-white/40 transition-colors">Island Life</span>
          </div>
        </div>
      </div>
    </div>
  );
};
