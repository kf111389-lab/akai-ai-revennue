// AkAI Google Web Speech & Intelligence Engine
// Free, unlimited, browser-native AI voice assistant

export interface AssistantResponse {
  text: string;
  suggestedAction?: 'audit' | 'call' | 'workflows';
}

export const getAkAIResponse = (rawInput: string): AssistantResponse => {
  const t = (rawInput || '').toLowerCase().trim();

  if (!t) {
    return {
      text: "Hello! I'm the AkAI revenue recovery assistant. Ask me how we recover lost leads, automate estimate follow-ups, or build custom voice agents.",
    };
  }

  // Pricing & Cost
  if (/price|pricing|cost|charge|fee|budget|rate|expensive|how much/.test(t)) {
    return {
      text: "Our revenue systems are tailored per business. Every engagement begins with a complimentary 10-minute Revenue Leak Audit, followed by a transparent one-time system build and a monthly care plan. Would you like to schedule your audit with Farhan Khan?",
      suggestedAction: 'call',
    };
  }

  // Booking / Schedule / Call
  if (/book|call|schedule|meeting|appointment|calendar|talk to farhan|consultation/.test(t)) {
    return {
      text: "Awesome! You can book a direct 15-minute Revenue Leak strategy call with Farhan Khan using our Calendly link or the 'Book Free Call' button right here.",
      suggestedAction: 'call',
    };
  }

  // Services / Offer / What do you do
  if (/service|offer|what do you do|help|capabilities|features|voice agent|what can you/.test(t)) {
    return {
      text: "AkAI develops turnkey AI systems: 24/7 inbound & outbound Voice Agents, automated estimate & quote recovery, instant missed-call SMS triggers, and self-healing n8n business workflows that integrate directly into your CRM.",
      suggestedAction: 'audit',
    };
  }

  // Missed calls / Leads / Revenue leaks
  if (/miss|leak|lost|leads|slow|follow.?up|abandon|estimate|unanswered/.test(t)) {
    return {
      text: "Over 60% of inbound buyers choose the first business that responds. AkAI detects missed calls and stalled estimates in under two minutes, initiates personalized multi-channel outreach, and books qualified appointments on autopilot.",
      suggestedAction: 'audit',
    };
  }

  // Who is Farhan / Team
  if (/farhan|who made|who built|founder|creator|team/.test(t)) {
    return {
      text: "Farhan Khan is the automation architect and founder of AkAI. He designs bespoke AI voice systems, n8n automations, and revenue pipelines for lead-driven businesses worldwide.",
      suggestedAction: 'call',
    };
  }

  // Real estate / HVAC / Roofing / Industries
  if (/hvac|roof|solar|real estate|clinic|dentist|gym|salon|contractor|industry/.test(t)) {
    return {
      text: "We specialize in high-ticket, lead-sensitive industries including HVAC, Roofing, Solar, Real Estate, Clinics, and Local Contractors. For example, for roofing & HVAC we automate quote follow-ups and emergency call triage.",
      suggestedAction: 'audit',
    };
  }

  // How it works / Process
  if (/how does it work|process|steps|implementation|n8n/.test(t)) {
    return {
      text: "Our 5-step process is simple: First we Audit your current lead leaks, second we Map the ideal customer journey, third we Build the AI + n8n logic, fourth we Connect your existing CRM & calendar, and fifth we continuously Monitor uptime.",
      suggestedAction: 'audit',
    };
  }

  // Greetings
  if (/hello|hi|hey|good morning|good afternoon|good evening|salam|aoa/.test(t)) {
    return {
      text: "Hello! I am AkAI's real-time AI assistant. Ask me about our 4 core pillars: Revenue Recovery, Voice Agents, Business Automations, and Customer Retention.",
    };
  }

  // Default fallback
  return {
    text: "That is a great question. AkAI specializes in eliminating silent revenue leaks — such as missed calls, slow response times, and unclosed quotes. Would you like me to guide you to our 10-minute Free Revenue Audit?",
    suggestedAction: 'audit',
  };
};

// Voice synthesis wrapper using Google/Browser speech synthesis
export class VoiceSynthesizer {
  private synth: SpeechSynthesis | null = null;
  private selectedVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prioritize Google US English or natural sounding English voices
    const preferred = voices.find(v => 
      (v.name.includes('Google') && v.lang.startsWith('en')) || 
      v.name.includes('Natural') || 
      (v.lang === 'en-US' && !v.name.includes('Bad'))
    );
    this.selectedVoice = preferred || voices.find(v => v.lang.startsWith('en')) || voices[0] || null;
  }

  public speak(text: string, onStart?: () => void, onEnd?: () => void, onError?: (err: unknown) => void) {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    try {
      this.synth.cancel(); // Stop any pending speech
      const utterance = new SpeechSynthesisUtterance(text);
      
      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }
      utterance.lang = 'en-US';
      utterance.rate = 1.02;
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        if (onStart) onStart();
      };

      utterance.onend = () => {
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        console.warn('Speech synthesis notice:', e);
        if (onEnd) onEnd();
      };

      this.synth.speak(utterance);
    } catch (err) {
      if (onError) onError(err);
      if (onEnd) onEnd();
    }
  }

  public stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {
        // ignore
      }
    }
  }
}
