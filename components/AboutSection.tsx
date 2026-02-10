import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 md:py-48 lg:py-80 px-6 md:px-12 lg:px-24 bg-[#fcfbf9] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-40 items-start">
          
          {/* Architectural Feature Image - The "Large Spread" */}
          <div className="lg:col-span-7 relative reveal-up">
            <div className="mask-reveal rounded-none overflow-hidden aspect-[4/5] sm:aspect-[16/10] lg:aspect-[1.2/1] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] relative z-10 bg-stone-100">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                alt="Veyo Loft Architecture" 
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-[#0c1414]/5 mix-blend-multiply opacity-20 pointer-events-none" />
            </div>
            
            <div className="absolute -top-16 -left-12 lg:-left-20 [writing-mode:vertical-rl] text-[10px] uppercase tracking-[2em] font-bold text-stone-200 hidden lg:block">
              Minimalist • Sanctuary
            </div>
            
            {/* The Floating Floating Card */}
            <div className="relative lg:absolute mt-8 lg:mt-0 lg:-bottom-24 lg:-right-12 bg-[#0c1414] text-white p-10 lg:p-16 rounded-none shadow-3xl max-w-full lg:max-w-[500px] z-20">
              <span className="text-[10px] uppercase tracking-[1.5em] font-bold text-white/30 block mb-8">The Philosophy</span>
              <p className="font-serif text-3xl lg:text-5xl italic leading-[1.1] mb-10 tracking-tighter">
                "Modern verticality, island serenity."
              </p>
              <div className="flex items-center gap-6">
                <div className="h-[1px] w-16 bg-white/20" />
                <span className="text-[9px] uppercase tracking-widest text-white/40">Veyo Inn Journal</span>
              </div>
            </div>
          </div>
          
          {/* Editorial Copy - The "Text Column" */}
          <div className="lg:col-span-5 space-y-16 lg:pt-12">
            <div className="reveal-up">
              <div className="flex items-center gap-6 mb-12">
                <div className="h-[1px] w-12 bg-stone-200" />
                <span className="text-stone-300 text-[10px] md:text-[12px] uppercase tracking-[1.5em] font-bold block">The Concept</span>
              </div>
              <h2 className="text-7xl md:text-[8rem] lg:text-[10rem] font-serif text-stone-900 leading-[0.8] tracking-tighter mb-16">
                The New <br />
                <span className="serif-italic text-stone-300">Vertical</span>
              </h2>
            </div>
            
            <div className="space-y-12 text-stone-500 text-lg md:text-2xl font-light leading-relaxed reveal-up" style={{ transitionDelay: '0.2s' }}>
              <p className="tracking-tight text-stone-800 font-medium text-balance">
                Veyo Inn introduces a refined loft paradigm to the Maldives. We move beyond the traditional beach hut to offer contemporary vertical living.
              </p>
              <p className="tracking-tight leading-relaxed text-balance">
                Defined by high-ceiling architecture and floating mezzanines, our spaces separate the social integrated kitchenette and marble dining from the intimate sleeping tier upstairs.
              </p>
              <div className="pt-12 grid grid-cols-2 gap-12 border-t border-stone-100">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-900">Amenities</span>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest leading-relaxed">Integrated Kitchenette & Laundry</p>
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-900">Design</span>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest leading-relaxed">Glass Mezzanine & Floating Stairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};