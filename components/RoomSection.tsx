import React from 'react';
import { ROOMS } from '../constants';
import { Room } from '../types';

interface RoomSectionProps {
  onSelectRoom: (room: Room) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ onSelectRoom }) => {
  return (
    <div className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10 reveal-up">
          <div className="max-w-3xl">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-stone-300 text-[10px] uppercase tracking-[0.8em] font-bold block leading-none">Our Rooms</span>
              <div className="h-[1px] w-12 md:w-32 bg-stone-100" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tighter">
              The <br />
              <span className="serif-italic text-stone-300">Lofts</span>
            </h2>
          </div>
          
          <div className="max-w-xs lg:mb-4">
            <div className="h-10 w-[1px] bg-stone-100 mb-6" />
            <p className="text-stone-400 font-light text-sm md:text-base leading-snug tracking-tight">
              Two exclusive lofts designed for privacy and comfort on the island.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
          {ROOMS.map((room, idx) => (
            <div 
              key={room.id} 
              className={`group cursor-pointer reveal-up ${
                idx === 0 ? 'lg:col-span-6' : 'lg:col-span-5 lg:col-start-8 lg:mt-16'
              }`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
              onClick={() => onSelectRoom(room)}
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3.5/4.5] overflow-hidden mask-reveal shadow-lg rounded-none">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover img-zoom group-hover:grayscale-0 transition-all duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1414]/70 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-1000" />
                
                <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                   <div className="text-white text-[8px] font-bold uppercase tracking-[0.2em] bg-[#0c1414]/40 backdrop-blur-2xl px-4 py-2 rounded-none border border-white/10">
                     Loft No. 0{idx + 1}
                   </div>
                </div>
              </div>
              
              <div className="mt-8 md:mt-12 space-y-6">
                <div className="flex flex-col gap-4 border-b border-stone-100 pb-6 group-hover:border-stone-900 transition-colors duration-1000">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 group-hover:italic transition-all duration-1000 tracking-tighter">
                      {room.name}
                    </h3>
                    <p className="font-serif italic text-lg tracking-normal text-stone-900 lowercase">
                      from <span className="text-stone-300">${room.price}</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group-hover:translate-x-2 transition-transform duration-1000 ease-out">
                   <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-stone-900">View Details</span>
                   <div className="h-[1px] grow md:grow-0 md:w-20 bg-stone-100 group-hover:md:w-32 group-hover:bg-stone-900 transition-all duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-32 flex flex-col items-center justify-center text-center space-y-8 reveal-up">
           <div className="w-[1px] h-20 md:h-32 bg-stone-100" />
           <div className="space-y-4">
             <p className="text-[9px] uppercase tracking-[0.8em] font-bold text-stone-200 mb-2">Private Sanctuary</p>
             <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-stone-300 max-w-4xl mx-auto leading-tight tracking-tighter">
               "A quiet space for the modern traveler."
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};