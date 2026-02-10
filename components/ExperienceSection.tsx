import React from 'react';
import { EXCURSIONS } from '../constants';
import { ArrowRight, Compass } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="py-32 md:py-64 px-8 md:px-24 lg:px-32 bg-white overflow-hidden border-t border-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 md:mb-40 gap-12">
          <div className="max-w-3xl reveal-up">
            <span className="text-stone-300 font-bold tracking-[0.6em] uppercase text-[9px] md:text-[10px] mb-8 block">Curated Journeys</span>
            <h2 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[1.1]">The silent rhythm <br/><span className="serif-italic">of island life</span></h2>
          </div>
          <div className="flex flex-col items-start gap-10 reveal-up" style={{ transitionDelay: '0.2s' }}>
            <p className="text-stone-400 max-w-sm text-sm md:text-lg font-light leading-relaxed">
              Step beyond the ordinary. Our local guides lead you to the secret corners of the Baa Atoll, from hidden sandbanks to manta sanctuaries.
            </p>
            <button className="flex items-center gap-6 text-stone-900 font-bold text-[10px] tracking-[0.4em] uppercase group">
              Full Activity Brochure 
              <div className="w-10 h-px bg-stone-200 group-hover:w-16 group-hover:bg-stone-900 transition-all duration-700" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          {EXCURSIONS.map((ex, idx) => (
            <div 
              key={ex.id} 
              className={`group cursor-pointer reveal-up ${idx === 1 ? 'md:mt-32' : idx === 2 ? 'md:mt-16' : ''}`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mask-reveal shadow-sm">
                <img 
                  src={ex.image} 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" 
                  alt={ex.name} 
                />
                <div className="absolute inset-0 bg-[#121d1d]/10 group-hover:bg-transparent transition-all duration-1000" />
                
                {ex.tag && (
                  <div className="absolute top-8 left-8 text-white/80 text-[8px] font-bold px-4 py-2 border border-white/20 uppercase tracking-[0.3em] backdrop-blur-md">
                    {ex.tag}
                  </div>
                )}

                <div className="absolute bottom-10 left-10 right-10">
                   <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 transition-transform duration-700 group-hover:-translate-y-2">{ex.name}</h3>
                   <div className="h-px w-0 bg-white/40 group-hover:w-full transition-all duration-1000" />
                </div>
              </div>
              
              <div className="mt-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <p className="text-stone-400 text-sm font-light leading-relaxed max-w-xs">
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