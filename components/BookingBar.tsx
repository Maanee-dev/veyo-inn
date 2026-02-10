
import React, { useState, useEffect } from 'react';

interface BookingBarProps {
  onSearch?: () => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onSearch }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 150);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-12 left-0 right-0 z-40 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="max-w-4xl mx-auto px-8">
        <div className="bg-white/95 backdrop-blur-3xl border border-stone-200/50 shadow-[0_40px_100px_-20px_rgba(26,43,42,0.1)] flex items-center justify-between p-1.5 rounded-sm overflow-hidden">
          
          <div className="flex flex-1 items-center divide-x divide-stone-100">
            <button className="flex-1 px-8 py-5 text-left hover:bg-stone-50 transition-colors group">
              <p className="text-[8px] uppercase tracking-[0.5em] text-stone-400 font-bold mb-1 group-hover:text-stone-600 transition-colors">Selection Period</p>
              <p className="text-stone-900 font-serif text-sm">Oct 12 — Oct 19</p>
            </button>

            <button className="flex-1 px-8 py-5 text-left hover:bg-stone-50 transition-colors group">
              <p className="text-[8px] uppercase tracking-[0.5em] text-stone-400 font-bold mb-1 group-hover:text-stone-600 transition-colors">Group</p>
              <p className="text-stone-900 font-serif text-sm">2 Sanctuaries</p>
            </button>
          </div>

          <button 
            onClick={onSearch}
            className="px-12 py-5 bg-[#1a2b2a] text-white text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-stone-800 transition-all rounded-sm flex items-center gap-6 group"
          >
            Find space
            <div className="w-8 h-px bg-white/20 group-hover:w-14 transition-all duration-700" />
          </button>
        </div>
      </div>
    </div>
  );
};
