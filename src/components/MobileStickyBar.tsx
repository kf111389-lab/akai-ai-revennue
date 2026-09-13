import React from 'react';
import { Mic, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenDemo: () => void;
  onBookCall: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenDemo, onBookCall }) => {
  return (
    <aside aria-label="Quick actions" className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[var(--bg-nav)] backdrop-blur-xl border-t border-[var(--border-subtle)] md:hidden">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={onOpenDemo}
          className="flex-1 py-3 px-3 rounded-xl font-display text-xs font-bold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center gap-1.5 shadow-lg shadow-[var(--accent-glow)] active:scale-95 transition-all cursor-pointer"
        >
          <Mic className="w-3.5 h-3.5" />
          <span>TALK TO AKAI</span>
        </button>

        <button
          onClick={onBookCall}
          className="flex-1 py-3 px-3 rounded-xl font-display text-xs font-bold text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-medium)] flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          <span>BOOK CALL</span>
        </button>
      </div>
    </aside>
  );
};
