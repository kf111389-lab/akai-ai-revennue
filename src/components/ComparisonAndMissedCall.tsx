import React from 'react';
import { Bot, Zap, Trophy, PhoneCall, CheckCircle2 } from 'lucide-react';

export const ComparisonAndMissedCall: React.FC = () => {
  const missedCallSteps = [
    { title: "Customer Calls", desc: "Inbound phone ring" },
    { title: "Call Missed", desc: "Team on another line" },
    { title: "Event Detected", desc: "Twilio webhook triggers" },
    { title: "SMS Sent", desc: "Friendly prompt <30s" },
    { title: "Customer Replies", desc: "Explains emergency" },
    { title: "AI Qualifies", desc: "Assesses job scope" },
    { title: "Slot Offered", desc: "Live suggestions" },
    { title: "Calendar Booked", desc: "Time locked in" },
    { title: "CRM Updated", desc: "Complete recording" },
    { title: "Owner Notified", desc: "Push notification alert" },
  ];

  return (
    <section className="py-16 sm:py-20 relative bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* PART 1: Not Another Chatbot */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-widest font-semibold">
              The AkAI Difference
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1">
              NOT ANOTHER <span className="text-[var(--accent-secondary)]">CHATBOT</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              AkAI isn't about slapping another generic chatbot widget on your website and calling it automation. We engineer the entire workflow behind your customer journey — calls, forms, CRM, calendar, follow-up, estimates, and customer retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Generic AI */}
            <div className="akai-panel rounded-2xl p-7 text-center flex flex-col items-center justify-center opacity-85">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-[var(--text-muted)]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold mb-2">
                GENERIC AI
              </span>
              <p className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                Add a generic chatbot.
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-2">
                Sits in the bottom corner of your page waiting for visitors who rarely click it.
              </p>
            </div>

            {/* AkAI */}
            <div className="akai-panel rounded-2xl p-7 border-[var(--border-accent)] bg-[var(--bg-card-subtle)] text-center flex flex-col items-center justify-center shadow-lg shadow-[var(--accent-glow)] md:scale-105">
              <div className="w-12 h-12 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[var(--accent-primary)]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold mb-2">
                AKAI APPROACH
              </span>
              <p className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                Find the workflow gap.
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-2">
                Identifies missed calls, stalled quotes, and dead leads across all existing channels.
              </p>
            </div>

            {/* Result */}
            <div className="akai-panel rounded-2xl p-7 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-emerald-500" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold mb-2">
                THE RESULT
              </span>
              <p className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                Build the system around business.
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-2">
                A seamless revenue recovery machine synchronized directly to your sales pipeline.
              </p>
            </div>
          </div>
        </div>

        {/* PART 2: One Missed Call. One Automated Workflow. */}
        <div className="akai-panel rounded-3xl p-6 sm:p-10 border border-[var(--border-subtle)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <span className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-widest font-semibold">
                Live Scenario Breakdown
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] mt-1 flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-[var(--accent-primary)]" />
                <span>ONE MISSED CALL. ONE AUTOMATED WORKFLOW.</span>
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                An illustrative workflow demonstrating how a lost phone ring transforms into a booked calendar meeting.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[var(--badge-text)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
              ILLUSTRATIVE WORKFLOW
            </span>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex items-center min-w-[980px] gap-2">
              {missedCallSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-3 text-center group hover:border-[var(--border-accent)] transition-all">
                    <div className="text-[10px] font-mono text-[var(--accent-primary)] mb-0.5">T+{idx * 30}s</div>
                    <div className="text-xs font-bold text-[var(--text-primary)] leading-snug">{step.title}</div>
                    <div className="text-[10px] text-[var(--text-muted)] mt-1">{step.desc}</div>
                  </div>
                  {idx < missedCallSteps.length - 1 && (
                    <div className="text-[var(--accent-primary)] font-bold px-0.5">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-secondary)] gap-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
              Customer receives personalized care before they have time to search for a competitor.
            </span>
            <span className="font-mono text-[var(--accent-primary)]">Average cycle: &lt;180 seconds</span>
          </div>
        </div>

      </div>
    </section>
  );
};
