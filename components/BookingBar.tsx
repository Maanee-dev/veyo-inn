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
    <div className={`fixed bottom-8 left-0 right-0 z-40 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-[#0c1414] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-row items-center p-1.5 rounded-full overflow-hidden">
          
          <div className="flex flex-1 items-center">
            <button 
              onClick={onSearch}
              className="flex-1 px-6 py-4 text-left hover:bg-white/5 transition-all flex items-center gap-3 group/item border-r border-white/5"
            >
              <Calendar size={14} className="text-stone-500 group-hover/item:text-white transition-colors" />
              <div>
                <p className="text-[7px] uppercase tracking-widest text-stone-500 font-bold">Dates</p>
                <p className="text-white font-serif text-xs italic whitespace-nowrap">Select Dates</p>
              </div>
            </button>

            <button 
              onClick={onSearch}
              className="flex-1 px-6 py-4 text-left hover:bg-white/5 transition-all flex items-center gap-3 group/item"
            >
              <Users size={14} className="text-stone-500 group-hover/item:text-white transition-colors" />
              <div>
                <p className="text-[7px] uppercase tracking-widest text-stone-500 font-bold">Guests</p>
                <p className="text-white font-serif text-xs italic whitespace-nowrap">Add Adults</p>
              </div>
            </button>
          </div>

          <button 
            onClick={onSearch}
            className="h-12 w-12 md:w-auto md:px-8 bg-white text-[#0c1414] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-stone-200 transition-all rounded-full flex items-center justify-center gap-2 shadow-lg"
          >
            <span className="hidden md:block">Find Loft</span>
            <Search size={14} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};