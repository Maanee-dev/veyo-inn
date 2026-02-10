
import React from 'react';
import { Ship, Plane, Info } from 'lucide-react';

export const Logistics: React.FC = () => {
  return (
    <div className="py-20 sm:py-32 md:py-64 lg:py-80 px-6 sm:px-12 md:px-24 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-40 reveal-up">
          <span className="text-stone-300 font-bold tracking-[0.6em] md:tracking-[0.8em] uppercase text-[8px] md:text-[9px] mb-6 md:mb-8 block">Travel Steps</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif text-stone-900 leading-tight">Getting Here</h2>
          <p className="mt-8 md:mt-12 text-stone-400 max-w-2xl text-base md:text-xl font-light leading-relaxed border-l border-stone-100 pl-8 md:pl-12">
            Fulhadhoo is a beautiful island about 100km from the airport. Here are the two ways to reach us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-24 mb-20 md:mb-32">
          <div className="space-y-8 md:space-y-12 reveal-up">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm bg-stone-900 text-white flex items-center justify-center shadow-2xl">
                <Ship className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />
              </div>
              <div className="text-right">
                <p className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-stone-300 mb-1 md:mb-2">Travel Time</p>
                <p className="text-xl md:text-2xl font-serif text-stone-900">1h 45m</p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900">Public Speedboat</h3>
              <p className="text-stone-400 text-xs md:text-base leading-relaxed font-light">
                The most popular way. Take a fast boat from Malé or the Airport directly to Fulhadhoo. We will meet you at the harbor.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-stone-50">
              <div>
                <p className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-stone-300 mb-1 md:mb-2">Schedule</p>
                <p className="text-xs md:text-sm font-bold text-stone-900">13:00 (Daily)</p>
              </div>
              <div>
                <p className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-stone-300 mb-1 md:mb-2">Cost</p>
                <p className="text-xs md:text-sm font-bold text-stone-900">$50.00 / person</p>
              </div>
            </div>
          </div>

          <div className="space-y-8 md:space-y-12 reveal-up" style={{ transitionDelay: '0.2s' }}>
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm bg-stone-100 text-stone-900 flex items-center justify-center">
                <Plane className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />
              </div>
              <div className="text-right">
                <p className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-stone-300 mb-1 md:mb-2">Travel Time</p>
                <p className="text-xl md:text-2xl font-serif text-stone-900">20m Flight</p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900">Domestic Flight</h3>
              <p className="text-stone-400 text-xs md:text-base leading-relaxed font-light">
                Fly from Malé to Dharavandhoo Airport, followed by a boat ride. This is the best option if you arrive in the Maldives late at night.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-stone-50">
              <div>
                <p className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-stone-300 mb-1 md:mb-2">Availability</p>
                <p className="text-xs md:text-sm font-bold text-stone-900">Multiple Daily</p>
              </div>
              <div>
                <p className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-stone-300 mb-1 md:mb-2">Pickup</p>
                <p className="text-xs md:text-sm font-bold text-stone-900">Included</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#141f1f] text-white p-8 md:p-24 rounded-sm flex flex-col lg:flex-row items-center gap-12 md:gap-24 relative overflow-hidden reveal-up">
           <div className="grow space-y-6 md:space-y-8 text-center lg:text-left">
             <span className="text-[8px] md:text-[9px] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold text-white/20">Action Required</span>
             <h4 className="text-3xl sm:text-4xl md:text-6xl font-serif leading-tight">Entry <br/>Form</h4>
             <p className="text-white/40 text-xs md:text-lg font-light max-w-xl leading-relaxed mx-auto lg:ml-0">
               All visitors must fill the IMUGA digital form 96 hours before landing in the Maldives.
             </p>
             <div className="pt-4 md:pt-6">
               <a 
                 href="https://imuga.immigration.gov.mv/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="group inline-flex items-center gap-4 md:gap-8 bg-white text-stone-900 px-8 md:px-12 py-4 md:py-5 text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase hover:bg-stone-200 transition-all shadow-2xl"
               >
                 Go to IMUGA Website <div className="w-6 md:w-8 h-[1px] bg-stone-900/20 group-hover:w-10 md:group-hover:w-12 transition-all" />
               </a>
             </div>
           </div>
           
           <div className="shrink-0 text-center lg:text-right space-y-4">
             <div className="w-16 h-16 md:w-24 md:h-24 border border-white/5 rounded-full flex items-center justify-center mx-auto lg:ml-auto">
               <Info strokeWidth={1} className="w-6 h-6 md:w-8 md:h-8 text-white/20" />
             </div>
             <p className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-white/20">Support</p>
             <p className="text-lg md:text-2xl font-serif italic text-white/60">We guide you <br/>every step</p>
           </div>
        </div>
      </div>
    </div>
  );
};
