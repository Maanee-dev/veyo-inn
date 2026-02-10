import React from 'react';
import { Ship, Plane, Info, Clock, DollarSign, ArrowUpRight } from 'lucide-react';

export const Logistics: React.FC = () => {
  return (
    <div className="py-24 md:py-48 lg:py-64 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start mb-24 md:mb-40">
          <div className="lg:col-span-7 reveal-up">
            <div className="flex items-center gap-6 mb-12">
              <span className="text-stone-300 text-[10px] md:text-[12px] uppercase tracking-[1.5em] font-bold block leading-none">Journey</span>
              <div className="h-[1px] w-24 bg-stone-100" />
            </div>
            <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-serif text-stone-900 leading-[0.8] tracking-tighter">
              Arrival & <br />
              <span className="serif-italic text-stone-300">Access</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-16 reveal-up" style={{ transitionDelay: '0.2s' }}>
            <p className="text-stone-400 font-light text-xl md:text-3xl leading-snug tracking-tight text-balance">
              Fulhadhoo Island remains one of the Maldives' best-kept secrets. We offer seamless coordination to ensure your journey is as serene as your stay.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Speedboat Option */}
          <div className="group reveal-up">
            <div className="p-10 md:p-16 border border-stone-100 bg-stone-50 rounded-none hover:bg-white hover:shadow-2xl transition-all duration-700 space-y-12">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 bg-[#0c1414] text-white flex items-center justify-center rounded-none shadow-2xl">
                  <Ship size={24} strokeWidth={1} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-300">Option 01</span>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-4xl font-serif text-stone-900 italic tracking-tight">Direct Speedboat</h3>
                <p className="text-stone-400 text-lg font-light leading-relaxed">
                  Daily departures from Malé City at 13:00. A breathtaking 105-minute voyage across the turquoise Baa Atoll.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-stone-200">
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-stone-300">Duration</p>
                  <p className="text-stone-900 font-medium tracking-tight">1h 45m</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-stone-300">Fare</p>
                  <p className="text-stone-900 font-medium tracking-tight">$50 USD / Way</p>
                </div>
              </div>
            </div>
          </div>

          {/* Domestic Flight Option */}
          <div className="group reveal-up" style={{ transitionDelay: '0.2s' }}>
            <div className="p-10 md:p-16 border border-stone-100 bg-stone-50 rounded-none hover:bg-white hover:shadow-2xl transition-all duration-700 space-y-12">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 bg-white text-[#0c1414] border border-stone-100 flex items-center justify-center rounded-none shadow-xl">
                  <Plane size={24} strokeWidth={1} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-300">Option 02</span>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-4xl font-serif text-stone-900 italic tracking-tight">Domestic Transfers</h3>
                <p className="text-stone-400 text-lg font-light leading-relaxed">
                  Ideal for evening arrivals. A 20-minute flight from Velana to Dharavandhoo, followed by a local boat transfer.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-stone-200">
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-stone-300">Flexibility</p>
                  <p className="text-stone-900 font-medium tracking-tight">Daily Multiple</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-stone-300">Service</p>
                  <p className="text-stone-900 font-medium tracking-tight">Host Pickup</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form & Compliance - Refined */}
        <div className="mt-24 md:mt-40 bg-[#0c1414] p-12 md:p-24 relative overflow-hidden reveal-up">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none" />
           <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-16">
              <div className="max-w-2xl space-y-8">
                 <div className="flex items-center gap-4 text-white/30 text-[10px] uppercase tracking-[1em] font-bold">
                    <Info size={14} /> Mandatory
                 </div>
                 <h4 className="text-5xl md:text-7xl font-serif text-white italic tracking-tight">IMUGA Registration</h4>
                 <p className="text-white/40 text-lg font-light leading-relaxed">
                    All international travelers must complete the Maldivian health declaration within 96 hours of arrival.
                 </p>
                 <a 
                   href="https://imuga.immigration.gov.mv/" 
                   target="_blank" 
                   className="inline-flex items-center gap-6 text-white text-[11px] uppercase tracking-[0.8em] font-bold group"
                 >
                   Open Official Portal
                   <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
              </div>
              <div className="hidden lg:block w-[1px] h-48 bg-white/10" />
              <div className="space-y-6">
                 <p className="text-white/60 font-serif italic text-2xl">Concierge Support</p>
                 <p className="text-white/20 text-sm leading-relaxed max-w-[200px]">We provide real-time WhatsApp updates for all arrivals.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};