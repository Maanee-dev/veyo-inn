
import React from 'react';
import { ROOMS } from '../constants';
import { Room } from '../types';

interface RoomSectionProps {
  onSelectRoom: (room: Room) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ onSelectRoom }) => {
  return (
    <div className="py-20 sm:py-40 md:py-64 lg:py-80 px-6 sm:px-12 md:px-24 lg:px-40 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 sm:mb-32 md:mb-56 lg:mb-72 reveal-up">
          <h2 className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-serif text-stone-900 leading-[0.95] md:leading-[0.85] tracking-tighter">
            The <br />
            <span className="serif-italic">Sanctuaries</span>
          </h2>
          <div className="mt-12 md:mt-24 pt-12 md:pt-20 border-t border-stone-50 flex flex-col md:flex-row md:items-end justify-between gap-12 md:gap-16">
            <p className="text-stone-400 font-light text-base sm:text-xl md:text-3xl max-w-xl leading-relaxed">
              Breathtaking spaces designed to breathe. From jungle canopies to lagoon views—habitats for the soul.
            </p>
            <div className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[1em] font-bold text-stone-100 hidden md:block">
              Veyo Habitats • Maldives
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 md:gap-24 lg:gap-32 items-start">
          {ROOMS.slice(0, 3).map((room, idx) => (
            <div 
              key={room.id} 
              className={`group cursor-pointer reveal-up ${idx === 1 ? 'md:mt-32 lg:mt-72' : idx === 2 ? 'md:mt-16 lg:mt-32' : ''}`}
              style={{ transitionDelay: `${idx * 0.3}s` }}
              onClick={() => onSelectRoom(room)}
            >
              <div className="relative aspect-[3/4.8] overflow-hidden rounded-sm mask-reveal shadow-sm">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover img-zoom grayscale-[5%] group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-[#0c1414]/10 group-hover:bg-transparent transition-all duration-1000" />
              </div>
              
              <div className="mt-8 md:mt-16 space-y-6 md:space-y-14">
                <div className="flex justify-between items-baseline border-b border-stone-50 pb-6 md:pb-14">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-900 group-hover:italic transition-all duration-1000 leading-none">{room.name}</h3>
                </div>
                <div className="flex justify-between items-center text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.8em] font-bold text-stone-400">
                  <span className="opacity-40">{room.category}</span>
                  <span className="text-stone-300">from ${room.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Secondary Feature */}
        <div className="mt-32 sm:mt-48 md:mt-[24rem] lg:mt-[32rem] grid lg:grid-cols-12 gap-16 md:gap-32 lg:gap-48 items-center">
           <div className="lg:col-span-8 reveal-up">
              <div className="mask-reveal rounded-sm overflow-hidden aspect-[16/10] shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1800" 
                  alt="Dining Spread" 
                  className="w-full h-full object-cover img-zoom"
                 />
              </div>
           </div>
           <div className="lg:col-span-4 space-y-12 md:space-y-24 reveal-up" style={{ transitionDelay: '0.3s' }}>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] md:tracking-[1em] font-bold text-stone-200 block">The Kitchen Ritual</span>
              <h3 className="text-4xl md:text-6xl lg:text-[7rem] font-serif text-stone-900 leading-[1] md:leading-[0.9]">Silent <br/><span className="serif-italic">Flavor</span></h3>
              <p className="text-stone-400 font-light leading-relaxed max-w-sm text-sm md:text-xl">
                We celebrate the bounty of the atoll with ingredients foraged and fished within hours of serving.
              </p>
              <button className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold border-b border-stone-100 pb-4 md:pb-10 hover:border-stone-900 transition-all group flex items-center gap-6 md:gap-10">
                Menu Rituals <div className="w-10 md:w-16 h-[1px] bg-stone-100 group-hover:w-32 group-hover:bg-stone-900 transition-all duration-1000" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
