import React from 'react';
import { ShieldCheck, Check, Mic, Calendar, ArrowRight } from 'lucide-react';

interface TrustSectionProps {
  onOpenDemo: () => void;
  onBookCall: () => void;
  onScrollToAudit: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({
  onOpenDemo,
  onBookCall,
  onScrollToAudit,
}) => {
  const trustPoints = [
    "No fake testimonials or fabricated reviews",
    "No hype-filled unrealistic guaranteed revenue claims",
    "No inflated or cherry-picked case studies",
    "AkAI engineers practical, hardened automation systems directly around your actual business workflows",
    "Every automation is customized according to your unique CRM, lead journey, response rules, and operational requirements"
  ];

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="akai-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl shadow-[var(--accent-glow)]">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Integrity & Craftsmanship</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            BUILT FOR REAL <span className="text-[var(--accent-secondary)]">BUSINESS WORKFLOWS</span>
          </h2>
          
          <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Professional enterprise automation systems configured around your actual tools — not generic toys.
          </p>

          <div className="mt-8 mb-10 max-w-xl mx-auto text-left space-y-3.5">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                <div className="w-5 h-5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[var(--accent-primary)]" />
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenDemo}
              className="px-6 py-3.5 rounded-xl font-display text-xs font-bold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-95 shadow-lg shadow-[var(--accent-glow)] flex items-center gap-2 transition-all cursor-pointer"
            >
              <Mic className="w-4 h-4" />
              <span>TALK TO AKAI</span>
            </button>

            <button
              onClick={onBookCall}
              className="px-6 py-3.5 rounded-xl font-display text-xs font-bold text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-medium)] hover:border-[var(--border-accent)] flex items-center gap-2 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>BOOK FREE CALL</span>
            </button>

            <button
              onClick={onScrollToAudit}
              className="px-6 py-3.5 rounded-xl font-display text-xs font-bold text-[var(--accent-primary)] border border-[var(--border-accent)] bg-[var(--badge-bg)] hover:opacity-90 flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>FREE AI AUDIT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
