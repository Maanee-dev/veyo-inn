
import React from 'react';

export const DiningSection: React.FC = () => {
  return (
    <div className="py-32 md:py-64 bg-[#0c1414] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          <div className="reveal-up order-2 lg:order-1">
            <span className="text-white/20 text-[10px] md:text-[12px] uppercase tracking-[1em] font-bold block mb-12">Food & Meals</span>
            <h2 className="text-6xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter mb-16">
              Good <br />
              <span className="serif-italic text-white/30">Food</span>
            </h2>
            
            <div className="space-y-12 max-w-lg">
              <p className="text-white/40 text-lg md:text-2xl font-light leading-relaxed">
                Enjoy fresh food made with local ingredients. We use fresh fish and vegetables harvested right here on the island.
              </p>
              
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-white/20 mb-3 font-bold">Style</p>
                   <p className="text-sm font-serif italic text-white/60">Local Island Food</p>
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-white/20 mb-3 font-bold">Plan</p>
                   <p className="text-sm font-serif italic text-white/60">Beach Dinner</p>
                </div>
              </div>

              <button className="group mt-12 flex items-center gap-8 text-[11px] uppercase tracking-[0.8em] font-bold bg-white text-stone-900 px-12 py-6 rounded-full hover:bg-stone-200 transition-all shadow-2xl">
                See Our Menu
                <div className="w-12 h-px bg-stone-900/20 group-hover:w-20 transition-all duration-1000" />
              </button>
            </div>
          </div>
          
          <div className="reveal-up order-1 lg:order-2">
            <div className="mask-reveal rounded-[3rem] overflow-hidden aspect-[3/4] shadow-[0_100px_150px_-50px_rgba(0,0,0,0.8)] relative">
              <img 
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1200" 
                alt="Local Island Dining" 
                className="w-full h-full object-cover img-zoom" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1414] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-12 left-12 right-12 text-center md:text-left">
                <span className="text-[9px] uppercase tracking-[1em] font-bold text-white/60 block mb-2">Our Specialty</span>
                <p className="text-3xl font-serif italic text-white">Local Fish Soup</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
