import React, { useState } from 'react';
import { Room } from '../types';
import { X, Wifi, Wind, Coffee, Shield, Waves, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface RoomDetailsModalProps {
  room: Room;
  onClose: () => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({ room, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => setActiveImage((prev) => (prev + 1) % room.gallery.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + room.gallery.length) % room.gallery.length);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-12">
      <div 
        className="absolute inset-0 bg-stone-900/80 backdrop-blur-xl animate-in fade-in duration-1000" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-7xl h-full sm:h-auto sm:max-h-[90vh] bg-white rounded-none sm:rounded-sm shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-20 duration-1000">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 sm:top-10 sm:right-10 z-[210] flex items-center gap-4 sm:gap-6 group"
        >
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.6em] font-bold text-white md:text-stone-400 group-hover:text-stone-900 transition-colors hidden sm:block">Close</span>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white md:bg-stone-50 text-stone-900 flex items-center justify-center shadow-2xl group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
            <X size={20} strokeWidth={1.5} />
          </div>
        </button>

        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth pb-12 sm:pb-0">
          <div className="relative h-[45vh] sm:h-[60vh] md:h-[70vh] group/gallery bg-stone-100">
            <img 
              src={room.gallery[activeImage]} 
              alt={`${room.name}`} 
              className="w-full h-full object-cover transition-all duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
            
            <div className="absolute inset-x-6 sm:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover/gallery:opacity-100 transition-all duration-700">
              <button 
                onClick={prevImage}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-2xl text-white flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all pointer-events-auto border border-white/20"
              >
                <ChevronLeft size={24} strokeWidth={1} />
              </button>
              <button 
                onClick={nextImage}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-2xl text-white flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all pointer-events-auto border border-white/20"
              >
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            </div>

            <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-24 right-6 sm:right-24">
              <div className="flex items-center gap-4 sm:gap-8 mb-4 sm:mb-8 overflow-hidden">
                <span className="bg-[#0c1414] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-sm text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] inline-block">
                  {room.category}
                </span>
                <div className="h-px grow bg-stone-900/10" />
              </div>
              <h2 className="text-3xl sm:text-7xl md:text-9xl font-serif text-[#0c1414] tracking-tighter leading-[0.9] mb-4">{room.name}</h2>
            </div>
          </div>

          <div className="p-6 sm:p-12 md:p-24 lg:p-32 pt-12 md:pt-32">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-40 items-start">
              
              <div className="lg:col-span-7 space-y-16 md:space-y-32">
                <div className="space-y-8 md:space-y-12">
                  <div className="flex items-center gap-6">
                    <span className="text-stone-300 text-[10px] uppercase tracking-[0.8em] font-bold">The Space</span>
                    <div className="h-[1px] w-12 md:w-20 bg-stone-100" />
                  </div>
                  <p className="text-stone-500 text-lg sm:text-xl md:text-3xl font-light leading-snug tracking-tight">
                    {room.description} This loft is built with local materials and designed for simple, modern living. Enjoy a peaceful stay with everything you need.
                  </p>
                </div>

                <div className="space-y-12 md:space-y-16 pt-12 md:pt-16 border-t border-stone-50">
                  <h3 className="text-xl md:text-2xl font-serif text-[#0c1414] italic tracking-tight">Room Features</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                    {[
                      { icon: Wind, label: 'AC & Cooling' },
                      { icon: Wifi, label: 'Fast Wi-Fi' },
                      { icon: Coffee, label: 'Private Kitchen' },
                      { icon: Shield, label: 'Safe & Secure' },
                      { icon: Waves, label: 'Filtered Water' },
                      { icon: Star, label: 'Daily Cleaning' }
                    ].map(item => (
                      <div key={item.label} className="flex flex-col items-start gap-4 md:gap-6 group">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 border border-stone-100 group-hover:bg-stone-900 transition-all duration-700">
                          <item.icon size={18} strokeWidth={1} />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-bold text-stone-400 uppercase tracking-[0.1em] leading-tight">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-[#fcfbf9] p-8 sm:p-12 md:p-20 rounded-none sm:rounded-sm border border-stone-100 shadow-xl sticky top-6 md:top-12">
                  <div className="text-center mb-10 md:mb-16 pb-10 md:pb-16 border-b border-stone-100">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.8em] font-bold text-stone-300 mb-6 md:mb-8">Nightly Price</p>
                    <div className="flex flex-col items-center">
                      <p className="text-6xl md:text-8xl font-serif text-[#0c1414] tracking-tighter mb-4">${room.price}</p>
                      <div className="w-10 h-px bg-stone-200 mb-4" />
                      <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">All Included</p>
                    </div>
                  </div>

                  <div className="space-y-6 md:space-y-10 mb-10 md:mb-16">
                    <div className="flex justify-between items-center text-sm tracking-tight text-stone-600">
                      <span className="uppercase tracking-[0.1em] font-bold text-stone-300 text-[8px] md:text-[9px]">Guests</span>
                      <span className="font-serif italic text-base md:text-lg">Up to 2 Guests</span>
                    </div>
                    <div className="flex justify-between items-center text-sm tracking-tight text-stone-600">
                      <span className="uppercase tracking-[0.1em] font-bold text-stone-300 text-[8px] md:text-[9px]">Breakfast</span>
                      <span className="font-serif italic text-base md:text-lg">Fresh Daily</span>
                    </div>
                  </div>

                  <button className="w-full py-6 md:py-8 bg-[#0c1414] text-white rounded-none font-bold text-[11px] md:text-[12px] uppercase tracking-[0.6em] hover:bg-stone-800 transition-all shadow-2xl mb-8 md:mb-12">
                    Book This Loft
                  </button>

                  <div className="text-center space-y-4">
                    <p className="text-[8px] md:text-[9px] text-stone-300 max-w-[240px] mx-auto leading-relaxed">
                      Your stay supports local island projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};