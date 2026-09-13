import React, { useState } from 'react';
import { 
  ArrowRight, 
  Workflow, 
  FileCheck2, 
  CalendarCheck, 
  ShieldAlert, 
  BrainCircuit, 
  CheckCircle2, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface WorkflowsSectionProps {
  onScrollToAudit: () => void;
}

export const WorkflowsSection: React.FC<WorkflowsSectionProps> = ({ onScrollToAudit }) => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'engine' | 'estimate' | 'noshow' | 'watchdog' | 'intelligence'>('engine');

  const engineSteps = [
    { title: "Lead / Customer Data", desc: "Inbound stream" },
    { title: "AI Analysis", desc: "Intent & status" },
    { title: "Opportunity Detected", desc: "Trigger condition" },
    { title: "Personalized Follow-Up", desc: "SMS / Voice / Email" },
    { title: "Human Handoff", desc: "Escalate to team" },
    { title: "CRM Updated", desc: "Real-time sync" },
  ];

  const estimateSteps = [
    { title: "Estimate Sent", desc: "Quote dispatched" },
    { title: "No Response", desc: "Time threshold met" },
    { title: "AI Checks Window", desc: "Business hours logic" },
    { title: "Personalized Message", desc: "Contextual nudge" },
    { title: "Customer Responds", desc: "Questions answered" },
    { title: "Sales Team Alerted", desc: "Instant slack/push" },
    { title: "CRM Updated", desc: "Pipeline advanced" },
  ];

  const noShowSteps = [
    { title: "Appointment Booked", desc: "Calendar synced" },
    { title: "Smart Reminder", desc: "24h & 2h prior" },
    { title: "Confirmation Flow", desc: "One-tap confirm" },
    { title: "No-Show Detected", desc: "Missed session" },
    { title: "Reschedule Message", desc: "Instant booking link" },
    { title: "Calendar Updated", desc: "New slot locked" },
    { title: "CRM Updated", desc: "Attendance logged" },
  ];

  const salesSteps = [
    { title: "Call / Conversation", desc: "Audio or chat" },
    { title: "AI Analysis", desc: "Transcript parse" },
    { title: "Lead Intent", desc: "Readiness score" },
    { title: "Objection Logged", desc: "Price/Timing/Trust" },
    { title: "Next Action", desc: "Suggested play" },
    { title: "CRM / Sales Team", desc: "Actionable memo" },
  ];

  return (
    <section id="workflows" className="py-16 sm:py-20 relative bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs for Workflows */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-xs font-semibold mb-3">
            <Workflow className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>Automated AI Architecture</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            DEEP-DIVE INTO THE <span className="text-[var(--accent-primary)]">AKAI ENGINES</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)]">
            Explore how automated triggers turn missed opportunities into recovered cash flow.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'engine', label: 'Recovery Engine', icon: Workflow },
            { id: 'estimate', label: 'Estimate Recovery', icon: FileCheck2 },
            { id: 'noshow', label: 'No-Show Rescue', icon: CalendarCheck },
            { id: 'watchdog', label: 'Business Watchdog', icon: ShieldAlert },
            { id: 'intelligence', label: 'Sales Intelligence', icon: BrainCircuit },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeWorkflowTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveWorkflowTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[var(--badge-bg)] border border-[var(--border-accent)] text-[var(--accent-primary)] shadow-sm'
                    : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-medium)]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: Revenue Recovery Engine */}
        {activeWorkflowTab === 'engine' && (
          <div className="akai-panel rounded-3xl p-6 sm:p-10 border border-[var(--border-subtle)] animate-fade-in">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider font-semibold">Core Engine 01</span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">
                AI REVENUE RECOVERY ENGINE
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-2 leading-relaxed">
                Recover opportunities already sitting inside your business. The system is designed to identify missed calls, unanswered enquiries, old leads, unclosed estimates, no-show appointments, leads with no recent follow-up, stalled CRM opportunities, and customers due for reactivation.
              </p>
            </div>

            {/* Horizontal Flow Steps */}
            <div className="overflow-x-auto pb-4">
              <div className="flex items-center min-w-[760px] gap-2">
                {engineSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-4 text-center group hover:border-[var(--border-accent)] transition-all">
                      <div className="text-[10px] font-mono text-[var(--accent-primary)] mb-1">STEP 0{idx + 1}</div>
                      <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wide">{step.title}</div>
                      <div className="text-[11px] text-[var(--text-muted)] mt-1">{step.desc}</div>
                    </div>
                    {idx < engineSteps.length - 1 && (
                      <div className="text-[var(--accent-primary)] font-bold px-1 text-lg">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border-subtle)]">
              <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                <span>Runs continuously 24/7 without manual intervention.</span>
              </div>
              <button
                onClick={onScrollToAudit}
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[var(--accent-glow)]"
              >
                <span>BOOK A REVENUE LEAK AUDIT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: Estimate Recovery */}
        {activeWorkflowTab === 'estimate' && (
          <div className="akai-panel rounded-3xl p-6 sm:p-10 border border-[var(--border-subtle)] animate-fade-in">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider font-semibold">Core Engine 02</span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">
                YOUR OLD ESTIMATES MAY NOT BE DEAD
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-2 leading-relaxed">
                AI-powered follow-up for prospects who received a quote or estimate but never moved forward. Rather than letting thousands in pipeline value evaporate, AkAI engages in personalized, objection-handling dialogue.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-[var(--accent-primary)]">
                <span className="text-[var(--text-muted)] mr-1">Proven in:</span>
                {['HVAC', 'Roofing', 'Solar', 'Home Services', 'Real Estate'].map((ind, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-[var(--badge-bg)] border border-[var(--badge-border)]">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="overflow-x-auto pb-4 my-6">
              <div className="flex items-center min-w-[850px] gap-2">
                {estimateSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-3.5 text-center group hover:border-[var(--border-accent)] transition-all">
                      <div className="text-[10px] font-mono text-[var(--accent-primary)] mb-1">STAGE 0{idx + 1}</div>
                      <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-tight">{step.title}</div>
                      <div className="text-[10px] text-[var(--text-muted)] mt-1">{step.desc}</div>
                    </div>
                    {idx < estimateSteps.length - 1 && (
                      <div className="text-[var(--accent-primary)] font-bold px-1">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border-subtle)]">
              <span className="text-xs text-[var(--text-secondary)]">
                Recovers an average of 14% to 26% of cold unclosed estimates.
              </span>
              <button
                onClick={onScrollToAudit}
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[var(--accent-glow)]"
              >
                <span>SEE HOW ESTIMATE RECOVERY WORKS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: No-Show Rescue */}
        {activeWorkflowTab === 'noshow' && (
          <div className="akai-panel rounded-3xl p-6 sm:p-10 border border-[var(--border-subtle)] animate-fade-in">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider font-semibold">Core Engine 03</span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">
                BOOKED DOESN'T ALWAYS MEAN SHOWED
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-2 leading-relaxed">
                AkAI connects appointment systems with automated reminders, confirmation flows, rescheduling, and rapid follow-up workflows so calendar slots are never wasted.
              </p>
            </div>

            {/* Steps */}
            <div className="overflow-x-auto pb-4 my-6">
              <div className="flex items-center min-w-[850px] gap-2">
                {noShowSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-3.5 text-center group hover:border-[var(--border-accent)] transition-all">
                      <div className="text-[10px] font-mono text-[var(--accent-primary)] mb-1">PHASE 0{idx + 1}</div>
                      <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-tight">{step.title}</div>
                      <div className="text-[10px] text-[var(--text-muted)] mt-1">{step.desc}</div>
                    </div>
                    {idx < noShowSteps.length - 1 && (
                      <div className="text-[var(--accent-primary)] font-bold px-1">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border-subtle)]">
              <span className="text-xs text-[var(--text-secondary)]">
                Reduces calendar abandonment and automates instant re-booking links.
              </span>
              <button
                onClick={onScrollToAudit}
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[var(--accent-glow)]"
              >
                <span>REDUCE FOLLOW-UP GAPS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: Business Watchdog */}
        {activeWorkflowTab === 'watchdog' && (
          <div className="akai-panel rounded-3xl p-6 sm:p-10 border border-[var(--border-subtle)] animate-fade-in">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider font-semibold">Core Engine 04</span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">
                YOUR AUTOMATIONS NEED AN AUTOMATION
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-2 leading-relaxed">
                AkAI builds watchdog monitoring workflows that constantly observe your business automations and alert you the second something breaks, timeouts, or gets stuck.
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                Monitors: Failed workflows • Failed webhooks • Failed SMS • Failed emails • Calendar sync discrepancies • CRM sync errors • Stuck leads • Failed AI calls • Unprocessed enquiries.
              </p>
            </div>

            {/* Sample Alert Box */}
            <div className="max-w-xl my-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 text-rose-500" />
                  <span>Sample Watchdog Alert Simulation</span>
                </div>
                <span className="text-[10px] font-mono text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  EXAMPLE — NOT A LIVE ERROR
                </span>
              </div>
              <div className="text-xs text-[var(--text-primary)] space-y-2">
                <p className="font-semibold text-rose-500">Incident: Lead follow-up webhook timed out.</p>
                <div className="text-[var(--text-secondary)] text-[11px] space-y-1 bg-[var(--bg-surface)] p-3 rounded-lg border border-[var(--border-subtle)] font-mono">
                  <div>[STATUS] Issue detected automatically within 3 seconds.</div>
                  <div>[DISPATCH] Business owner notified via SMS & Slack.</div>
                  <div>[RECOVERY] Fallback recovery queue executed without data loss.</div>
                </div>
                <p className="text-[11px] text-[var(--text-muted)] italic">
                  *This illustrates how AkAI watchdog prevents customer loss when third-party APIs experience downtime.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[var(--text-muted)]">Recovery actions can be configured for all supported CRMs and APIs.</span>
              <button
                onClick={onScrollToAudit}
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[var(--accent-glow)]"
              >
                <span>SETUP WATCHDOG PROTECTION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: Sales Intelligence */}
        {activeWorkflowTab === 'intelligence' && (
          <div className="akai-panel rounded-3xl p-6 sm:p-10 border border-[var(--border-subtle)] animate-fade-in">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider font-semibold">Core Engine 05</span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">
                TURN YOUR CONVERSATIONS INTO SALES INTELLIGENCE
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-2 leading-relaxed">
                AI can analyse call transcripts and customer conversations to help identify objections, follow-up opportunities, lead intent, and next actions.
              </p>
            </div>

            {/* Flow */}
            <div className="overflow-x-auto pb-4 my-6">
              <div className="flex items-center min-w-[760px] gap-2">
                {salesSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-3.5 text-center group hover:border-[var(--border-accent)] transition-all">
                      <div className="text-[10px] font-mono text-[var(--accent-primary)] mb-1">NODE 0{idx + 1}</div>
                      <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-tight">{step.title}</div>
                      <div className="text-[10px] text-[var(--text-muted)] mt-1">{step.desc}</div>
                    </div>
                    {idx < salesSteps.length - 1 && (
                      <div className="text-[var(--accent-primary)] font-bold px-1">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Intent Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Hot / Warm / Cold Scoring',
                'Follow-up Required Alert',
                'Objections Identified',
                'Suggested Next Action',
                'Conversation Summaries'
              ].map((badge, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[var(--text-muted)] italic">
                Positioned as sales support — AI assists and empowers your sales reps, without replacing the human touch.
              </span>
              <button
                onClick={onScrollToAudit}
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[var(--accent-glow)]"
              >
                <span>ACTIVATE SALES INTELLIGENCE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
