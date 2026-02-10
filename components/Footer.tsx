import React from 'react';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#142120] text-white py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-4xl font-serif tracking-tighter">Veyo Inn</h3>
            <p className="text-white/40 text-sm leading-relaxed font-light max-w-xs">
              A modern guest house on Fulhadhoo Island. Enjoy the beach and the jungle.
            </p>
            <div className="flex gap-6 opacity-40 hover:opacity-100 transition-opacity">
              <Instagram size={20} />
              <Facebook size={20} />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">Links</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><a href="#rooms" className="hover:text-white transition-colors">Our Rooms</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Activities</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">Arrival</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">Contact</h4>
            <ul className="space-y-6 text-sm font-light text-white/60">
              <li className="flex items-center gap-4"><MapPin size={16} /> Fulhadhoo, Maldives</li>
              <li className="flex items-center gap-4"><Mail size={16} /> stay@veyoinn.com</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
             <div className="border border-white/10 p-10 space-y-6">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 italic">Visit Us</p>
                <p className="text-sm text-white/60 font-light">Stay in a real local home in the Baa Atoll.</p>
             </div>
          </div>
        </div>

        <div className="mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
             <p>© 2025 VEYO INN MALDIVES</p>
             <p>POWERED BY <span className="text-red-600 font-bold">KUREVI.</span></p>
           </div>
           <div className="flex gap-12">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};