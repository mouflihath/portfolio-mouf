import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { ImmersiveLab3D } from './components/3d/ImmersiveLab3D';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundCanvas } from './components/3d/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Chatbot } from './components/Chatbot';
import { Sparkles, ArrowRight, CheckCircle2, Code2, Globe } from 'lucide-react';
import { DEVELOPER_INFO } from './data/portfolioData';
import { soundFX } from './utils/audio';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'projects', 'skills', 'services', 'experience', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-[#4B5320] selection:text-white overflow-x-hidden font-sans">
      {/* Background Interactive Cosmic Starfield Canvas */}
      <BackgroundCanvas />

      {/* Futuristic Custom Mouse Cursor */}
      <CustomCursor />

      {/* Fixed Multi-Page Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateToPage} />

      {/* Main Content Container */}
      <main className="relative z-10 flex flex-col pt-16 min-h-[calc(100vh-140px)]">
        
        {/* ==================== PAGE 1: ACCUEIL / HOME ==================== */}
        {currentPage === 'home' && (
          <div className="animate-fade-in flex flex-col">
            {/* 1. Hero Section */}
            <Hero onNavigate={(pageId) => navigateToPage(pageId as PageId)} />

            {/* Quick Highlights Strip */}
            <div className="w-full bg-[#F4F7F2] border-y border-[#A3B899]/60 py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-around gap-6 text-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#4B5320] animate-ping" />
                  <span className="font-heading font-bold text-sm">Disponible pour missions B2B / Remote</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-700">
                  <span className="font-bold text-[#4B5320]">📍 Localisation :</span>
                  <span>{DEVELOPER_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-700">
                  <span className="font-bold text-[#4B5320]">⚡ Spécialités :</span>
                  <span>Laravel 11 • React.js • MySQL • Architecture Cloud</span>
                </div>
              </div>
            </div>

            {/* Featured Projects Preview */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2EBDC] border border-[#A3B899] mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#4B5320]" />
                      <span className="text-[11px] font-mono font-bold text-[#2E3A20] uppercase">Aperçu Réalisations</span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
                      Projets Phares & <span className="text-[#4B5320]">Plateformes SaaS</span>
                    </h2>
                  </div>
                  <button
                    onClick={() => navigateToPage('projects')}
                    className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4B5320] hover:bg-[#3A4B28] text-white font-heading font-bold text-xs tracking-wider transition-all shadow-md shadow-[#4B5320]/20 cursor-pointer"
                  >
                    <span>Voir tous les projets</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick 3-card preview of key projects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Energy Group */}
                  <div
                    onClick={() => navigateToPage('projects')}
                    className="group p-6 rounded-3xl bg-white border-2 border-[#A3B899]/60 hover:border-[#4B5320] shadow-lg hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-emerald-600 mb-4 inline-block">
                        CleanTech & SaaS
                      </span>
                      <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2 group-hover:text-[#4B5320] transition-colors">
                        ENERGY GROUP
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                        Supervision énergétique industrielle temps réel, télémétrie IoT et optimisation des réseaux solaires & éoliens.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-mono text-[#4B5320] font-bold">
                      <span>energy-groupe.tech</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Les Coursiers du Coin */}
                  <div
                    onClick={() => navigateToPage('projects')}
                    className="group p-6 rounded-3xl bg-white border-2 border-[#A3B899]/60 hover:border-[#4B5320] shadow-lg hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-amber-600 mb-4 inline-block">
                        Logistique & Mobilité
                      </span>
                      <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2 group-hover:text-[#4B5320] transition-colors">
                        LES COURSIERS DU COIN
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                        Plateforme de livraison urbaine éco-responsable avec tracking GPS en direct et dispatching automatique.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-mono text-[#4B5320] font-bold">
                      <span>courier-corner-app</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* ARIYA */}
                  <div
                    onClick={() => navigateToPage('projects')}
                    className="group p-6 rounded-3xl bg-white border-2 border-[#A3B899]/60 hover:border-[#4B5320] shadow-lg hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-pink-600 mb-4 inline-block">
                        Marketplace B2B
                      </span>
                      <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2 group-hover:text-[#4B5320] transition-colors">
                        ARIYA
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                        Marketplace événementielle collaborative avec messagerie WebSocket temps réel et devis instantanés.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-mono text-[#4B5320] font-bold">
                      <span>curated-event-crew</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Skills & Tech Universe Preview */}
            <section className="py-16 bg-[#F4F7F2] border-t border-[#A3B899]/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3">
                  Stack Technique de Prédilection
                </h2>
                <p className="text-slate-600 text-sm max-w-xl mx-auto mb-8 font-normal">
                  Une maîtrise approfondie de l'écosystème web moderne garantissant des applications sécurisées, réactives et évolutives.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {['Laravel 11', 'React.js', 'MySQL', 'PHP 8.x', 'TypeScript', 'Tailwind CSS', 'Docker', 'REST APIs', 'WebSockets', 'Sécurité OWASP'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-2xl bg-white border border-[#A3B899] text-[#2E3A20] font-mono font-semibold text-xs shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigateToPage('skills')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border-2 border-[#4B5320] text-[#2E3A20] hover:bg-[#4B5320] hover:text-white font-heading font-bold text-xs tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Explorer le Cosmos de Compétences 3D</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* Quick CTA to Contact */}
            <section className="py-20 bg-white">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#4B5320] via-[#3A4B28] to-[#2E3A20] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E2EBDC] uppercase tracking-wider block mb-2">
                      Démarrer une collaboration
                    </span>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl leading-tight">
                      Un projet numérique en vue ?
                    </h3>
                    <p className="text-slate-200 text-sm max-w-lg mt-2 font-normal">
                      Échangeons directement via WhatsApp ou formulaire pour concrétiser votre vision.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateToPage('contact')}
                    className="shrink-0 px-8 py-4 rounded-2xl bg-white text-[#2E3A20] hover:bg-[#F4F7F2] font-heading font-bold text-sm tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Me contacter maintenant</span>
                    <ArrowRight className="w-4 h-4 text-[#4B5320]" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== PAGE 2: À PROPOS / ABOUT ==================== */}
        {currentPage === 'about' && (
          <div className="animate-fade-in py-10">
            <About />
            <Stats />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
              <button
                onClick={() => navigateToPage('projects')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#4B5320] text-white font-heading font-bold text-sm shadow-xl shadow-[#4B5320]/25 hover:bg-[#3A4B28] transition-all cursor-pointer"
              >
                <span>Découvrir mes réalisations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ==================== PAGE 3: PROJETS / PROJECTS ==================== */}
        {currentPage === 'projects' && (
          <div className="animate-fade-in py-10">
            <Projects />
          </div>
        )}

        {/* ==================== PAGE 4: COMPÉTENCES / SKILLS ==================== */}
        {currentPage === 'skills' && (
          <div className="animate-fade-in py-10">
            <Skills />
          </div>
        )}

        {/* ==================== PAGE 5: SERVICES ==================== */}
        {currentPage === 'services' && (
          <div className="animate-fade-in py-10">
            <Services onNavigateContact={() => navigateToPage('contact')} />
          </div>
        )}

        {/* ==================== PAGE 6: PARCOURS / EXPERIENCE ==================== */}
        {currentPage === 'experience' && (
          <div className="animate-fade-in py-10">
            <Experience />
            
            {/* Interactive Lab on Experience Page */}
            <section className="relative py-16 overflow-hidden bg-slate-50 border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBDC] border border-[#A3B899] mb-3">
                    <Sparkles className="w-4 h-4 text-[#4B5320]" />
                    <span className="text-xs font-mono font-bold text-[#2E3A20] tracking-wider uppercase">
                      POSTE DE COMMANDE 3D
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                    Environnement de Travail Virtuel
                  </h3>
                </div>
                <ImmersiveLab3D />
              </div>
            </section>
          </div>
        )}

        {/* ==================== PAGE 7: CONTACT ==================== */}
        {currentPage === 'contact' && (
          <div className="animate-fade-in py-10">
            <Contact />
          </div>
        )}

      </main>

      {/* Multi-Page Footer */}
      <Footer onNavigate={navigateToPage} />

      {/* Interactive AI Chatbot */}
      <Chatbot />
    </div>
  );
}

