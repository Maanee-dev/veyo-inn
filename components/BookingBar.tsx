import React, { useState, useEffect } from 'react';
import { Calendar, Users, Search } from 'lucide-react';

interface BookingBarProps {
  onSearch?: () => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onSearch }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-10 left-0 right-0 z-40 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#0c1414]/95 backdrop-blur-2xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] flex flex-row items-center justify-between p-2 rounded-full overflow-hidden group">
          
          <div className="flex flex-1 items-center divide-x divide-white/5">
            <button 
              onClick={onSearch}
              className="flex-1 px-8 py-5 text-left hover:bg-white/5 transition-all flex items-center gap-4 group/item"
            >
              <Calendar size={14} className="text-white/20 group-hover/item:text-white transition-colors" />
              <div>
                <p className="text-[8px] uppercase tracking-widest text-white/40 font-bold mb-1">Check In/Out</p>
                <p className="text-white font-serif text-sm italic">Select Dates</p>
              </div>
            </button>

            <button 
              onClick={onSearch}
              className="flex-1 px-8 py-5 text-left hover:bg-white/5 transition-all flex items-center gap-4 group/item"
            >
              <Users size={14} className="text-white/20 group-hover/item:text-white transition-colors" />
              <div>
                <p className="text-[8px] uppercase tracking-widest text-white/40 font-bold mb-1">Guests</p>
                <p className="text-white font-serif text-sm italic">Add Adults</p>
              </div>
            </button>
          </div>

          <button 
            onClick={onSearch}
            className="h-16 px-10 bg-white text-[#0c1414] text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-stone-200 transition-all rounded-full flex items-center justify-center gap-4 group/btn shadow-xl"
          >
            Find Loft
            <Search size={16} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};