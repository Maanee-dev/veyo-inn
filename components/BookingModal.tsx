
import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Minus, Plus, ChevronRight, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (details: any) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onSearch }) => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ adults, children, checkIn, checkOut });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xl animate-in fade-in duration-700"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-xl bg-white rounded-sm shadow-[0_80px_160px_-40px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col animate-in zoom-in-95 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {/* Header */}
        <div className="px-10 py-12 md:px-16 md:py-16 bg-[#0c1414] text-white flex justify-between items-start">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[1em] font-bold text-white/30 block">Booking</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-none tracking-tight italic">Find a Room</h2>
          </div>
          <button onClick={onClose} className="p-2 text-white/30 hover:text-white transition-colors">
            <X size={32} strokeWidth={1.5} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-10 md:p-16 space-y-12 bg-white">
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.6em] font-bold text-stone-300 block">Check-In</label>
              <div className="relative">
                <input 
                  type="date" 
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-stone-50 border-b border-stone-100 py-4 text-sm font-serif text-stone-900 focus:outline-none focus:border-stone-900 transition-colors cursor-pointer appearance-none" 
                />
                <CalendarIcon size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-200 pointer-events-none" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.6em] font-bold text-stone-300 block">Check-Out</label>
              <div className="relative">
                <input 
                  type="date" 
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-stone-50 border-b border-stone-100 py-4 text-sm font-serif text-stone-900 focus:outline-none focus:border-stone-900 transition-colors cursor-pointer appearance-none" 
                />
                <CalendarIcon size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-200 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex items-center justify-between border-b border-stone-50 pb-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-stone-900 block">Adults</span>
                <span className="text-[11px] text-stone-400 font-light">Age 12 or older</span>
              </div>
              <div className="flex items-center gap-8">
                <button 
                  type="button" 
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center hover:bg-stone-50 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="font-serif text-xl w-6 text-center">{adults}</span>
                <button 
                  type="button" 
                  onClick={() => setAdults(adults + 1)}
                  className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center hover:bg-stone-50 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-stone-50 pb-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-stone-900 block">Children</span>
                <span className="text-[11px] text-stone-400 font-light">Age 11 or younger</span>
              </div>
              <div className="flex items-center gap-8">
                <button 
                  type="button" 
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center hover:bg-stone-50 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="font-serif text-xl w-6 text-center">{children}</span>
                <button 
                  type="button" 
                  onClick={() => setChildren(children + 1)}
                  className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center hover:bg-stone-50 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#0c1414] text-white py-8 rounded-sm text-[11px] uppercase tracking-[0.8em] font-bold flex items-center justify-center gap-6 group hover:bg-stone-800 transition-all shadow-xl shadow-stone-900/10"
          >
            Check Available Rooms
            <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </form>

        {/* Footer info */}
        <div className="px-16 py-10 bg-stone-50 flex items-center gap-4">
          <User size={16} className="text-stone-300" />
          <p className="text-[10px] text-stone-400 font-light tracking-widest uppercase">
            Best local prices guaranteed
          </p>
        </div>
      </div>
    </div>
  );
};
