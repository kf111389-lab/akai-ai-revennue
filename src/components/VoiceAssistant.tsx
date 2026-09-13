import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Send, Sparkles, Bot, User, CheckCircle2, RotateCcw } from 'lucide-react';
import { getAkAIResponse, VoiceSynthesizer } from '../utils/voiceAssistant';
import { ChatMessage } from '../types';

interface VoiceAssistantProps {
  embedded?: boolean;
  onBookCall?: () => void;
  onScrollToAudit?: () => void;
}

export const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ 
  embedded = false,
  onBookCall,
  onScrollToAudit 
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [statusText, setStatusText] = useState("Ready — Click 'Start Conversation' to talk or type below");
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: "Hi! I'm the AkAI assistant. I help business owners uncover the revenue they're unknowingly losing from missed calls, slow follow-ups, and cold estimates. How can I help your business today?",
      timestamp: 'Just now'
    }
  ]);

  const synthesizerRef = useRef<VoiceSynthesizer | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize synthesizer
  useEffect(() => {
    synthesizerRef.current = new VoiceSynthesizer();
    return () => {
      if (synthesizerRef.current) {
        synthesizerRef.current.stop();
      }
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (e) { /* ignore */ }
      }
    };
  }, []);

  // Auto scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSpeaking, isListening]);

  // Handle incoming user statement and AI answer
  const handleUserMessage = (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setStatusText("AkAI is analyzing...");

    // Get smart response
    setTimeout(() => {
      const response = getAkAIResponse(userText);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setStatusText("AkAI is responding...");

      if (!isMuted && synthesizerRef.current) {
        setIsSpeaking(true);
        synthesizerRef.current.speak(
          response.text,
          () => {
            setIsSpeaking(true);
            setStatusText("AkAI is speaking...");
          },
          () => {
            setIsSpeaking(false);
            setStatusText("Conversation active — Ask your next question");
            // Auto re-listen if still in live voice mode
            if (isActive) {
              startListening();
            }
          }
        );
      } else {
        setStatusText("Conversation active — Ask your next question");
      }
    }, 400);
  };

  // Speech Recognition setup (Google Web Speech)
  const startListening = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setStatusText("Voice recognition not supported in this browser. You can type your message below!");
      setIsListening(false);
      return;
    }

    try {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (e) { /* ignore */ }
      }

      const rec = new SpeechRecognition();
      rec.lang = 'en-US';
      rec.interimResults = false;
      rec.maxAlternatives = 1;

      rec.onstart = () => {
        setIsListening(true);
        setStatusText("🎙 Listening to you... Speak clearly into your mic");
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setIsListening(false);
        handleUserMessage(transcript);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rec.onerror = (event: any) => {
        setIsListening(false);
        if (event.error === 'no-speech') {
          setStatusText("No speech detected. Click the microphone or type below.");
        } else if (event.error === 'not-allowed') {
          setStatusText("Microphone access was denied. Please allow microphone permissions or use text mode.");
        } else {
          setStatusText("Ready — Click microphone or type below");
        }
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
      rec.start();
    } catch (err) {
      console.warn('SpeechRecognition init error:', err);
      setIsListening(false);
      setStatusText("Click microphone to try listening again or type below.");
    }
  };

  const stopAllAudio = () => {
    setIsActive(false);
    setIsListening(false);
    setIsSpeaking(false);
    if (synthesizerRef.current) {
      synthesizerRef.current.stop();
    }
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (e) { /* ignore */ }
    }
    setStatusText("Session paused. Click 'Start Conversation' to resume.");
  };

  const toggleVoiceSession = () => {
    if (isActive) {
      stopAllAudio();
    } else {
      setIsActive(true);
      setStatusText("Initializing Google Web Speech engine...");
      // Speak welcome greeting then listen
      if (!isMuted && synthesizerRef.current) {
        setIsSpeaking(true);
        synthesizerRef.current.speak(
          "Hello! I am AkAI's revenue recovery assistant. Ask me anything about our voice agents, automated workflows, or booking your free audit.",
          () => {
            setIsSpeaking(true);
            setStatusText("AkAI is speaking...");
          },
          () => {
            setIsSpeaking(false);
            startListening();
          }
        );
      } else {
        startListening();
      }
    }
  };

  const handleSendText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const text = inputValue;
    setInputValue('');
    handleUserMessage(text);
  };

  const handleQuickPrompt = (promptText: string) => {
    handleUserMessage(promptText);
  };

  const resetChat = () => {
    stopAllAudio();
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text: "Conversation reset. How can AkAI help accelerate and recover your business revenue today?",
        timestamp: 'Just now'
      }
    ]);
    setStatusText("Ready — Click 'Start Conversation' to talk or type below");
  };

  return (
    <div className={`w-full ${embedded ? 'akai-panel rounded-3xl p-6 sm:p-8' : 'h-full flex flex-col'}`}>
      {/* Top Header / Status Strip */}
      <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className={`w-3 h-3 rounded-full ${isActive || isSpeaking ? 'bg-[var(--accent-primary)]' : 'bg-emerald-500'}`}></div>
            {(isActive || isSpeaking || isListening) && (
              <div className="absolute -inset-1 bg-[var(--accent-primary)]/40 rounded-full animate-ping"></div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm sm:text-base font-bold text-[var(--text-primary)]">AkAI Live Voice Engine</span>
              <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--badge-text)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-2 py-0.5 rounded-full">Google Web Speech</span>
            </div>
            <p className="text-xs text-[var(--text-muted)]">{statusText}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mute toggle */}
          <button
            onClick={() => {
              if (isSpeaking && !isMuted) {
                synthesizerRef.current?.stop();
                setIsSpeaking(false);
              }
              setIsMuted(!isMuted);
            }}
            className="p-2 rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--border-accent)] bg-[var(--bg-surface)] transition-colors cursor-pointer"
            title={isMuted ? "Unmute Voice" : "Mute Voice"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-[var(--accent-primary)]" />}
          </button>

          {/* Reset button */}
          <button
            onClick={resetChat}
            className="p-2 rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--border-accent)] bg-[var(--bg-surface)] transition-colors cursor-pointer"
            title="Reset Conversation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Visualizer & Orb State */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-5">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-tr from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 border border-[var(--border-accent)] shadow-inner">
            <Bot className={`w-7 h-7 ${isSpeaking ? 'text-[var(--accent-primary)] animate-pulse' : 'text-[var(--text-muted)]'}`} />
            {isSpeaking && (
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[var(--accent-primary)] items-center justify-center text-[8px] font-bold text-white">AI</span>
              </span>
            )}
          </div>
          <div>
            <div className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wider flex items-center gap-1.5">
              <span>{isSpeaking ? 'AI Speaking...' : isListening ? 'Listening for your voice...' : isActive ? 'Active Standby' : 'Voice Standby'}</span>
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              {isSpeaking 
                ? 'Synthesizing voice response in real-time' 
                : isListening 
                ? 'Speak now — microphone is actively capturing audio' 
                : 'Click button to initiate voice conversation'}
            </p>
          </div>
        </div>

        {/* Audio frequency wave equalizer animation */}
        <div className="flex items-center gap-1 h-8 px-4 py-1 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
          {[12, 24, 18, 30, 20, 28, 14, 26, 18, 22].map((height, idx) => (
            <div
              key={idx}
              className={`w-1 rounded-full transition-all duration-200 ${
                isSpeaking
                  ? 'bg-gradient-to-t from-[var(--accent-primary)] to-[var(--accent-secondary)]'
                  : isListening
                  ? 'bg-emerald-500'
                  : 'bg-[var(--border-medium)]'
              }`}
              style={{
                height: isSpeaking
                  ? `${Math.max(6, (height * (1 + (idx % 3) * 0.3)) % 32)}px`
                  : isListening
                  ? `${Math.max(6, ((idx * 7) % 24) + 6)}px`
                  : '6px',
                animationDuration: `${0.6 + (idx * 0.1)}s`
              }}
            />
          ))}
        </div>

        {/* Start / Stop Voice Master Toggle Button */}
        <button
          onClick={toggleVoiceSession}
          className={`px-5 py-2.5 rounded-xl font-display text-xs font-extrabold tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
            isActive
              ? 'bg-rose-500/15 border border-rose-500/30 text-rose-500 hover:bg-rose-500/25'
              : 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold shadow-lg shadow-[var(--accent-glow)] hover:opacity-95 hover:-translate-y-0.5'
          }`}
        >
          {isActive ? (
            <>
              <MicOff className="w-4 h-4 text-rose-500" />
              <span>END SESSION</span>
            </>
          ) : (
            <>
              <Mic className="w-4 h-4 text-white" />
              <span>START VOICE DEMO</span>
            </>
          )}
        </button>
      </div>

      {/* Transcript / Chat Dialogue Feed */}
      <div className="flex-1 overflow-y-auto max-h-[300px] min-h-[220px] pr-2 space-y-3 mb-4 scrollbar-thin">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 text-xs sm:text-sm leading-relaxed ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'assistant' && (
              <div className="w-7 h-7 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-4 h-4 text-[var(--accent-primary)]" />
              </div>
            )}
            
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white rounded-br-none'
                  : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] rounded-bl-none'
              }`}
            >
              <div className="flex items-center justify-between gap-3 text-[10px] text-[var(--text-muted)] mb-1">
                <span className={`font-semibold ${msg.sender === 'user' ? 'text-white/90' : 'text-[var(--accent-primary)]'}`}>
                  {msg.sender === 'user' ? 'You' : 'AkAI Assistant'}
                </span>
                <span className={msg.sender === 'user' ? 'text-white/70' : 'text-[var(--text-muted)]'}>{msg.timestamp}</span>
              </div>
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>

            {msg.sender === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-4 h-4 text-[var(--accent-primary)]" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Chips */}
      <div className="mb-4">
        <div className="text-[11px] text-[var(--text-muted)] font-medium mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[var(--accent-primary)]" />
          <span>Quick questions to test AkAI:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "How do you recover old quotes?",
            "What does your pricing look like?",
            "How does missed-call recovery work?",
            "Who is Farhan Khan?",
            "Book my free 10-min audit"
          ].map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleQuickPrompt(prompt)}
              className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--border-accent)] transition-all text-left cursor-pointer"
            >
              "{prompt}"
            </button>
          ))}
        </div>
      </div>

      {/* Input bar: Mic toggle & Text input */}
      <form onSubmit={handleSendText} className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            if (!isActive) setIsActive(true);
            if (isListening) {
              try { recognitionRef.current?.stop(); } catch (e) { /* ignore */ }
              setIsListening(false);
            } else {
              startListening();
            }
          }}
          className={`p-3 rounded-xl border transition-all cursor-pointer shrink-0 ${
            isListening
              ? 'bg-emerald-500/15 border-emerald-500 text-emerald-500 animate-pulse'
              : 'bg-[var(--bg-surface)] border border-[var(--border-medium)] text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--accent-primary)]'
          }`}
          title={isListening ? "Listening... click to pause" : "Click to speak with microphone"}
        >
          {isListening ? <MicOff className="w-5 h-5 text-emerald-500" /> : <Mic className="w-5 h-5" />}
        </button>

        <div className="relative flex-1">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={isListening ? "Listening to your voice..." : "Type a question for AkAI (or speak)..."}
            className="w-full bg-[var(--bg-surface)] border border-[var(--border-medium)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-accent)] focus:ring-1 focus:ring-[var(--accent-primary)]/40 transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="p-3 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0 cursor-pointer shadow-md shadow-[var(--accent-glow)]"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Bottom context links */}
      <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
        <span className="flex items-center gap-1 text-[var(--text-muted)]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          No external API keys required — runs in browser
        </span>
        <div className="flex items-center gap-3">
          {onScrollToAudit && (
            <button
              type="button"
              onClick={onScrollToAudit}
              className="text-[var(--accent-primary)] hover:underline font-medium cursor-pointer"
            >
              Get Free Audit
            </button>
          )}
          {onBookCall && (
            <button
              type="button"
              onClick={onBookCall}
              className="text-[var(--accent-primary)] hover:underline font-semibold cursor-pointer"
            >
              Book 15-Min Strategy Call →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
