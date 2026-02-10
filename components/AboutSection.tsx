
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-32 md:py-64 px-6 md:px-12 lg:px-24 bg-[#fcfbf9] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* Large Image Column */}
          <div className="lg:col-span-7 relative reveal-up">
            <div className="mask-reveal rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.15)] relative z-10">
              <img 
                src="https://kurevi.com/IMG_0413.png" 
                alt="Tropical Atmosphere" 
                className="w-full h-full object-cover img-zoom"
              />
            </div>
            {/* Overlapping Subtle Label */}
            <div className="absolute -top-12 -left-8 lg:-left-16 [writing-mode:vertical-rl] text-[9px] uppercase tracking-[1.2em] font-bold text-stone-200 hidden md:block">
              Nature & Peace
            </div>
            
            {/* Magazine Style Pull-out */}
            <div className="absolute -bottom-16 -right-8 lg:-right-20 bg-[#0c1414] text-white p-10 md:p-14 rounded-3xl shadow-3xl hidden md:block max-w-[340px] z-20">
              <span className="text-[9px] uppercase tracking-[0.8em] font-bold text-stone-500 block mb-6">Explore</span>
              <p className="font-serif text-2xl italic leading-tight mb-6">"Quiet luxury is found in nature and peace."</p>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </div>
          
          {/* Text Content Column */}
          <div className="lg:col-span-5 space-y-12 md:space-y-20 lg:pl-16">
            <div className="reveal-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-8 bg-stone-200" />
                <span className="text-stone-300 text-[10px] md:text-[12px] uppercase tracking-[1em] font-bold block">About Us</span>
              </div>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif text-stone-900 leading-[0.85] tracking-tighter">
                Life on the <br />
                <span className="serif-italic text-stone-400">island</span>
              </h2>
            </div>
            
            <div className="space-y-12 text-stone-500 text-base md:text-xl font-light leading-relaxed reveal-up" style={{ transitionDelay: '0.2s' }}>
              <p className="first-letter:text-6xl md:first-letter:text-8xl first-letter:font-serif first-letter:float-left first-letter:mr-6 first-letter:text-stone-900 first-letter:leading-[0.8]">
                Veyo Inn is a local guest house on Fulhadhoo Island. It is a place where nature meets comfort, and life moves at a relaxed pace.
              </p>
              <div className="h-px w-full bg-stone-100" />
              <p className="text-stone-400 italic font-serif text-lg md:text-2xl leading-snug">
                A simple, beautiful home in the heart of the Maldives.
              </p>
            </div>
            
            <div className="reveal-up pt-10" style={{ transitionDelay: '0.4s' }}>
              <button className="group flex items-center gap-8 text-[11px] uppercase tracking-[0.8em] font-bold text-stone-900">
                Read Our Story
                <div className="w-16 h-px bg-stone-200 group-hover:w-32 group-hover:bg-stone-900 transition-all duration-1000" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
