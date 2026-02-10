import React from 'react';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c1414] text-white py-24 md:py-48 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 space-y-10">
            <div className="flex flex-col">
              <h3 className="text-4xl md:text-5xl font-serif tracking-tighter">Veyo Inn</h3>
              <span className="text-[10px] uppercase tracking-[1em] font-bold text-white/30 mt-4">Fulhadhoo Island</span>
            </div>
            <p className="text-white/40 text-sm md:text-base leading-relaxed font-light max-w-sm">
              A local home on a beautiful island. We offer a simple, peaceful place to stay in the Maldives. Come enjoy the beach and the jungle with us.
            </p>
            <div className="flex gap-8 text-white/20">
              <a href="#" className="hover:text-white transition-colors duration-500"><Instagram size={22} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white transition-colors duration-500"><Facebook size={22} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><a href="#rooms" className="hover:text-white transition-colors">Our Rooms</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Things to Do</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">How to Get Here</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20">Find Us</h4>
            <ul className="space-y-6 text-sm font-light text-white/60">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="shrink-0 text-white/20" /> 
                <span>Baa Atoll, Fulhadhoo Island,<br />Republic of Maldives</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="shrink-0 text-white/20" /> 
                <span>stay@veyoinn.com</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
             <div className="border border-white/10 p-10 space-y-6 rounded-2xl">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 italic">Visit Us</p>
                <p className="text-sm text-white/50 font-light leading-relaxed">Experience a real local home in the heart of the ocean.</p>
                <div className="h-px w-12 bg-white/10" />
             </div>
          </div>
        </div>

        <div className="mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
             <p>© 2025 VEYO INN MALDIVES</p>
             <p>DESIGNED BY <span className="text-red-600 font-black">KUREVI.</span></p>
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