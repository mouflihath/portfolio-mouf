import React, { useState } from 'react';
import { Globe, Palette, Server, ShieldCheck, Sparkles, Check, ArrowRight, Layers, Terminal } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

interface ServicesProps {
  onNavigateContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigateContact }) => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'Palette': return Palette;
      case 'Server': return Server;
      case 'ShieldCheck': return ShieldCheck;
      case 'Sparkles': return Sparkles;
      default: return Layers;
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-mono font-bold text-slate-800 tracking-wider uppercase">
              SERVICES &amp; EXPERTISE
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Ce que je <span className="text-emerald-600">conçois et déploie</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            De l'analyse UML initiale à l'architecture finale déployée, des solutions clés en main prêtes pour la production.
          </p>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComp = getServiceIcon(service.icon);
            const isHovered = hoveredServiceId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  setHoveredServiceId(service.id);
                  soundFX.playHover();
                }}
                onMouseLeave={() => setHoveredServiceId(null)}
                className="group relative p-7 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6 text-emerald-600 transition-colors" />
                    </div>

                    <span className="px-3 py-1 rounded-lg text-[11px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1.5 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-mono font-semibold text-emerald-600 mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-slate-100">
                    {service.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onNavigateContact();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl font-heading font-bold text-xs text-slate-700 group-hover:text-white bg-slate-100 group-hover:bg-slate-900 border border-slate-200 group-hover:border-slate-900 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Démarrer ce projet</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
