
import React from 'react';
import { Room } from '../types';
import { X, Check, Wifi, Wind, Coffee, Shield, Waves, Info, Star } from 'lucide-react';

interface RoomDetailsModalProps {
  room: Room;
  onClose: () => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({ room, onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-teal-950/40 backdrop-blur-md animate-in fade-in duration-500" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-[0_80px_160px_-40px_rgba(19,78,74,0.3)] overflow-hidden flex flex-col animate-in zoom-in-95 fade-in duration-500">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-stone-900 flex items-center justify-center shadow-xl hover:bg-white transition-all"
        >
          <X size={20} />
        </button>

        <div className="flex-1 overflow-y-auto">
          {/* Header Image */}
          <div className="relative h-[300px] md:h-[400px]">
            <img 
              src={room.image} 
              alt={room.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            <div className="absolute bottom-10 left-8 md:left-16">
              <span className="bg-teal-900 text-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] mb-4 inline-block">
                {room.category}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-teal-950 tracking-tight">{room.name}</h2>
            </div>
          </div>

          <div className="p-8 md:p-16 pt-0">
            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              <div className="md:col-span-2 space-y-12">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-serif text-teal-900 mb-6 italic">About the Sanctuary</h3>
                  <p className="text-stone-500 text-base md:text-lg leading-relaxed">
                    {room.description} Nestled on the serene Fulhadhoo Island, this space offers an authentic connection to the local Maldivian way of life.
                  </p>
                </div>

                {/* Amenities Grid */}
                <div>
                  <h3 className="text-xl font-serif text-teal-900 mb-8 italic">Sanctuary Luxuries</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                    {[
                      { icon: Wind, label: 'AC & Cooling' },
                      { icon: Wifi, label: 'Fiber Wi-Fi' },
                      { icon: Coffee, label: 'Coffee Station' },
                      { icon: Shield, label: 'Digital Safe' },
                      { icon: Waves, label: 'Hot Shower' },
                      { icon: Star, label: 'Beach Towels' }
                    ].map(item => (
                      <div key={item.label} className="flex flex-col items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                          <item.icon size={18} />
                        </div>
                        <span className="text-xs font-bold text-stone-600 uppercase tracking-widest">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Policies */}
                <div className="bg-stone-50 p-8 md:p-10 rounded-[2.5rem] border border-stone-100">
                  <h3 className="text-lg font-serif text-teal-900 mb-6 flex items-center gap-3"><Info size={20} className="text-teal-600" /> Essential Information</h3>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-3">Timing</p>
                      <ul className="space-y-2 text-sm text-stone-600">
                        <li className="flex justify-between"><span>Check-in</span> <span className="font-bold text-stone-900">14:00</span></li>
                        <li className="flex justify-between"><span>Check-out</span> <span className="font-bold text-stone-900">12:00</span></li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-3">Inclusions</p>
                      <ul className="space-y-2 text-sm text-stone-600">
                        <li className="flex items-center gap-2 text-teal-700 font-medium"><Check size={14} /> Full Island Breakfast</li>
                        <li className="flex items-center gap-2 text-teal-700 font-medium"><Check size={14} /> House Reef Snorkel Gear</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Booking Card */}
              <div className="md:col-span-1">
                <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-stone-100 shadow-2xl shadow-teal-900/5 sticky top-0">
                  <div className="text-center mb-8">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2">Price for 2 guests</p>
                    <p className="text-4xl md:text-5xl font-serif text-teal-950 tracking-tight">${room.price}</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-teal-400 mt-2">Best Rate Guaranteed</p>
                  </div>

                  <div className="space-y-4 mb-10">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 text-center">
                       <p className="text-[9px] uppercase font-bold text-stone-400 tracking-widest mb-1">Stay Duration</p>
                       <p className="text-sm font-bold text-stone-900">Flexible Dates</p>
                    </div>
                  </div>

                  <button className="w-full py-5 bg-teal-900 text-white rounded-2xl font-bold text-[11px] uppercase tracking-[0.25em] hover:bg-teal-800 transition-all shadow-2xl shadow-teal-900/10 mb-6">
                    Request Booking
                  </button>

                  <div className="pt-6 border-t border-stone-100 text-center">
                    <p className="text-[10px] text-stone-400 italic">
                      Final cost subject to 16% TGST and $6 Green Tax.
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
