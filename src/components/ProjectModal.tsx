import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Terminal } from 'lucide-react';
import { Project } from '../types';
import { soundFX } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-white border border-slate-200 p-5 sm:p-8 shadow-2xl my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 right-0 z-50 flex items-center justify-between pb-3 mb-4 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-emerald-600" />
            FICHE TECHNIQUE DU PROJET
          </span>

          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="py-1.5 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all cursor-pointer font-mono font-semibold text-xs flex items-center gap-1.5"
          >
            <X className="w-4 h-4" />
            <span>Fermer</span>
          </button>
        </div>

        {/* Hero Image / Banner */}
        <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden mb-6 border border-slate-200 shadow-sm bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span
              className="px-3 py-1 rounded-lg text-xs font-mono font-bold text-white shadow-lg backdrop-blur-md"
              style={{ backgroundColor: project.color }}
            >
              {project.category}
            </span>

            {project.metrics && (
              <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold text-white bg-slate-900/90 shadow-md backdrop-blur-md hidden sm:block border border-slate-700">
                ⚡ {project.metrics}
              </span>
            )}
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-1.5 flex items-center gap-3">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono font-semibold text-emerald-600">
            {project.subtitle}
          </p>
        </div>

        {/* Long Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold mb-2">
            Vue d'ensemble
          </h4>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            {project.longDescription}
          </p>
        </div>

        {/* Features Checklist */}
        <div className="mb-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h4 className="text-xs font-mono text-slate-900 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Fonctionnalités &amp; Spécifications
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Details if present */}
        {project.architectureDetails && (
          <div className="mb-6 p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex items-start gap-3">
            <Layers className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide mb-1">
                Architecture Technique &amp; Modélisation
              </h5>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">
                {project.architectureDetails}
              </p>
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold mb-2.5">
            Stack Technique &amp; Outils
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 text-slate-800 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
          <button
            onClick={() => {
              soundFX.playWarp();
              window.open(project.demoUrl || '#', '_blank');
            }}
            className="flex-1 min-w-[200px] py-3 px-5 rounded-xl font-heading font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-emerald-400" />
            <span>Accéder à la plateforme</span>
          </button>

          {project.githubUrl && (
            <button
              onClick={() => {
                soundFX.playClick();
                window.open(project.githubUrl || '#', '_blank');
              }}
              className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all flex items-center gap-2 text-xs font-mono font-bold tracking-wider cursor-pointer"
            >
              <Github className="w-4 h-4 text-slate-700" />
              <span>GitHub</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
