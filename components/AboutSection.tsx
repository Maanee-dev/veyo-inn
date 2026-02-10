
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-[#fcfbf9] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-32">
        <div className="w-full lg:w-1/2 reveal-up">
          <div className="mask-reveal rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1200" 
              alt="Atmosphere" 
              className="w-full h-full object-cover img-zoom"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 space-y-10 md:space-y-16">
          <div className="reveal-up">
            <span className="text-stone-300 text-[10px] uppercase tracking-[0.8em] font-bold block mb-6">Our Philosophy</span>
            <h2 className="text-4xl md:text-7xl font-serif text-stone-900 leading-[1.1]">
              The architecture of <br />
              <span className="serif-italic text-stone-500">quiet moments</span>
            </h2>
          </div>
          
          <div className="space-y-8 text-stone-500 text-base md:text-xl font-light leading-relaxed reveal-up" style={{ transitionDelay: '0.2s' }}>
            <p>
              Veyo Inn is more than a guest house. It is a commitment to the rhythm of Fulhadhoo island—a sanctuary where the vines meet the shore.
            </p>
            <p className="border-l-2 border-stone-100 pl-8 italic font-serif text-stone-400">
              "We believe true luxury is found in the space between the tides, where nature remains the only architect."
            </p>
          </div>
          
          <div className="reveal-up pt-4" style={{ transitionDelay: '0.4s' }}>
            <button className="text-[10px] uppercase tracking-[0.6em] font-bold border-b border-stone-200 pb-4 hover:border-stone-900 transition-all">
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
