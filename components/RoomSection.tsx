import React from 'react';
import { ROOMS } from '../constants';
import { Room } from '../types';

interface RoomSectionProps {
  onSelectRoom: (room: Room) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ onSelectRoom }) => {
  return (
    <div className="py-32 md:py-64 px-8 md:px-24 lg:px-32 bg-[#fdfcfb]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-48 reveal-up">
          <h2 className="text-6xl md:text-9xl font-serif text-stone-900 leading-[0.9]">
            Explore <br />
            <span className="serif-italic">our worlds</span>
          </h2>
          <div className="mt-12 pt-12 border-t border-stone-100 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <p className="text-stone-400 font-light text-base md:text-xl max-w-sm leading-relaxed">
              From majestic jungle canopies to serene ocean lofts—breathtaking spaces to explore, experience, and inhabit.
            </p>
            <div className="[writing-mode:vertical-rl] text-[9px] uppercase tracking-[0.8em] font-bold text-stone-200 hidden md:block">
              Sanctuaries • Veyo Inn
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-start">
          {ROOMS.slice(0, 3).map((room, idx) => (
            <div 
              key={room.id} 
              className={`group cursor-pointer reveal-up ${idx === 1 ? 'md:mt-48' : idx === 2 ? 'md:mt-24' : ''}`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
              onClick={() => onSelectRoom(room)}
            >
              <div className="relative aspect-[3/4.5] overflow-hidden rounded-sm mask-reveal">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-[#1a2b2a]/10 group-hover:bg-transparent transition-all duration-1000" />
                <div className="absolute inset-0 border border-white/5 group-hover:border-white/0 transition-all duration-1000" />
              </div>
              
              <div className="mt-12 space-y-6">
                <div className="flex justify-between items-baseline border-b border-stone-50 pb-8">
                  <h3 className="text-3xl font-serif text-stone-900 group-hover:italic transition-all duration-700">{room.name}</h3>
                </div>
                <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.6em] font-bold text-stone-400">
                  <span className="opacity-60">{room.category}</span>
                  <span className="text-stone-300">From ${room.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Editorial Sub-feature */}
        <div className="mt-64 md:mt-96 grid lg:grid-cols-12 gap-24 lg:gap-32 items-center">
           <div className="lg:col-span-7 reveal-up">
              <div className="mask-reveal rounded-sm overflow-hidden aspect-[4/3] shadow-sm">
                 <img 
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1500" 
                  alt="Island tastes" 
                  className="w-full h-full object-cover img-zoom"
                 />
              </div>
           </div>
           <div className="lg:col-span-5 space-y-16 reveal-up" style={{ transitionDelay: '0.3s' }}>
              <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-stone-300 block">Atmosphere</span>
              <h3 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight">The silent rhythm <br/><span className="serif-italic">of the island</span></h3>
              <p className="text-stone-400 font-light leading-relaxed max-w-sm text-sm md:text-lg">
                Time behaves differently here. We invite you to listen to the whispers of the Baa Atoll—where luxury is found in the absence of noise.
              </p>
              <button className="text-[10px] uppercase tracking-[0.6em] font-bold border-b border-stone-100 pb-6 hover:border-stone-900 transition-all group flex items-center gap-6">
                Explore life at Veyo <div className="w-12 h-[1px] bg-stone-100 group-hover:w-20 group-hover:bg-stone-900 transition-all duration-700" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};