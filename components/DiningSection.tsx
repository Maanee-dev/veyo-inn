
import React from 'react';

export const DiningSection: React.FC = () => {
  return (
    <div className="py-24 md:py-48 bg-[#0c1414] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 lg:order-1 reveal-up">
            <span className="text-white/20 text-[10px] uppercase tracking-[1em] font-bold block mb-8">Sensory Rituals</span>
            <h2 className="text-5xl md:text-8xl font-serif leading-none tracking-tighter mb-10">
              Taste of the <br />
              <span className="serif-italic text-white/40">Atoll</span>
            </h2>
            <p className="text-white/40 text-sm md:text-xl font-light leading-relaxed max-w-md mb-12">
              Our kitchen celebrates the ocean's bounty with ingredients caught and harvested within hours of your meal. Authentic Maldivian soul in every bite.
            </p>
            <button className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.6em] font-bold">
              <span>View The Rituals</span>
              <div className="w-12 h-px bg-white/20 group-hover:w-24 group-hover:bg-white transition-all duration-1000" />
            </button>
          </div>
          
          <div className="order-1 lg:order-2 reveal-up">
            <div className="mask-reveal rounded-3xl overflow-hidden aspect-square shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1200" 
                alt="Island Dining" 
                className="w-full h-full object-cover img-zoom" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1414]/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
