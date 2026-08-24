import React, { useState } from 'react';
import { Shield, Sparkles, Cpu, Lightbulb, Code2, Globe, CheckCircle2, UserCheck, Layers } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { DEVELOPER_AVATAR } from '../assets/avatar';
import { soundFX } from '../utils/audio';

export const About: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const passions = [
    {
      icon: Globe,
      title: 'Développement Web Full-Stack',
      desc: 'Architectures robustes React/Laravel et interfaces performantes à haute vitesse d\'exécution.',
      color: 'text-[#4B5320]',
      border: 'border-[#A3B899]/60',
      bg: 'bg-[#F4F7F2]',
      badgeBg: 'bg-[#E2EBDC]',
    },
    {
      icon: Shield,
      title: 'Cybersécurité & Résilience',
      desc: 'Conception sécurisée dès la première ligne de code selon les standards stricts OWASP.',
      color: 'text-[#4B5320]',
      border: 'border-[#A3B899]/60',
      bg: 'bg-[#F4F7F2]',
      badgeBg: 'bg-[#E2EBDC]',
    },
    {
      icon: Sparkles,
      title: 'CleanTech & Logistique SaaS',
      desc: 'Supervision énergétique IoT (Energy Group) et dispatching urbain (Les Coursiers du Coin).',
      color: 'text-[#4B5320]',
      border: 'border-[#A3B899]/60',
      bg: 'bg-[#F4F7F2]',
      badgeBg: 'bg-[#E2EBDC]',
    },
    {
      icon: Lightbulb,
      title: 'Création de Solutions Métier',
      desc: 'Résolution de problématiques concrètes à fort impact économique et environnemental.',
      color: 'text-[#4B5320]',
      border: 'border-[#A3B899]/60',
      bg: 'bg-[#F4F7F2]',
      badgeBg: 'bg-[#E2EBDC]',
    },
    {
      icon: Cpu,
      title: 'Technologies Modernes & Scalabilité',
      desc: 'Exploration d\'architectures cloud modulaires, Docker, WebSockets et micro-services.',
      color: 'text-[#4B5320]',
      border: 'border-[#A3B899]/60',
      bg: 'bg-[#F4F7F2]',
      badgeBg: 'bg-[#E2EBDC]',
    },
  ];

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBDC] border border-[#A3B899] backdrop-blur-md mb-3">
            <UserCheck className="w-4 h-4 text-[#4B5320]" />
            <span className="text-xs font-mono font-bold text-[#2E3A20] tracking-wider uppercase">
              ABOUT ME
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Passionnée par le code, l'architecture logicielle & <span className="text-[#4B5320]">l'impact concret</span>
          </h2>
          <div className="w-24 h-1 bg-[#4B5320] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Holographic Photo & Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Main 3D Card with Tilt */}
            <div
              className="relative w-full max-w-sm rounded-3xl p-1 bg-gradient-to-b from-[#5E7044] via-[#4B5320] to-[#2E3A20] shadow-2xl shadow-[#4B5320]/20 transition-transform duration-200 ease-out will-change-transform"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 16}deg) rotateX(${-mousePos.y * 16}deg)`,
              }}
            >
              <div className="w-full bg-white rounded-[22px] p-6 flex flex-col items-center text-center overflow-hidden relative border border-[#A3B899]/50">
                
                {/* Background Grid inside Card */}
                <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />
                
                {/* Avatar Image Frame */}
                <div className="relative w-48 h-56 mb-5 rounded-2xl overflow-hidden border-2 border-[#4B5320] shadow-md group">
                  <img
                    src={DEVELOPER_AVATAR}
                    alt={DEVELOPER_INFO.fullName}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E3A20]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center">
                    <span className="text-[11px] font-mono font-bold text-white bg-[#4B5320]/90 px-3 py-1 rounded-lg border border-[#A3B899]/40">
                      DÉVELOPPEUSE FULL-STACK
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-1">
                  {DEVELOPER_INFO.fullName}
                </h3>
                <p className="text-xs font-mono text-[#4B5320] font-bold mb-4 tracking-wider">
                  React • Laravel • MySQL • PHP
                </p>

                <div className="w-full pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-700">
                  <span>📍 Bénin (Centre d'accueil)</span>
                  <span className="text-[#4B5320] font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#4B5320] animate-ping" />
                    Disponible
                  </span>
                </div>
              </div>
            </div>

            {/* 4 Interactive Floating 3D Badges */}
            <div
              onMouseEnter={() => soundFX.playHover()}
              className="absolute -top-4 -left-4 sm:left-2 px-4 py-2 rounded-2xl bg-white border-2 border-[#4B5320] shadow-xl shadow-[#4B5320]/15 flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110 will-change-transform"
              style={{
                transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
              }}
            >
              <Sparkles className="w-4 h-4 text-[#4B5320] animate-pulse" />
              <span className="font-heading font-bold text-xs text-slate-900">Full-Stack</span>
            </div>

            <div
              onMouseEnter={() => soundFX.playHover()}
              className="absolute -top-4 -right-4 sm:right-2 px-4 py-2 rounded-2xl bg-white border-2 border-[#4B5320] shadow-xl shadow-[#4B5320]/15 flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110 will-change-transform"
              style={{
                transform: `translate(${mousePos.x * 30}px, ${mousePos.y * -20}px)`,
              }}
            >
              <Code2 className="w-4 h-4 text-[#4B5320]" />
              <span className="font-heading font-bold text-xs text-slate-900">Developer</span>
            </div>

            <div
              onMouseEnter={() => soundFX.playHover()}
              className="absolute -bottom-6 -left-4 sm:left-4 px-4 py-2 rounded-2xl bg-white border-2 border-[#4B5320] shadow-xl shadow-[#4B5320]/15 flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110 will-change-transform"
              style={{
                transform: `translate(${mousePos.x * -20}px, ${mousePos.y * 30}px)`,
              }}
            >
              <CheckCircle2 className="w-4 h-4 text-[#4B5320]" />
              <span className="font-heading font-bold text-xs text-slate-900">Problem Solver</span>
            </div>

            <div
              onMouseEnter={() => soundFX.playHover()}
              className="absolute -bottom-6 -right-4 sm:right-4 px-4 py-2 rounded-2xl bg-white border-2 border-[#4B5320] shadow-xl shadow-[#4B5320]/15 flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110 will-change-transform"
              style={{
                transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`,
              }}
            >
              <Cpu className="w-4 h-4 text-[#4B5320]" />
              <span className="font-heading font-bold text-xs text-slate-900">Clean Tech</span>
            </div>

          </div>

          {/* Right Column: Narrative & 5 Passion Pillars */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mb-4">
              Créer des ponts entre <span className="text-[#4B5320]">l'ergonomie fluide</span> et la <span className="text-[#2E3A20]">rigueur technique</span>
            </h3>
            
            <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
              Je suis une développeuse passionnée par la création de solutions numériques qui allient performance, esthétique et robustesse. Mon approche repose sur une compréhension approfondie des besoins réels des utilisateurs tout en appliquant des standards stricts d'ingénierie logicielle et de cybersécurité.
            </p>

            {/* Passion Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {passions.map((p, index) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => soundFX.playHover()}
                    className={`p-4 rounded-2xl ${p.bg} border ${p.border} shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className={`p-1.5 rounded-lg ${p.badgeBg} ${p.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        {p.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quote / Philosophy Bar */}
            <div className="p-4 rounded-2xl bg-[#F4F7F2] border border-[#A3B899]/60 flex items-center gap-3 shadow-sm">
              <Layers className="w-5 h-5 text-[#4B5320] shrink-0" />
              <p className="text-xs font-mono text-[#2E3A20] font-medium">
                « Le code n'est pas seulement une suite d'instructions, c'est l'art de donner vie à des solutions performantes et humaines. »
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
