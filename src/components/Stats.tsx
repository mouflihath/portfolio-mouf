import React, { useState, useEffect } from 'react';
import { Briefcase, Code, Sparkles, Zap } from 'lucide-react';
import { STATS_DATA } from '../data/portfolioData';

export const Stats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'stat-projects': 0,
    'stat-tech': 0,
    'stat-years': 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('stats-section');
      if (el && !hasAnimated) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        'stat-projects': Math.floor(15 * ease),
        'stat-tech': Math.floor(12 * ease),
        'stat-years': Math.floor(4 * ease),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          'stat-projects': 15,
          'stat-tech': 12,
          'stat-years': 4,
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return Briefcase;
      case 'Code': return Code;
      case 'Sparkles': return Sparkles;
      case 'Zap': return Zap;
      default: return Sparkles;
    }
  };

  return (
    <section id="stats-section" className="relative py-16 lg:py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat) => {
            const IconComp = getStatIcon(stat.icon);
            const displayValue = stat.id === 'stat-ideas' ? '∞' : `${stat.prefix || ''}${counts[stat.id] || stat.value}${stat.suffix}`;

            return (
              <div
                key={stat.id}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Floating Icon */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <IconComp className="w-6 h-6 text-emerald-600" />
                </div>

                {/* Big Animated Number */}
                <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-2 tracking-tight">
                  <span>
                    {displayValue}
                  </span>
                </div>

                {/* Label & Description */}
                <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 mb-1">
                  {stat.label}
                </h4>

                <p className="text-xs text-slate-500 font-normal max-w-[200px]">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
