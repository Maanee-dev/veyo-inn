
import React from 'react';
import { EXCURSIONS } from '../constants';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-white border-t border-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Fixed Responsive Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 md:gap-16 mb-20 md:mb-32">
          <div className="w-full lg:max-w-2xl reveal-up">
            <span className="text-stone-300 font-bold tracking-[0.6em] uppercase text-[9px] mb-4 block">Curated Journeys</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight">
              The silent rhythm <br className="hidden sm:block" />
              <span className="serif-italic text-stone-400">of island life</span>
            </h2>
          </div>
          <div className="w-full lg:max-w-sm flex flex-col items-start gap-8 reveal-up" style={{ transitionDelay: '0.2s' }}>
            <p className="text-stone-400 text-sm md:text-lg font-light leading-relaxed">
              Step beyond the ordinary. Our local guides lead you to the secret corners of the Baa Atoll, from hidden sandbanks to manta sanctuaries.
            </p>
            <div className="h-px w-full bg-stone-100 hidden lg:block" />
            <p className="text-stone-300 text-[10px] uppercase tracking-[0.4em] font-bold">UNESCO Biosphere Reserve</p>
          </div>
        </div>

        {/* Improved Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {EXCURSIONS.map((ex, idx) => (
            <div 
              key={ex.id} 
              className={`group cursor-pointer reveal-up ${idx === 1 ? 'lg:mt-16' : idx === 2 ? 'lg:mt-8' : ''}`}
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
                  <div className="absolute top-6 left-6 text-white text-[8px] font-bold px-3 py-1 bg-teal-900/40 backdrop-blur-md uppercase tracking-widest rounded-full">
                    {ex.tag}
                  </div>
                )}

                <div className="absolute bottom-8 left-8 right-8">
                   <h3 className="text-2xl font-serif text-white mb-3 transition-transform duration-700 group-hover:-translate-y-2">{ex.name}</h3>
                   <div className="h-[1px] w-0 bg-white/40 group-hover:w-full transition-all duration-1000" />
                </div>
              </div>
              
              <div className="mt-6 px-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 transform lg:translate-y-4 lg:group-hover:translate-y-0">
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
