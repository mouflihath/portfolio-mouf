import React from 'react';
import { ArrowUp, Heart, Github, Linkedin } from 'lucide-react';
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
    <footer className="relative py-12 border-t border-slate-200 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
          {/* Left: Branding */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center text-left cursor-pointer group"
          >
            <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
              Portfolio<span className="text-emerald-500">.</span>
            </span>
          </button>

          {/* Center: Navigation shortcuts */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-xs font-heading font-medium text-slate-600">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  soundFX.playClick();
                  onNavigate(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Socials & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-black hover:bg-slate-100 transition-all shadow-sm cursor-pointer"
              title="Profil GitHub"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-all shadow-sm cursor-pointer"
              title="Profil LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider cursor-pointer shadow-sm active:scale-95"
            >
              <span>HAUT</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-600" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p className="flex items-center gap-1.5 font-normal">
            Conçu &amp; Développé avec rigueur par{' '}
            <strong className="text-slate-800 font-bold">
              {DEVELOPER_INFO.fullName}
            </strong>
          </p>
          <p className="text-slate-500">
            📍 Cotonou, Bénin • © {new Date().getFullYear()} Tous droits réservés
          </p>
        </div>

      </div>
    </footer>
  );
};
