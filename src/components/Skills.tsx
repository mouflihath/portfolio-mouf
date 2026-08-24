import React, { useState } from 'react';
import { Cpu, Sparkles, Server, Layout, ShieldCheck, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';
import { SkillsSphere3D } from './3d/SkillsSphere3D';
import { soundFX } from '../utils/audio';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS_DATA[0]);
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Frontend', 'Backend', 'Database & Cloud', 'Security & AI', 'Tools & Design'];

  const filteredSkills = activeCategory === 'Tous'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const handleSelectSkill = (skill: SkillItem) => {
    setSelectedSkill(skill);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return Layout;
      case 'Backend': return Server;
      case 'Database & Cloud': return Database;
      case 'Security & AI': return ShieldCheck;
      case 'Tools & Design': return Wrench;
      default: return Sparkles;
    }
  };

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Military Green Glows */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#4B5320]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#5E7044]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBDC] border border-[#A3B899] backdrop-blur-md mb-3">
            <Cpu className="w-4 h-4 text-[#4B5320]" />
            <span className="text-xs font-mono font-bold text-[#2E3A20] tracking-wider uppercase">
              COMPÉTENCES & STACK TECHNIQUE
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Stack Technologique & <span className="text-[#4B5320]">Expertises</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Technologies et outils que j'utilise au quotidien pour concevoir des systèmes web résilients, performants et hautement scalables.
          </p>
          <div className="w-24 h-1 bg-[#4B5320] rounded-full mt-4" />
        </div>

        {/* 3D Skills Sphere View */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-[#F4F7F2] border border-[#A3B899]/60 shadow-xl p-2 sm:p-6 mb-12">
          <SkillsSphere3D
            onSelectSkill={handleSelectSkill}
            selectedSkillId={selectedSkill.id}
          />
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFX.playClick();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#4B5320] text-white font-bold shadow-md shadow-[#4B5320]/25 border border-[#4B5320]'
                  : 'bg-[#F4F7F2] text-slate-700 hover:text-black hover:bg-[#E2EBDC] border border-[#A3B899]/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid: Skill Cards with Progress Bars */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.id === skill.id;
              const IconComp = getCategoryIcon(skill.category);

              return (
                <div
                  key={skill.id}
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedSkill(skill);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#E2EBDC] border-[#4B5320] shadow-xl shadow-[#4B5320]/15 scale-[1.02]'
                      : 'bg-white border-[#A3B899]/50 hover:border-[#4B5320] hover:bg-[#F4F7F2] shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-[#4B5320] bg-[#E2EBDC] border border-[#A3B899]"
                      >
                        <IconComp className="w-4 h-4 text-[#4B5320]" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-base text-slate-900">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono font-bold text-sm text-[#2E3A20] px-2.5 py-1 rounded-lg bg-[#F4F7F2] border border-[#A3B899]/60">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden p-[1px] border border-slate-200">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out bg-[#4B5320]"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Inspector Panel for Selected Skill */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-6 rounded-3xl bg-white border-2 border-[#A3B899] shadow-2xl shadow-[#4B5320]/10">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <span className="text-xs font-mono text-[#4B5320] font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#4B5320]" />
                  FICHE TECHNIQUE
                </span>
                <span className="text-xs font-mono font-medium text-slate-600 px-2 py-0.5 rounded bg-[#F4F7F2] border border-[#A3B899]/60">
                  {selectedSkill.category}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#E2EBDC] border-2 border-[#4B5320] shadow-md"
                >
                  <span className="font-heading font-black text-lg text-[#4B5320]">
                    {selectedSkill.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">
                    {selectedSkill.name}
                  </h3>
                  <p className="text-xs font-mono text-[#4B5320] font-semibold">
                    Niveau de Maîtrise : <strong className="text-slate-900 font-bold">{selectedSkill.level}%</strong>
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {selectedSkill.description}
              </p>

              {/* Projects using this skill */}
              <div>
                <h5 className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4B5320]" />
                  Projets Associés :
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSkill.popularProjects.map((p, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#F4F7F2] border border-[#A3B899]/60 text-xs font-mono font-semibold text-[#2E3A20]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
