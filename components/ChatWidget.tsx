
import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      {/* WhatsApp Popup Card */}
      {isOpen && (
        <div className="mb-8 w-[340px] bg-white rounded-[2rem] shadow-[0_60px_120px_-30px_rgba(12,20,20,0.2)] overflow-hidden border border-stone-100 animate-in fade-in zoom-in-95 slide-in-from-bottom-10 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="p-10 space-y-10">
            <div className="flex justify-between items-start">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-stone-300 block">Need Help?</span>
                <h4 className="text-3xl font-serif text-stone-900 leading-tight">Hello, <br/><span className="serif-italic text-stone-400">Guest</span></h4>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-stone-300 hover:text-stone-900 transition-colors">
                <X size={24} strokeWidth={1} />
              </button>
            </div>
            
            <p className="text-stone-500 text-sm font-light leading-relaxed">
              Have questions? Our team is available 24/7 on WhatsApp to help with your trip or room bookings.
            </p>

            <a 
              href="https://wa.me/9607778888" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#0c1414] text-white p-6 rounded-2xl hover:bg-stone-800 transition-all shadow-xl shadow-stone-900/10"
            >
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest font-bold text-white/40 mb-1">WhatsApp Us</span>
                <span className="text-sm font-serif">+960 777 8888</span>
              </div>
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          <div className="px-10 py-6 bg-stone-50 text-[8px] uppercase tracking-[0.6em] text-stone-300 font-bold text-center">
            Fulhadhoo Island • Maldives
          </div>
        </div>
      )}

      {/* Elegant Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 rounded-full bg-[#0c1414] text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-500 group relative border border-white/5"
      >
        {isOpen ? <X size={28} strokeWidth={1} /> : (
          <div className="relative">
            <MessageCircle size={32} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-stone-400 rounded-full border-2 border-[#0c1414]" />
          </div>
        )}
      </button>
    </div>
  );
};
