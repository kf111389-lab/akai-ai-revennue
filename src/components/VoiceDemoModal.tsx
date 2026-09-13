import React from 'react';
import { X } from 'lucide-react';
import { VoiceAssistant } from './VoiceAssistant';

interface VoiceDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
  onScrollToAudit: () => void;
}

export const VoiceDemoModal: React.FC<VoiceDemoModalProps> = ({
  isOpen,
  onClose,
  onBookCall,
  onScrollToAudit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-2xl shadow-[var(--accent-glow)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-accent)] transition-all cursor-pointer"
          aria-label="Close voice modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal content */}
        <div className="p-5 sm:p-7 overflow-y-auto">
          <VoiceAssistant 
            onBookCall={() => { onClose(); onBookCall(); }}
            onScrollToAudit={() => { onClose(); onScrollToAudit(); }}
          />
        </div>
      </div>
    </div>
  );
};
