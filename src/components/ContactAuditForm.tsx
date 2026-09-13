import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Building, 
  Mail, 
  User, 
  Globe, 
  MessageSquareText, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface ContactAuditFormProps {
  onBookCall: () => void;
}

export const ContactAuditForm: React.FC<ContactAuditFormProps> = ({ onBookCall }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    website: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch("https://formsubmit.co/ajax/fk111389@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          industry: formData.industry || 'Not specified',
          website: formData.website || 'Not provided',
          message: formData.message || 'Audit request',
          _subject: `🔥 New AkAI Revenue Leak Audit Request from ${formData.name}!`,
          _template: "table"
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Form submission notice:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const auditHighlights = [
    "Identify missed-call revenue recovery opportunities",
    "Identify slow lead response time bottlenecks",
    "Review your current lead & customer journey map",
    "Pinpoint high-impact AI automation opportunities",
    "Receive custom, practical system recommendations"
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="akai-panel rounded-3xl p-6 sm:p-12 border border-[var(--border-subtle)] relative overflow-hidden shadow-xl shadow-[var(--accent-glow)]">
          
          {/* Top header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-xs font-semibold mb-3">
              <Search className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Complimentary Strategic Audit</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              YOUR BUSINESS ALREADY HAS A WORKFLOW
            </h2>
            <div className="font-display text-xl sm:text-2xl font-extrabold text-[var(--accent-primary)] mt-1">
              LET'S FIND WHAT'S LEAKING
            </div>
            <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Start with a free 10-minute AI Revenue Leak Audit. We'll examine your current pipeline and pinpoint hidden gaps in response, follow-up, booking, and reactivation.
            </p>
          </div>

          {/* Audit Highlights */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-5 mb-8 max-w-xl mx-auto">
            <div className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider font-bold mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>What You Receive During The 10-Minute Audit:</span>
            </div>
            <div className="space-y-2">
              {auditHighlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Form or Success Message */}
          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2">
                Audit Request Received!
              </h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.name}</strong>! Farhan Khan and the AkAI team will review your business information and reach out within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onBookCall}
                  className="px-6 py-3 rounded-xl font-display text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-95 shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Prefer To Pick A Time Now? Book 15-Min Call</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-3 rounded-xl text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  Submit Another Response
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-accent)] focus:ring-1 focus:ring-[var(--accent-primary)]/40 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    <span>Your Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. john@example.com"
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-accent)] focus:ring-1 focus:ring-[var(--accent-primary)]/40 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    <span>Company Name</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Home Services"
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-accent)] focus:ring-1 focus:ring-[var(--accent-primary)]/40 transition-all"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                    Select Your Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-accent)] focus:ring-1 focus:ring-[var(--accent-primary)]/40 transition-all"
                  >
                    <option value="">Select Industry (optional)</option>
                    <option value="HVAC">HVAC & Home Services</option>
                    <option value="Roofing">Roofing</option>
                    <option value="Solar">Solar</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Clinic/Healthcare">Clinic / Healthcare</option>
                    <option value="Salon/Spa">Salon / Spa</option>
                    <option value="Gym/Fitness">Gym / Fitness</option>
                    <option value="Local Service">Local Service Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Website */}
              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>Website URL (optional)</span>
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourbusiness.com"
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-accent)] focus:ring-1 focus:ring-[var(--accent-primary)]/40 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5 flex items-center gap-1.5">
                  <MessageSquareText className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>Biggest leak in your business right now?</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. Missed weekend calls, slow follow-up on proposals, unconfirmed appointments..."
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-accent)] focus:ring-1 focus:ring-[var(--accent-primary)]/40 transition-all resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-display text-sm font-extrabold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-95 shadow-xl shadow-[var(--accent-glow)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Your Audit Request...</span>
                  ) : (
                    <>
                      <Search className="w-4 h-4 text-white" />
                      <span>GET MY FREE 10-MINUTE AUDIT</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2 flex items-center justify-center gap-2 text-[11px] text-[var(--text-muted)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>By submitting, you agree AkAI may contact you. We strictly protect and never sell your information.</span>
              </div>
            </form>
          )}

          {/* Secondary Direct Booking with Farhan Khan */}
          <div className="mt-10 pt-8 border-t border-[var(--border-subtle)] text-center">
            <p className="text-xs text-[var(--text-muted)] mb-3 font-medium">
              Want to skip the form and speak directly with the founder?
            </p>
            <button
              onClick={onBookCall}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[var(--accent-primary)] bg-[var(--badge-bg)] border border-[var(--border-accent)] hover:opacity-90 shadow-md transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>FREE 15-MINUTE CALL WITH FARHAN KHAN (CALENDLY)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
