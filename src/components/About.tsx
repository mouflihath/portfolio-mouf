import React, { useState } from 'react';
import { 
  Shield, 
  Sparkles, 
  Cpu, 
  Lightbulb, 
  Code2, 
  Globe, 
  CheckCircle2, 
  UserCheck, 
  CreditCard, 
  FolderTree, 
  Database, 
  Terminal,
  Layers,
  Award
} from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
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
      desc: 'Applications dynamiques avec React.js, TypeScript (TSX) et architecture robuste sous Laravel 11 & PHP.',
      badge: 'React & Laravel',
      color: 'text-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      icon: CreditCard,
      title: 'Monétique & Flux Financiers',
      desc: 'Étude des protocoles bancaires (ISO 8583, ISO8583 Studio), cartes à puce (Java Card) et intégration de FedaPay.',
      badge: 'FinTech & Sécurité',
      color: 'text-blue-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      icon: FolderTree,
      title: 'Modélisation & Génie Logiciel UML',
      desc: 'Conception préalable sous StarUML : formalisation des cas d\'utilisation, diagrammes de classes et de séquences.',
      badge: 'StarUML & MVC',
      color: 'text-purple-600',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      icon: Database,
      title: 'Bases de Données Relationnelles',
      desc: 'Schémas relationnels MySQL optimisés, requêtes ACID, middlewares d\'authentification et endpoints REST sécurisés.',
      badge: 'MySQL & SQL',
      color: 'text-amber-600',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      icon: Sparkles,
      title: 'Prototypage & Créativité Numérique',
      desc: 'Maquettage Figma, prompt engineering pour l\'assistance au code, et veille active sur les technologies cloud.',
      badge: 'Figma & IA',
      color: 'text-cyan-600',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    },
  ];

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative py-20 lg:py-28 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-mono font-bold text-slate-800 tracking-wider uppercase">
              PROFIL TECHNIQUE
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Code rigoureux, modélisation logicielle &amp; <span className="text-emerald-600">solutions monétiques</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Developer ID Card with subtle tilt */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div
              className="relative w-full max-w-sm rounded-2xl p-6 bg-slate-900 border border-slate-800 shadow-2xl shadow-slate-900/20 text-white transition-transform duration-200 ease-out will-change-transform"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-xs text-emerald-400 font-bold">DEV_VERIFIED</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">ID: SADIKOU-MOUFLIHATH</span>
              </div>

              {/* Center Monogram */}
              <div className="my-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-slate-900 border border-emerald-500/40 flex items-center justify-center text-white font-heading font-black text-3xl shadow-lg mb-3">
                  SM
                </div>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  {DEVELOPER_INFO.fullName}
                </h3>
                <p className="text-xs font-mono text-emerald-400 font-medium mt-1">
                  Développeuse Full-Stack &amp; Monétique
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  📍 Bénin (Centre d'accueil) • Cotonou
                </p>
              </div>

              {/* Core Badges */}
              <div className="space-y-2 text-xs font-mono border-t border-slate-800 pt-4">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">Formation :</span>
                  <span className="text-slate-200 font-medium">Licence en Monétique</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">Institut :</span>
                  <span className="text-slate-200">Golden Academy (Cotonou)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">Stack :</span>
                  <span className="text-emerald-400 font-semibold">React • Laravel • MySQL</span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Statut : Disponible</span>
                <span className="text-emerald-400 font-semibold">Open to Work</span>
              </div>
            </div>

            {/* Floating Subtle Micro Badges */}
            <div
              className="absolute -top-3 -left-3 sm:left-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-lg text-xs font-mono font-bold text-slate-800 flex items-center gap-1.5 transition-transform duration-300"
              style={{
                transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
              }}
            >
              <Code2 className="w-4 h-4 text-emerald-600" />
              <span>React &amp; Laravel 11</span>
            </div>

            <div
              className="absolute -bottom-3 -right-3 sm:right-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-lg text-xs font-mono font-bold text-slate-800 flex items-center gap-1.5 transition-transform duration-300"
              style={{
                transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
              }}
            >
              <CreditCard className="w-4 h-4 text-blue-600" />
              <span>Monétique &amp; FedaPay</span>
            </div>

          </div>

          {/* Right Column: Narrative & Passion Pillars */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-4 leading-snug">
              Créer des ponts entre <span className="text-emerald-600">l'ergonomie applicative</span> et la <span className="text-slate-900">sécurité des flux</span>
            </h3>
            
            <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
              Développeuse Full-Stack et diplômée en Monétique résidant au Bénin (Centre d'accueil), je combine la conception d'applications web réactives (<strong className="text-slate-900 font-semibold">React, TypeScript, Laravel 11</strong>) et l'analyse minutieuse des architectures logicielles. Mon travail allie modélisation formelle en <strong className="text-slate-900 font-semibold">StarUML</strong>, rigueur du code et intégration de services de paiement en ligne (<strong className="text-slate-900 font-semibold">FedaPay, protocoles ISO 8583</strong>).
            </p>

            {/* Passion Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {passions.map((p, index) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => soundFX.playHover()}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-500/80 shadow-sm hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg bg-slate-100 ${p.color}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="font-heading font-bold text-sm text-slate-900">
                          {p.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-2">
                      {p.desc}
                    </p>
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${p.badgeBg}`}>
                      {p.badge}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Quote / Philosophy Bar */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-900 text-emerald-400">
                <Terminal className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm font-mono text-slate-800 leading-relaxed">
                <span className="text-slate-900 font-bold">&laquo; Un code propre, une architecture modélisée et des transactions sécurisées : voilà ma signature. &raquo;</span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
