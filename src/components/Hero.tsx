import React, { useState } from 'react';
import { ArrowRight, Send, ShieldCheck, Terminal, Heart, Code2 } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { DEVELOPER_AVATAR } from '../assets/avatar';
import { soundFX } from '../utils/audio';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Military Green ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#4B5320]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#556B2F]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3A4B28]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Introduction Lead */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#4B5320] uppercase font-bold">
                PORTFOLIO OFFICIEL
              </span>
              <div className="h-[2px] w-12 bg-[#4B5320]" />
            </div>

            {/* Main Name */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900 mb-2 leading-tight">
              <span>
                {DEVELOPER_INFO.fullName}
              </span>
              <span className="text-[#4B5320]">.</span>
            </h1>

            {/* Static Clean Title (Vert Militaire) */}
            <div className="mb-6">
              <span className="inline-block font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-[#3A4B28] tracking-tight">
                Développeuse Full-Stack
              </span>
            </div>

            {/* Short Professional Bio */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              {DEVELOPER_INFO.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  soundFX.playWarp();
                  onNavigate('projects');
                }}
                className="group relative px-7 py-3.5 rounded-2xl font-heading font-bold text-sm tracking-wider text-white overflow-hidden transition-all duration-300 cursor-pointer bg-[#4B5320] hover:bg-[#3A4B28] shadow-xl shadow-[#4B5320]/25 hover:shadow-[#4B5320]/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Voir mes projets
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onNavigate('contact');
                }}
                className="group px-7 py-3.5 rounded-2xl font-heading font-semibold text-sm tracking-wider text-[#2E3A20] hover:text-[#4B5320] bg-white hover:bg-[#F4F7F2] border-2 border-[#A3B899] hover:border-[#4B5320] shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#4B5320] group-hover:rotate-12 transition-transform" />
                  Me contacter
                </span>
              </button>
            </div>

            {/* Tech Badges */}
            <div className="mt-10 pt-6 border-t border-slate-200 w-full flex flex-wrap items-center gap-6 text-xs font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4B5320]" />
                <span className="font-medium">Code Sécurisé & Audité</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#4B5320]" />
                <span className="font-medium">Laravel • React.js • MySQL • PHP</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#4B5320]" />
                <span className="font-medium">100% Craft & Performance</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Portrait Card next to name */}
          <div
            className="lg:col-span-5 relative flex items-center justify-center py-6"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 bg-[#4B5320]/20 rounded-3xl blur-2xl pointer-events-none" />

            {/* 3D Tilted Card with uploaded image */}
            <div
              className="relative w-full max-w-md rounded-3xl p-1.5 bg-gradient-to-b from-[#5E7044] via-[#4B5320] to-[#2E3A20] shadow-2xl shadow-[#4B5320]/25 transition-transform duration-200 ease-out will-change-transform"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 14}deg) rotateX(${-mousePos.y * 14}deg)`,
              }}
            >
              <div className="w-full bg-white rounded-[22px] p-4 sm:p-5 flex flex-col items-center overflow-hidden relative border border-[#A3B899]/50">
                
                {/* Military Cyber Grid */}
                <div className="absolute inset-0 cyber-grid-dense opacity-25 pointer-events-none" />

                {/* Portrait Image Frame */}
                <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-[#4B5320]/30 shadow-md group">
                  <img
                    src={DEVELOPER_AVATAR}
                    alt={DEVELOPER_INFO.fullName}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Military Green Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E3A20]/80 via-transparent to-transparent" />
                  
                  {/* Tech stack badge at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <div className="flex items-center gap-1.5 bg-[#2E3A20]/90 px-3 py-1.5 rounded-xl border border-[#748757]/40 backdrop-blur-md">
                      <Code2 className="w-3.5 h-3.5 text-[#A3B899]" />
                      <span className="font-semibold">{DEVELOPER_INFO.fullName}</span>
                    </div>
                    <div className="bg-[#4B5320] px-2.5 py-1.5 rounded-xl font-bold tracking-wider text-[11px]">
                      FULL-STACK
                    </div>
                  </div>
                </div>

                {/* Subtitle Bar below Image */}
                <div className="w-full mt-3 flex items-center justify-between text-xs font-mono text-slate-700 px-1">
                  <span className="font-semibold text-[#3A4B28]">React • Laravel • MySQL • PHP</span>
                  <span className="text-[#4B5320] font-bold">● Active</span>
                </div>

              </div>
            </div>

            {/* Floating 3D Micro Badges */}
            <div
              className="absolute -top-3 -left-3 sm:left-0 px-3.5 py-1.5 rounded-xl bg-white border-2 border-[#4B5320] shadow-lg text-xs font-heading font-bold text-[#2E3A20] flex items-center gap-1.5 transition-transform duration-300"
              style={{
                transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#4B5320]" />
              <span>Full-Stack</span>
            </div>

            <div
              className="absolute -bottom-3 -right-3 sm:right-2 px-3.5 py-1.5 rounded-xl bg-white border-2 border-[#4B5320] shadow-lg text-xs font-heading font-bold text-[#2E3A20] flex items-center gap-1.5 transition-transform duration-300"
              style={{
                transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
              }}
            >
              <Code2 className="w-3.5 h-3.5 text-[#4B5320]" />
              <span>Clean Code</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
