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

function MainLayout() {
  return (
    <div className="relative min-h-screen bg-almendra text-oliva dark:bg-oliva-dark dark:text-almendra font-body antialiased transition-colors duration-200 flex flex-col selection:bg-salvia/30 selection:text-oliva-dark dark:selection:text-almendra">
      {/* GPU-composited Fixed Background Grid (Prevents scroll repaints for maximum fluidity) */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-light dark:bg-grid-dark transform-gpu" />

      {/* Top Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Main Content Area with fluid upward floating appearance */}
      <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6">
        <FloatUpReveal delayMs={30}>
          <Hero />
        </FloatUpReveal>

        <FloatUpReveal delayMs={60}>
          <ProjectsSection />
        </FloatUpReveal>

        <FloatUpReveal delayMs={60}>
          <TeamSection />
        </FloatUpReveal>

        <FloatUpReveal delayMs={60}>
          <FaqSection />
        </FloatUpReveal>

        <FloatUpReveal delayMs={60}>
          <ContactSection />
        </FloatUpReveal>
      </main>

      {/* Footer */}
      <FloatUpReveal delayMs={30} className="relative z-10 w-full px-4 sm:px-6">
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
