
import React from 'react';
import { ROOMS } from '../constants';
import { Room } from '../types';

interface RoomSectionProps {
  onSelectRoom: (room: Room) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ onSelectRoom }) => {
  return (
    <div className="py-32 md:py-64 px-8 md:px-24 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 md:mb-56 reveal-up">
          <h2 className="text-6xl md:text-[10rem] font-serif text-stone-900 leading-[0.85]">
            Explore <br />
            <span className="serif-italic">our worlds</span>
          </h2>
          <div className="mt-16 pt-16 border-t border-stone-50 flex flex-col md:flex-row md:items-end justify-between gap-16">
            <p className="text-stone-400 font-light text-base md:text-2xl max-w-md leading-relaxed">
              From majestic jungle canopies to serene ocean lofts—breathtaking spaces to explore, experience, and inhabit.
            </p>
            <div className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[1em] font-bold text-stone-100 hidden md:block">
              Sanctuaries • Baa Atoll
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-start">
          {ROOMS.slice(0, 3).map((room, idx) => (
            <div 
              key={room.id} 
              className={`group cursor-pointer reveal-up ${idx === 1 ? 'md:mt-56' : idx === 2 ? 'md:mt-24' : ''}`}
              style={{ transitionDelay: `${idx * 0.25}s` }}
              onClick={() => onSelectRoom(room)}
            >
              <div className="relative aspect-[3/4.5] overflow-hidden rounded-sm mask-reveal shadow-sm">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-[#1a2b2a]/10 group-hover:bg-transparent transition-all duration-1000" />
                <div className="absolute inset-0 border border-white/5 group-hover:border-white/0 transition-all duration-1000" />
              </div>
              
              <div className="mt-14 space-y-8">
                <div className="flex justify-between items-baseline border-b border-stone-50 pb-10">
                  <h3 className="text-3xl font-serif text-stone-900 group-hover:italic transition-all duration-700">{room.name}</h3>
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.7em] font-bold text-stone-400">
                  <span className="opacity-50">{room.category}</span>
                  <span className="text-stone-300">From ${room.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Editorial Layout for Flavors */}
        <div className="mt-64 md:mt-96 grid lg:grid-cols-12 gap-32 items-center">
           <div className="lg:col-span-7 reveal-up">
              <div className="mask-reveal rounded-sm overflow-hidden aspect-[4/3] shadow-sm">
                 <img 
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1500" 
                  alt="Island tastes" 
                  className="w-full h-full object-cover img-zoom"
                 />
              </div>
           </div>
           <div className="lg:col-span-5 space-y-20 reveal-up" style={{ transitionDelay: '0.3s' }}>
              <span className="text-[10px] uppercase tracking-[1em] font-bold text-stone-200 block">The Kitchen</span>
              <h3 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[0.9]">The silent <br/><span className="serif-italic">rhythm of life</span></h3>
              <p className="text-stone-400 font-light leading-relaxed max-w-sm text-sm md:text-xl">
                Time behaves differently here. We invite you to listen to the whispers of the Baa Atoll—where luxury is found in the absence of noise.
              </p>
              <button className="text-[10px] uppercase tracking-[0.7em] font-bold border-b border-stone-100 pb-8 hover:border-stone-900 transition-all group flex items-center gap-8">
                Explore life at Veyo <div className="w-16 h-[1px] bg-stone-100 group-hover:w-28 group-hover:bg-stone-900 transition-all duration-1000" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
