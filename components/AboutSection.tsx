
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-[#fcfbf9] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-center">
          
          <div className="lg:col-span-6 relative reveal-up">
            <div className="mask-reveal rounded-none overflow-hidden aspect-[4/5] md:aspect-[3/2] shadow-[0_40px_80px_rgba(12,20,20,0.06)] relative z-10 bg-stone-100">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                alt="Veyo Modern House" 
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-[#0c1414]/5 mix-blend-multiply opacity-20 pointer-events-none" />
            </div>
            
            <div className="absolute -top-8 -left-8 [writing-mode:vertical-rl] text-[9px] uppercase tracking-[1.5em] font-bold text-stone-200 hidden lg:block">
              Modern • Homestay
            </div>
            
            <div className="relative md:absolute mt-6 md:mt-0 md:-bottom-12 md:left-8 lg:left-16 bg-[#0c1414] text-white p-8 md:p-10 lg:p-12 rounded-none shadow-2xl max-w-full md:max-w-[400px] z-20 overflow-hidden">
              <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <span className="text-[9px] uppercase tracking-[1em] font-bold text-stone-500 block mb-6 relative z-10">Our Concept</span>
              <p className="font-serif text-xl md:text-3xl lg:text-4xl italic leading-tight mb-8 tracking-tight relative z-10">
                "A comfortable house in the heart of the island."
              </p>
              <div className="flex items-center gap-6 relative z-10">
                <div className="h-px w-12 bg-white/10" />
                <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Veyo Inn Blog</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 space-y-10 md:space-y-12 lg:pl-12">
            <div className="reveal-up">
              <div className="flex items-center gap-6 mb-6 md:mb-10">
                <div className="h-[1px] w-10 bg-stone-900" />
                <span className="text-stone-300 text-[10px] md:text-[11px] uppercase tracking-[1.2em] font-bold block">About Veyo Inn</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-[0.9] tracking-tighter mb-8">
                Your <br />
                <span className="serif-italic text-stone-300">Home</span>
              </h2>
            </div>
            
            <div className="space-y-8 md:space-y-10 text-stone-500 text-base md:text-lg lg:text-xl font-light leading-relaxed reveal-up" style={{ transitionDelay: '0.2s' }}>
              <p className="tracking-tight text-stone-900 font-medium">
                Veyo Inn is a modern guest house on Fulhadhoo. Unlike old-style hotels, our house is designed like a comfortable home with plenty of space.
              </p>
              <p className="tracking-tight leading-relaxed opacity-70">
                The house has two identical private rooms. Each room has its own living space and bathroom on the first floor, with the bed on the second floor. In the center of the house, there is a shared kitchen and a large dining table for all guests to use.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-stone-100">
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-stone-900 mb-2">Private Room</h4>
                  <p className="text-[9px] text-stone-400 font-bold uppercase tracking-widest leading-loose">2 Floors, Private <br/> Bath & Lounge</p>
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-stone-900 mb-2">Living Space</h4>
                  <p className="text-[9px] text-stone-400 font-bold uppercase tracking-widest leading-loose">Kitchen & <br/> Dining Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
