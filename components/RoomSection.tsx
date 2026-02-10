
import React from 'react';
import { ROOMS } from '../constants';
import { Room } from '../types';

interface RoomSectionProps {
  onSelectRoom: (room: Room) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ onSelectRoom }) => {
  return (
    <div className="py-20 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 md:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-20 reveal-up">
          <div className="max-w-4xl">
            <div className="flex items-center gap-8 mb-8 md:mb-12">
              <span className="text-stone-300 text-[10px] md:text-[12px] uppercase tracking-[1.5em] font-bold block leading-none">Accommodation</span>
              <div className="h-px w-24 md:w-48 bg-stone-100" />
            </div>
            <h2 className="text-fluid-section font-serif text-stone-900 leading-[0.8] tracking-tighter">
              Two Stays <br />
              <span className="serif-italic text-stone-200">One House</span>
            </h2>
          </div>
          
          <div className="max-w-md lg:mb-10">
            <p className="text-stone-400 font-light text-base md:text-xl leading-snug tracking-tight border-l-2 border-stone-900/5 pl-8">
              Select a private split-level suite or unlock the entire residency for an exclusive retreat with friends and family.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-start">
          {ROOMS.map((room, idx) => (
            <div 
              key={room.id} 
              className={`group cursor-pointer reveal-up ${
                idx === 0 ? 'lg:col-span-6' : 'lg:col-span-5 lg:col-start-8 lg:mt-32 xl:mt-48'
              }`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
              onClick={() => onSelectRoom(room)}
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden mask-reveal shadow-[0_40px_80px_rgba(0,0,0,0.06)] group-hover:shadow-[0_60px_120px_rgba(0,0,0,0.1)] transition-shadow duration-1000">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover img-zoom grayscale-[10%] group-hover:grayscale-0 transition-all duration-[4s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1414]/80 via-transparent to-transparent opacity-20 group-hover:opacity-10 transition-opacity duration-1000" />
                
                <div className="absolute top-6 md:top-8 right-6 md:right-8 flex flex-col items-end gap-2">
                   <div className="text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] bg-[#0c1414]/50 backdrop-blur-2xl px-6 md:px-8 py-3 border border-white/10">
                     {room.category}
                   </div>
                   <div className="w-[1px] h-10 md:h-16 bg-white/20" />
                </div>
              </div>
              
              <div className="mt-8 md:mt-16 space-y-6 md:space-y-10">
                <div className="flex flex-col gap-4 border-b border-stone-100 pb-10 group-hover:border-stone-900 transition-colors duration-1000">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4">
                    <h3 className="text-4xl md:text-6xl font-serif text-stone-900 group-hover:italic transition-all duration-1000 tracking-tighter">
                      {room.name}
                    </h3>
                    <p className="font-serif italic text-xl md:text-2xl text-stone-900 tracking-tight">
                      from <span className="text-stone-300">${room.price}</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-10 group-hover:translate-x-6 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                   <span className="text-[10px] md:text-[11px] uppercase tracking-[1.2em] font-bold text-stone-900">Experience Verticality</span>
                   <div className="h-[1.5px] grow md:grow-0 md:w-24 bg-stone-100 group-hover:md:w-48 group-hover:bg-stone-900 transition-all duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 md:mt-64 flex flex-col items-center justify-center text-center space-y-12 md:space-y-24 reveal-up">
           <div className="w-[1px] h-24 md:h-64 bg-stone-100" />
           <div className="space-y-6 md:space-y-10">
             <p className="text-[10px] md:text-[11px] uppercase tracking-[2em] font-bold text-stone-200 mb-4">Vertical Sanctuary</p>
             <p className="font-serif italic text-3xl md:text-7xl lg:text-[8rem] text-stone-200/50 max-w-6xl mx-auto leading-[0.85] tracking-tighter">
               "A masterclass in <br className="hidden lg:block"/> island minimalism."
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};
