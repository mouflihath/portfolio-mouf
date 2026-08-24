import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers } from 'lucide-react';
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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-white border-2 border-[#4B5320] p-5 sm:p-8 shadow-2xl shadow-[#4B5320]/30 my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button that is NEVER hidden */}
        <div className="sticky top-0 right-0 z-50 flex items-center justify-between pb-3 mb-4 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <span className="text-xs font-mono font-bold text-[#4B5320] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#4B5320]" />
            Détails du Projet
          </span>

          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="py-1.5 px-3.5 rounded-full bg-[#E2EBDC] hover:bg-[#4B5320] text-[#2E3A20] hover:text-white border border-[#A3B899] hover:border-[#4B5320] transition-all cursor-pointer font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm"
          >
            <X className="w-4 h-4" />
            <span>Fermer</span>
          </button>
        </div>

        {/* Hero Image / Banner */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-slate-200 shadow-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md"
              style={{ backgroundColor: project.color }}
            >
              {project.category}
            </span>

            {project.metrics && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-[#4B5320] shadow-md backdrop-blur-md hidden sm:block border border-[#A3B899]">
                ⚡ {project.metrics}
              </span>
            )}
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 mb-1.5 flex items-center gap-3">
            {project.title}
            <Sparkles className="w-5 h-5 text-[#4B5320]" />
          </h3>
          <p className="text-sm font-sub font-bold" style={{ color: project.color }}>
            {project.subtitle}
          </p>
        </div>

        {/* Long Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-[#4B5320] uppercase tracking-wider font-bold mb-2">
            Vue d'ensemble du Projet
          </h4>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            {project.longDescription}
          </p>
        </div>

        {/* Features Checklist */}
        <div className="mb-6 p-5 rounded-2xl bg-[#F4F7F2] border border-[#A3B899]/60">
          <h4 className="text-xs font-mono text-[#2E3A20] uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4B5320]" />
            Fonctionnalités Clés & Innovations
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4B5320] mt-2 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Details if present */}
        {project.architectureDetails && (
          <div className="mb-6 p-4 rounded-2xl bg-[#E2EBDC] border border-[#A3B899] flex items-start gap-3">
            <Layers className="w-5 h-5 text-[#4B5320] shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-mono font-bold text-[#2E3A20] uppercase tracking-wide mb-1">
                Architecture Technique
              </h5>
              <p className="text-xs text-slate-700 font-mono">
                {project.architectureDetails}
              </p>
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-mono text-slate-700 uppercase tracking-wider font-bold mb-2.5">
            Technologies & Outils Mobilisés
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl text-xs font-mono font-semibold bg-[#F4F7F2] text-[#2E3A20] border border-[#A3B899]/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
          <button
            onClick={() => {
              soundFX.playWarp();
              window.open(project.demoUrl || '#', '_blank');
            }}
            className="flex-1 min-w-[200px] py-3.5 px-6 rounded-2xl font-heading font-bold text-sm text-white bg-[#4B5320] hover:bg-[#3A4B28] shadow-lg shadow-[#4B5320]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            Consulter le Projet
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              window.open(project.githubUrl || '#', '_blank');
            }}
            className="py-3.5 px-6 rounded-2xl bg-[#F4F7F2] text-slate-700 hover:text-black border border-[#A3B899] hover:border-[#4B5320] transition-all flex items-center gap-2 text-xs font-mono font-bold tracking-wider cursor-pointer"
          >
            <Github className="w-4 h-4 text-[#4B5320]" />
            <span>Code Source</span>
          </button>
        </div>
      </div>
    </div>
  );
};

