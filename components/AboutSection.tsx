import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-[#fcfbf9] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-7 relative reveal-up">
            <div className="mask-reveal rounded-none overflow-hidden aspect-[4/5] sm:aspect-[16/10] lg:aspect-[1.2/1] shadow-xl relative z-10 bg-stone-100">
              <img 
                src="https://KUREVI.COM/IMG_0413.png" 
                alt="Veyo Loft" 
                className="w-full h-full object-cover img-zoom"
              />
            </div>
            
            <div className="absolute -top-12 -left-12 lg:-left-16 [writing-mode:vertical-rl] text-[9px] uppercase tracking-[1em] font-bold text-stone-200 hidden lg:block">
              Veyo Inn • Fulhadhoo
            </div>
            
            <div className="relative lg:absolute mt-6 lg:mt-0 lg:-bottom-16 lg:-right-8 bg-[#0c1414] text-white p-8 lg:p-12 rounded-none shadow-2xl max-w-full lg:max-w-[420px] z-20">
              <span className="text-[9px] uppercase tracking-[0.8em] font-bold text-white/30 block mb-6">Our Philosophy</span>
              <p className="font-serif text-2xl lg:text-4xl italic leading-[1.2] mb-8 tracking-tight">
                "Modern design, island peace."
              </p>
              <div className="flex items-center gap-6">
                <div className="h-[1px] w-12 bg-white/20" />
                <span className="text-[8px] uppercase tracking-widest text-white/40">Our Story</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 space-y-12 lg:pt-6">
            <div className="reveal-up">
              <div className="flex items-center gap-6 mb-8">
                <div className="h-[1px] w-8 bg-stone-200" />
                <span className="text-stone-300 text-[10px] uppercase tracking-[0.8em] font-bold block">The Concept</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-[0.9] tracking-tighter mb-10">
                A New <br />
                <span className="serif-italic text-stone-300">Space</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-stone-500 text-sm md:text-lg font-light leading-relaxed reveal-up" style={{ transitionDelay: '0.2s' }}>
              <p className="tracking-tight text-stone-800 font-medium text-balance">
                Veyo Inn offers a different way to stay in the Maldives. Our lofts give you a modern, private home on a beautiful local island.
              </p>
              <p className="tracking-tight leading-relaxed text-balance">
                With two levels, our rooms keep your living space separate from where you sleep. Each loft comes with its own kitchen and laundry, making it perfect for relaxing.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-stone-100">
                <div className="space-y-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-900">Living</span>
                  <p className="text-[9px] text-stone-400 font-bold uppercase tracking-widest leading-relaxed">Private Kitchen & Laundry</p>
                </div>
                <div className="space-y-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-900">Rest</span>
                  <p className="text-[9px] text-stone-400 font-bold uppercase tracking-widest leading-relaxed">Quiet Upper Level Bedroom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};