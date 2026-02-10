
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from '../constants';
import { Message } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Maruhabaa! (Welcome). I am your Veyo Inn Concierge. How can I help you find tranquility on Fulhadhoo today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const history = messages.map(m => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_PROMPT + "\n\nEnhance your responses with local Dhivehi greetings and a very serene, helpful islander vibe.",
        }
      });

      const aiText = response.text || "I'm sorry, the ocean breeze must have interrupted our connection. Could you say that again?";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'I encountered a small hiccup. Please reach out to us on WhatsApp at +960 777 8888 for immediate assistance.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-6 w-[380px] md:w-[420px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(19,78,74,0.2)] overflow-hidden border border-stone-100 flex flex-col animate-in fade-in zoom-in-95 slide-in-from-bottom-10 duration-500 ease-out">
          {/* Header */}
          <div className="bg-teal-900 px-8 py-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Sparkles size={100} />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Bot size={26} className="text-teal-200" />
                </div>
                <div>
                  <h4 className="font-serif text-xl tracking-tight">Veyo Concierge</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-teal-300/80 font-bold">Island Assistant</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/10 p-2.5 rounded-2xl transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages container with sand-like background */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-[#fafaf9]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-4 text-[14px] leading-relaxed transition-all ${
                  m.role === 'user' 
                    ? 'bg-teal-900 text-white rounded-3xl rounded-tr-none shadow-lg shadow-teal-900/10' 
                    : 'bg-white text-stone-700 shadow-sm border border-stone-100 rounded-3xl rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-4 rounded-3xl rounded-tl-none shadow-sm border border-stone-100 flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce"></div>
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-stone-400 font-bold">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input - More like a search bar */}
          <div className="p-6 bg-white border-t border-stone-50">
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Ask about speedboat times, rooms..."
                className="w-full bg-stone-50 rounded-2xl pl-6 pr-14 py-4 text-sm border border-stone-100 focus:outline-none focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500/20 transition-all placeholder:text-stone-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 w-10 h-10 rounded-xl bg-teal-900 text-white flex items-center justify-center hover:bg-teal-800 transition-all disabled:opacity-30 shadow-lg"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button - Floating and Elegant */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 rounded-[2rem] bg-teal-950 text-white shadow-[0_20px_40px_rgba(19,78,74,0.3)] flex items-center justify-center hover:scale-105 hover:-translate-y-1 transition-all duration-300 active:scale-95 group relative"
      >
        {isOpen ? <X size={28} /> : (
          <>
            <MessageCircle size={32} className="group-hover:rotate-6 transition-transform" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-teal-400 rounded-full border-4 border-teal-950 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-teal-950 rounded-full animate-ping" />
            </div>
          </>
        )}
      </button>
    </div>
  );
};
