import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code2, ArrowRight } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-white/95 backdrop-blur-xl border-b border-[#A3B899]/60 shadow-md shadow-[#4B5320]/5'
          : 'py-4 bg-white/80 backdrop-blur-md border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleItemClick('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2E3A20] via-[#4B5320] to-[#5E7044] p-[1.5px] shadow-md shadow-[#4B5320]/20 group-hover:shadow-[#4B5320]/40 transition-all">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-[#4B5320] group-hover:text-[#2E3A20] transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base sm:text-lg tracking-wider text-slate-900 flex items-center gap-1">
              {DEVELOPER_INFO.firstName.toUpperCase()}
            </span>
            <span className="text-[10px] font-mono text-[#4B5320] -mt-1 tracking-wider uppercase font-bold">
              Développeuse Full-Stack
            </span>
          </div>
        </button>

        {/* Desktop Nav Links (Pages) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F4F7F2] p-1.5 rounded-full border border-[#A3B899]/60 backdrop-blur-lg shadow-sm">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                onMouseEnter={() => soundFX.playHover()}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white bg-[#4B5320] shadow-md shadow-[#4B5320]/25 font-bold'
                    : 'text-slate-700 hover:text-black hover:bg-[#E2EBDC]'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Contact CTA */}
          <button
            onClick={() => handleItemClick('contact')}
            className={`relative group px-4 py-2 rounded-xl text-xs font-heading font-bold tracking-wide overflow-hidden cursor-pointer transition-all ${
              currentPage === 'contact'
                ? 'bg-[#2E3A20] text-white ring-2 ring-[#4B5320]'
                : 'bg-[#4B5320] hover:bg-[#3A4B28] text-white shadow-md shadow-[#4B5320]/20 hover:scale-105'
            }`}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#EBF0E6]" />
              ME CONTACTER
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2.5 rounded-xl bg-[#F4F7F2] border border-[#A3B899]/60 text-slate-800 cursor-pointer"
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#4B5320]" /> : <Menu className="w-5 h-5 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 px-4 pt-2 pb-6 bg-white border-b-2 border-[#4B5320] shadow-2xl backdrop-blur-2xl animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full py-2.5 px-4 rounded-xl text-left font-heading font-semibold text-xs tracking-wider transition-all flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-[#4B5320] text-white font-bold shadow-md shadow-[#4B5320]/20'
                    : 'text-slate-800 hover:bg-[#F4F7F2]'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && <ArrowRight className="w-3.5 h-3.5 text-white" />}
              </button>
            ))}
            <button
              onClick={() => handleItemClick('contact')}
              className="mt-2 w-full py-3 px-4 rounded-xl bg-[#4B5320] hover:bg-[#3A4B28] text-white font-heading font-bold text-xs tracking-wider text-center shadow-lg shadow-[#4B5320]/25"
            >
              ME CONTACTER (WHATSAPP)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

