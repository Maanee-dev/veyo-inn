import React from 'react';
import { Ship, Plane, Info, ArrowUpRight } from 'lucide-react';

export const Logistics: React.FC = () => {
  return (
    <div className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start mb-16 md:mb-24">
          <div className="lg:col-span-7 reveal-up">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-stone-300 text-[10px] uppercase tracking-[0.8em] font-bold block leading-none">Travel</span>
              <div className="h-[1px] w-16 bg-stone-100" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tighter">
              How to <br />
              <span className="serif-italic text-stone-300">Get Here</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8 reveal-up" style={{ transitionDelay: '0.2s' }}>
            <p className="text-stone-400 font-light text-base md:text-xl leading-snug tracking-tight text-balance">
              Fulhadhoo Island is easy to reach from Malé. We can help coordinate your transfer so you arrive safely.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="group reveal-up">
            <div className="p-8 md:p-12 border border-stone-100 bg-stone-50 rounded-none hover:bg-white hover:shadow-xl transition-all duration-700 space-y-8">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-[#0c1414] text-white flex items-center justify-center shadow-lg">
                  <Ship size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-stone-300">Fast Boat</span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-stone-900 italic tracking-tight">Direct Speedboat</h3>
                <p className="text-stone-400 text-sm font-light leading-relaxed">
                  Daily boats leave Malé City at 13:00. The trip takes about 1 hour and 45 minutes across the atoll.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-stone-200">
                <div className="space-y-1">
                  <p className="text-[8px] uppercase tracking-widest font-bold text-stone-300">Time</p>
                  <p className="text-stone-900 text-sm font-medium tracking-tight">1h 45m</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] uppercase tracking-widest font-bold text-stone-300">Price</p>
                  <p className="text-stone-900 text-sm font-medium tracking-tight">$50 USD / Way</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group reveal-up" style={{ transitionDelay: '0.2s' }}>
            <div className="p-8 md:p-12 border border-stone-100 bg-stone-50 rounded-none hover:bg-white hover:shadow-xl transition-all duration-700 space-y-8">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-white text-[#0c1414] border border-stone-100 flex items-center justify-center shadow-lg">
                  <Plane size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-stone-300">Local Flight</span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-stone-900 italic tracking-tight">Domestic Flight</h3>
                <p className="text-stone-400 text-sm font-light leading-relaxed">
                  Take a 20-minute flight to Dharavandhoo, followed by a short local boat trip. Best for late arrivals.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-stone-200">
                <div className="space-y-1">
                  <p className="text-[8px] uppercase tracking-widest font-bold text-stone-300">Frequency</p>
                  <p className="text-stone-900 text-sm font-medium tracking-tight">Multiple Daily</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] uppercase tracking-widest font-bold text-stone-300">Pickup</p>
                  <p className="text-stone-900 text-sm font-medium tracking-tight">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 bg-[#0c1414] p-8 md:p-16 relative overflow-hidden reveal-up">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 pointer-events-none" />
           <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="max-w-xl space-y-6">
                 <div className="flex items-center gap-3 text-white/30 text-[9px] uppercase tracking-[0.6em] font-bold">
                    <Info size={12} /> Required
                 </div>
                 <h4 className="text-4xl md:text-5xl font-serif text-white italic tracking-tight">Health Declaration</h4>
                 <p className="text-white/40 text-sm font-light leading-relaxed">
                    All visitors must fill out the Maldivian health form (IMUGA) within 96 hours before landing.
                 </p>
                 <a 
                   href="https://imuga.immigration.gov.mv/" 
                   target="_blank" 
                   className="inline-flex items-center gap-4 text-white text-[10px] uppercase tracking-[0.4em] font-bold group"
                 >
                   Open Form
                   <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
              </div>
              <div className="hidden lg:block w-[1px] h-32 bg-white/10" />
              <div className="space-y-4">
                 <p className="text-white/60 font-serif italic text-xl">Help Desk</p>
                 <p className="text-white/20 text-xs leading-relaxed max-w-[180px]">Contact us on WhatsApp for any help with travel.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};