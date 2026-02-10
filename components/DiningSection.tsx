
import React from 'react';
import { ArrowRight, Utensils } from 'lucide-react';

export const DiningSection: React.FC = () => {
  return (
    <div className="py-32 px-6 md:px-12 bg-teal-950 text-white overflow-hidden relative">
      {/* Texture/Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none transform translate-x-1/4">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
           <path d="M50 0 L100 50 L50 100 L0 50 Z M20 20 L80 80 M80 20 L20 80" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="order-2 lg:order-1 relative">
           <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600" className="rounded-[2.5rem] h-[400px] w-full object-cover shadow-2xl" alt="Local Delicacy" />
              </div>
              <div className="space-y-6 pt-12">
                <img src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=600" className="rounded-[2.5rem] h-[300px] w-full object-cover shadow-2xl" alt="Beach BBQ" />
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10">
                   <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
                     <Utensils size={20} className="text-white" />
                   </div>
                   <h4 className="font-serif text-2xl mb-4 italic">Private Beach Dinners</h4>
                   <p className="text-teal-100/70 text-sm leading-relaxed mb-6">Experience the magic of the Baa Atoll with a curated four-course meal under the starlit sky.</p>
                   <button className="text-teal-400 font-bold text-[11px] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                     Reserve Table <ArrowRight size={14} />
                   </button>
                </div>
              </div>
           </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-teal-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Taste of Baa</span>
          <h2 className="text-5xl md:text-7xl font-serif mt-4 mb-10 leading-tight">Authentic island <br/><span className="italic font-normal">flavors & traditions</span></h2>
          
          <div className="space-y-10">
             <div className="flex gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all duration-500">
                   <span className="text-teal-400 font-serif text-xl italic">01</span>
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-white">Traditional Island Breakfast</h4>
                  <p className="text-teal-100/60 text-[15px] leading-relaxed max-w-md">Savor Mas Huni—shredded smoked tuna with coconut, served with warm, handmade Roshi flatbread and island-grown fruit.</p>
                </div>
             </div>
             
             <div className="flex gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all duration-500">
                   <span className="text-teal-400 font-serif text-xl italic">02</span>
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-white">Catch of the Day BBQ</h4>
                  <p className="text-teal-100/60 text-[15px] leading-relaxed max-w-md">Our fishermen bring the freshest red snapper and reef fish, grilled over coconut husks with local spices.</p>
                </div>
             </div>
             
             <div className="flex gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all duration-500">
                   <span className="text-teal-400 font-serif text-xl italic">03</span>
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-white">Tropical Vegan Fare</h4>
                  <p className="text-teal-100/60 text-[15px] leading-relaxed max-w-md">We celebrate the bounty of Fulhadhoo with creative vegan and vegetarian dishes that highlight local pumpkins, taro, and yams.</p>
                </div>
             </div>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10">
             <button className="bg-white text-teal-950 px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-teal-50 transition-all shadow-2xl">
               View Full Menu
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
