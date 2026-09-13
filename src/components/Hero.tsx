import React from 'react';
import { Search, Mic, ArrowRight, ShieldCheck, Zap, Bot, Moon, Sparkles, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onScrollToAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onScrollToAudit }) => {
  return (
    <section className="relative pt-6 pb-14 lg:pt-12 lg:pb-20 overflow-hidden">
      {/* Background subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-[var(--accent-glow)] rounded-full blur-3xl pointer-events-none -z-10 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="akai-panel rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Refined Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
                <span>Next-Gen Business Automation & AI Voice Telephony</span>
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
                FIND THE REVENUE YOUR BUSINESS IS ALREADY{' '}
                <span className="text-[var(--accent-primary)]">LOSING</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal max-w-2xl">
                AkAI engineers enterprise AI revenue recovery and business automation systems that identify missed opportunities, recover abandoned leads, follow up automatically, and streamline your entire sales workflow.
              </p>

              {/* Trust Subtext */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)] font-medium">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                <span>Custom configured directly to your existing CRM, calendars, phone lines, and team workflow.</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onScrollToAudit}
                  className="px-7 py-4 rounded-xl text-sm font-display font-extrabold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-95 shadow-xl shadow-[var(--accent-glow)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>FIND MY REVENUE LEAKS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenDemo}
                  className="px-6 py-4 rounded-xl text-sm font-display font-bold text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-medium)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-card-hover)] shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Mic className="w-4 h-4 text-[var(--accent-primary)] animate-pulse" />
                  <span>TALK TO AKAI — LIVE VOICE DEMO</span>
                </button>
              </div>

              {/* Speech engine notice */}
              <div className="flex items-start gap-2 pt-1 text-xs text-[var(--text-muted)]">
                <Mic className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                <span>
                  Experience live, bidirectional AI voice dialogue. Powered directly in your browser with Google Web Speech.
                </span>
              </div>

              {/* Key Highlights */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-y-2 gap-x-6 text-xs text-[var(--text-secondary)] font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>100% Free 10-Min Audit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>No Lock-in Contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>Zero Software Swapping</span>
                </div>
              </div>
            </div>

            {/* Right Graphic Column: Interactive AI Voice Core */}
            <div className="lg:col-span-5 flex justify-center items-center py-6">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Outermost Orbit ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[var(--border-medium)] animate-[spin_32s_linear_infinite]"></div>
                {/* Secondary Orbit ring */}
                <div className="absolute inset-5 rounded-full border border-[var(--border-subtle)] animate-[spin_22s_linear_infinite_reverse]"></div>
                {/* Inner Orbit ring */}
                <div className="absolute inset-10 rounded-full border border-[var(--accent-glow)] animate-[spin_15s_linear_infinite]"></div>

                {/* Central AI Voice Core */}
                <div 
                  onClick={onOpenDemo}
                  className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[var(--bg-surface)] via-[var(--bg-card)] to-[var(--bg-card-hover)] border-2 border-[var(--border-accent)] shadow-2xl flex flex-col items-center justify-center cursor-pointer group hover:scale-105 transition-all"
                  style={{ boxShadow: '0 0 50px var(--accent-glow)' }}
                  title="Click to talk to AkAI"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    <Bot className="w-8 h-8 text-[var(--accent-primary)]" />
                  </div>
                  <span className="text-[11px] font-extrabold font-display tracking-wider text-[var(--text-primary)] uppercase">
                    Talk to AkAI
                  </span>
                  <div className="absolute -bottom-2.5 px-3 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-accent)] text-[10px] font-mono text-[var(--accent-primary)] font-bold shadow-md">
                    LIVE VOICE
                  </div>
                </div>

                {/* Floating Clean Micro Chips */}
                <div className="absolute -top-2 -left-3 sm:-left-6 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] animate-bounce" style={{ animationDuration: '4s' }}>
                  <Moon className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>24/7 Autopilot</span>
                </div>

                <div className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>&lt;2 Min Response</span>
                </div>

                <div className="absolute -bottom-3 left-4 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '2s' }}>
                  <Bot className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>AI Voice & Logic</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
