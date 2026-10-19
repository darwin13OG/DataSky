import React from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { BrandingSection } from './components/BrandingSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { FloatUpReveal } from './components/FloatUpReveal.tsx';
import { MarqueeTicker } from './components/MarqueeTicker.tsx';
import { useLenisScroll } from './hooks/useLenisScroll.ts';

function MainLayout() {
  // Lenis engine: replica exacta del desplazamiento fluido y amortiguado de concatenate.pages.dev
  useLenisScroll();

  return (
    <div className="relative min-h-screen bg-[#FFFDF9] text-[#252321] dark:bg-[#181615] dark:text-[#FFFDF9] font-body antialiased flex flex-col selection:bg-cyan-500/30 selection:text-[#252321] dark:selection:text-[#FFFDF9] overflow-x-hidden">
      {/* Retícula solo en modo oscuro (en blanco modo claro se elimina por completo para un lienzo limpio) */}
      <div className="pointer-events-none fixed inset-0 z-0 hidden dark:block dark:bg-grid-dark transform-gpu" />

      {/* Atmospheric Ambient Glows & Dynamic Lighting (Optimized GPU radial gradients without mobile convolution stall) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Top Hero Ambient Glow: Subtle Cyan-Blue Radial Gradient */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[480px] rounded-full opacity-60 dark:opacity-40 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.16) 0%, rgba(37, 99, 235, 0.08) 45%, transparent 70%)'
          }}
        />
        
        {/* Projects / Solutions Ambient Glow: Deep Ocean Blue */}
        <div
          className="absolute top-[32%] -left-36 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full opacity-50 dark:opacity-30 animate-pulse-glow-delayed"
          style={{
            background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.14) 0%, rgba(30, 58, 138, 0.06) 50%, transparent 70%)'
          }}
        />
        
        {/* Branding & Contact Ambient Glow: Sky Blue */}
        <div
          className="absolute top-[68%] -right-36 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full opacity-50 dark:opacity-30 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.12) 0%, rgba(14, 165, 233, 0.06) 50%, transparent 70%)'
          }}
        />
      </div>

      {/* Top Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6">
        <Hero />
        <MarqueeTicker />
        <ProjectsSection />
        <TeamSection />
        <BrandingSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <FloatUpReveal delayMs={40} className="relative z-10 w-full px-4 sm:px-6">
        <Footer />
      </FloatUpReveal>

      {/* Floating WhatsApp Action Button (Pinned to Bottom Right) */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}
