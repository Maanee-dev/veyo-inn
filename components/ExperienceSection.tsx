
import React from 'react';
import { EXCURSIONS } from '../constants';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="py-32 md:py-64 px-6 md:px-12 lg:px-24 bg-white border-t border-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Fixed Fluid Typography Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 md:mb-40">
          <div className="w-full lg:max-w-4xl reveal-up">
            <span className="text-stone-300 font-bold tracking-[1em] uppercase text-[10px] mb-8 block">Activities</span>
            <h2 className="text-[12vw] sm:text-[10vw] lg:text-9xl font-serif text-stone-900 leading-[0.85] tracking-tighter">
              Enjoy the <br className="hidden sm:block" />
              <span className="serif-italic text-stone-400">Island Life</span>
            </h2>
          </div>
          <div className="w-full lg:max-w-sm flex flex-col items-start gap-10 reveal-up" style={{ transitionDelay: '0.2s' }}>
            <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed">
              Have some fun! Our local guides will show you the best spots around the island, from hidden sandbanks to beautiful reefs.
            </p>
            <div className="h-px w-24 bg-stone-100" />
            <button className="text-[10px] uppercase tracking-[0.6em] font-bold border-b border-stone-200 pb-4 hover:border-stone-900 transition-all">
              See All Activities
            </button>
          </div>
        </div>

        {/* High-Impact Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {EXCURSIONS.map((ex, idx) => (
            <div 
              key={ex.id} 
              className={`group cursor-pointer reveal-up ${
                idx === 1 ? 'lg:-translate-y-16' : 
                idx === 2 ? 'lg:translate-y-12' : ''
              }`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="relative aspect-[4/5.5] overflow-hidden rounded-3xl mask-reveal shadow-2xl">
                <img 
                  src={ex.image} 
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" 
                  alt={ex.name} 
                />
                <div className="absolute inset-0 bg-[#0c1414]/30 group-hover:bg-transparent transition-all duration-1000" />
                
                {ex.tag && (
                  <div className="absolute top-8 left-8 text-white text-[9px] font-bold px-4 py-2 bg-white/10 backdrop-blur-xl uppercase tracking-widest rounded-full border border-white/20">
                    {ex.tag}
                  </div>
                )}

                <div className="absolute bottom-10 left-10 right-10">
                   <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 transition-transform duration-700 group-hover:-translate-y-2">{ex.name}</h3>
                   <div className="h-[2px] w-0 bg-white group-hover:w-full transition-all duration-1000 origin-left" />
                </div>
              </div>
              
              <div className="mt-10 px-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 transform lg:translate-y-4 lg:group-hover:translate-y-0">
                <p className="text-stone-400 text-base font-light leading-relaxed">
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
