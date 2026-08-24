import React, { useState } from 'react';
import { Globe, Palette, Server, ShieldCheck, Sparkles, Check, ArrowRight, Layers } from 'lucide-react';
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
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Military Glows */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#4B5320]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#5E7044]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBDC] border border-[#A3B899] backdrop-blur-md mb-3">
            <Layers className="w-4 h-4 text-[#4B5320]" />
            <span className="text-xs font-mono font-bold text-[#2E3A20] tracking-wider uppercase">
              SERVICES & SOLUTIONS
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Ce que je <span className="text-[#4B5320]">construis pour vous</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            De l'idée initiale à l'architecture finale déployée, des solutions clés en main prêtes pour l'échelle.
          </p>
          <div className="w-24 h-1 bg-[#4B5320] rounded-full mt-4" />
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
                className="group relative p-7 rounded-3xl border-2 border-[#A3B899]/60 hover:border-[#4B5320] bg-white shadow-lg hover:shadow-[#4B5320]/15 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1.5"
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#E2EBDC] border border-[#A3B899] flex items-center justify-center text-[#4B5320] shadow-sm group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6 text-[#4B5320] transition-colors" />
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#F4F7F2] text-[#2E3A20] border border-[#A3B899]/60">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-1.5 group-hover:text-[#4B5320] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-sub font-bold text-[#4B5320] mb-4">
                  {service.subtitle}
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 mb-8 pt-4 border-t border-slate-100">
                  {service.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#4B5320] shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onNavigateContact();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl font-heading font-bold text-xs text-[#2E3A20] group-hover:text-white bg-[#F4F7F2] group-hover:bg-[#4B5320] border border-[#A3B899]/60 group-hover:border-[#4B5320] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Démarrer ce projet</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
