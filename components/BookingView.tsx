
import React, { useState } from 'react';
import { ROOMS } from '../constants';
import { Room } from '../types';
import { ArrowLeft, Star, MapPin, CheckCircle, Wifi, Wind, Coffee, Utensils, ShieldCheck, ChevronRight } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-6">
          <button 
            onClick={onBack}
            className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-all shadow-sm"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-teal-950">Select Your Sanctuary</h2>
            <p className="text-stone-500 text-sm mt-1">Found {filteredRooms.length} sanctuaries matching your search</p>
          </div>
        </div>
        
        <div className="flex bg-stone-100 p-1.5 rounded-2xl border border-stone-200">
          {(['all', 'premium', 'budget'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                filter === f ? 'bg-white text-teal-900 shadow-md' : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {f === 'all' ? 'All Rooms' : f === 'premium' ? 'Premium' : 'Value'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-12">
        {/* Sidebar Filters - Desktop */}
        <div className="hidden lg:block space-y-10">
          <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm">
            <h4 className="font-serif text-xl text-teal-950 mb-6">Popular Filters</h4>
            <div className="space-y-4">
              {['Breakfast Included', 'Free Wi-Fi', 'Garden View', 'UNESCO Zone'].map(label => (
                <label key={label} className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-6 h-6 rounded-lg border-2 border-stone-100 group-hover:border-teal-200 transition-colors flex items-center justify-center">
                    <CheckCircle size={14} className="text-teal-600 opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>
                  <span className="text-sm text-stone-600 group-hover:text-teal-900 transition-colors">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-[2.5rem] border border-teal-100">
            <div className="w-12 h-12 rounded-2xl bg-teal-900 text-white flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-serif text-xl text-teal-950 mb-4 italic">Maldivian Trust</h4>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Approved by Ministry of Tourism. Your payment is protected by our secure local booking protocol.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-teal-700">
              <Star size={12} fill="currentColor" /> Certified Safe Stay
            </div>
          </div>
        </div>

        {/* Results List */}
        <div className="lg:col-span-3 space-y-8">
          {filteredRooms.map((room) => (
            <div key={room.id} className="group bg-white rounded-[2.5rem] md:rounded-[3rem] border border-stone-100 overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(19,78,74,0.08)] transition-all duration-700 flex flex-col md:flex-row">
              <div className="md:w-80 h-64 md:h-auto overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
              </div>
              
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-teal-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{room.category}</span>
                      <h3 className="text-2xl md:text-3xl font-serif text-teal-950 group-hover:text-teal-800 transition-colors">{room.name}</h3>
                    </div>
                    <div className="flex gap-1 text-teal-500">
                       <Star size={14} fill="currentColor" />
                       <Star size={14} fill="currentColor" />
                       <Star size={14} fill="currentColor" />
                       <Star size={14} fill="currentColor" />
                       <Star size={14} fill="currentColor" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-stone-400 text-xs mb-6">
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> Fulhadhoo Island</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Certified Homestay</span>
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-8">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-stone-500 text-xs font-semibold bg-stone-50 px-3 py-1.5 rounded-full"><Wifi size={14} /> Free Wi-Fi</div>
                    <div className="flex items-center gap-2 text-stone-500 text-xs font-semibold bg-stone-50 px-3 py-1.5 rounded-full"><Wind size={14} /> Air Conditioning</div>
                    <div className="flex items-center gap-2 text-stone-500 text-xs font-semibold bg-stone-50 px-3 py-1.5 rounded-full"><Coffee size={14} /> Tea/Coffee</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-stone-50">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Price per night</p>
                    <p className="text-3xl font-serif text-teal-950 tracking-tight">${room.price} <span className="text-xs font-sans font-normal opacity-50">/night</span></p>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button 
                      onClick={() => onSelectRoom(room)}
                      className="flex-1 sm:flex-none px-8 py-4 rounded-2xl bg-stone-50 text-stone-600 font-bold text-[10px] uppercase tracking-widest hover:bg-stone-100 transition-all border border-stone-100"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => onSelectRoom(room)}
                      className="flex-1 sm:flex-none px-10 py-4 rounded-2xl bg-teal-900 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-teal-800 transition-all shadow-xl shadow-teal-900/10 flex items-center justify-center gap-3"
                    >
                      Reserve <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
