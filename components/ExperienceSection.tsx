
import React from 'react';
import { EXCURSIONS } from '../constants';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="py-20 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 bg-white border-t border-stone-50 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 md:mb-32">
          <div className="w-full lg:max-w-4xl reveal-up">
            <span className="text-stone-300 font-bold tracking-[1em] uppercase text-[10px] mb-8 block">Activities</span>
            <h2 className="text-[12vw] sm:text-[10vw] lg:text-[10rem] font-serif text-stone-900 leading-[0.8] tracking-tighter">
              Island <br className="hidden sm:block" />
              <span className="serif-italic text-stone-400">Narratives</span>
            </h2>
          </div>
          <div className="w-full lg:max-w-sm flex flex-col items-start gap-8 reveal-up" style={{ transitionDelay: '0.2s' }}>
            <p className="text-stone-400 text-base md:text-xl font-light leading-relaxed">
              Explore the Baa Atoll through curated journeys—from private sandbank dinners to swimming with mantas in Hanifaru Bay.
            </p>
            <div className="h-px w-24 bg-stone-100" />
            <button className="text-[10px] uppercase tracking-[0.6em] font-bold border-b border-stone-200 pb-4 hover:border-stone-900 transition-all">
              See All Activities
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-none mask-reveal shadow-[0_40px_80px_rgba(0,0,0,0.06)]">
                <img 
                  src={ex.image} 
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" 
                  alt={ex.name} 
                />
                <div className="absolute inset-0 bg-[#0c1414]/20 group-hover:bg-transparent transition-all duration-1000" />
                
                {ex.tag && (
                  <div className="absolute top-6 left-6 text-white text-[8px] font-bold px-4 py-2 bg-[#0c1414]/60 backdrop-blur-xl uppercase tracking-widest rounded-none border border-white/10">
                    {ex.tag}
                  </div>
                )}

                <div className="absolute bottom-8 left-8 right-8">
                   <h3 className="text-3xl font-serif text-white mb-4 transition-transform duration-700 group-hover:-translate-y-2">{ex.name}</h3>
                   <div className="h-[1.5px] w-0 bg-white group-hover:w-full transition-all duration-1000 origin-left" />
                </div>
              </div>
              
              <div className="mt-8 px-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 transform lg:translate-y-4 lg:group-hover:translate-y-0">
                <p className="text-stone-400 text-sm font-light leading-relaxed">
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
