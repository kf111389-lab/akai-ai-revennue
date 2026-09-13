import React from 'react';
import { 
  PhoneMissed, 
  Timer, 
  FileX, 
  UserX, 
  Archive, 
  GitBranch, 
  Unlink, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { LeakItem } from '../types';

interface RevenueLeaksProps {
  onScrollToAudit: () => void;
}

export const RevenueLeaks: React.FC<RevenueLeaksProps> = ({ onScrollToAudit }) => {
  const leaks: LeakItem[] = [
    {
      id: 'missed-calls',
      iconName: 'phone-missed',
      title: 'MISSED CALLS',
      desc: 'Potential customers call when your team is busy, after hours, or on another line.',
      impact: '62% of missed callers immediately dial a competitor'
    },
    {
      id: 'slow-follow-up',
      iconName: 'timer',
      title: 'SLOW LEAD RESPONSE',
      desc: 'Inbound web leads lose intent while waiting hours for a manual human callback.',
      impact: 'Lead conversion drops 8x after just 5 minutes'
    },
    {
      id: 'unfinished-estimates',
      iconName: 'file-x',
      title: 'UNFINISHED ESTIMATES',
      desc: 'Proposals and quotes are emailed, but structured follow-up halts after day 2.',
      impact: 'Up to 35% of deal pipeline dies in unclosed quotes'
    },
    {
      id: 'no-shows',
      iconName: 'user-x',
      title: 'NO-SHOW APPOINTMENTS',
      desc: 'Consultations disappear from the calendar without proactive confirmation or rescue.',
      impact: 'Wastes costly sales rep hours & field calendar slots'
    },
    {
      id: 'forgotten-leads',
      iconName: 'archive',
      title: 'FORGOTTEN OLD LEADS',
      desc: 'Past enquiries from 3-12 months ago sit dormant and untouched inside your CRM.',
      impact: 'Thousands in hidden pipeline equity left unharvested'
    },
    {
      id: 'sales-gaps',
      iconName: 'git-branch',
      title: 'SALES PIPELINE GAPS',
      desc: 'Leads progress through stages without automated next-action prompts or reminders.',
      impact: 'Deals slip through cracks between human handoffs'
    },
    {
      id: 'broken-workflows',
      iconName: 'unlink',
      title: 'BROKEN WORKFLOWS',
      desc: 'Disconnected webhooks, SMS triggers, or sync steps fail silently with zero alerts.',
      impact: 'Silent automation breakdowns burn ad spend daily'
    },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'phone-missed': return <PhoneMissed className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 'timer': return <Timer className="w-5 h-5 text-sky-400" />;
      case 'file-x': return <FileX className="w-5 h-5 text-blue-400" />;
      case 'user-x': return <UserX className="w-5 h-5 text-rose-400" />;
      case 'archive': return <Archive className="w-5 h-5 text-amber-400" />;
      case 'git-branch': return <GitBranch className="w-5 h-5 text-teal-400" />;
      case 'unlink': return <Unlink className="w-5 h-5 text-orange-400" />;
      default: return <AlertTriangle className="w-5 h-5 text-[var(--accent-primary)]" />;
    }
  };

  return (
    <section id="revenue-leaks" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Root-Cause Diagnostic</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            WHERE IS YOUR REVENUE GETTING <span className="text-rose-500">STUCK?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Most businesses don't need another generic tool. They need to locate and repair the critical gaps between lead acquisition, response, quotation, and customer retention.
          </p>
        </div>

        {/* Leaks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {leaks.map((leak) => (
            <div
              key={leak.id}
              className="akai-panel rounded-2xl p-6 relative flex flex-col justify-between group hover:border-[var(--border-accent)] hover:shadow-xl hover:shadow-[var(--accent-glow)] transition-all duration-300"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                  {renderIcon(leak.iconName)}
                </div>
                <h3 className="font-display text-sm sm:text-base font-bold text-[var(--text-primary)] mb-2 tracking-wide">
                  {leak.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {leak.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <span className="text-[11px] font-mono text-[var(--accent-primary)] font-medium">
                  Impact: {leak.impact}
                </span>
              </div>
            </div>
          ))}

          {/* Call to action card */}
          <div className="akai-panel rounded-2xl p-6 border-dashed border-[var(--border-medium)] bg-[var(--bg-surface)] flex flex-col justify-center items-center text-center">
            <h3 className="font-display text-base sm:text-lg font-extrabold text-[var(--text-primary)] mb-2">
              How Many Leaks Cost You Today?
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mb-5">
              Let AkAI run an automated diagnostic on your lead pipeline and workflow infrastructure.
            </p>
            <button
              onClick={onScrollToAudit}
              className="w-full py-3 px-4 rounded-xl font-display text-xs font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-md shadow-[var(--accent-glow)] hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>AUDIT MY LEAKS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onScrollToAudit}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-display text-sm font-extrabold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-95 shadow-xl shadow-[var(--accent-glow)] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>LET AKAI FIND THE GAPS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
