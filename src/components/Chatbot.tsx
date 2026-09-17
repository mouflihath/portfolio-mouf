import React, { useState } from 'react';
import { X, Send, CheckCheck, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { DEVELOPER_AVATAR } from '../assets/avatar';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

// Authentic Official WhatsApp SVG Icon
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const PRESET_TOPICS = [
  {
    label: '💼 Recrutement & Opportunité',
    text: "Bonjour Mouflihath, j'ai consulté votre CV et votre portfolio, et je souhaiterais vous proposer une opportunité professionnelle.",
  },
  {
    label: '🚀 Projet Web / Application',
    text: "Bonjour Mouflihath, j'ai découvert vos réalisations (React / Laravel) et j'aimerais échanger avec vous pour la conception d'un projet web.",
  },
  {
    label: '💳 Monétique & Systèmes de Paiement',
    text: "Bonjour Mouflihath, je souhaiterais échanger sur vos compétences en monétique et intégration de paiement.",
  },
  {
    label: '💬 Échange direct',
    text: "Bonjour Mouflihath, je vous contacte depuis votre portfolio en ligne.",
  },
];

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const whatsappNumber = '01 42 81 55 62';
  const whatsappUrlBase = 'https://wa.me/2290142815562';

  const handleOpenWhatsApp = (text?: string) => {
    soundFX.playClick();
    const messageToSend = text || customMessage.trim() || `Bonjour Mouflihath, je vous contacte depuis votre portfolio en ligne.`;
    const url = `${whatsappUrlBase}?text=${encodeURIComponent(messageToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating WhatsApp Action Container */}
      <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3 pointer-events-auto">
        {/* Main Floating WhatsApp Button */}
        <div className="relative">
          {/* Pulsing Beacon Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

          {/* Toggle / Direct WhatsApp Launcher */}
          <button
            onClick={() => {
              soundFX.playClick();
              setIsOpen(!isOpen);
            }}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
            aria-label="Ouvrir WhatsApp"
            title="Contacter sur WhatsApp au 01 42 81 55 62"
          >
            {isOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <WhatsAppIcon className="w-8 h-8 text-white" />
            )}

            {/* Online Indicator Badge */}
            {!isOpen && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
              </span>
            )}
          </button>
        </div>

      </div>

      {/* WhatsApp Interactive Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-22 right-4 sm:bottom-24 sm:right-6 z-[9999] w-[calc(100vw-32px)] sm:w-[380px] bg-white rounded-3xl shadow-2xl border-2 border-[#25D366] flex flex-col overflow-hidden animate-fade-in">
          
          {/* WhatsApp Header */}
          <div className="px-4 py-3.5 bg-[#075E54] text-white flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white/80 shrink-0 bg-white">
                <img
                  src={DEVELOPER_AVATAR}
                  alt={DEVELOPER_INFO.fullName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-sm tracking-wide text-white">
                  {DEVELOPER_INFO.fullName}
                </h3>
                <p className="text-[11px] text-[#A3B899] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>En ligne sur WhatsApp</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                setIsOpen(false);
              }}
              title="Fermer"
              className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Background & Message */}
          <div className="p-4 bg-[#EFEAE2] flex-1 flex flex-col justify-between space-y-4">
            
            {/* Greeting Bubble from Mouflihath */}
            <div className="max-w-[90%] p-3.5 rounded-2xl rounded-tl-sm bg-white text-slate-800 shadow-sm border border-slate-200/60 text-xs sm:text-[13px] leading-relaxed">
              <p className="font-semibold text-[#075E54] mb-1">
                👋 Mouflihath SADIKOU
              </p>
              <p className="text-slate-700">
                Bonjour ! Je suis joignable directement sur WhatsApp au{' '}
                <strong className="text-slate-900 font-bold">{whatsappNumber}</strong>.
              </p>
              <p className="text-slate-700 mt-1.5">
                Cliquez ci-dessous pour m'écrire directement ou choisissez l'un des sujets rapides.
              </p>
              <div className="mt-2 text-[10px] text-slate-400 text-right flex items-center justify-end gap-1 font-mono">
                <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <CheckCheck className="w-3.5 h-3.5 text-[#25D366]" />
              </div>
            </div>

            {/* Quick Topic Chips */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-slate-600 block mb-1">
                Sujets rapides :
              </span>
              <div className="flex flex-col gap-1.5">
                {PRESET_TOPICS.map((topic, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOpenWhatsApp(topic.text)}
                    className="w-full text-left px-3 py-2 rounded-xl bg-white hover:bg-[#F4F7F2] border border-slate-200 text-xs font-semibold text-slate-800 hover:text-[#075E54] hover:border-[#25D366] transition-all flex items-center justify-between shadow-xs cursor-pointer"
                  >
                    <span className="truncate">{topic.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#25D366] shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Message Input & Direct Send Bar */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleOpenWhatsApp();
              }}
              className="flex items-center gap-2 mb-2"
            >
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Écrivez votre message..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#F4F7F2] border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] transition-all"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5C] text-white transition-all cursor-pointer shadow-md shrink-0"
                aria-label="Envoyer sur WhatsApp"
                title="Envoyer sur WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Primary Direct Action Button */}
            <button
              onClick={() => handleOpenWhatsApp()}
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5C] text-white font-heading font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/30 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>OUVRIR WHATSAPP DIRECTEMENT</span>
            </button>
          </div>

        </div>
      )}
    </>
  );
};
