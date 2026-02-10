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
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-8 md:px-24 lg:px-32 bg-[#1a2b2a]">
      {/* Cinematic Background */}
      <div 
        className="absolute inset-0 z-0 scale-110 origin-center"
        style={{ transform: `scale(1.1) translateY(${offset}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2400" 
          className="w-full h-full object-cover opacity-70"
          alt="Island Sanctuary"
        />
        <div className="absolute inset-0 overlay-luxury" />
      </div>
      
      <div className="relative z-10 max-w-7xl w-full">
        <div className="mb-12 reveal-up overflow-hidden">
          <span className="text-white/40 text-[9px] uppercase tracking-[0.8em] font-medium block">
            The art of island living
          </span>
        </div>
        
        <h1 className="text-[12vw] md:text-[10rem] font-serif text-white leading-[0.8] tracking-tighter mb-20 reveal-up" style={{ transitionDelay: '0.2s' }}>
          Explore <br />
          <span className="serif-italic opacity-90 block mt-4">your world</span>
        </h1>
        
        <div className="max-w-md reveal-up" style={{ transitionDelay: '0.4s' }}>
          <p className="text-white/50 text-base md:text-xl font-light leading-relaxed mb-24 pl-12 border-l border-white/5">
            A sanctuary crafted for the quiet moments between the tides, where nature is the only architect that matters.
          </p>
          
          <button 
            onClick={onDiscover}
            className="group flex items-center gap-12 text-white text-[10px] uppercase tracking-[0.6em] font-bold"
          >
            <span className="relative">
              Begin the journey
              <span className="absolute -bottom-4 left-0 w-full h-px bg-white/20 group-hover:bg-white transition-all duration-1000" />
            </span>
            <div className="w-16 h-px bg-white/10 group-hover:w-24 group-hover:bg-white/40 transition-all duration-1000" />
          </button>
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="absolute bottom-16 left-8 md:left-24 lg:left-32 flex items-center gap-20 text-white/20 text-[8px] uppercase tracking-[0.6em] font-bold reveal-up" style={{ transitionDelay: '0.8s' }}>
        <div className="flex gap-6 items-center">
          <span className="text-white">01</span>
          <div className="h-[1px] w-48 bg-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 scale-x-0 origin-left animate-[progress_15s_linear_infinite]" />
          </div>
          <span>03</span>
        </div>
        <div className="hidden lg:block">Baa Atoll Biosphere Reserve</div>
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes progress {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
`;
document.head.appendChild(style);