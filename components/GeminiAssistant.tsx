
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { GYM_INFO } from '../constants.tsx';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    { role: 'bot', text: `Welcome to Oxygen Gym! I'm your AI fitness guide. How can I help you today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the Oxygen Gym Assistant. 
          Gym Details:
          - Location: ${GYM_INFO.address} (Gulshan-e-Iqbal)
          - Open: 24/7 Always.
          - Vibe: Energetic, Professional, Elite.
          - Equipment: Modern imported machines.
          Rules:
          - Be brief and highly motivational.
          - Use strong, action-oriented language.
          - If asked about joining, encourage them to use the "Join Now" button.
          - Keep responses under 50 words unless necessary.`,
        }
      });

      const botText = response.text || "I had a glitch in my system. Try again, champ!";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Connectivity issue. Keep training, I'll be back soon!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all transform hover:scale-110 group relative"
        >
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" />
          <MessageSquare size={26} />
          <span className="absolute right-20 glass text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 hidden md:block">
            Ask Oxygen AI
          </span>
        </button>
      ) : (
        <div className="glass w-[calc(100vw-3rem)] sm:w-[400px] h-[550px] max-h-[80vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="bg-blue-600 p-6 flex justify-between items-center relative">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-[11px]">Oxygen AI Coach</h4>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Active Now</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow p-6 overflow-y-auto space-y-6 bg-black/40 scrollbar-hide"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${msg.role === 'user' ? 'bg-blue-600 shadow-lg shadow-blue-600/20' : 'bg-zinc-800'}`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-[13px] leading-relaxed font-medium shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-zinc-900 text-gray-200 rounded-tl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-zinc-900 p-4 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                   <Loader2 size={16} className="text-blue-500 animate-spin" />
                   <span className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">Generating Advice...</span>
                 </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-zinc-900/80 backdrop-blur-md border-t border-white/5">
            <div className="flex items-center space-x-2 bg-black/40 border border-white/10 rounded-2xl p-2 px-4 focus-within:border-blue-600/50 focus-within:ring-1 focus-within:ring-blue-600/20 transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How do I get abs?"
                className="flex-grow bg-transparent text-sm text-white py-2 focus:outline-none placeholder:text-gray-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 p-2.5 rounded-xl text-white hover:bg-blue-500 transition-all disabled:opacity-30 disabled:hover:scale-100 transform active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
