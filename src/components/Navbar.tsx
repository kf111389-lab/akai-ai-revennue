import React, { useState } from 'react';
import { Bot, Sparkles, PhoneCall, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onBookCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onBookCall }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[var(--nav-bg)] border-b border-[var(--border-subtle)] transition-all">
      {/* Top Prestige Brand Strip inspired by reference design */}
      <div className="bg-[#1E4630] text-[#E8EDE9] text-[11px] font-medium py-1.5 px-4 border-b border-[#2D5A40]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-5 overflow-x-auto no-scrollbar whitespace-nowrap mx-auto sm:mx-0">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <Sparkles className="w-3 h-3 text-[#C59B27]" />
              Missed Call AI Voice
            </span>
            <span className="text-[#C59B27]">✦</span>
            <span className="flex items-center gap-1.5">
              &lt;2 Min Lead Response
            </span>
            <span className="text-[#C59B27]">✦</span>
            <span className="flex items-center gap-1.5">
              Custom n8n Workflows
            </span>
            <span className="text-[#C59B27]">✦</span>
            <span className="flex items-center gap-1.5">
              Zero Per-Seat SaaS Traps
            </span>
            <span className="text-[#C59B27]">✦</span>
            <span className="flex items-center gap-1.5">
              Dormant Lead Reactivation
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[11px] text-[#D0DDD2]">
            <span>Founder Strategy Call:</span>
            <a 
              href="https://calendly.com/fk111389/15-minute-ai-audit-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E5B555] font-bold hover:underline"
            >
              Farhan Khan (15 Min) →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--accent-primary)] to-[var(--accent-secondary)] p-[1px] shadow-md transition-shadow">
            <div className="w-full h-full bg-[var(--bg-surface)] rounded-[11px] flex items-center justify-center">
              <Bot className="w-5 h-5 text-[var(--accent-primary)] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-2xl tracking-wider text-[var(--text-primary)]">
                AK<span className="text-[var(--accent-primary)]">AI</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[var(--accent-primary)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-1.5 py-0.5 rounded uppercase">
                v2.4
              </span>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] font-medium hidden sm:block">
              AI Revenue Recovery & Business Systems
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]">
          <button 
            onClick={() => scrollToSection('revenue-leaks')} 
            className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            Revenue Leaks
          </button>
          <button 
            onClick={() => scrollToSection('workflows')} 
            className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            AI Workflows
          </button>
          <button 
            onClick={() => scrollToSection('pillars')} 
            className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            4 Pillars
          </button>
          <button 
            onClick={() => scrollToSection('who-we-help')} 
            className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            Industries
          </button>
          <button 
            onClick={() => scrollToSection('demo-section')} 
            className="flex items-center gap-1.5 text-[var(--accent-primary)] font-semibold hover:opacity-85 transition-colors cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
            </span>
            Live Voice AI
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            Free Audit
          </button>
        </nav>

        {/* Right CTA Group */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[var(--accent-primary)] bg-[var(--badge-bg)] border border-[var(--badge-border)] hover:border-[var(--accent-primary)] transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>Voice Agent</span>
          </button>

          <button
            onClick={onBookCall}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-95 shadow-md shadow-[var(--accent-glow)] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book 15-Min Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile controls: Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-page)] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
            <button onClick={() => scrollToSection('revenue-leaks')} className="text-left px-3 py-2 rounded-lg hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]">Where Revenue Gets Stuck</button>
            <button onClick={() => scrollToSection('workflows')} className="text-left px-3 py-2 rounded-lg hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]">AI Automation Engines</button>
            <button onClick={() => scrollToSection('pillars')} className="text-left px-3 py-2 rounded-lg hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]">Four Pillars of AkAI</button>
            <button onClick={() => scrollToSection('who-we-help')} className="text-left px-3 py-2 rounded-lg hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]">Who We Help</button>
            <button onClick={() => scrollToSection('demo-section')} className="text-left px-3 py-2 rounded-lg hover:bg-[var(--bg-card-hover)] text-[var(--accent-primary)] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></span> Live AI Voice Demo
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left px-3 py-2 rounded-lg hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]">Free 10-Min Audit</button>
          </div>
          <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }} 
              className="w-full py-2.5 rounded-xl text-xs font-bold text-[var(--accent-primary)] bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[var(--accent-primary)]" />
              Talk to AkAI Voice AI
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onBookCall(); }} 
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent-glow)]"
            >
              <Calendar className="w-4 h-4" />
              Book Free Call with Farhan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
