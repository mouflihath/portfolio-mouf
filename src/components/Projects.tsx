import React, { useState } from 'react';
import { Rocket, ExternalLink, Github, ArrowUpRight, Sparkles, Terminal, Code2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { soundFX } from '../utils/audio';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group relative rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      <div>
        {/* Media Preview Area */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100 border-b border-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span
              className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold text-white shadow-md backdrop-blur-md"
              style={{ backgroundColor: project.color }}
            >
              {project.category}
            </span>
          </div>

          {/* Featured pill */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-white/95 text-slate-900 border border-slate-200 shadow-sm backdrop-blur-md">
                ★ Phare
              </span>
            </div>
          )}

          {/* Overlay Tech Preview on Bottom */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
            <span className="font-semibold drop-shadow">{project.subtitle}</span>
          </div>
        </div>

        {/* Info Area */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-emerald-600 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0" />
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3 font-normal">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-50 text-slate-700 border border-slate-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-slate-100 text-slate-600 border border-slate-200">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div
        className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center gap-2 bg-slate-50/50"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            soundFX.playWarp();
            onOpenDetails(project);
          }}
          className="flex-1 py-2.5 px-4 rounded-xl font-heading font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Explorer le projet</span>
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            title="Voir sur GitHub"
            className="p-2.5 rounded-xl bg-white text-slate-700 hover:text-black border border-slate-200 hover:border-slate-300 transition-all cursor-pointer"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('Tous');

  const categories = ['Tous', 'CleanTech & SaaS', 'Logistics & Mobile', 'HealthTech', 'Full-Stack', 'Cybersecurity', 'AI & Tools'];

  const filteredProjects = filterCategory === 'Tous'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <Terminal className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-mono font-bold text-slate-800 tracking-wider uppercase">
              RÉALISATIONS MAJEURES
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Portfolio &amp; <span className="text-emerald-600">Projets Développés</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Applications web complètes, plateformes SaaS, architectures logicielles et intégrations techniques.
          </p>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFX.playClick();
                setFilterCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                filterCategory === cat
                  ? 'bg-slate-900 text-white shadow-md border border-slate-900 font-bold'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
