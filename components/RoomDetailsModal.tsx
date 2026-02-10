
import React, { useState } from 'react';
import { Room } from '../types';
import { X, Check, Wifi, Wind, Coffee, Shield, Waves, Star, ChevronLeft, ChevronRight, Layout, Maximize } from 'lucide-react';

interface RoomDetailsModalProps {
  room: Room;
  onClose: () => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({ room, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => setActiveImage((prev) => (prev + 1) % room.gallery.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + room.gallery.length) % room.gallery.length);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 sm:p-6 md:p-12">
      <div 
        className="absolute inset-0 bg-[#0c1414]/95 backdrop-blur-2xl animate-in fade-in duration-1000" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-[1600px] h-full sm:h-[85vh] bg-white overflow-hidden flex flex-col sm:flex-row animate-in slide-in-from-bottom-24 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
        
        {/* Gallery Column */}
        <div className="relative w-full sm:w-[55%] h-[40vh] sm:h-auto bg-stone-100 overflow-hidden group/gallery">
          <img 
            src={room.gallery[activeImage]} 
            className="w-full h-full object-cover transition-all duration-[2.5s] ease-out"
            alt={room.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1414]/60 via-transparent to-transparent opacity-40" />
          
          <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover/gallery:opacity-100 transition-all duration-700">
            <button onClick={prevImage} className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-2xl text-white flex items-center justify-center hover:bg-white hover:text-[#0c1414] transition-all pointer-events-auto border border-white/20">
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <button onClick={nextImage} className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-2xl text-white flex items-center justify-center hover:bg-white hover:text-[#0c1414] transition-all pointer-events-auto border border-white/20">
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>

          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-white/40">{room.category}</span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-none mb-4">{room.name}</h2>
          </div>
          
          <div className="absolute top-8 left-8 flex items-center gap-4 text-white/40 text-[9px] font-bold uppercase tracking-widest">
            <Maximize size={14} strokeWidth={1} />
            Gallery {activeImage + 1} / {room.gallery.length}
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-1 overflow-y-auto bg-white p-8 md:p-20 lg:p-32 relative">
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 z-[210] flex items-center gap-4 group"
          >
            <span className="text-[10px] uppercase tracking-[1em] font-bold text-stone-300 group-hover:text-stone-900 transition-colors hidden sm:block">Exit</span>
            <div className="w-12 h-12 rounded-full border border-stone-100 text-stone-900 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
              <X size={20} strokeWidth={1.5} />
            </div>
          </button>

          <div className="max-w-3xl space-y-20 md:space-y-32">
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <Layout size={18} strokeWidth={1} className="text-stone-300" />
                <span className="text-[11px] uppercase tracking-[0.6em] font-bold text-stone-900">Architecture Log</span>
              </div>
              <p className="text-stone-500 text-lg md:text-2xl font-light leading-relaxed tracking-tight">
                {room.description}
              </p>
            </div>

            {/* Vertical Split Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-20 border-t border-stone-100 relative">
               <div className="absolute -top-4 left-0 text-[9px] uppercase tracking-[1em] font-bold text-stone-200">The Vertical Split</div>
               <div className="space-y-6">
                  <h4 className="text-stone-900 font-serif text-3xl italic tracking-tight">Level 01 <span className="text-stone-200 ml-4">—</span></h4>
                  <p className="text-stone-400 text-sm md:text-base leading-relaxed tracking-tight">The social tier. Featuring your private entrance lounge, designer washroom with rain shower, and built-in storage.</p>
               </div>
               <div className="space-y-6">
                  <h4 className="text-stone-900 font-serif text-3xl italic tracking-tight">Level 02 <span className="text-stone-200 ml-4">—</span></h4>
                  <p className="text-stone-400 text-sm md:text-base leading-relaxed tracking-tight">The sleep tier. A floating mezzanine protected by glass, featuring a king-sized sanctuary elevated into the rafters.</p>
               </div>
            </div>

            <div className="space-y-16">
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900 tracking-tight italic">Sanctuary Inclusions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {room.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-6 group">
                    <div className="w-1.5 h-1.5 bg-stone-200 group-hover:bg-stone-900 transition-colors" />
                    <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-stone-400 group-hover:text-stone-900 transition-colors">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-24 border-t border-stone-100">
               <div className="flex flex-col sm:flex-row items-center justify-between gap-12">
                  <div className="text-center sm:text-left">
                     <p className="text-[10px] uppercase tracking-[1em] font-bold text-stone-300 mb-4">Investment</p>
                     <p className="text-5xl md:text-7xl font-serif text-stone-900 tracking-tighter">${room.price} <span className="text-xs uppercase tracking-widest font-bold opacity-30 italic">/ night</span></p>
                  </div>
                  <button className="px-16 py-8 bg-[#0c1414] text-white font-bold text-[11px] uppercase tracking-[1.2em] hover:bg-stone-800 transition-all shadow-3xl">
                    Inquire Space
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
