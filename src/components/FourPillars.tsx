import React from 'react';
import { 
  Search, 
  FileText, 
  Database, 
  PhoneMissed, 
  CalendarX, 
  Phone, 
  MessageSquare, 
  MessagesSquare, 
  Instagram, 
  UserCheck, 
  Calendar, 
  Workflow, 
  Activity, 
  Shield, 
  Plug, 
  Star, 
  RefreshCw, 
  Repeat, 
  AlarmClock,
  Sparkles
} from 'lucide-react';
import { PillarCategory } from '../types';

export const FourPillars: React.FC = () => {
  const pillars: PillarCategory[] = [
    {
      id: 'pillar-1',
      pillarNumber: 'Pillar 01',
      title: 'REVENUE RECOVERY',
      subtitle: 'Identify and salvage hidden revenue leaking across your current pipeline.',
      services: [
        {
          title: 'AI Revenue Leak Detection',
          desc: 'Identify where opportunities are getting stuck in your current process.',
          iconName: 'search'
        },
        {
          title: 'AI Estimate Recovery',
          desc: 'Follow-up sequences for old quotes that never converted into signed deals.',
          iconName: 'file-text'
        },
        {
          title: 'Old Lead Reactivation',
          desc: 'Re-engage dormant enquiries with personalized, contextual AI outreach.',
          iconName: 'database'
        },
        {
          title: 'Missed-Call Recovery',
          desc: 'Automatic high-converting SMS dispatched the exact moment a call is missed.',
          iconName: 'phone-missed'
        },
        {
          title: 'No-Show Recovery',
          desc: 'Automated 1-click rescheduling flows for abandoned or cancelled meetings.',
          iconName: 'calendar-x'
        }
      ]
    },
    {
      id: 'pillar-2',
      pillarNumber: 'Pillar 02',
      title: 'AI CUSTOMER COMMUNICATION',
      subtitle: 'Instant, human-sounding inbound and outbound multi-channel engagement.',
      services: [
        {
          title: 'AI Voice Agents',
          desc: 'Inbound and outbound voice AI that qualifies leads and books appointments 24/7.',
          iconName: 'phone',
          highlight: true
        },
        {
          title: 'SMS Automation',
          desc: 'Lightning-fast text-based lead follow-up, nurture, and qualification.',
          iconName: 'message-square'
        },
        {
          title: 'WhatsApp Automation',
          desc: 'Fluid conversations on the primary messaging app your customers actually use.',
          iconName: 'messages-square'
        },
        {
          title: 'Instagram / DM Automation',
          desc: 'Instant replies to social media enquiries — even outside business hours.',
          iconName: 'instagram'
        },
        {
          title: 'AI Lead Qualification',
          desc: 'Pre-qualify leads against your strict budgetary and geographic criteria.',
          iconName: 'user-check'
        }
      ]
    },
    {
      id: 'pillar-3',
      pillarNumber: 'Pillar 03',
      title: 'BUSINESS OPERATIONS',
      subtitle: 'Frictionless backend plumbing that keeps your stack aligned in real time.',
      services: [
        {
          title: 'CRM Automation',
          desc: 'Leads, call notes, and bookings logged automatically with zero manual data entry.',
          iconName: 'database'
        },
        {
          title: 'Calendar Automation',
          desc: 'Direct calendar synchronization with automated time-zone checks & confirmations.',
          iconName: 'calendar'
        },
        {
          title: 'n8n Workflows',
          desc: 'Custom workflow automations engineered on reliable, scale-to-zero infrastructure.',
          iconName: 'workflow',
          highlight: true
        },
        {
          title: 'Workflow Monitoring',
          desc: 'Watch your automations and receive immediate alerts when something hiccups.',
          iconName: 'activity'
        },
        {
          title: 'AI Business Watchdog',
          desc: 'Automated monitoring for failed workflows, broken webhooks, and sync errors.',
          iconName: 'shield'
        },
        {
          title: 'Custom Integrations',
          desc: 'Engineered around your existing software suite — no forced platform switches.',
          iconName: 'plug'
        }
      ]
    },
    {
      id: 'pillar-4',
      pillarNumber: 'Pillar 04',
      title: 'CUSTOMER RETENTION',
      subtitle: 'Turn one-time purchasers into repeat clients and 5-star brand advocates.',
      services: [
        {
          title: 'Review Requests',
          desc: 'Automatically request 5-star Google & Trustpilot reviews immediately following job completion.',
          iconName: 'star'
        },
        {
          title: 'Customer Reactivation',
          desc: 'Targeted win-back campaigns for past buyers who haven’t re-booked in 6+ months.',
          iconName: 'refresh-cw'
        },
        {
          title: 'Follow-Up Campaigns',
          desc: 'Sequences customized to customer timing, behavior, and explicit responses.',
          iconName: 'repeat'
        },
        {
          title: 'Appointment Reminders',
          desc: 'Drastically reduce costly no-shows with smart SMS and voice confirmation touches.',
          iconName: 'alarm-clock'
        }
      ]
    }
  ];

  const renderIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-[var(--accent-primary)]";
    switch (name) {
      case 'search': return <Search className={iconClass} />;
      case 'file-text': return <FileText className={iconClass} />;
      case 'database': return <Database className={iconClass} />;
      case 'phone-missed': return <PhoneMissed className={iconClass} />;
      case 'calendar-x': return <CalendarX className={iconClass} />;
      case 'phone': return <Phone className={iconClass} />;
      case 'message-square': return <MessageSquare className={iconClass} />;
      case 'messages-square': return <MessagesSquare className={iconClass} />;
      case 'instagram': return <Instagram className={iconClass} />;
      case 'user-check': return <UserCheck className={iconClass} />;
      case 'calendar': return <Calendar className={iconClass} />;
      case 'workflow': return <Workflow className={iconClass} />;
      case 'activity': return <Activity className={iconClass} />;
      case 'shield': return <Shield className={iconClass} />;
      case 'plug': return <Plug className={iconClass} />;
      case 'star': return <Star className={iconClass} />;
      case 'refresh-cw': return <RefreshCw className={iconClass} />;
      case 'repeat': return <Repeat className={iconClass} />;
      case 'alarm-clock': return <AlarmClock className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="pillars" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>Comprehensive Architecture</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            FOUR PILLARS OF <span className="text-[var(--accent-secondary)]">AKAI</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Systems designed around the full customer lifecycle — engineered for hardened operational excellence.
          </p>
        </div>

        {/* Pillars Stack */}
        <div className="space-y-12 sm:space-y-16">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="relative">
              {/* Pillar Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                    {pillar.pillarNumber}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-wide">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] font-medium">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {pillar.services.map((srv, idx) => (
                  <div
                    key={idx}
                    className={`akai-panel rounded-2xl p-5 flex flex-col justify-between group hover:border-[var(--border-accent)] hover:shadow-lg hover:shadow-[var(--accent-glow)] transition-all ${
                      srv.highlight ? 'border-[var(--border-accent)] bg-[var(--bg-card-subtle)]' : ''
                    }`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        {renderIcon(srv.iconName)}
                      </div>
                      <h4 className="font-display text-sm font-bold text-[var(--text-primary)] mb-2 leading-snug">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors">
                      <span>Automated</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
