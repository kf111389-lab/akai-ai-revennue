import React from 'react';
import { 
  Flame, 
  Home, 
  Sun, 
  Building2, 
  Stethoscope, 
  Dumbbell, 
  Store,
  Users2,
  CheckCircle
} from 'lucide-react';
import { IndustryCard } from '../types';

export const WhoWeHelp: React.FC = () => {
  const industries: IndustryCard[] = [
    {
      title: 'HVAC & Home Services',
      desc: 'Service calls demand immediate response — AI triages urgency, answers common queries, and books technician dispatch 24/7.',
      iconName: 'flame',
      metric: 'Emergency lead dispatch in <90s'
    },
    {
      title: 'Roofing',
      desc: 'Estimate-heavy businesses where follow-up is everything — AI systematically re-engages homeowners until quotes close.',
      iconName: 'home',
      metric: 'Recovers 22% of cold estimates'
    },
    {
      title: 'Solar',
      desc: 'High-ticket consultations need fast response — AI qualifies monthly power bill, roof ownership, and purchase readiness.',
      iconName: 'sun',
      metric: 'Eliminates unqualified sit fees'
    },
    {
      title: 'Real Estate',
      desc: 'Portal enquiries (Zillow, Realtor) can go cold in minutes — AI responds instantly, qualifies buyers, and schedules property viewings.',
      iconName: 'building',
      metric: 'Zero missed weekend leads'
    },
    {
      title: 'Clinics & Dentists',
      desc: 'Patients want instant appointments — AI handles booking requests, answers insurance prerequisites, and fills empty chair hours.',
      iconName: 'stethoscope',
      metric: 'Drastic reduction in front-desk load'
    },
    {
      title: 'Gyms & Fitness',
      desc: 'Trial sign-ups convert highest when contacted immediately before excitement cools. AI books trial inductions in under 2 minutes.',
      iconName: 'dumbbell',
      metric: '3.4x higher trial show rate'
    },
    {
      title: 'Local Service Businesses',
      desc: 'Salons, legal practices, consulting agencies — any business that relies on high-ticket appointments and active customer retention.',
      iconName: 'store',
      metric: 'Seamless CRM & calendar sync'
    },
  ];

  const renderIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-[var(--accent-primary)]";
    switch (name) {
      case 'flame': return <Flame className={iconClass} />;
      case 'home': return <Home className={iconClass} />;
      case 'sun': return <Sun className={iconClass} />;
      case 'building': return <Building2 className={iconClass} />;
      case 'stethoscope': return <Stethoscope className={iconClass} />;
      case 'dumbbell': return <Dumbbell className={iconClass} />;
      case 'store': return <Store className={iconClass} />;
      default: return <Users2 className={iconClass} />;
    }
  };

  return (
    <section id="who-we-help" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-xs font-semibold mb-3">
            <Users2 className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>Target Verticals</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            WHO WE <span className="text-[var(--accent-secondary)]">HELP</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Lead-heavy businesses where missed calls, slow response times, pending estimates, and appointments directly determine bottom-line revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="akai-panel rounded-2xl p-6 flex flex-col justify-between group hover:border-[var(--border-accent)] hover:shadow-xl hover:shadow-[var(--accent-glow)] transition-all duration-300"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                  {renderIcon(ind.iconName)}
                </div>
                <h3 className="font-display text-sm sm:text-base font-bold text-[var(--text-primary)] mb-2 tracking-wide">
                  {ind.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {ind.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center gap-1.5 text-[11px] font-mono text-[var(--accent-primary)] font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                <span>{ind.metric}</span>
              </div>
            </div>
          ))}

          {/* Tailored Consultation card */}
          <div className="akai-panel rounded-2xl p-6 border-dashed border-[var(--border-medium)] bg-[var(--bg-surface)] flex flex-col justify-center text-center">
            <h3 className="font-display text-sm sm:text-base font-bold text-[var(--text-primary)] mb-2">
              Don't See Your Industry?
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mb-4">
              If your business relies on inbound leads, consultations, or quotes, AkAI can be engineered to your bespoke workflow.
            </p>
            <a
              href="#contact"
              className="py-2.5 px-4 rounded-xl text-xs font-bold text-[var(--accent-primary)] border border-[var(--border-accent)] bg-[var(--badge-bg)] hover:opacity-90 text-center transition-all"
            >
              Inquire About Your Industry →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
