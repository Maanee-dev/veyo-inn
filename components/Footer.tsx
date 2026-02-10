
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
              A private homestay sanctuary on the island of Fulhadhoo. Architecture that listens to the jungle.
            </p>
            <div className="flex gap-6 opacity-40 hover:opacity-100 transition-opacity">
              <Instagram size={20} />
              <Facebook size={20} />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">Explore</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><a href="#rooms" className="hover:text-white transition-colors">The Sanctuaries</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Island Life</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">The Journey</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">Connect</h4>
            <ul className="space-y-6 text-sm font-light text-white/60">
              <li className="flex items-center gap-4"><MapPin size={16} /> Fulhadhoo, Baa Atoll</li>
              <li className="flex items-center gap-4"><Mail size={16} /> stay@veyoinn.com</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
             <div className="border border-white/10 p-10 space-y-6">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">Stay updated</p>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest font-bold">Join</button>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
           <p>© 2025 VEYO INN MALDIVES</p>
           <div className="flex gap-12">
             <a href="#">Privacy</a>
             <a href="#">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};
