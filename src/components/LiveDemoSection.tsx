import React from 'react';
import { Sparkles, Mic } from 'lucide-react';
import { VoiceAssistant } from './VoiceAssistant';

interface LiveDemoSectionProps {
  onBookCall: () => void;
  onScrollToAudit: () => void;
}

export const LiveDemoSection: React.FC<LiveDemoSectionProps> = ({
  onBookCall,
  onScrollToAudit
}) => {
  return (
    <section id="demo-section" className="py-16 sm:py-20 relative bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-xs font-semibold mb-3">
            <Mic className="w-3.5 h-3.5 text-[var(--accent-primary)] animate-pulse" />
            <span>Interactive Voice Intelligence</span>
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            MEET AKAI — <span className="text-[var(--accent-primary)]">EXPERIENCE AI IN ACTION</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Talk directly with the AkAI assistant in real time. Experience conversational logic, instant qualification, and seamless workflow triggers.
          </p>
        </div>

        {/* Embedded Voice Assistant */}
        <VoiceAssistant 
          embedded={true}
          onBookCall={onBookCall}
          onScrollToAudit={onScrollToAudit}
        />
      </div>
    </section>
  );
};
