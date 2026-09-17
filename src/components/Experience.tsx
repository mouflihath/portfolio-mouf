import React, { useState } from 'react';
import { 
  Milestone, 
  GraduationCap, 
  Code2, 
  Rocket, 
  Briefcase, 
  ShieldCheck, 
  MapPin, 
  Globe, 
  CheckCircle2, 
  Award, 
  Languages, 
  Laptop, 
  FileText,
  Calendar,
  Building2,
  ExternalLink
} from 'lucide-react';
import { TIMELINE_DATA, DEVELOPER_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

export const Experience: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>(TIMELINE_DATA[0].id);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'Code2': return Code2;
      case 'Rocket': return Rocket;
      case 'Briefcase': return Briefcase;
      case 'ShieldCheck': return ShieldCheck;
      case 'Globe': return Globe;
      default: return Milestone;
    }
  };

  return (
    <section id="experience" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Subtle modern background glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <Milestone className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-mono font-bold text-slate-800 tracking-wider uppercase">
              PARCOURS OFFICIEL &amp; EXPÉRIENCES
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Expériences, Stages &amp; <span className="text-emerald-600">Formations Académiques</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Historique chronologique extrait du curriculum vitæ : stage en entreprise, projets d'envergure et diplômes d'État.
          </p>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative mb-24">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-slate-200" />

          <div className="space-y-10 relative">
            {TIMELINE_DATA.map((step, index) => {
              const isEven = index % 2 === 0;
              const IconComp = getStepIcon(step.icon);
              const isActive = activeStepId === step.id;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                  onMouseEnter={() => {
                    setActiveStepId(step.id);
                    soundFX.playHover();
                  }}
                >
                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div
                      className={`relative p-6 sm:p-7 rounded-2xl transition-all duration-200 border ${
                        isActive
                          ? 'bg-slate-50 border-emerald-500 shadow-lg shadow-emerald-500/5'
                          : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                      }`}
                    >
                      {/* Year & Type Pill */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold text-white bg-slate-900 shadow-sm">
                          {step.year}
                        </span>

                        <span className="text-xs font-mono font-semibold text-emerald-600 uppercase tracking-wide">
                          {step.type === 'experience' ? '💼 Expérience pro' : step.type === 'education' ? '🎓 Diplôme' : '🚀 Projet'}
                        </span>
                      </div>

                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-1">
                        {step.title}
                      </h3>

                      <p className="text-xs font-mono text-emerald-600 font-semibold mb-2">
                        {step.subtitle}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mb-4">
                        <span className="flex items-center gap-1 font-medium">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          {step.organization}
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {step.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                        {step.description}
                      </p>

                      {/* Tech & Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80">
                        {step.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white text-slate-700 border border-slate-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node on Line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
                        isActive
                          ? 'bg-emerald-600 text-white ring-4 ring-emerald-100 scale-110'
                          : 'bg-white text-slate-700 border-2 border-slate-300'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Empty Side for balance on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CV Summary Bento Grid */}
        <div className="pt-12 border-t border-slate-200">
          <div className="text-center mb-10">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">
              Synthèse &amp; Informations Complémentaires du CV
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Formation Académique */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900 mb-3">
                  Formation Académique
                </h4>
                <div className="space-y-4 text-xs text-slate-700">
                  <div className="pb-3 border-b border-slate-100">
                    <span className="font-bold text-slate-900 block text-sm">Licence en Monétique</span>
                    <span className="text-slate-500 font-medium block">Institut Supérieur Golden Academy</span>
                    <span className="text-slate-500 block mt-0.5 font-mono">Akpakpa, Cotonou au BÉNIN • 2025 - 2026</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">Baccalauréat D (Scientifique)</span>
                    <span className="text-slate-500 font-medium block">Complexe Scolaires Saint Augustin (CSSA)</span>
                    <span className="text-slate-500 block mt-0.5 font-mono">Cotonou au BÉNIN • Sep 2022 - Juin 2023</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-mono font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Diplômes d'État vérifiés</span>
              </div>
            </div>

            {/* Card 2: Logiciels Maîtrisés */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                  <Laptop className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900 mb-3">
                  Logiciels &amp; Outils
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {DEVELOPER_INFO.masteredSoftware.map((software, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-50 text-slate-800 border border-slate-200"
                    >
                      {software}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Modélisation de cas d'utilisation et diagrammes sous <strong className="text-slate-900">StarUML</strong>, conception d'interfaces sur <strong className="text-slate-900">Figma</strong> et gestion de base sous <strong className="text-slate-900">WAMP / MySQL</strong>.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-mono font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Conception &amp; Architecture UML</span>
              </div>
            </div>

            {/* Card 3: Langues & Profil */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-100">
                  <Languages className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900 mb-3">
                  Langues &amp; Disponibilité
                </h4>
                <div className="space-y-2.5 text-xs mb-4">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-medium text-slate-800">Français</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-100 text-emerald-800 font-bold">Bien</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-medium text-slate-800">Fon</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-200 text-slate-800 font-bold">Assez bien</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Basée à <strong className="text-slate-900">Cotonou, Bénin</strong>, prête à intervenir sur des projets web full-stack ou monétiques.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100">
                <a
                  href="https://wa.me/2290142815562?text=Bonjour%20Mouflihath,%20je%20souhaite%20vous%20contacter%20concernant%20votre%20profil."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-wider transition-all shadow-sm cursor-pointer"
                >
                  Contacter sur WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
