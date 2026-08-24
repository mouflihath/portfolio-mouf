import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User, MessageCircle, RefreshCw, ChevronDown, Minimize2 } from 'lucide-react';
import { DEVELOPER_AVATAR } from '../assets/avatar';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  '⚡ Parle-moi du projet Energy Group',
  '🚴 Qu\'est-ce que Les Coursiers du Coin ?',
  '🛠️ Quelle est ta stack technique ?',
  '💬 Comment contacter Mouflihath sur WhatsApp ?',
  '📍 Où es-tu basée et quelle est ta disponibilité ?',
];

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Bonjour ! 👋 Je suis l'assistant IA de **SADIKOU Mouflihath**.\n\nJe peux vous renseigner sur ses projets majeurs (*Energy Group*, *Les Coursiers du Coin*, *ARIYA*), ses compétences Full-Stack (Laravel, React, MySQL) ou vous orienter pour vos besoins de développement. Que souhaitez-vous savoir ?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    soundFX.playClick();

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversationHistory: messages.map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur de communication avec le serveur.');
      }

      const data = await response.json();
      const botReply = data.reply || "Je suis à votre entière disposition pour répondre à toutes vos questions sur Mouflihath.";

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `Désolé, une petite erreur est survenue. Vous pouvez contacter directement Mouflihath sur WhatsApp au **01 42 81 55 62** !`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    soundFX.playClick();
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: `Conversation réinitialisée. Comment puis-je vous aider concernant le travail et les projets de **SADIKOU Mouflihath** ?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-5 right-5 z-50">
        {!isOpen && (
          <button
            onClick={() => {
              soundFX.playClick();
              setIsOpen(true);
            }}
            className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#4B5320] hover:bg-[#3A4B28] text-white shadow-xl shadow-[#4B5320]/30 hover:scale-105 transition-all cursor-pointer border-2 border-[#A3B899]"
            aria-label="Ouvrir le Chatbot IA"
          >
            {/* Avatar thumbnail */}
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white shrink-0">
              <img
                src={DEVELOPER_AVATAR}
                alt="Assistant Mouflihath"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-white rounded-full" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-xs tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Assistant IA
              </span>
              <span className="text-[10px] font-mono text-[#E2EBDC]">Discuter en direct</span>
            </div>

            {/* Notification ripple indicator */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500" />
            </span>
          </button>
        )}
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] w-[calc(100vw-32px)] sm:w-[410px] h-[580px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border-2 border-[#4B5320] flex flex-col overflow-hidden animate-fade-in">
          
          {/* Header */}
          <div className="px-4 py-3.5 bg-[#4B5320] text-white flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#A3B899] shrink-0 bg-white">
                <img
                  src={DEVELOPER_AVATAR}
                  alt="Mouflihath SADIKOU"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-white rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-extrabold text-sm tracking-wide">
                    Assistant Mouflihath
                  </h3>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/20 font-bold">
                    IA
                  </span>
                </div>
                <p className="text-[11px] font-mono text-[#E2EBDC] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  En ligne • Réponses instantanées
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearHistory}
                title="Effacer l'historique"
                className="p-1.5 rounded-lg hover:bg-white/10 text-[#E2EBDC] hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  soundFX.playClick();
                  setIsOpen(false);
                }}
                title="Fermer"
                className="p-1.5 rounded-lg hover:bg-white/10 text-[#E2EBDC] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick WhatsApp Action Banner */}
          <div className="px-3.5 py-1.5 bg-[#F4F7F2] border-b border-[#A3B899]/50 flex items-center justify-between text-[11px] font-mono text-slate-700">
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-[#4B5320]" />
              WhatsApp : <strong>01 42 81 55 62</strong>
            </span>
            <a
              href="https://wa.me/2290142815562"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4B5320] font-bold hover:underline"
            >
              Écrire 💬
            </a>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/50">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {isBot && (
                    <div className="w-7 h-7 rounded-full bg-[#E2EBDC] border border-[#A3B899] flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-[#4B5320]" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                      isBot
                        ? 'bg-white border border-[#A3B899]/60 text-slate-800 rounded-tl-sm'
                        : 'bg-[#4B5320] text-white rounded-tr-sm'
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-normal">
                      {msg.text}
                    </div>
                    <div
                      className={`text-[9px] font-mono mt-1 text-right ${
                        isBot ? 'text-slate-400' : 'text-[#E2EBDC]'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {!isBot && (
                    <div className="w-7 h-7 rounded-full bg-[#4B5320] flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading typing bubble */}
            {isLoading && (
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-full bg-[#E2EBDC] border border-[#A3B899] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-[#4B5320]" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white border border-[#A3B899]/60 text-slate-500 text-xs flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4B5320] animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4B5320] animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4B5320] animate-bounce" />
                  <span className="text-[11px] font-mono ml-1 text-slate-400">Rédaction en cours...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Suggestions */}
          {messages.length <= 3 && (
            <div className="px-3 py-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 rounded-full bg-[#F4F7F2] hover:bg-[#E2EBDC] border border-[#A3B899]/60 text-[11px] font-mono text-slate-700 whitespace-nowrap transition-colors cursor-pointer shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Posez une question sur Mouflihath..."
                disabled={isLoading}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#F4F7F2] border border-[#A3B899]/60 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#4B5320] focus:ring-1 focus:ring-[#4B5320] transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="p-2.5 rounded-xl bg-[#4B5320] hover:bg-[#3A4B28] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md shrink-0"
                aria-label="Envoyer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
};
