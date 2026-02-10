
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 md:py-48 lg:py-80 px-6 md:px-12 lg:px-24 bg-[#fcfbf9] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-40 items-start">
          
          {/* Architectural Feature Image */}
          <div className="lg:col-span-7 relative reveal-up">
            <div className="mask-reveal rounded-none overflow-hidden aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.08)] md:shadow-[0_120px_240px_-60px_rgba(0,0,0,0.12)] relative z-10 bg-stone-100">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                alt="Veyo Loft Architecture" 
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-[#0c1414]/5 mix-blend-multiply opacity-20 pointer-events-none" />
            </div>
            
            <div className="absolute -top-16 -left-12 lg:-left-20 [writing-mode:vertical-rl] text-[10px] uppercase tracking-[1.5em] font-bold text-stone-200 hidden lg:block">
              Architectural • Sanctuary
            </div>
            
            <div className="relative md:absolute mt-8 md:mt-0 md:-bottom-24 md:left-20 bg-[#0c1414] text-white p-8 md:p-16 rounded-none shadow-3xl max-w-full md:max-w-[480px] z-20">
              <span className="text-[10px] uppercase tracking-[1em] font-bold text-white/30 block mb-6 md:mb-8">The Concept</span>
              <p className="font-serif text-2xl md:text-5xl italic leading-[1.1] mb-8 md:mb-10 tracking-tight">
                "Modern verticality in the heart of the Baa Atoll."
              </p>
              <div className="flex items-center gap-6">
                <div className="h-px w-12 md:w-16 bg-white/20" />
                <span className="text-[9px] uppercase tracking-widest text-white/40">Veyo Inn Journal</span>
              </div>
            </div>
          </div>
          
          {/* Editorial Copy */}
          <div className="lg:col-span-5 space-y-12 md:space-y-20 lg:pt-12">
            <div className="reveal-up">
              <div className="flex items-center gap-6 mb-8 md:mb-12">
                <div className="h-[1px] w-8 md:w-12 bg-stone-200" />
                <span className="text-stone-300 text-[10px] md:text-[12px] uppercase tracking-[1.5em] font-bold block">The Story</span>
              </div>
              <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-serif text-stone-900 leading-[0.8] tracking-tighter mb-8 md:mb-16">
                Beyond <br />
                <span className="serif-italic text-stone-300">Simple</span>
              </h2>
            </div>
            
            <div className="space-y-10 md:space-y-16 text-stone-500 text-base md:text-2xl font-light leading-relaxed reveal-up" style={{ transitionDelay: '0.2s' }}>
              <p className="tracking-tight text-stone-800 font-medium">
                Veyo Inn introduces a new paradigm of island living. Moving away from traditional beach huts, we offer a contemporary loft experience that brings urban sophistication to the tropical jungle.
              </p>
              <p className="tracking-tight leading-relaxed">
                Our architecture is defined by vertical space. Glass-walled mezzanines, floating stairs, and integrated living zones create an environment of fluid elegance. Every loft is a fully-equipped sanctuary designed for the modern traveler.
              </p>
              <div className="pt-8 md:pt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 border-t border-stone-100">
                <div className="space-y-2 md:space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-900">Living</span>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Lower-Tier Lounge & Dining</p>
                </div>
                <div className="space-y-2 md:space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-900">Sleep</span>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Upper-Tier Loft Bedroom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
