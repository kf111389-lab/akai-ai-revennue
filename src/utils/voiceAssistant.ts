// AkAI Multi-Layered Intelligence & Voice Engine
// Supports Server-Side Gemini API with Intelligent Multilingual Local Fallback

export interface AssistantResponse {
  text: string;
  suggestedAction?: 'audit' | 'call' | 'workflows';
}

interface MessageHistoryItem {
  sender: 'user' | 'assistant';
  text: string;
}

// Detect if user text is in Roman Urdu or Urdu script
function isUrduOrRomanUrdu(text: string): boolean {
  const urduScriptRegex = /[\u0600-\u06FF]/;
  if (urduScriptRegex.test(text)) return true;

  const lower = text.toLowerCase();

  // Common Roman Urdu phrases
  if (/\b(details do|bata do|btao|jawab do|kr do|kar do|kaise ho|kya haal|kon hai|koun hai|kya hai|kya kaam)\b/.test(lower)) {
    return true;
  }

  // Unambiguous Roman Urdu words (avoiding common English words like 'do', 'me')
  const romanUrduWords = [
    'ki', 'ka', 'ke', 'ko', 'kya', 'kia', 'hai', 'hain', 'batao', 'btao', 
    'dy', 'krna', 'karna', 'karta', 'krte', 'krty', 'kesa', 
    'kese', 'kaise', 'kitna', 'kitnay', 'kharcha', 'paisa', 'paise', 'kon', 
    'koun', 'mujhe', 'hum', 'aap', 'tum', 'salam', 'walaikum', 'shukriya', 
    'theek', 'thik', 'bhi', 'mein', 'wala', 'wali', 'karein',
    'chahiye', 'chahye', 'soller', 'bijli', 'rabta', 'baat', 'hoga', 'hogi'
  ];

  const words = lower.split(/[^a-zA-Z0-9_-]+/);
  const matchCount = words.filter(w => romanUrduWords.includes(w)).length;
  return matchCount >= 1;
}

// Smart Local Fallback Engine (Multi-Vertical & Multi-Lingual)
export const getAkAIResponse = (rawInput: string): AssistantResponse => {
  const t = (rawInput || '').toLowerCase().trim();

  if (!t) {
    return {
      text: "Hello! Main AkAI revenue assistant hoon. Aap mujh se Solar, HVAC, Roofing, missed-calls recovery ya pricing ke baray mein pooch sakte hain.",
    };
  }

  const isUrdu = isUrduOrRomanUrdu(t);

  // 1. SOLAR / SOLLER (Addresses user's specific query in screenshot)
  if (/soller|solar|panel|rooftop|inverter|net metering|bijli/.test(t)) {
    if (isUrdu) {
      return {
        text: "AkAI solar installers ke liye complete automated revenue system banata hai: Jaise hi koi homeowner quote maangta hai ya call miss hoti hai, AI under 90 seconds un ka monthly bijli ka bill aur chhat ki condition qualify karta hai aur site survey book kar deta hai. Bheje gaye pending solar estimates ko automatically follow-up kar ke deal close karwata hai.",
        suggestedAction: 'audit',
      };
    }
    return {
      text: "For Solar companies, AkAI captures and qualifies inbound homeowners in under 90 seconds — verifying utility bill amounts, roof age, and shading before booking site surveys directly onto your calendar. It also automates persistent multi-touch follow-ups on stalled solar proposals.",
      suggestedAction: 'audit',
    };
  }

  // 2. MISSED CALLS / PHONE UNANSWERED (Must be before general 'call')
  if (/miss|unanswered|lost call|nahi uthaya|uthaya nahi/.test(t) || (/\bcall\b/.test(t) && /miss|lost|abandon|drop|ignore/.test(t))) {
    if (isUrdu) {
      return {
        text: "Jab bhi aapki business call miss hoti hai, AkAI 90 seconds ke andar customer ko AI SMS ya intelligent Voice callback bhejta hai. Customer se un ki requirement poochta hai aur calendar par booking confirm kar leta hai taake lead competitor ke paas na jaye.",
        suggestedAction: 'audit',
      };
    }
    return {
      text: "62% of calls to local businesses go unanswered. AkAI triggers an instant AI text and voice callback in under 90 seconds, qualifying the lead and booking them directly onto your calendar before they can dial a competitor.",
      suggestedAction: 'audit',
    };
  }

  // 3. ESTIMATE / QUOTES RECOVERY / UNCLOSED PROPOSALS
  if (/estimate|quote|proposal|bheja|bheji|invoice|unclosed|revive|follow.?up/.test(t)) {
    if (isUrdu) {
      return {
        text: "Zyada tar deals follow-up na hone ki wajah se zaya hoti hain. AkAI aapke bheje gaye pending quotes ko intelligent, natural SMS aur WhatsApp messages ke zariye nurture karta hai aur objections door kar ke unhein close karwata hai.",
        suggestedAction: 'workflows',
      };
    }
    return {
      text: "AkAI automates non-pushy, high-converting follow-up sequences across SMS, email, and voice for all delivered quotes, reviving dormant estimates and closing deals that would otherwise slip away.",
      suggestedAction: 'workflows',
    };
  }

  // 4. PRICING & COST / KHARCHA / RATE
  if (/price|pricing|cost|charge|fee|budget|rate|expensive|how much|kharcha|kitna|kitnay|paise|fees/.test(t)) {
    if (isUrdu) {
      return {
        text: "Hamara pricing system bohot transparent hai. Har client ke liye pehle 10-minute ka Free Revenue Leak Audit hota hai. Us ke baad ek fixed one-time system build fee aur monthly management hoti hai — baghair kisi per-seat SaaS license ke jhanjhat ke.",
        suggestedAction: 'call',
      };
    }
    return {
      text: "Our pricing is transparent and ROI-focused. Every client begins with a complimentary 10-minute Revenue Leak Audit, followed by a flat-fee custom system build and a monthly care plan, with zero per-seat software markups.",
      suggestedAction: 'call',
    };
  }

  // 5. FARHAN KHAN / FOUNDER
  if (/farhan|khan|founder|creator|owner|who made|who built|architect|malik|kon hai|koun hai/.test(t)) {
    if (isUrdu) {
      return {
        text: "Farhan Khan AkAI ke founder aur automation architect hain. Woh high-ticket lead businesses ke liye custom AI Voice agents, n8n automated workflows aur revenue pipelines design karte hain. Aap un ke sath direct 15-minute strategy call book kar sakte hain.",
        suggestedAction: 'call',
      };
    }
    return {
      text: "Farhan Khan is the founder and automation architect of AkAI. He engineers bespoke AI voice systems, n8n automations, and revenue pipelines for businesses globally. You can schedule a 15-minute 1-on-1 strategy call directly with him on Calendly.",
      suggestedAction: 'call',
    };
  }

  // 6. ROOFING & HVAC
  if (/roof|roofing|hvac|air condition|heating|chhat|leak/.test(t)) {
    if (isUrdu) {
      return {
        text: "Roofing aur HVAC contractors ke liye AkAI 24/7 emergency dispatch handle karta hai, insurance quote follow-ups automate karta hai, aur unclosed inspection estimates ko revive karta hai.",
        suggestedAction: 'audit',
      };
    }
    return {
      text: "For Roofing & HVAC contractors, AkAI provides 24/7 emergency dispatch triage, storm-surge call capture, and automated follow-ups for pending roof inspections and system replacement estimates.",
      suggestedAction: 'audit',
    };
  }

  // 7. REAL ESTATE / PROPERTY
  if (/real estate|property|realtor|broker|zameen|makan|flat|plot/.test(t)) {
    if (isUrdu) {
      return {
        text: "Real estate agents ke liye AkAI ads aur portal leads ko foran qualify karta hai — buyer ka budget, location preference aur timeline pooch kar direct property walkthrough schedule karta hai.",
        suggestedAction: 'audit',
      };
    }
    return {
      text: "In Real Estate, speed to lead determines who gets the commission. AkAI qualifies buyers and sellers within 2 minutes of ad submission and books walkthroughs directly into your calendar.",
      suggestedAction: 'audit',
    };
  }

  // 8. CLINICS, DENTAL & MED SPAS
  if (/clinic|dentist|dental|doctor|patient|med spa|salon|appointment/.test(t)) {
    if (isUrdu) {
      return {
        text: "Clinics aur Dental practices ke liye AkAI 24/7 patient booking manage karta hai, smart SMS reminders bhej kar no-shows ko 80% kam karta hai, aur purane dormant patients ko recall karta hai.",
        suggestedAction: 'audit',
      };
    }
    return {
      text: "For Dental & Aesthetic clinics, AkAI provides 24/7 appointment self-scheduling, automated 3-tier no-show reduction reminders, and patient reactivation campaigns.",
      suggestedAction: 'audit',
    };
  }

  // 9. HOW IT WORKS / PROCESS / N8N
  if (/how does it work|process|steps|implementation|n8n|kaise|kese|tariqa|workflow/.test(t)) {
    if (isUrdu) {
      return {
        text: "Hamara 5-step process hai: 1) 10-Minute Free Revenue Audit, 2) Workflow & Journey Mapping, 3) AI Voice aur n8n Engine build, 4) Aapke existing CRM ke sath integration, aur 5) Continuous 24/7 monitoring.",
        suggestedAction: 'workflows',
      };
    }
    return {
      text: "Our implementation follows 5 steps: 1) Free 10-min Revenue Audit, 2) Workflow Architecture, 3) Custom AI & n8n Engine build, 4) CRM/Calendar deep sync, and 5) Live deployment with ongoing monitoring.",
      suggestedAction: 'workflows',
    };
  }

  // 10. BOOKING / CALL / APPOINTMENT / RABTA (After missed calls and quotes)
  if (/book|schedule|meeting|appointment|calendar|consultation|rabta|milna|baat/.test(t) || (/\bcall\b/.test(t) && /strategy|book|schedule|appointment|talk/.test(t))) {
    if (isUrdu) {
      return {
        text: "Zaroor! Aap Farhan Khan ke sath direct 15-minute strategy call book kar sakte hain. Page par 'Book 15-Min Strategy Call' button dabaiye ya Calendly link se apna pasandeeda time choose karein.",
        suggestedAction: 'call',
      };
    }
    return {
      text: "You can book a direct 15-minute Revenue Strategy session with Farhan Khan using the Calendly button in the navigation or the contact section below.",
      suggestedAction: 'call',
    };
  }

  // 11. GREETINGS
  if (/hello|hi|hey|good morning|good afternoon|good evening|salam|aoa|kya haal|kaise ho|kese ho/.test(t)) {
    if (isUrdu) {
      return {
        text: "Walaikum Assalam! Main theek hoon, shukriya. Main AkAI revenue recovery assistant hoon. Aap mujh se Solar, missed calls, pricing ya automations ke baray mein jo chahein pooch sakte hain!",
      };
    }
    return {
      text: "Hello! I'm AkAI's real-time AI assistant. Ask me anything about our voice agents, missed call revenue recovery, estimate follow-ups, or industry automations.",
    };
  }

  // 12. Contextual Dynamic Fallback (Never a boring single response!)
  if (isUrdu) {
    return {
      text: `Aap ne "${rawInput.trim()}" ke baray mein poocha. AkAI aapke business ke revenue leaks (jaise missed calls, unclosed estimates aur slow lead response) ko AI Voice aur n8n automations se hal karta hai. Kya aap is ke baray mein mazeed detail chahte hain ya Farhan Khan ke sath 15-min call schedule karna chahein ge?`,
      suggestedAction: 'audit',
    };
  }

  return {
    text: `Regarding your query about "${rawInput.trim()}": AkAI engineers custom 24/7 AI Voice systems, instant missed-call lead capture, and automated quote recovery pipelines tailored specifically to your business. Would you like to review our 10-minute Free Audit or book a strategy session with Farhan Khan?`,
    suggestedAction: 'audit',
  };
};

// Asynchronous call that queries server-side Gemini first, falling back to smart local engine
export const getAkAIResponseAsync = async (
  rawInput: string,
  history?: MessageHistoryItem[]
): Promise<AssistantResponse> => {
  const trimmed = (rawInput || '').trim();
  if (!trimmed) {
    return getAkAIResponse(trimmed);
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9000); // 9s timeout to allow full Gemini reasoning

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: trimmed,
        history: history || []
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.text && typeof data.text === 'string' && data.text.trim().length > 0) {
        return {
          text: data.text.trim(),
          suggestedAction: /audit|free audit/i.test(data.text) ? 'audit' : /call|farhan|calendly|book/i.test(data.text) ? 'call' : undefined
        };
      }
    }
  } catch {
    // Seamlessly use local engine
  }

  // Seamless fallback to comprehensive multi-lingual engine
  return getAkAIResponse(trimmed);
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
    // Prioritize high-quality voices
    const preferred = voices.find(v => 
      (v.name.includes('Google') && (v.lang.startsWith('en') || v.lang.startsWith('ur') || v.lang.startsWith('hi'))) || 
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
