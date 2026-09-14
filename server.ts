import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { getAkAIResponse } from "./src/utils/voiceAssistant";

dotenv.config();

const PORT = 3000;

// Lazy initialization of Gemini client
let genAIClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  if (!genAIClient) {
    genAIClient = new GoogleGenAI({ apiKey });
  }
  return genAIClient;
}

const SYSTEM_INSTRUCTION = `You are AkAI's real-time AI Voice & Revenue Intelligence Assistant.
AkAI was founded and engineered by automation architect Farhan Khan (fk111389@gmail.com).

Core Business Capabilities:
1. Missed-Call Revenue Recovery: Responds via SMS or outbound conversational AI Voice in under 90 seconds when a business misses a customer call, qualifying the lead and booking directly onto the calendar.
2. Stalled Estimate & Quote Recovery: Automatically follows up on sent proposals, quotes, and estimates via automated SMS/Email/WhatsApp sequences, answering customer objections and securing approvals.
3. 24/7 Inbound & Outbound AI Voice Agents: Custom voice agents that handle customer inquiries, emergency dispatch, booking, and triage around the clock.
4. Custom Business Automations (n8n & CRM): Integrating CRMs (HubSpot, Salesforce, Jobber, GoHighLevel, ServiceTitan) with custom zero-maintenance workflows. No per-seat SaaS license traps.

Industry Verticals Supported:
- Solar ("Soller" / Solar installers): Qualifying homeowners, asking roof age, electric bill amount, scheduling site surveys, recovering pending solar quotes.
- Roofing & HVAC: 24/7 storm/emergency intake, instant quote follow-ups, dispatch triage.
- Real Estate: Instant lead qualification from Zillow/Realtor ads, booking property walkthroughs.
- Dental & Aesthetic Clinics: Appointment scheduling, patient recall, no-show reduction.
- High-ticket Contractors & Legal: Lead triage, quote follow-ups, retainer consultations.

Pricing & Engagement:
- Starts with a 10-Minute Free Revenue Leak Audit.
- Followed by custom system build + monthly management. No per-seat hidden licensing fees.
- 15-Minute Strategy Call with founder Farhan Khan: https://calendly.com/fk111389/15-minute-ai-audit-call

Language & Tone Guidelines:
- CRITICAL: Match the user's language and tone! If the user speaks or writes in Roman Urdu (e.g. "Soller ki details do", "kya kaam krte ho", "kaise kaam karta hai", "kya charge karte ho"), reply in clear, fluent, natural Roman Urdu.
- If the user writes in Urdu script (اردو), reply in Urdu script.
- If the user writes in English, reply in English.
- Keep answers direct, friendly, and concise (2 to 4 sentences maximum) so it sounds great both in text and when spoken aloud by the voice engine. Never repeat generic canned disclaimers. Always answer the specific question asked!`;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", geminiConfigured: !!process.env.GEMINI_API_KEY });
  });

  // AI Chat endpoint
  app.post("/api/chat", async (req, res) => {
    const { message, history } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    try {
      const client = getGeminiClient();
      if (!client) {
        return res.status(503).json({ 
          error: "Gemini API key not configured on server",
          fallbackNeeded: true 
        });
      }

      // Build conversation contents
      const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history)) {
        for (const item of history.slice(-6)) {
          if (item && item.text) {
            contents.push({
              role: item.sender === "assistant" ? "model" : "user",
              parts: [{ text: String(item.text) }]
            });
          }
        }
      }

      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      // Race Gemini call against timeout with robust model selection
      const generateWithGemini = async () => {
        try {
          return await client.models.generateContent({
            model: "gemini-3.6-flash",
            contents,
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
              temperature: 0.7,
              maxOutputTokens: 800,
            }
          });
        } catch {
          return await client.models.generateContent({
            model: "gemini-flash-latest",
            contents,
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
              temperature: 0.7,
              maxOutputTokens: 800,
            }
          });
        }
      };

      const timeoutCall = new Promise<null>((resolve) =>
        setTimeout(() => resolve(null), 8000)
      );

      const response = await Promise.race([generateWithGemini(), timeoutCall]);
      if (response && response.text && response.text.trim().length > 0) {
        return res.json({ text: response.text.trim() });
      }

      // Fast, deterministic fallback
      const localReply = getAkAIResponse(message);
      return res.json({ 
        text: localReply.text,
        suggestedAction: localReply.suggestedAction 
      });
    } catch {
      const localReply = getAkAIResponse(message);
      return res.json({ 
        text: localReply.text,
        suggestedAction: localReply.suggestedAction 
      });
    }
  });

  // Vite middleware for dev or static serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
