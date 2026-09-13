/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechLogos } from './components/TechLogos';
import { RevenueLeaks } from './components/RevenueLeaks';
import { WorkflowsSection } from './components/WorkflowsSection';
import { FourPillars } from './components/FourPillars';
import { ProcessAndJourney } from './components/ProcessAndJourney';
import { WhoWeHelp } from './components/WhoWeHelp';
import { ComparisonAndMissedCall } from './components/ComparisonAndMissedCall';
import { LiveDemoSection } from './components/LiveDemoSection';
import { FunnelStats } from './components/FunnelStats';
import { TrustSection } from './components/TrustSection';
import { ContactAuditForm } from './components/ContactAuditForm';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { VoiceDemoModal } from './components/VoiceDemoModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const BOOKING_URL = "https://calendly.com/fk111389/15-minute-ai-audit-call";

  const handleBookCall = () => {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToAudit = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-300 relative pb-16 md:pb-0 font-sans selection:bg-[var(--accent-primary)] selection:text-white">
      {/* Top sticky navigation */}
      <Navbar 
        onOpenDemo={handleOpenDemo}
        onBookCall={handleBookCall}
      />

      {/* Main page content flow */}
      <main id="top">
        {/* Hero with interactive orb & status chips */}
        <Hero 
          onOpenDemo={handleOpenDemo}
          onScrollToAudit={handleScrollToAudit}
        />

        {/* Technology stack logos strip */}
        <TechLogos />

        {/* Where is your revenue getting stuck? (7 Leaks) */}
        <RevenueLeaks 
          onScrollToAudit={handleScrollToAudit}
        />

        {/* Deep dive into AkAI automation workflows */}
        <WorkflowsSection 
          onScrollToAudit={handleScrollToAudit}
        />

        {/* Four Pillars of AkAI */}
        <FourPillars />

        {/* Implementation roadmap & 9-stage revenue journey */}
        <ProcessAndJourney />

        {/* Who we help: 7 industry verticals */}
        <WhoWeHelp />

        {/* Not Another Chatbot comparison & 10-step Missed Call workflow */}
        <ComparisonAndMissedCall />

        {/* Meet AkAI: Dedicated live voice AI demo station */}
        <LiveDemoSection 
          onBookCall={handleBookCall}
          onScrollToAudit={handleScrollToAudit}
        />

        {/* Example AI Funnel: Live telemetry stats & activity feed */}
        <FunnelStats />

        {/* Trust & Craftsmanship section */}
        <TrustSection 
          onOpenDemo={handleOpenDemo}
          onBookCall={handleBookCall}
          onScrollToAudit={handleScrollToAudit}
        />

        {/* 10-Minute Free Revenue Leak Audit form & direct booking */}
        <ContactAuditForm 
          onBookCall={handleBookCall}
        />
      </main>

      {/* Footer */}
      <Footer 
        onBookCall={handleBookCall}
        onScrollToAudit={handleScrollToAudit}
      />

      {/* Mobile Sticky Quick Action bar */}
      <MobileStickyBar 
        onOpenDemo={handleOpenDemo}
        onBookCall={handleBookCall}
      />

      {/* Voice Assistant Modal dialog */}
      <VoiceDemoModal 
        isOpen={demoModalOpen}
        onClose={handleCloseDemo}
        onBookCall={handleBookCall}
        onScrollToAudit={handleScrollToAudit}
      />
    </div>
  );
}
