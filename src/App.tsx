import React from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatUpReveal } from './components/FloatUpReveal.tsx';
import { useLenisScroll } from './hooks/useLenisScroll.ts';

function MainLayout() {
  // Lenis engine: replica exacta del desplazamiento fluido y amortiguado de concatenate.pages.dev
  useLenisScroll();

  return (
    <div className="relative min-h-screen bg-[#FFFDF9] text-[#252321] dark:bg-[#252321] dark:text-[#FFFDF9] font-body antialiased transition-colors duration-200 flex flex-col selection:bg-[#B0A8A0]/30 selection:text-[#252321] dark:selection:text-[#FFFDF9]">
      {/* GPU-composited Fixed Background Grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-light dark:bg-grid-dark transform-gpu" />

      {/* Top Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Main Content Area - objects float up individually as you scroll */}
      <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6">
        <Hero />
        <ProjectsSection />
        <TeamSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <FloatUpReveal delayMs={40} className="relative z-10 w-full px-4 sm:px-6">
        <Footer />
      </FloatUpReveal>
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
