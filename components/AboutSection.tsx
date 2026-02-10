
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-32 md:py-64 px-8 md:px-24 lg:px-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-24 lg:gap-32 items-start">
          
          {/* Content Suite */}
          <div className="lg:col-span-5 space-y-20">
            <div className="reveal-up space-y-10">
              <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight">
                Welcome to <br />
                <span className="serif-italic">our world</span>
              </h2>
              <div className="deco-line active h-[1px] w-32 bg-stone-200" />
            </div>
            
            <div className="space-y-12 text-stone-400 text-sm md:text-base leading-relaxed font-light max-w-sm reveal-up" style={{ transitionDelay: '0.2s' }}>
              <p>
                Discover the unique atmosphere of our private residential club community. Once experienced, never forgotten. This is a classic, comfortable, modern living in nature's most spectacular international settings.
              </p>
              <p className="italic text-stone-500">
                Flavouringly exclusive. Generously welcoming. Find your unique world—a place where families love to be, creating unforgettable moments, together.
              </p>
            </div>

            <div className="relative pt-16 reveal-up" style={{ transitionDelay: '0.4s' }}>
              <div className="mask-reveal rounded-sm overflow-hidden w-full md:w-[80%] aspect-[4/5] shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1000" 
                  alt="Atmosphere" 
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 [writing-mode:vertical-rl] text-[9px] uppercase tracking-[0.6em] font-bold text-stone-300 pointer-events-none select-none">
                Island Heritage
              </div>
            </div>
          </div>

          {/* Staggered Image Suite */}
          <div className="lg:col-span-7 relative">
            <div className="mask-reveal aspect-[4/5] overflow-hidden rounded-sm shadow-sm" style={{ transitionDelay: '0.3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1500" 
                alt="Turquoise waters" 
                className="w-full h-full object-cover img-zoom"
              />
            </div>
            
            {/* Overlay Detail Image */}
            <div className="absolute -bottom-24 -left-12 w-64 h-80 hidden lg:block reveal-up" style={{ transitionDelay: '0.6s' }}>
              <div className="mask-reveal w-full h-full rounded-sm overflow-hidden shadow-2xl border-[16px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=800" 
                  alt="Sanctuary details" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Seraph */}
            <div className="absolute -top-16 -right-16 hidden lg:block select-none pointer-events-none opacity-[0.03]">
              <span className="text-[16rem] font-serif serif-italic">Soul</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
