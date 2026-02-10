
import React, { useState, useEffect } from 'react';

interface BookingBarProps {
  onSearch?: () => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onSearch }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-12 left-0 right-0 z-40 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/95 backdrop-blur-3xl border border-stone-100 shadow-[0_60px_120px_-30px_rgba(18,29,29,0.15)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-2.5 rounded-[2.5rem] overflow-hidden group">
          
          <div className="flex flex-1 items-stretch sm:items-center divide-x divide-stone-100/50 border-b sm:border-b-0 border-stone-100">
            <button 
              onClick={onSearch}
              className="flex-1 px-8 md:px-16 py-8 md:py-12 text-left hover:bg-stone-50 transition-all relative overflow-hidden group/btn"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#0c1414] group-hover/btn:h-full transition-all duration-700" />
              <p className="text-[9px] uppercase tracking-[1em] text-stone-300 font-bold mb-3 group-hover:text-stone-500 transition-colors">Calendar</p>
              <p className="text-stone-900 font-serif text-base lg:text-lg italic">Select Period</p>
            </button>

            <button 
              onClick={onSearch}
              className="flex-1 px-8 md:px-16 py-8 md:py-12 text-left hover:bg-stone-50 transition-all relative overflow-hidden group/btn"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#0c1414] group-hover/btn:h-full transition-all duration-700" />
              <p className="text-[9px] uppercase tracking-[1em] text-stone-300 font-bold mb-3 group-hover:text-stone-500 transition-colors">Guests</p>
              <p className="text-stone-900 font-serif text-base lg:text-lg italic">Add Explorers</p>
            </button>
          </div>

          <button 
            onClick={onSearch}
            className="px-12 md:px-24 py-8 md:py-12 bg-[#0c1414] text-white text-[11px] uppercase tracking-[1em] font-bold hover:bg-stone-800 transition-all rounded-[2rem] sm:rounded-none flex items-center justify-center gap-8 group/main mt-3 sm:mt-0 shadow-2xl"
          >
            Check Space
            <div className="hidden lg:block w-16 h-px bg-white/20 group-hover/main:w-28 group-hover/main:bg-white transition-all duration-1000" />
          </button>
        </div>
      </div>
    </div>
  );
};
