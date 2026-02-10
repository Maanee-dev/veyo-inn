
import React from 'react';
import { ROOMS } from '../constants';
import { Room } from '../types';

interface RoomSectionProps {
  onSelectRoom: (room: Room) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ onSelectRoom }) => {
  return (
    <div className="py-24 md:py-48 lg:py-80 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Header spread */}
        <div className="mb-24 md:mb-48 lg:mb-72 flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-16 reveal-up">
          <div className="max-w-4xl">
            <div className="flex items-center gap-6 md:gap-10 mb-8 md:mb-12">
              <span className="text-stone-300 text-[10px] md:text-[12px] uppercase tracking-[1em] md:tracking-[1.5em] font-bold block leading-none">Living Spaces</span>
              <div className="h-[1px] w-12 md:w-48 bg-stone-100" />
            </div>
            <h2 className="text-6xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-serif text-stone-900 leading-[0.8] md:leading-[0.75] tracking-tighter">
              Vertical <br />
              <span className="serif-italic text-stone-300">Residencies</span>
            </h2>
          </div>
          
          <div className="max-w-md lg:mb-16">
            <div className="h-12 md:h-20 w-[1px] bg-stone-100 mb-8 md:mb-12" />
            <p className="text-stone-400 font-light text-base md:text-2xl lg:text-3xl leading-snug tracking-tight">
              Two exclusive lofts designed for privacy, crafted for comfort, and defined by modern island architecture.
            </p>
          </div>
        </div>

        {/* Fluid Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-start">
          {ROOMS.map((room, idx) => (
            <div 
              key={room.id} 
              className={`group cursor-pointer reveal-up ${
                idx === 0 ? 'lg:col-span-6' : 'lg:col-span-5 lg:col-start-8 lg:mt-32 xl:mt-64'
              }`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
              onClick={() => onSelectRoom(room)}
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3.5/4.5] overflow-hidden mask-reveal shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] md:shadow-[0_80px_160px_-40px_rgba(0,0,0,0.1)] rounded-none">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover img-zoom grayscale-[15%] group-hover:grayscale-0 transition-all duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1414]/70 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-1000" />
                
                <div className="absolute top-8 md:top-12 right-8 md:right-12 flex flex-col items-end gap-2 md:gap-3">
                   <div className="text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] bg-[#0c1414]/40 backdrop-blur-3xl px-6 md:px-8 py-2 md:py-3 rounded-none border border-white/10">
                     Loft No. 0{idx + 1}
                   </div>
                   <div className="w-[1px] h-12 md:h-16 bg-white/20" />
                </div>
              </div>
              
              <div className="mt-12 md:mt-20 space-y-8 md:space-y-10">
                <div className="flex flex-col gap-4 md:gap-6 border-b border-stone-100 pb-8 md:pb-12 group-hover:border-stone-900 transition-colors duration-1000">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4">
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-900 group-hover:italic transition-all duration-1000 tracking-tighter">
                      {room.name}
                    </h3>
                    <p className="font-serif italic text-xl md:text-2xl tracking-normal text-stone-900 lowercase">
                      from <span className="text-stone-300">${room.price}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.8em] md:tracking-[1em] font-bold text-stone-300">
                    <span>Modern Signature</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 md:gap-12 group-hover:translate-x-4 md:group-hover:translate-x-6 transition-transform duration-1000 ease-out">
                   <span className="text-[10px] md:text-[11px] uppercase tracking-[1em] md:tracking-[1.5em] font-bold text-stone-900">Experience the Loft</span>
                   <div className="h-[1.5px] grow md:grow-0 md:w-32 bg-stone-100 group-hover:md:w-64 group-hover:bg-stone-900 transition-all duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Editorial Divider */}
        <div className="mt-48 md:mt-80 flex flex-col items-center justify-center text-center space-y-12 md:space-y-20 reveal-up">
           <div className="w-[1px] h-32 md:h-64 bg-stone-100" />
           <div className="space-y-6 md:space-y-8">
             <p className="text-[10px] md:text-[11px] uppercase tracking-[1.5em] md:tracking-[2.5em] font-bold text-stone-200 mb-4 md:mb-6">The Vertical Sanctuary</p>
             <p className="font-serif italic text-3xl md:text-6xl lg:text-[6rem] text-stone-300 max-w-6xl mx-auto leading-tight md:leading-[0.9] tracking-tighter">
               "An architectural reset for <br className="hidden md:block"/> the modern voyager."
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};
