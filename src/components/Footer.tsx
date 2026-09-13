import React from 'react';
import { Bot, Mail, Linkedin, ArrowUp, Calendar } from 'lucide-react';

interface FooterProps {
  onBookCall: () => void;
  onScrollToAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookCall, onScrollToAudit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] relative text-[var(--text-muted)] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--accent-primary)] to-[var(--accent-secondary)] p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-[var(--bg-card)] rounded-[7px] flex items-center justify-center">
                <Bot className="w-4 h-4 text-[var(--accent-primary)]" />
              </div>
            </div>
            <div>
              <span className="font-display font-extrabold text-base tracking-wider text-[var(--text-primary)]">
                AK<span className="text-[var(--accent-primary)]">AI</span>
              </span>
              <p className="text-[11px] text-[var(--text-muted)]">AI Revenue Recovery & Business Automation Systems</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[var(--text-secondary)]">
            <a 
              href="mailto:fk111389@gmail.com" 
              className="hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>fk111389@gmail.com</span>
            </a>
            <span className="text-[var(--border-medium)]">•</span>
            <a 
              href="https://www.linkedin.com/in/farhan-khan-325925429" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Farhan Khan on LinkedIn</span>
            </a>
            <span className="text-[var(--border-medium)]">•</span>
            <button 
              onClick={onBookCall}
              className="hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Calendly Call</span>
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--border-accent)] bg-[var(--bg-card)] transition-all cursor-pointer flex items-center gap-1 text-xs"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[var(--text-muted)]">
          <div>
            © 2026 AkAI — Founded by Farhan Khan. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onScrollToAudit} className="hover:text-[var(--accent-primary)]">Free Audit</button>
            <span>•</span>
            <span>n8n Workflows</span>
            <span>•</span>
            <span>Voice Telephony</span>
            <span>•</span>
            <span>Google Web Speech Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
