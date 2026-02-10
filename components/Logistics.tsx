import React from 'react';
import { Ship, Plane, Info, ExternalLink, Clock, DollarSign, CalendarCheck } from 'lucide-react';

export const Logistics: React.FC = () => {
  return (
    <div className="py-32 md:py-64 px-8 md:px-24 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-40 reveal-up">
          <span className="text-stone-300 font-bold tracking-[0.8em] uppercase text-[9px] mb-8 block">The Journey</span>
          <h2 className="text-6xl md:text-8xl font-serif text-stone-900 leading-tight">Simple Arrival</h2>
          <p className="mt-12 text-stone-400 max-w-2xl text-base md:text-xl font-light leading-relaxed border-l border-stone-100 pl-12">
            Fulhadhoo is a sanctuary away from the crowds, yet reaching us is an integral part of your story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32">
          {/* Speedboat Card */}
          <div className="space-y-12 reveal-up">
            <div className="flex justify-between items-start">
              <div className="w-20 h-20 rounded-sm bg-stone-900 text-white flex items-center justify-center shadow-2xl">
                <Ship size={32} strokeWidth={1} />
              </div>
              <div className="text-right">
                <p className="text-[8px] uppercase tracking-[0.4em] font-bold text-stone-300 mb-2">Duration</p>
                <p className="text-2xl font-serif text-stone-900">1h 45m</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-stone-900">Scheduled Speedboat</h3>
              <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light">
                The classic island transit directly from Malé City (Jetty No. 1) to Fulhadhoo. A breathtaking crossing of the turquoise atoll.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-50">
              <div>
                <p className="text-[8px] uppercase tracking-[0.4em] font-bold text-stone-300 mb-2">Departure</p>
                <p className="text-sm font-bold text-stone-900">13:00 (Daily)</p>
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-[0.4em] font-bold text-stone-300 mb-2">Cost</p>
                <p className="text-sm font-bold text-stone-900">$50.00 USD</p>
              </div>
            </div>
          </div>

          {/* Domestic Card */}
          <div className="space-y-12 reveal-up" style={{ transitionDelay: '0.2s' }}>
            <div className="flex justify-between items-start">
              <div className="w-20 h-20 rounded-sm bg-stone-100 text-stone-900 flex items-center justify-center">
                <Plane size={32} strokeWidth={1} />
              </div>
              <div className="text-right">
                <p className="text-[8px] uppercase tracking-[0.4em] font-bold text-stone-300 mb-2">Duration</p>
                <p className="text-2xl font-serif text-stone-900">20m + 30m Boat</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-stone-900">Domestic Air Transit</h3>
              <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light">
                Fly from Malé to Dharavandhoo, followed by a local transfer. A seamless experience ideal for later international arrivals.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-50">
              <div>
                <p className="text-[8px] uppercase tracking-[0.4em] font-bold text-stone-300 mb-2">Frequency</p>
                <p className="text-sm font-bold text-stone-900">6+ Flights Daily</p>
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-[0.4em] font-bold text-stone-300 mb-2">Welcome</p>
                <p className="text-sm font-bold text-stone-900">Dharavandhoo Meet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Compliance */}
        <div className="bg-[#141f1f] text-white p-12 md:p-24 rounded-sm flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative overflow-hidden reveal-up">
           <div className="grow space-y-8 text-center lg:text-left">
             <span className="text-[9px] uppercase tracking-[0.8em] font-bold text-white/20">Digital Arrival</span>
             <h4 className="text-4xl md:text-6xl font-serif leading-tight">Mandatory Travel <br/>Declaration</h4>
             <p className="text-white/40 text-sm md:text-lg font-light max-w-xl leading-relaxed mx-auto lg:ml-0">
               All travelers to the Maldives must submit the IMUGA digital declaration within 96 hours of arrival.
             </p>
             <div className="pt-6">
               <a 
                 href="https://imuga.immigration.gov.mv/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="group inline-flex items-center gap-8 bg-white text-stone-900 px-12 py-5 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-stone-200 transition-all shadow-2xl"
               >
                 Complete IMUGA <div className="w-8 h-[1px] bg-stone-900/20 group-hover:w-12 transition-all" />
               </a>
             </div>
           </div>
           
           <div className="shrink-0 text-center lg:text-right space-y-4">
             <div className="w-24 h-24 border border-white/5 rounded-full flex items-center justify-center mx-auto lg:ml-auto">
               <Info size={32} strokeWidth={1} className="text-white/20" />
             </div>
             <p className="text-[8px] uppercase tracking-[0.4em] font-bold text-white/20">Local Support</p>
             <p className="text-2xl font-serif italic text-white/60">Staff Meet & Greet <br/>Included</p>
           </div>
        </div>
      </div>
    </div>
  );
};