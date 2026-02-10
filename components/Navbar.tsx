import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  onBookNow?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onBookNow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'The Lofts', href: '#rooms' },
    { name: 'Modern Pantry', href: '#dining' },
    { name: 'Island Life', href: '#experiences' },
    { name: 'Arrival', href: '#logistics' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 px-6 md:px-12 lg:px-24 ${
        scrolled ? 'bg-white/95 backdrop-blur-2xl border-b border-stone-100 py-4 md:py-6' : 'bg-transparent py-10 md:py-12'
      }`}>
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-4 group">
            {/* SVG Logo */}
            <div className={`transition-all duration-700 ${scrolled ? 'text-stone-900 w-10 md:w-12' : 'text-white w-12 md:w-14'}`}>
              <svg viewBox="0 0 600 407" fill="currentColor" className="w-full h-auto">
                <g transform="translate(0,407) scale(0.066667,-0.066667)">
                  <path d="M3858 4376 c8 -527 45 -601 386 -784 l166 -89 0 -183 c0 -180 1 -183 40 -214 62 -49 64 -44 55 213 -10 282 6 254 -200 364 -305 165 -336 217 -342 583 l-5 268 50 -30 c27 -16 91 -54 142 -84 193 -115 246 -210 259 -466 8 -172 10 -179 50 -209 57 -43 58 -42 42 231 -23 415 -37 435 -502 709 -65 39 -124 70 -132 70 -9 0 -12 -146 -9 -379z"/>
                  <path d="M5137 4638 c-387 -229 -433 -309 -424 -730 l5 -195 48 47 c49 47 49 48 49 196 0 258 54 348 297 491 76 46 143 83 148 83 5 0 6 -113 3 -252 -9 -372 -40 -424 -351 -594 -218 -119 -202 -90 -202 -370 0 -252 1 -255 60 -210 36 28 38 37 42 217 l5 188 151 79 c195 103 268 168 330 294 l50 100 7 386 c5 253 2 387 -7 386 -9 0 -103 -52 -211 -116z"/>
                  <path d="M3063 4008 c6 -414 48 -487 391 -689 166 -98 191 -108 191 -72 0 60 -35 99 -155 171 -231 140 -280 230 -280 515 0 89 3 162 6 162 4 0 98 -54 209 -120 316 -188 345 -237 342 -573 -2 -127 4 -235 13 -251 11 -22 334 -222 408 -253 19 -9 14 79 -7 106 -10 13 -83 61 -161 106 l-142 82 0 230 c0 338 -57 437 -348 606 -81 48 -221 129 -310 181 l-162 95 5 -296z"/>
                  <path d="M5940 4176 c-120 -70 -253 -148 -297 -172 -234 -132 -293 -244 -303 -575 l-7 -239 -130 -77 c-165 -96 -193 -122 -193 -177 0 -55 -5 -56 223 78 229 136 212 104 216 393 4 274 17 320 122 421 45 43 413 267 439 267 5 0 6 -84 1 -186 -14 -285 -56 -358 -286 -492 -126 -73 -145 -93 -145 -151 0 -54 -1 -54 191 59 321 188 379 288 390 665 10 356 35 336 -221 186z"/>
                  <path d="M2852 3284 c-36 -7 -113 -39 -172 -71 -213 -116 -369 -206 -369 -213 0 -14 591 -344 657 -367 165 -58 319 -26 542 112 176 109 152 108 323 8 150 -88 164 -93 224 -66 56 26 56 25 -170 152 -248 139 -214 136 -391 27 -245 -152 -356 -182 -498 -134 -56 19 -433 226 -433 238 1 4 65 43 143 87 244 136 357 138 579 10 123 -71 169 -80 216 -46 36 26 48 16 -150 126 -241 133 -359 165 -501 137z"/>
                  <path d="M6126 3272 c-51 -15 -162 -66 -248 -114 -201 -113 -200 -112 -167 -137 45 -34 88 -24 232 53 157 83 252 104 357 76 70 -18 345 -162 345 -180 0 -6 -95 -63 -212 -128 -312 -173 -395 -173 -676 3 -211 131 -187 131 -423 -2 -218 -123 -224 -129 -166 -156 56 -25 59 -24 216 68 174 102 140 104 337 -16 325 -197 413 -188 893 89 318 184 307 173 230 214 -31 16 -133 74 -227 128 -229 133 -319 151 -491 102z"/>
                  <path d="M2982 2446 c-47 -15 -195 -91 -330 -170 -134 -78 -267 -154 -295 -168 -62 -31 -69 -25 176 -165 372 -214 476 -215 838 -5 169 98 176 107 108 130 -42 15 -61 8 -209 -69 -229 -119 -293 -120 -518 -4 -219 113 -220 98 16 231 314 176 403 181 640 36 247 -152 247 -152 293 -129 43 22 382 209 393 218 15 10 -54 48 -90 49 -21 0 -101 -37 -178 -82 -169 -101 -136 -102 -321 14 -224 141 -352 169 -523 114z"/>
                  <path d="M5975 2460 c-76 -16 -156 -56 -309 -154 -131 -84 -117 -85 -289 19 -129 78 -177 89 -225 54 -36 -26 -53 -12 178 -143 233 -133 222 -132 408 -16 223 140 319 169 450 134 53 -15 477 -239 468 -248 -35 -34 -314 -175 -369 -187 -98 -21 -222 9 -359 89 -134 77 -148 80 -199 54 -58 -30 -66 -22 117 -125 255 -142 398 -177 552 -136 62 17 501 254 501 271 1 14 -545 329 -626 362 -80 32 -213 44 -298 26z"/>
                  <path d="M5014 2164 c-22 -56 18 -101 171 -191 l153 -90 5 -240 c7 -377 45 -429 510 -694 162 -93 297 -169 301 -169 3 0 4 123 2 274 -5 413 -53 497 -403 707 l-165 99 -5 -46 c-6 -59 10 -78 135 -151 228 -133 274 -211 288 -486 5 -100 6 -185 1 -190 -5 -5 -95 42 -199 103 -335 198 -353 226 -363 585 -4 142 -12 262 -17 267 -52 52 -406 242 -414 222z"/>
                  <path d="M3992 2069 c-248 -150 -227 -113 -227 -388 0 -343 -30 -395 -326 -571 -89 -52 -177 -105 -197 -118 l-35 -22 6 201 c8 283 50 355 287 494 114 67 173 145 135 180 -44 41 -462 -272 -527 -396 -37 -71 -76 -669 -43 -669 3 0 107 58 230 129 122 71 250 145 283 164 111 64 199 154 250 259 l50 100 -3 226 -2 225 121 67 c165 92 206 128 206 181 0 60 -12 57 -208 -62z"/>
                  <path d="M4448 1971 c-27 -20 -31 -45 -38 -213 l-7 -190 -131 -68 c-376 -197 -417 -278 -417 -834 0 -193 4 -351 8 -351 5 0 108 59 229 130 358 211 392 265 409 649 12 279 13 273 -42 231 -40 -29 -42 -37 -50 -202 -13 -267 -59 -346 -278 -479 -192 -116 -174 -134 -168 168 7 371 31 413 331 574 222 119 201 84 211 365 9 257 6 268 -57 220z"/>
                  <path d="M4710 1757 c0 -278 -18 -247 210 -369 296 -158 333 -224 342 -598 l6 -253 -73 42 c-325 187 -380 262 -380 521 0 146 -12 195 -59 231 -46 35 -50 17 -42 -217 12 -392 52 -458 404 -666 117 -69 219 -128 226 -131 7 -3 11 169 8 390 l-4 396 -42 84 c-56 115 -156 203 -337 299 l-154 82 0 176 c0 168 -2 179 -37 214 -64 64 -68 52 -68 -201z"/>
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-[12px] md:text-[14px] font-serif tracking-tight transition-all duration-700 ${scrolled ? 'text-stone-900' : 'text-white'}`}>
                Fulhadhoo Island
              </span>
              <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-700 ${scrolled ? 'text-stone-300' : 'text-white/40'}`}>
                Maldives
              </span>
            </div>
          </a>
          
          <div className="flex items-center gap-6 md:gap-12">
            <button 
              onClick={onBookNow}
              className={`hidden md:block text-[10px] font-bold uppercase tracking-[0.4em] px-8 py-4 border transition-all duration-1000 rounded-none ${
                scrolled ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-[#0c1414]'
              }`}
            >
              Reserve
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className={`p-3 transition-all duration-700 rounded-full ${scrolled ? 'text-stone-900 bg-stone-50' : 'text-white bg-white/5 backdrop-blur-3xl border border-white/10 group-hover:bg-white/10'}`}>
                <Menu size={20} strokeWidth={1.5} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay */}
      <div className={`fixed inset-0 z-[100] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 bg-[#0c1414] flex flex-col items-center justify-center text-white px-6">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 p-4 text-white/20 hover:text-white transition-colors group">
            <X size={48} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-700" />
          </button>
          
          <div className="space-y-12 md:space-y-16 text-center max-w-5xl">
            <p className="text-[10px] uppercase tracking-[2em] text-white/5 font-bold mb-16">Navigation</p>
            {navLinks.map((item, i) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block text-4xl md:text-[6vw] font-serif hover:italic hover:text-stone-400 transition-all duration-1000 leading-none tracking-tighter"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="absolute bottom-12 w-full flex flex-col md:flex-row justify-between px-10 md:px-24 items-center gap-8 text-[9px] uppercase tracking-[0.8em] text-white/10 font-bold">
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://wa.me/9607778888" className="hover:text-white transition-colors">WhatsApp</a>
            </div>
            <p className="hidden md:block">MALDIVES • BAA ATOLL • FULHADHOO</p>
          </div>
        </div>
      </div>
    </>
  );
};