
import React from 'react';

export const DiningSection: React.FC = () => {
  return (
    <div className="py-24 md:py-48 lg:py-80 bg-[#0c1414] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-40 items-center">
          
          <div className="lg:col-span-5 reveal-up order-2 lg:order-1">
            <span className="text-white/20 text-[10px] md:text-[12px] uppercase tracking-[1.2em] md:tracking-[1.5em] font-bold block mb-8 md:mb-12">Culinary Living</span>
            <h2 className="text-6xl md:text-[10rem] lg:text-[12rem] font-serif leading-[0.8] tracking-tighter mb-10 md:mb-16">
              Modern <br />
              <span className="serif-italic text-white/30">Pantry</span>
            </h2>
            
            <div className="space-y-12 md:space-y-16 max-w-xl">
              <p className="text-white/50 text-lg md:text-3xl font-light leading-snug tracking-tight">
                Every loft at Veyo Inn features a bespoke integrated kitchenette. Designed for the epicurean explorer, our spaces include marble dining surfaces and premium appliances.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 py-10 md:py-16 border-y border-white/10">
                <div className="space-y-4">
                  <div className="h-px w-12 bg-white/20" />
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold">Kitchenette</h4>
                  <p className="text-xs text-white/30">Induction Cooktop, Microwave, & Fridge</p>
                </div>
                <div className="space-y-4">
                  <div className="h-px w-12 bg-white/20" />
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold">In-Suite Laundry</h4>
                  <p className="text-xs text-white/30">Full Washing Machine in every loft</p>
                </div>
              </div>
              
              <div className="pt-6 md:pt-10">
                <button className="group flex items-center gap-8 md:gap-12 text-[10px] md:text-[11px] uppercase tracking-[1em] font-bold text-white">
                  Private Chef Inquiry
                  <div className="h-[1.5px] grow md:grow-0 md:w-20 bg-white/10 group-hover:md:w-40 group-hover:bg-white transition-all duration-1000" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 reveal-up order-1 lg:order-2">
            <div className="relative">
              <div className="mask-reveal rounded-none overflow-hidden aspect-[4/5] shadow-[0_40px_80px_rgba(0,0,0,0.5)] md:shadow-3xl bg-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover img-zoom grayscale-[30%] hover:grayscale-0 transition-all duration-1000" 
                  alt="Marble Dining Area" 
                />
              </div>
              
              {/* Asymmetric Inset Image - Responsive visibility */}
              <div className="absolute -bottom-12 -left-8 md:-bottom-16 md:-left-24 w-2/5 aspect-square overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] border-4 border-[#0c1414] hidden sm:block">
                 <img 
                   src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800" 
                   className="w-full h-full object-cover" 
                   alt="Sleek Cabinetry" 
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
