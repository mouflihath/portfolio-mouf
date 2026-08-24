import React, { useState } from 'react';
import { Rocket, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { soundFX } from '../utils/audio';

interface ProjectCard3DProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, onOpenDetails }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFX.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl p-1 transition-all duration-300 ease-out will-change-transform group cursor-pointer"
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateZ(${isHovered ? '20px' : '0px'}) scale(${isHovered ? 1.02 : 1})`,
      }}
      onClick={() => onOpenDetails(project)}
    >
      {/* Dynamic Colored Border based on project color */}
      <div
        className="absolute inset-0 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${project.color}, #4B5320)`,
        }}
      />

      <div className="relative w-full h-full bg-white rounded-[22px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden border-2 border-[#A3B899]/50 shadow-xl">
        {/* Subtle Grid */}
        <div className="absolute inset-0 cyber-grid-dense opacity-15 pointer-events-none" />

        {/* Top Media Preview Area */}
        <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-5 border border-slate-200 bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

          {/* Category Badge with Vibrant Project Color */}
          <div className="absolute top-3 left-3">
            <span
              className="px-3 py-1 rounded-xl text-xs font-mono font-bold tracking-wider text-white shadow-lg backdrop-blur-md"
              style={{ backgroundColor: project.color, border: '1px solid rgba(255,255,255,0.4)' }}
            >
              {project.category}
            </span>
          </div>

          {/* Quick View Icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-2 rounded-xl bg-white/95 text-slate-900 border border-slate-300 shadow-md backdrop-blur-md">
              <ArrowUpRight className="w-4 h-4 text-[#4B5320]" />
            </div>
          </div>
        </div>

        {/* Info Area */}
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#4B5320] transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <span className="text-[10px] font-mono font-bold text-[#2E3A20] bg-[#E2EBDC] px-2.5 py-0.5 rounded-full border border-[#A3B899]">
                Phare
              </span>
            )}
          </div>

          <p className="text-xs font-sub font-bold mb-3 line-clamp-1" style={{ color: project.color }}>
            {project.subtitle}
          </p>

          <p className="text-slate-600 text-xs leading-relaxed mb-5 line-clamp-3 font-normal">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-semibold bg-[#F4F7F2] text-[#2E3A20] border border-[#A3B899]/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-lg text-[11px] font-mono bg-slate-100 text-slate-600 border border-slate-200">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-4 border-t border-slate-200" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => {
                soundFX.playWarp();
                onOpenDetails(project);
              }}
              className="flex-1 py-2.5 px-4 rounded-xl font-heading font-bold text-xs text-white bg-[#4B5320] hover:bg-[#3A4B28] transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#4B5320]/20 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Voir le Projet
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                window.open(project.githubUrl || '#', '_blank');
              }}
              title="Voir sur GitHub"
              className="p-2.5 rounded-xl bg-[#F4F7F2] text-slate-700 hover:text-black border border-[#A3B899]/60 hover:border-[#4B5320] transition-all cursor-pointer"
            >
              <Github className="w-4 h-4 text-[#4B5320]" />
            </button>
          </div>
        </div>
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
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Military Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#4B5320]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#5E7044]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBDC] border border-[#A3B899] backdrop-blur-md mb-3">
            <Rocket className="w-4 h-4 text-[#4B5320]" />
            <span className="text-xs font-mono font-bold text-[#2E3A20] tracking-wider uppercase">
              PORTFOLIO / PROJETS
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Réalisations & <span className="text-[#4B5320]">Projets Majeurs</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Découvrez mes réalisations : supervision énergétique SaaS (Energy Group), dispatch logistique urbain (Les Coursiers du Coin), plateforme e-santé (HYGIE+), et bien d'autres solutions sur-mesure.
          </p>
          <div className="w-24 h-1 bg-[#4B5320] rounded-full mt-4" />
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
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#4B5320] text-white font-bold shadow-md shadow-[#4B5320]/25 border border-[#4B5320]'
                  : 'bg-[#F4F7F2] text-slate-700 hover:text-black hover:bg-[#E2EBDC] border border-[#A3B899]/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard3D
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
