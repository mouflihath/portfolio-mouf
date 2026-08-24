import React from 'react';
import { ArrowUp, Heart, Code2, Sparkles } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/audio';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (pageId: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    soundFX.playWarp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'projects', label: 'Projets' },
    { id: 'skills', label: 'Compétences' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Parcours' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative py-12 border-t border-[#A3B899]/60 bg-[#F4F7F2] overflow-hidden">
      {/* Background ambient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#4B5320]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#A3B899]/40">
          {/* Left: Branding */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2E3A20] via-[#4B5320] to-[#5E7044] p-[1.5px] shadow-md shadow-[#4B5320]/20">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-[#4B5320]" />
              </div>
            </div>
            <div>
              <p className="font-heading font-extrabold text-base text-slate-900 tracking-wider group-hover:text-[#4B5320] transition-colors">
                {DEVELOPER_INFO.firstName.toUpperCase()}
              </p>
              <p className="text-[11px] font-mono text-[#4B5320] font-semibold">
                Développeuse Full-Stack • Solutions Numériques
              </p>
            </div>
          </button>

          {/* Center: Multi-page navigation shortcuts */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-xs font-heading font-semibold text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  soundFX.playClick();
                  onNavigate(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#4B5320] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group px-4 py-2.5 rounded-2xl bg-white border border-[#A3B899]/60 hover:border-[#4B5320] text-slate-700 hover:text-black transition-all flex items-center gap-2 text-xs font-mono font-bold tracking-wider cursor-pointer shadow-sm hover:shadow-[#4B5320]/10 active:scale-95"
          >
            <span>RETOUR EN HAUT</span>
            <ArrowUp className="w-4 h-4 text-[#4B5320] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <p className="flex items-center gap-1.5 font-normal">
            Développé avec <Heart className="w-4 h-4 text-[#4B5320] fill-[#4B5320]" /> par{' '}
            <strong className="text-slate-900 font-bold font-heading">
              {DEVELOPER_INFO.fullName}
            </strong>
          </p>
          <p className="text-slate-500">
            📍 Bénin (Centre d'accueil) • © {new Date().getFullYear()} Tous droits réservés
          </p>
        </div>

      </div>
    </footer>
  );
};

