import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';
import { Message } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Maruhabaa! I am your Veyo Inn assistant. How can I help you plan your stay in Fulhadhoo today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Could you try again?";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Maruhabaa, it seems I'm having a little trouble connecting. Please try again or reach out to us on WhatsApp!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-6 w-[380px] h-[550px] bg-white rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] overflow-hidden border border-stone-100 flex flex-col animate-in fade-in zoom-in-95 slide-in-from-bottom-10 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {/* Header */}
          <div className="p-8 bg-[#0c1414] text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Sparkles size={18} className="text-stone-300" />
              </div>
              <div>
                <h4 className="font-serif text-lg leading-none">Veyo Assistant</h4>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mt-1 font-bold">Online & Ready</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#0c1414] text-white rounded-tr-none' 
                    : 'bg-white border border-stone-100 text-stone-700 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-white border-t border-stone-100">
            <div className="relative flex items-center">
              <input 
                type="text"
                placeholder="Ask about trips, rooms, or Fulhadhoo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full bg-stone-50 border border-stone-100 rounded-xl py-4 pl-5 pr-14 text-sm focus:outline-none focus:border-stone-900 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2.5 bg-[#0c1414] text-white rounded-lg hover:bg-stone-800 transition-colors disabled:opacity-30"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[8px] text-center mt-4 text-stone-300 uppercase tracking-widest font-bold">
              Powered by Veyo AI • Baa Atoll
            </p>
          </div>
        </div>
      )}

      {/* Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0c1414] text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-500 group relative border border-white/5"
      >
        {isOpen ? <X size={28} strokeWidth={1.5} /> : (
          <div className="relative">
            <Sparkles size={28} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-[#0c1414]" />
          </div>
        )}
      </button>
    </div>
  );
};