
import React from 'react';

export const DiningSection: React.FC = () => {
  return (
    <div className="py-20 md:py-32 lg:py-48 bg-[#0c1414] text-white overflow-hidden relative">
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-32 items-center">
          
          <div className="lg:col-span-5 reveal-up order-2 lg:order-1">
            <div className="flex items-center gap-6 mb-10 md:mb-16">
              <span className="text-white/20 text-[10px] md:text-[11px] uppercase tracking-[1.5em] font-bold block leading-none">The Hub</span>
              <div className="h-px w-24 bg-white/5" />
            </div>
            
            <h2 className="text-fluid-section font-serif leading-[0.8] tracking-tighter mb-12 md:mb-20">
              Kitchen <br />
              <span className="serif-italic text-white/10 hover:text-white/40 transition-colors duration-1000">& Dining</span>
            </h2>
            
            <div className="space-y-10 md:space-y-16 max-w-xl">
              <p className="text-white/50 text-lg md:text-2xl font-light leading-snug tracking-tight">
                Our house features a professional kitchen and a large marble dining table. If you book one room, this space is shared. If you book the whole house, it's all yours.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 py-10 md:py-16 border-y border-white/5">
                <div className="space-y-4">
                  <div className="h-[1px] w-10 bg-white/20" />
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold">Cook at Home</h4>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold leading-relaxed">Full Stove, Fridge, and Microwave available.</p>
                </div>
                <div className="space-y-4">
                  <div className="h-[1px] w-10 bg-white/20" />
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold">Laundry</h4>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold leading-relaxed">A washing machine is free for all guests to use.</p>
                </div>
              </div>
              
              <div className="pt-6 md:pt-10">
                <button className="group flex items-center gap-10 text-[10px] md:text-[12px] uppercase tracking-[1.2em] font-bold text-white">
                  Ask About Full House Booking
                  <div className="h-[1.5px] grow md:grow-0 md:w-24 bg-white/10 group-hover:md:w-48 group-hover:bg-white transition-all duration-1000" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 reveal-up order-1 lg:order-2">
            <div className="relative">
              <div className="mask-reveal rounded-none overflow-hidden aspect-[4/5] shadow-3xl bg-white/[0.05]">
                <img 
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover img-zoom grayscale-[20%] hover:grayscale-0 transition-all duration-[3s]" 
                  alt="Marble Dining Area" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
