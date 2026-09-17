import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { Sparkles, ArrowRight, Code2, Globe, ExternalLink, ShieldCheck, Terminal } from 'lucide-react';
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
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white overflow-x-hidden font-sans">
      
      {/* Fixed Modern Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateToPage} />

      {/* Main Content Container */}
      <main className="relative z-10 flex flex-col pt-16 min-h-[calc(100vh-140px)]">
        
        {/* ==================== PAGE 1: ACCUEIL / HOME ==================== */}
        {currentPage === 'home' && (
          <div className="animate-fade-in flex flex-col">
            
            {/* 1. Hero Developer Workbench */}
            <Hero onNavigate={(pageId) => navigateToPage(pageId as PageId)} />

            {/* Quick Highlights Tech Strip */}
            <div className="w-full bg-slate-50 border-y border-slate-200 py-5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6 text-slate-800">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-mono font-semibold text-xs text-slate-900">
                    Développeuse Web Full-Stack &amp; Monétique
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
                  <span className="font-bold text-slate-900">📍 Localisation :</span>
                  <span>{DEVELOPER_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
                  <span className="font-bold text-slate-900">⚡ Stack :</span>
                  <span>React.js • Laravel 11 • MySQL • StarUML</span>
                </div>
              </div>
            </div>

            {/* Featured Projects Preview */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 mb-2">
                      <Terminal className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase">
                        Réalisations Majeures
                      </span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
                      Applications Web &amp; <span className="text-emerald-600">Systèmes Déployés</span>
                    </h2>
                  </div>
                  <button
                    onClick={() => navigateToPage('projects')}
                    className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    <span>Voir tous les projets</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </button>
                </div>

                {/* 3-card preview of key projects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Energy Group */}
                  <div
                    onClick={() => navigateToPage('projects')}
                    className="dev-card p-6 rounded-2xl cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/80">
                          CleanTech &amp; SaaS
                        </span>
                        <span className="text-xs font-mono text-slate-400">React.js</span>
                      </div>
                      <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        ENERGY GROUP
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                        Supervision énergétique industrielle temps réel, télémétrie IoT et optimisation des réseaux solaires &amp; éoliens.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-mono text-emerald-600 font-semibold">
                      <span>energy-groupe.tech</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Les Coursiers du Coin */}
                  <div
                    onClick={() => navigateToPage('projects')}
                    className="dev-card p-6 rounded-2xl cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-amber-800 bg-amber-100/80">
                          Logistique Urbaine
                        </span>
                        <span className="text-xs font-mono text-slate-400">React • SPA</span>
                      </div>
                      <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        LES COURSIERS DU COIN
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                        Plateforme de livraison urbaine éco-responsable avec tracking GPS en direct et dispatching automatique.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-mono text-emerald-600 font-semibold">
                      <span>courier-corner-app</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* HYGIE+ */}
                  <div
                    onClick={() => navigateToPage('projects')}
                    className="dev-card p-6 rounded-2xl cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-purple-800 bg-purple-100/80">
                          HealthTech • Mémoire
                        </span>
                        <span className="text-xs font-mono text-slate-400">Laravel 11 • React</span>
                      </div>
                      <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        HYGIE+
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                        Comparateur de prix de pharmacies, vérification d'ordonnances et suivi géolocalisé en temps réel.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-mono text-emerald-600 font-semibold">
                      <span>Projet Mémoire Golden Academy</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Quick Skills & Tech Universe Preview */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3">
                  Stack Technique de Prédilection
                </h2>
                <p className="text-slate-600 text-sm max-w-xl mx-auto mb-8 font-normal">
                  Une maîtrise approfondie de l'écosystème web moderne garantissant des applications sécurisées, réactives et évolutives.
                </p>

                <div className="flex flex-wrap justify-center gap-2.5 mb-8 max-w-3xl mx-auto">
                  {['React.js', 'Laravel 11', 'PHP 8.3', 'MySQL', 'StarUML', 'TypeScript', 'Tailwind CSS', 'FedaPay', 'REST APIs', 'Git & GitHub', 'WAMP'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono font-medium text-xs shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigateToPage('skills')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-emerald-600 text-slate-900 font-heading font-bold text-xs tracking-wider transition-all shadow-sm hover:shadow cursor-pointer"
                >
                  <Code2 className="w-4 h-4 text-emerald-600" />
                  <span>Détail complet des compétences</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* Quick CTA to Contact */}
            <section className="py-20 bg-white">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                      Démarrer une collaboration
                    </span>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl leading-tight">
                      Un projet web ou monétique en vue ?
                    </h3>
                    <p className="text-slate-300 text-sm max-w-lg mt-2 font-normal">
                      Échangeons directement via WhatsApp ou formulaire pour concrétiser votre vision applicative.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateToPage('contact')}
                    className="shrink-0 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-sm tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Me contacter maintenant</span>
                    <ArrowRight className="w-4 h-4" />
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 text-white font-heading font-bold text-sm shadow-xl hover:bg-slate-800 transition-all cursor-pointer"
              >
                <span>Découvrir mes réalisations</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
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
          </div>
        )}

        {/* ==================== PAGE 7: CONTACT ==================== */}
        {currentPage === 'contact' && (
          <div className="animate-fade-in py-10">
            <Contact />
          </div>
        )}

      </main>

      {/* Modern Developer Footer */}
      <Footer onNavigate={navigateToPage} />

      {/* Floating WhatsApp Action Button */}
      <Chatbot />
    </div>
  );
}
