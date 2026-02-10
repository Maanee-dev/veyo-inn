
import React, { useState, useEffect } from 'react';

interface BookingBarProps {
  onSearch?: () => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onSearch }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 z-40 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="bg-white/95 backdrop-blur-3xl border border-stone-100/50 shadow-[0_60px_120px_-30px_rgba(18,29,29,0.1)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-2 rounded-2xl md:rounded-sm overflow-hidden">
          
          <div className="flex flex-1 items-stretch sm:items-center divide-x divide-stone-50 border-b sm:border-b-0 border-stone-50">
            <button 
              onClick={onSearch}
              className="flex-1 px-6 md:px-14 py-6 md:py-10 text-left hover:bg-stone-50/50 transition-all group"
            >
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.7em] text-stone-300 font-bold mb-2 group-hover:text-stone-500 transition-colors">Travel Dates</p>
              <p className="text-stone-900 font-serif text-sm md:text-base">Select period</p>
            </button>

            <button 
              onClick={onSearch}
              className="flex-1 px-6 md:px-14 py-6 md:py-10 text-left hover:bg-stone-50/50 transition-all group"
            >
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.7em] text-stone-300 font-bold mb-2 group-hover:text-stone-500 transition-colors">Guests</p>
              <p className="text-stone-900 font-serif text-sm md:text-base">Add explorers</p>
            </button>
          </div>

          <button 
            onClick={onSearch}
            className="px-10 md:px-20 py-6 md:py-10 bg-[#121d1d] text-white text-[10px] md:text-[11px] uppercase tracking-[0.8em] font-bold hover:bg-stone-800 transition-all rounded-xl sm:rounded-none md:rounded-sm flex items-center justify-center gap-6 md:gap-12 group mt-2 sm:mt-0"
          >
            Check Space
            <div className="hidden lg:block w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-white/40 transition-all duration-1000" />
          </button>
        </div>
      </div>
    </div>
  );
};
