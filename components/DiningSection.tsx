import React from 'react';

export const DiningSection: React.FC = () => {
  return (
    <div className="py-16 md:py-24 lg:py-32 bg-[#0c1414] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 reveal-up order-2 lg:order-1">
            <span className="text-white/20 text-[10px] uppercase tracking-[0.8em] font-bold block mb-8">Your Space</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tighter mb-8 md:mb-12">
              Private <br />
              <span className="serif-italic text-white/30">Kitchen</span>
            </h2>
            
            <div className="space-y-10 md:space-y-12 max-w-lg">
              <p className="text-white/50 text-base md:text-xl font-light leading-snug tracking-tight">
                Each loft has its own kitchen. You can cook your own meals and eat in private. Every room also has its own washing machine.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 py-8 md:py-10 border-y border-white/10">
                <div className="space-y-3">
                  <div className="h-px w-8 bg-white/20" />
                  <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold">Kitchen</h4>
                  <p className="text-[10px] text-white/30 uppercase">Fridge, Cooktop, Microwave</p>
                </div>
                <div className="space-y-3">
                  <div className="h-px w-8 bg-white/20" />
                  <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold">Laundry</h4>
                  <p className="text-[10px] text-white/30 uppercase">Washing Machine</p>
                </div>
              </div>
              
              <div className="pt-4 md:pt-6">
                <button className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.6em] font-bold text-white">
                  See Features
                  <div className="h-[1px] grow md:grow-0 md:w-16 bg-white/10 group-hover:md:w-32 group-hover:bg-white transition-all duration-1000" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 reveal-up order-1 lg:order-2">
            <div className="relative">
              <div className="mask-reveal rounded-none overflow-hidden aspect-[4/5] shadow-2xl bg-white/5">
                <img 
                  src="https://veyoinn.com/veyo7.png" 
                  className="w-full h-full object-cover img-zoom brightness-75 transition-all duration-1000" 
                  alt="Kitchen Area" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};