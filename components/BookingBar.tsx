
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
    <div className={`fixed bottom-14 left-0 right-0 z-40 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="max-w-4xl mx-auto px-8">
        <div className="bg-white/95 backdrop-blur-3xl border border-stone-100/50 shadow-[0_60px_120px_-30px_rgba(26,43,42,0.12)] flex items-center justify-between p-1.5 rounded-sm overflow-hidden">
          
          <div className="flex flex-1 items-center divide-x divide-stone-50">
            <button className="flex-1 px-10 py-6 text-left hover:bg-stone-50/50 transition-colors group">
              <p className="text-[9px] uppercase tracking-[0.6em] text-stone-300 font-bold mb-1.5 group-hover:text-stone-500 transition-colors">Period</p>
              <p className="text-stone-900 font-serif text-sm">Oct 12 — Oct 19</p>
            </button>

            <button className="flex-1 px-10 py-6 text-left hover:bg-stone-50/50 transition-colors group">
              <p className="text-[9px] uppercase tracking-[0.6em] text-stone-300 font-bold mb-1.5 group-hover:text-stone-500 transition-colors">Group</p>
              <p className="text-stone-900 font-serif text-sm">2 Explorers</p>
            </button>
          </div>

          <button 
            onClick={onSearch}
            className="px-14 py-6 bg-[#1a2b2a] text-white text-[10px] uppercase tracking-[0.7em] font-bold hover:bg-stone-800 transition-all rounded-sm flex items-center gap-8 group"
          >
            Find space
            <div className="w-10 h-px bg-white/20 group-hover:w-16 transition-all duration-1000" />
          </button>
        </div>
      </div>
    </div>
  );
};
