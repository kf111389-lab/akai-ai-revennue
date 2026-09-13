import React from 'react';
import { 
  Search, 
  Map, 
  Code2, 
  Layers, 
  Activity, 
  Inbox, 
  Bot, 
  UserCheck, 
  Calendar, 
  Repeat, 
  RefreshCw, 
  Database, 
  Bell, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export const ProcessAndJourney: React.FC = () => {
  const processSteps = [
    {
      num: '01',
      title: 'AUDIT',
      desc: 'We conduct an exhaustive forensic review of where leads, enquiries, and tasks are getting stuck.',
      icon: Search
    },
    {
      num: '02',
      title: 'MAP',
      desc: 'We blueprint your ideal customer journey, objection trees, and communication triggers.',
      icon: Map
    },
    {
      num: '03',
      title: 'BUILD',
      desc: 'We construct production-ready AI voice scripts and custom n8n backend logic.',
      icon: Code2
    },
    {
      num: '04',
      title: 'CONNECT',
      desc: 'We wire directly into your CRM, calendar, Twilio, email, and messaging channels.',
      icon: Layers
    },
    {
      num: '05',
      title: 'MONITOR',
      desc: 'Our watchdog monitors workflow health 24/7 and tunes conversion rates as you scale.',
      icon: Activity
    },
  ];

  const journeySteps = [
    { label: 'Lead Arrives', icon: Inbox, detail: 'Web, ad, call, referral' },
    { label: 'AI Responds', icon: Bot, detail: 'Instant <2 min outreach' },
    { label: 'AI Qualifies', icon: UserCheck, detail: 'Criteria verification' },
    { label: 'Appointment / Estimate', icon: Calendar, detail: 'Booked on calendar' },
    { label: 'Follow-Up', icon: Repeat, detail: 'Contextual reminders' },
    { label: 'Recovery if Stalled', icon: RefreshCw, detail: 'Objection handling' },
    { label: 'CRM Updated', icon: Database, detail: 'Transcripts & tags' },
    { label: 'Sales Alerted', icon: Bell, detail: 'Real-time alert' },
    { label: 'Retention Flow', icon: HeartHandshake, detail: 'Reviews & re-booking' },
  ];

  return (
    <section className="py-16 sm:py-20 relative bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* SECTION 1: 5-Step Process */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-widest font-semibold">
              Implementation Roadmap
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1">
              FROM REVENUE LEAK TO <span className="text-[var(--accent-secondary)]">AUTOMATED WORKFLOW</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)]">
              A clear, predictable 5-step engineering process from initial audit to live enterprise system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="akai-panel rounded-2xl p-6 relative flex flex-col justify-between group hover:border-[var(--border-accent)] hover:shadow-xl hover:shadow-[var(--accent-glow)] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-extrabold text-[var(--accent-primary)]">
                        {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-[var(--accent-primary)]" />
                      </div>
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[var(--text-primary)] mb-2 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center gap-1 text-[11px] text-[var(--text-muted)] font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    <span>Phase Complete</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: The AkAI Revenue Journey */}
        <div className="akai-panel rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-widest font-semibold">
              End-to-End Orchestration
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">
              THE AKAI REVENUE JOURNEY
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)]">
              A closed-loop system safeguarding every prospect from initial touchpoint through lifetime retention.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-3.5 flex flex-col items-center text-center justify-center hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-[var(--accent-primary)]" />
                  </div>
                  <div className="text-xs font-bold text-[var(--text-primary)] leading-tight mb-1">
                    {step.label}
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono leading-tight">
                    {step.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
