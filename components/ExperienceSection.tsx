import React from 'react';
import { EXCURSIONS } from '../constants';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-stone-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-24">
          <div className="w-full lg:max-w-3xl reveal-up">
            <span className="text-stone-300 font-bold tracking-[0.6em] uppercase text-[9px] mb-6 block">Island Life</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tighter">
              Explore the <br className="hidden sm:block" />
              <span className="serif-italic text-stone-400">Maldives</span>
            </h2>
          </div>
          <div className="w-full lg:max-w-xs flex flex-col items-start gap-8 reveal-up" style={{ transitionDelay: '0.2s' }}>
            <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed">
              We offer several trips and activities to help you enjoy your time on the island and in the ocean.
            </p>
            <div className="h-px w-16 bg-stone-100" />
            <button className="text-[9px] uppercase tracking-[0.3em] font-bold border-b border-stone-200 pb-3 hover:border-stone-900 transition-all">
              View All Activities
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {EXCURSIONS.map((ex, idx) => (
            <div 
              key={ex.id} 
              className={`group cursor-pointer reveal-up ${
                idx === 1 ? 'lg:-translate-y-12' : 
                idx === 2 ? 'lg:translate-y-8' : ''
              }`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mask-reveal shadow-lg">
                <img 
                  src={ex.image} 
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" 
                  alt={ex.name} 
                />
                <div className="absolute inset-0 bg-[#0c1414]/20 group-hover:bg-transparent transition-all duration-1000" />
                
                {ex.tag && (
                  <div className="absolute top-6 left-6 text-white text-[8px] font-bold px-3 py-1.5 bg-white/10 backdrop-blur-xl uppercase tracking-widest rounded-full border border-white/20">
                    {ex.tag}
                  </div>
                )}

                <div className="absolute bottom-8 left-8 right-8">
                   <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{ex.name}</h3>
                   <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-1000 origin-left" />
                </div>
              </div>
              
              <div className="mt-6 px-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700">
                <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
                  {ex.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};