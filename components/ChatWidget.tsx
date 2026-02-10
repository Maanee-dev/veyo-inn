import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-6 md:right-10 z-[100] flex flex-col items-end">
      {/* WhatsApp Popup Card */}
      {isOpen && (
        <div className="mb-6 w-[300px] bg-white rounded-3xl shadow-[0_40px_80px_-20px_rgba(12,20,20,0.2)] overflow-hidden border border-stone-100 animate-in fade-in zoom-in-95 slide-in-from-bottom-10 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="p-8 space-y-8">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-stone-300 block">Assistance</span>
                <h4 className="text-2xl font-serif text-stone-900 leading-tight">Hello, <br/><span className="serif-italic text-stone-400">Guest</span></h4>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-stone-300 hover:text-stone-900 transition-colors pt-1">
                <X size={20} strokeWidth={1} />
              </button>
            </div>
            
            <p className="text-stone-500 text-xs font-light leading-relaxed">
              Have questions about your stay? Message us on WhatsApp for 24/7 support.
            </p>

            <a 
              href="https://wa.me/9607778888" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#0c1414] text-white p-5 rounded-2xl hover:bg-stone-800 transition-all shadow-lg"
            >
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest font-bold text-white/40 mb-0.5">WhatsApp</span>
                <span className="text-xs font-serif">+960 777 8888</span>
              </div>
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <div className="px-8 py-4 bg-stone-50 text-[7px] uppercase tracking-[0.4em] text-stone-300 font-bold text-center">
            Fulhadhoo Island • Maldives
          </div>
        </div>
      )}

      {/* Scaled-down Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0c1414] text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-500 group relative border border-white/5"
      >
        {isOpen ? <X size={22} strokeWidth={1.5} /> : (
          <div className="relative">
            <MessageCircle size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-stone-400 rounded-full border-2 border-[#0c1414]" />
          </div>
        )}
      </button>
    </div>
  );
};