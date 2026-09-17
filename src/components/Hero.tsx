import React from 'react';
import { 
  ArrowRight, 
  Send, 
  Github, 
  Linkedin,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[75vh] pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-hidden bg-white dev-grid"
    >
      {/* Subtle modern ambient lights */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-400/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center flex flex-col items-center">
        
        {/* Main Developer Name */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-slate-900 mb-4 tracking-tight leading-[1.1]">
          {DEVELOPER_INFO.fullName}
          <span className="text-emerald-500">.</span>
        </h1>

        {/* Professional Subtitles & Role */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-slate-800">
            Développeuse Web Full-Stack
          </span>
          <span className="hidden sm:inline text-slate-300 text-2xl font-light">•</span>
          <span className="px-3.5 py-1 rounded-xl text-xs sm:text-sm font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            Diplômée en Monétique
          </span>
        </div>

        {/* Pitch & Introduction */}
        <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-normal">
          Conception d'applications web robustes avec <strong className="text-slate-900 font-semibold">React.js</strong> et <strong className="text-slate-900 font-semibold">Laravel 11</strong>, modélisation architecturale sous <strong className="text-slate-900 font-semibold">StarUML</strong>, et intégration sécurisée de flux financiers.
        </p>

        {/* Primary Call to Actions & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => {
              soundFX.playWarp();
              onNavigate('projects');
            }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-sm transition-all shadow-lg shadow-slate-900/15 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explorer mes projets</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>

          <a
            href="https://wa.me/2290142815562?text=Bonjour%20Mouflihath,%20j'ai%20consult%C3%A9%20votre%20portfolio%20et%20souhaite%20%C3%A9changer%20avec%20vous."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm transition-all shadow-md shadow-emerald-600/20 hover:-translate-y-0.5 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Me contacter sur WhatsApp</span>
          </a>

          {/* GitHub Button */}
          <a
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            className="p-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 hover:text-black transition-all hover:scale-105 cursor-pointer shadow-sm"
            title="Profil GitHub"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* LinkedIn Button */}
          <a
            href={DEVELOPER_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            className="p-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 hover:text-blue-600 transition-all hover:scale-105 cursor-pointer shadow-sm"
            title="Profil LinkedIn"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Tech Badges Strip */}
        <div className="pt-8 border-t border-slate-200 w-full max-w-2xl">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3.5">
            Stack Technique &amp; Spécialités
          </span>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              { name: 'React.js', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
              { name: 'Laravel 11', color: 'bg-red-50 text-red-700 border-red-200' },
              { name: 'PHP & MySQL', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
              { name: 'StarUML', color: 'bg-purple-50 text-purple-700 border-purple-200' },
              { name: 'Systèmes Monétiques', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
              { name: 'Tailwind CSS', color: 'bg-teal-50 text-teal-700 border-teal-200' },
            ].map((item, idx) => (
              <span
                key={idx}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold border ${item.color}`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
