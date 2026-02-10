
import React, { useState } from 'react';
import { ROOMS } from '../constants';
import { Room } from '../types';
import { ArrowLeft, MapPin, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface BookingViewProps {
  onBack: () => void;
  onSelectRoom: (room: Room) => void;
}

export const BookingView: React.FC<BookingViewProps> = ({ onBack, onSelectRoom }) => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-32 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
      
      {/* Magazine Header */}
      <header className="mb-24 md:mb-40 flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-stone-100 pb-20">
        <div className="space-y-12 max-w-4xl">
          <button 
            onClick={onBack}
            className="flex items-center gap-6 text-[10px] uppercase tracking-[0.8em] font-bold text-stone-300 hover:text-stone-900 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            Back to Home
          </button>
          
          <h2 className="text-7xl md:text-9xl lg:text-[10rem] font-serif text-stone-900 leading-[0.8] tracking-tighter">
            Choose Your <br />
            <span className="serif-italic text-stone-400">Space</span>
          </h2>
        </div>

        <div className="max-w-xs text-right">
          <p className="text-stone-300 text-[10px] uppercase tracking-[0.5em] font-bold mb-4">Availability</p>
          <p className="text-stone-900 font-serif italic text-2xl">2 Exclusive Suites Available</p>
        </div>
      </header>

      {/* Editorial Room List */}
      <div className="space-y-48">
        {ROOMS.map((room, idx) => (
          <div 
            key={room.id} 
            className={`flex flex-col lg:flex-row gap-16 md:gap-32 items-center group reveal-up ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Visual Column - Showcasing the Multi-Image Gallery */}
            <div className="w-full lg:w-3/5 relative">
               <div className="mask-reveal rounded-3xl overflow-hidden aspect-[1.4/1] shadow-3xl relative">
                  <img 
                    src={room.image} 
                    className="w-full h-full object-cover img-zoom group-hover:scale-105 transition-transform duration-[3s]" 
                    alt={room.name} 
                  />
                  
                  {/* Gallery Peek Labels */}
                  <div className="absolute top-8 left-8 flex items-center gap-4">
                     <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-xl">
                        <ImageIcon size={14} className="text-stone-900" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900">{room.gallery.length} Images</span>
                     </div>
                  </div>

                  <div className="absolute inset-0 bg-[#0c1414]/10 group-hover:bg-transparent transition-all duration-1000" />
               </div>

               {/* Thumbnail Row */}
               <div className={`absolute -bottom-12 hidden md:flex items-center gap-6 ${idx % 2 !== 0 ? 'right-0' : 'left-0'}`}>
                  {room.gallery.slice(1, 4).map((img, i) => (
                    <div key={i} className="w-32 aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                      <img src={img} className="w-full h-full object-cover" alt="Suite view" />
                    </div>
                  ))}
               </div>
            </div>

            {/* Info Column */}
            <div className="w-full lg:w-2/5 space-y-12 lg:px-12">
              <div className="space-y-6">
                <span className="text-stone-300 text-[10px] uppercase tracking-[1em] font-bold block">{room.category}</span>
                <h3 className="text-4xl md:text-7xl font-serif text-stone-900 group-hover:italic transition-all duration-700 leading-[1.1]">{room.name}</h3>
                <div className="flex items-center gap-4 text-stone-300 text-[9px] uppercase tracking-widest font-bold">
                  <MapPin size={12} /> BAA ATOLL, FULHADHOO
                </div>
              </div>

              <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed">
                {room.description} Enjoy premium linens, high-speed internet, and the tranquil sounds of the island.
              </p>

              <div className="pt-12 border-t border-stone-100 flex items-center justify-between group-hover:border-stone-900 transition-colors duration-1000">
                <div className="space-y-2">
                   <p className="text-[9px] uppercase tracking-widest font-bold text-stone-300">Rate</p>
                   <p className="text-4xl font-serif text-stone-900 tracking-tighter">${room.price} <span className="text-xs font-sans opacity-30 italic">/ night</span></p>
                </div>
                <button 
                  onClick={() => onSelectRoom(room)}
                  className="flex items-center gap-6 text-[11px] uppercase tracking-[0.8em] font-bold group/btn"
                >
                  View Gallery & Book
                  <div className="w-14 h-14 rounded-full border border-stone-100 flex items-center justify-center group-hover/btn:bg-[#0c1414] group-hover/btn:text-white transition-all duration-500 shadow-lg">
                    <ChevronRight size={20} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Magazine Footer Note */}
      <footer className="mt-64 pt-32 border-t border-stone-100 text-center space-y-12">
        <p className="font-serif italic text-3xl md:text-5xl text-stone-300 max-w-4xl mx-auto leading-tight">
          "Two rooms. One island. Unlimited peace."
        </p>
        <div className="flex flex-col items-center gap-8">
           <div className="h-20 w-[1px] bg-stone-100" />
           <p className="text-[9px] uppercase tracking-[1em] text-stone-200 font-bold">Veyo Inn Journal • 2025</p>
        </div>
      </footer>
    </div>
  );
};