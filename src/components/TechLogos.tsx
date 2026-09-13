import React from 'react';
import { Cpu, Sparkles } from 'lucide-react';

export const TechLogos: React.FC = () => {
  const technologies = [
    { name: 'Google Speech Engine', tag: 'Native Voice' },
    { name: 'OpenAI GPT-4o', tag: 'Reasoning Core' },
    { name: 'ElevenLabs', tag: 'Neural Synthesis' },
    { name: 'Twilio', tag: 'Telephony & SMS' },
    { name: 'n8n', tag: 'Workflow Automation' },
    { name: 'Cloudflare', tag: 'Edge Reliability' },
    { name: 'Calendly', tag: 'Scheduling Sync' },
  ];

  return (
    <section className="relative py-7 border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--accent-primary)] uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineered with Production-Grade Infrastructure</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] shadow-sm transition-all group flex items-center gap-2"
            >
              <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-[var(--accent-primary)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-1.5 py-0.5 rounded">
                {tech.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
