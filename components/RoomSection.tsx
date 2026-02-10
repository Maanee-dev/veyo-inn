
import React from 'react';
import { ROOMS } from '../constants';
import { Room } from '../types';

interface RoomSectionProps {
  onSelectRoom: (room: Room) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ onSelectRoom }) => {
  return (
    <div className="py-32 md:py-64 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-24 md:mb-48 reveal-up max-w-4xl">
          <span className="text-stone-300 text-[10px] uppercase tracking-[1em] font-bold block mb-8">Our Rooms</span>
          <h2 className="text-6xl md:text-9xl lg:text-[11rem] font-serif text-stone-900 leading-[0.85] tracking-tighter">
            Sleep & <br />
            <span className="serif-italic text-stone-400">Rest</span>
          </h2>
          <div className="mt-16 md:mt-24 max-w-2xl">
            <p className="text-stone-400 font-light text-lg md:text-3xl leading-snug">
              Beautiful rooms designed for your comfort. From garden views to airy lofts near the ocean.
            </p>
          </div>
        </div>

        {/* Asymmetrical Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 items-start">
          {ROOMS.slice(0, 3).map((room, idx) => (
            <div 
              key={room.id} 
              className={`group cursor-pointer reveal-up ${
                idx === 1 ? 'lg:mt-32 md:scale-105' : 
                idx === 2 ? 'lg:mt-64 scale-95' : ''
              }`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
              onClick={() => onSelectRoom(room)}
            >
              <div className="relative aspect-[3/4.2] overflow-hidden rounded-2xl mask-reveal shadow-2xl">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover img-zoom grayscale-[20%] group-hover:grayscale-0 transition-all duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1414]/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-1000" />
                <div className="absolute top-8 right-8 text-white/50 text-[10px] font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                   {room.category}
                </div>
              </div>
              
              <div className="mt-10 space-y-4">
                <div className="flex justify-between items-baseline border-b border-stone-50 pb-6 group-hover:border-stone-200 transition-colors">
                  <h3 className="text-3xl md:text-4xl font-serif text-stone-900 group-hover:italic transition-all duration-700 leading-tight">
                    {room.name}
                  </h3>
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.6em] font-bold text-stone-400">
                  <span>MALDIVES • BAA ATOLL</span>
                  <span className="text-stone-300">from ${room.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-32 md:mt-64 flex flex-col items-center justify-center text-center space-y-12 reveal-up">
           <div className="w-px h-32 bg-stone-100" />
           <p className="font-serif italic text-2xl md:text-5xl text-stone-300 max-w-4xl leading-tight">
             "Relax and enjoy the simple life on our island."
           </p>
           <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[10px] uppercase tracking-[1em] font-bold text-stone-900 border-b-2 border-stone-900 pb-2 hover:opacity-50 transition-all"
           >
             View All Rooms
           </button>
        </div>
      </div>
    </div>
  );
};
