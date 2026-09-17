import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Github, Linkedin, Send } from 'lucide-react';
import { soundFX } from '../utils/audio';
import { DEVELOPER_INFO } from '../data/portfolioData';

export type PageId = 'home' | 'about' | 'projects' | 'skills' | 'services' | 'experience' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (pageId: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'ACCUEIL' },
    { id: 'about', label: 'À PROPOS' },
    { id: 'projects', label: 'PROJETS' },
    { id: 'skills', label: 'COMPÉTENCES' },
    { id: 'services', label: 'SERVICES' },
    { id: 'experience', label: 'PARCOURS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: PageId) => {
    soundFX.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'py-2.5 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : 'py-3.5 bg-white/80 backdrop-blur-md border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo: Just Portfolio in elegant Poppins typography */}
        <button
          onClick={() => handleItemClick('home')}
          className="group flex items-center focus:outline-none cursor-pointer py-1"
          aria-label="Retour à l'accueil"
        >
          <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
            Portfolio<span className="text-emerald-500">.</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                onMouseEnter={() => soundFX.playHover()}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold tracking-wider transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'text-white bg-slate-900 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Socials */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* GitHub Icon */}
          <a
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
            title="Profil GitHub"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href={DEVELOPER_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            className="p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-all cursor-pointer"
            title="Profil LinkedIn"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Quick Contact CTA */}
          <button
            onClick={() => handleItemClick('contact')}
            className={`px-4 py-2 rounded-xl text-xs font-heading font-bold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'contact'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow'
            }`}
          >
            <Send className="w-3.5 h-3.5 text-emerald-400" />
            <span>ME CONTACTER</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 cursor-pointer"
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 px-4 pt-2 pb-6 bg-white border-b border-slate-200 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full py-2.5 px-4 rounded-xl text-left font-heading font-semibold text-xs tracking-wider transition-all flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-slate-900 text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            ))}

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-semibold text-center"
              >
                GitHub
              </a>
              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-semibold text-center"
              >
                LinkedIn
              </a>
              <button
                onClick={() => handleItemClick('contact')}
                className="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold text-center"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
