
import React, { useState } from 'react';
import { ROOMS } from '../constants';
import { Room } from '../types';
import { ArrowLeft, MapPin, ChevronRight, Star } from 'lucide-react';

interface BookingViewProps {
  onBack: () => void;
  onSelectRoom: (room: Room) => void;
}

export const BookingView: React.FC<BookingViewProps> = ({ onBack, onSelectRoom }) => {
  const [filter, setFilter] = useState<'all' | 'premium' | 'budget'>('all');

  const filteredRooms = ROOMS.filter(r => {
    if (filter === 'all') return true;
    if (filter === 'premium') return parseFloat(r.price) > 100;
    if (filter === 'budget') return parseFloat(r.price) <= 100;
    return true;
  });

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
            Go Back
          </button>
          
          <h2 className="text-7xl md:text-9xl lg:text-[10rem] font-serif text-stone-900 leading-[0.8] tracking-tighter">
            Pick Your <br />
            <span className="serif-italic text-stone-400">Room</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-12 items-end">
          {(['all', 'premium', 'budget'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[10px] font-bold uppercase tracking-[1em] transition-all pb-2 border-b-2 ${
                filter === f ? 'border-stone-900 text-stone-900' : 'border-transparent text-stone-300 hover:text-stone-500'
              }`}
            >
              {f === 'all' ? 'All Rooms' : f === 'premium' ? 'Best Rooms' : 'Budget Rooms'}
            </button>
          ))}
        </div>
      </header>

      {/* Editorial Room List */}
      <div className="space-y-48">
        {filteredRooms.map((room, idx) => (
          <div 
            key={room.id} 
            className={`flex flex-col lg:flex-row gap-16 md:gap-32 items-center group reveal-up ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Visual Column */}
            <div className="w-full lg:w-3/5 relative">
               <div className="mask-reveal rounded-3xl overflow-hidden aspect-[4/3] shadow-3xl">
                  <img 
                    src={room.image} 
                    className="w-full h-full object-cover img-zoom group-hover:scale-105 transition-transform duration-[3s]" 
                    alt={room.name} 
                  />
                  <div className="absolute inset-0 bg-[#0c1414]/10 group-hover:bg-transparent transition-all duration-1000" />
               </div>
               <div className={`absolute -bottom-10 hidden md:flex items-center gap-8 ${idx % 2 !== 0 ? '-left-12' : '-right-12'}`}>
                  <div className="h-px w-24 bg-stone-200" />
                  <span className="text-[10px] uppercase tracking-[1em] font-bold text-stone-200 italic">Room 0{idx + 1}</span>
               </div>
            </div>

            {/* Info Column */}
            <div className="w-full lg:w-2/5 space-y-12 lg:px-12">
              <div className="space-y-6">
                <span className="text-stone-300 text-[10px] uppercase tracking-[1em] font-bold block">{room.category}</span>
                <h3 className="text-4xl md:text-6xl font-serif text-stone-900 group-hover:italic transition-all duration-700 leading-[1.1]">{room.name}</h3>
                <div className="flex items-center gap-4 text-stone-300 text-[9px] uppercase tracking-widest font-bold">
                  <MapPin size={12} /> Baa Atoll, Maldives
                </div>
              </div>

              <p className="text-stone-500 text-base md:text-xl font-light leading-relaxed">
                {room.description}
              </p>

              <div className="pt-12 border-t border-stone-100 flex items-center justify-between group-hover:border-stone-900 transition-colors duration-1000">
                <div className="space-y-2">
                   <p className="text-[9px] uppercase tracking-widest font-bold text-stone-300">Room Price</p>
                   <p className="text-4xl font-serif text-stone-900 tracking-tighter">${room.price} <span className="text-xs font-sans opacity-30 italic">/ night</span></p>
                </div>
                <button 
                  onClick={() => onSelectRoom(room)}
                  className="flex items-center gap-6 text-[11px] uppercase tracking-[0.8em] font-bold group/btn"
                >
                  Book Now
                  <div className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center group-hover/btn:bg-[#0c1414] group-hover/btn:text-white transition-all duration-500">
                    <ChevronRight size={18} />
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
          "Find a room that feels like home. We look forward to seeing you soon."
        </p>
        <div className="flex flex-col items-center gap-8">
           <div className="h-20 w-[1px] bg-stone-100" />
           <p className="text-[9px] uppercase tracking-[1em] text-stone-200 font-bold">Veyo Inn Journal • 2025</p>
        </div>
      </footer>
    </div>
  );
};
