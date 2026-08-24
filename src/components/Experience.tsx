import React, { useState } from 'react';
import { Milestone, GraduationCap, Code2, Rocket, Briefcase, ShieldCheck, MapPin } from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';
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
      default: return Milestone;
    }
  };

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Military Glows */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#4B5320]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#5E7044]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBDC] border border-[#A3B899] backdrop-blur-md mb-3">
            <Milestone className="w-4 h-4 text-[#4B5320]" />
            <span className="text-xs font-mono font-bold text-[#2E3A20] tracking-wider uppercase">
              PARCOURS & ÉVOLUTION
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Parcours & <span className="text-[#4B5320]">Expériences</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            De la formation académique rigoureuse jusqu'aux solutions Full-Stack, IoT et plateformes d'envergure.
          </p>
          <div className="w-24 h-1 bg-[#4B5320] rounded-full mt-4" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Central Military Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-[#4B5320] rounded-full shadow-[0_0_10px_rgba(75,83,32,0.3)]" />

          <div className="space-y-12 relative">
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
                      className={`relative p-6 sm:p-7 rounded-3xl transition-all duration-300 border-2 ${
                        isActive
                          ? 'bg-[#F4F7F2] border-[#4B5320] shadow-xl shadow-[#4B5320]/15 scale-[1.02]'
                          : 'bg-white border-[#A3B899]/60 hover:border-[#4B5320] shadow-sm'
                      }`}
                    >
                      {/* Year & Category Pill */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className="px-3 py-1 rounded-xl text-xs font-mono font-bold tracking-wider text-white shadow-md bg-[#4B5320]"
                        >
                          {step.year}
                        </span>

                        <span className="text-xs font-mono font-semibold text-[#4B5320] uppercase tracking-wide">
                          {step.type}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-1">
                        {step.title}
                      </h3>

                      <p className="text-xs font-sub font-bold text-[#4B5320] mb-2">
                        {step.subtitle}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 mb-4">
                        <span className="flex items-center gap-1 font-semibold text-[#2E3A20]">
                          <Briefcase className="w-3.5 h-3.5 text-[#4B5320]" />
                          {step.organization}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#4B5320]" />
                          {step.location}
                        </span>
                      </div>

                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                        {step.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200">
                        {step.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-semibold bg-[#E2EBDC] text-[#2E3A20] border border-[#A3B899]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#2E3A20] via-[#4B5320] to-[#5E7044] p-[2px] shadow-lg shadow-[#4B5320]/30 z-20 transition-transform duration-300 group-hover:scale-125">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                      <IconComp className="w-4 h-4 text-[#4B5320]" />
                    </div>
                  </div>

                  {/* Empty Spacer Side */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
