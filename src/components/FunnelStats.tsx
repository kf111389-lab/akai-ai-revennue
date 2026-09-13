import React from 'react';
import { TrendingUp, Clock, PhoneCall, CheckCircle2, Calendar, Activity } from 'lucide-react';

export const FunnelStats: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 relative bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)] uppercase tracking-widest font-semibold mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>Pipeline Telemetry & Analytics</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
              EXAMPLE AI <span className="text-[var(--accent-primary)]">FUNNEL</span>
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Illustrative demo data showing how an automated lead funnel functions at scale.
            </p>
          </div>
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)]">
              ILLUSTRATIVE DEMO DATA
            </span>
          </div>
        </div>

        {/* 4 Stat Cards with Sparklines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {/* Stat 1 */}
          <div className="akai-card rounded-2xl p-6 group hover:border-[var(--border-accent)] transition-all">
            <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono mb-2">
              <span>CALLS MADE</span>
              <PhoneCall className="w-4 h-4 text-[var(--accent-primary)]" />
            </div>
            <div className="font-display text-3xl font-extrabold text-[var(--text-primary)] mb-2">
              1,248
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-semibold mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>↑ 18.2% volume</span>
            </div>
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
              <polyline 
                points="0,25 15,22 30,24 45,16 60,18 75,10 100,6" 
                fill="none" 
                stroke="var(--accent-primary)" 
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Stat 2 */}
          <div className="akai-card rounded-2xl p-6 group hover:border-[var(--border-accent)] transition-all">
            <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono mb-2">
              <span>LEADS QUALIFIED</span>
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)]" />
            </div>
            <div className="font-display text-3xl font-extrabold text-[var(--text-primary)] mb-2">
              586
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-semibold mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>↑ 23.6% accuracy</span>
            </div>
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
              <polyline 
                points="0,26 20,20 40,22 60,14 80,12 100,5" 
                fill="none" 
                stroke="var(--accent-primary)" 
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Stat 3 */}
          <div className="akai-card rounded-2xl p-6 group hover:border-[var(--border-accent)] transition-all">
            <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono mb-2">
              <span>MEETINGS BOOKED</span>
              <Calendar className="w-4 h-4 text-[var(--accent-primary)]" />
            </div>
            <div className="font-display text-3xl font-extrabold text-[var(--text-primary)] mb-2">
              214
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-semibold mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>↑ 31.4% show-rate</span>
            </div>
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
              <polyline 
                points="0,24 20,25 40,18 60,20 80,10 100,7" 
                fill="none" 
                stroke="var(--accent-primary)" 
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Stat 4 */}
          <div className="akai-card rounded-2xl p-6 group hover:border-[var(--border-accent)] transition-all">
            <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono mb-2">
              <span>AVG. RESPONSE</span>
              <Clock className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="font-display text-3xl font-extrabold text-emerald-500 mb-2">
              1.8 min
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--accent-primary)] font-semibold mb-3">
              <span>↓ 88% faster follow-up</span>
            </div>
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
              <polyline 
                points="0,6 20,10 40,9 60,16 80,20 100,25" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Duo: Conversion Funnel & Live Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Conversion Funnel */}
          <div className="akai-panel rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)]">
            <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-6 flex items-center justify-between">
              <span>Conversion Funnel Retention</span>
              <span className="text-xs font-mono text-[var(--accent-primary)]">Yield: 28%</span>
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-[var(--text-secondary)]">
                  <span>LEADS CAPTURED</span>
                  <span className="font-mono text-[var(--accent-primary)]">100%</span>
                </div>
                <div className="w-full bg-[var(--bg-surface)] rounded-xl h-9 overflow-hidden p-1 border border-[var(--border-subtle)]">
                  <div 
                    className="h-full rounded-lg bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] flex items-center justify-center text-[11px] font-extrabold text-white"
                    style={{ width: '100%' }}
                  >
                    1,248 Leads Discovered
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-[var(--text-secondary)]">
                  <span>AI CALL ENGAGED</span>
                  <span className="font-mono text-[var(--accent-primary)]">78%</span>
                </div>
                <div className="w-full bg-[var(--bg-surface)] rounded-xl h-9 overflow-hidden p-1 border border-[var(--border-subtle)]">
                  <div 
                    className="h-full rounded-lg bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] opacity-90 flex items-center justify-center text-[11px] font-extrabold text-white"
                    style={{ width: '78%' }}
                  >
                    973 Live Conversations
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-[var(--text-secondary)]">
                  <span>QUALIFIED ON BUDGET & TIMING</span>
                  <span className="font-mono text-emerald-500">46%</span>
                </div>
                <div className="w-full bg-[var(--bg-surface)] rounded-xl h-9 overflow-hidden p-1 border border-[var(--border-subtle)]">
                  <div 
                    className="h-full rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 flex items-center justify-center text-[11px] font-extrabold text-white"
                    style={{ width: '46%' }}
                  >
                    586 Pre-Qualified
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-[var(--text-secondary)]">
                  <span>MEETINGS BOOKED ON CALENDAR</span>
                  <span className="font-mono text-[var(--accent-primary)]">28%</span>
                </div>
                <div className="w-full bg-[var(--bg-surface)] rounded-xl h-9 overflow-hidden p-1 border border-[var(--border-subtle)]">
                  <div 
                    className="h-full rounded-lg bg-gradient-to-r from-[var(--accent-primary)] to-emerald-500 flex items-center justify-center text-[11px] font-extrabold text-white"
                    style={{ width: '28%' }}
                  >
                    214 Booked Appointments
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example AI Activity Feed */}
          <div className="akai-panel rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                  Example AI Activity Feed
                </h3>
                <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  LIVE STREAM
                </span>
              </div>

              <div className="divide-y divide-[var(--border-subtle)]">
                {[
                  { id: 'Demo Lead #001', status: 'Booked', badgeColor: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30', time: '2m ago', detail: 'Quote approved • Roofing Inspection' },
                  { id: 'Demo Lead #002', status: 'Qualified', badgeColor: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30', time: '9m ago', detail: 'Electric bill $280/mo • Solar Candidate' },
                  { id: 'Demo Lead #003', status: 'Booked', badgeColor: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30', time: '16m ago', detail: 'Emergency AC repair • Confirmed for 2 PM' },
                  { id: 'Demo Lead #004', status: 'Callback', badgeColor: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30', time: '24m ago', detail: 'Requested callback after 5 PM today' },
                  { id: 'Demo Lead #005', status: 'Reactivated', badgeColor: 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30', time: '38m ago', detail: 'Old quote from July reopened via SMS' },
                ].map((item, idx) => (
                  <div key={idx} className="py-3.5 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                        <span>{item.id}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${item.badgeColor}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] mt-0.5">{item.detail}</div>
                    </div>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] whitespace-nowrap">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] mt-4 text-[11px] text-[var(--text-muted)]">
              *Live activity logs sync seamlessly into HubSpot, GoHighLevel, Salesforce, or Google Sheets.
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-[var(--text-muted)] italic">
          These figures are illustrative examples for demonstration purposes and are not guaranteed client results.
        </p>

      </div>
    </section>
  );
};
