import React, { useState, useMemo } from 'react';
import { Cpu, Sparkles, Server, Layout, ShieldCheck, Database, Wrench, CheckCircle2, CreditCard, FolderTree, Terminal, Globe, HelpCircle } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';
import { SkillsSphere3D } from './3d/SkillsSphere3D';
import { soundFX } from '../utils/audio';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS_DATA[0]);
  const [masteryFilter, setMasteryFilter] = useState<'Tous' | 'Pratiquée' | 'Notion / Abordée'>('Tous');
  const [activeCategory, setActiveCategory] = useState<string>('Toutes');

  // Dynamically compute available categories based on mastery filter
  const availableCategories = useMemo(() => {
    const skillsToScan = masteryFilter === 'Tous'
      ? SKILLS_DATA
      : SKILLS_DATA.filter(s => s.masteryType === masteryFilter);
    const cats = Array.from(new Set(skillsToScan.map(s => s.category)));
    return ['Toutes', ...cats];
  }, [masteryFilter]);

  // Filter skills by mastery type AND category
  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchMastery = masteryFilter === 'Tous' || skill.masteryType === masteryFilter;
      const matchCategory = activeCategory === 'Toutes' || skill.category === activeCategory;
      return matchMastery && matchCategory;
    });
  }, [masteryFilter, activeCategory]);

  const handleSelectSkill = (skill: SkillItem) => {
    setSelectedSkill(skill);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Full-Stack': return Layout;
      case 'Backend & APIs': return Server;
      case 'Monétique & Paiement': return CreditCard;
      case 'Base de Données': return Database;
      case 'Conception & Modélisation': return FolderTree;
      case 'Outils & Méthodes': return Wrench;
      case 'Réseaux & Systèmes': return Terminal;
      case 'IA & Création Numérique': return Sparkles;
      default: return Cpu;
    }
  };

  const practicedCount = SKILLS_DATA.filter(s => s.masteryType === 'Pratiquée').length;
  const exploredCount = SKILLS_DATA.filter(s => s.masteryType === 'Notion / Abordée').length;

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <Cpu className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-mono font-bold text-slate-800 tracking-wider uppercase">
              COMPÉTENCES &amp; STACK TECHNIQUE
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Compétences <span className="text-emerald-600">Pratiquées</span> &amp; Technologies Abordées
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Transparence totale sur ma stack : compétences éprouvées en production/études (Laravel 11, React, MySQL, Monétique) et outils en veille active.
          </p>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* 3D Skills Sphere View */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl p-2 sm:p-6 mb-10 text-white">
          <div className="flex items-center justify-between px-3 py-1 mb-2 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 font-bold text-emerald-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Sphère 3D Interactive — Cliquez pour inspecter
            </span>
            <span className="hidden sm:inline text-slate-400">
              {SKILLS_DATA.length} technologies cartographiées
            </span>
          </div>
          <SkillsSphere3D
            onSelectSkill={handleSelectSkill}
            selectedSkillId={selectedSkill.id}
          />
        </div>

        {/* Primary Filter Tabs: Pratiquées vs Abordées */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <div className="p-1.5 bg-slate-100 border border-slate-200 rounded-2xl flex items-center gap-1.5 shadow-sm">
            <button
              onClick={() => {
                soundFX.playClick();
                setMasteryFilter('Tous');
                setActiveCategory('Toutes');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                masteryFilter === 'Tous'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-700 hover:text-black hover:bg-white'
              }`}
            >
              Toutes ({SKILLS_DATA.length})
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                setMasteryFilter('Pratiquée');
                setActiveCategory('Toutes');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                masteryFilter === 'Pratiquée'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-emerald-800 hover:bg-white'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Pratiquées ({practicedCount})
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                setMasteryFilter('Notion / Abordée');
                setActiveCategory('Toutes');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                masteryFilter === 'Notion / Abordée'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-amber-800 hover:bg-white'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Notions / Abordées ({exploredCount})
            </button>
          </div>
        </div>

        {/* Secondary Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFX.playClick();
                setActiveCategory(cat);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white font-bold shadow-sm border border-slate-900'
                  : 'bg-white text-slate-700 hover:text-black hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid: Skill Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.id === skill.id;
              const IconComp = getCategoryIcon(skill.category);
              const isPracticed = skill.masteryType === 'Pratiquée';

              return (
                <div
                  key={skill.id}
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedSkill(skill);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`p-4 rounded-xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-emerald-50/50 border-emerald-500 shadow-md scale-[1.01]'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 bg-slate-100 border border-slate-200 shrink-0"
                      >
                        <IconComp className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-heading font-bold text-base text-slate-900 truncate">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold block truncate">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Mastery Badge */}
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border shrink-0 ${
                        isPracticed
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : 'bg-amber-50 text-amber-800 border-amber-300'
                      }`}
                    >
                      {isPracticed ? '● Pratiquée' : '○ Abordée'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Progress Bar & Level */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-1">
                    <span className="text-[11px] font-semibold text-slate-500">
                      {isPracticed ? 'Maîtrise active' : 'Niveau de notion'}
                    </span>
                    <span className="font-bold text-slate-900">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ease-out ${
                        isPracticed ? 'bg-emerald-600' : 'bg-amber-500'
                      }`}
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
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <span className="text-xs font-mono text-emerald-600 font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-600" />
                  FICHE TECHNIQUE
                </span>
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                    selectedSkill.masteryType === 'Pratiquée'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-amber-50 text-amber-800 border-amber-300'
                  }`}
                >
                  {selectedSkill.masteryType === 'Pratiquée' ? 'Compétence Pratiquée' : 'Notion / Abordée'}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-900 text-white font-mono font-black text-lg shadow-sm shrink-0"
                >
                  {selectedSkill.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-xl text-slate-900 truncate">
                    {selectedSkill.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-600 font-semibold">
                    {selectedSkill.category} &bull; <strong className="text-slate-900">{selectedSkill.level}%</strong>
                  </p>
                </div>
              </div>

              <div className="mb-5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
                <div className="font-bold text-slate-900 mb-1">
                  Type : {selectedSkill.masteryType === 'Pratiquée' ? 'Pratique Réelle en Projet / Étude' : 'Notion Théorique / Outil Exploré'}
                </div>
                <p className="text-slate-600 font-sans text-xs leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              {/* Projects using this skill */}
              <div>
                <h5 className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Cas d'usage &amp; Projets :
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSkill.popularProjects.map((p, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-800"
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
