import React from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

import { useSmoothScrollBraking } from './hooks/useSmoothScrollBraking.ts';

function MainLayout() {
  useSmoothScrollBraking();

  return (
    <div className="min-h-screen bg-almendra text-oliva dark:bg-oliva-dark dark:text-almendra font-body antialiased bg-grid-light dark:bg-grid-dark transition-colors duration-200 flex flex-col selection:bg-salvia/30 selection:text-oliva-dark dark:selection:text-almendra">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area with smooth upward floating elements */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6">
        <div className="animate-float-up">
          <Hero />
        </div>
        <div className="animate-float-up" style={{ animationDelay: '150ms' }}>
          <ProjectsSection />
        </div>
        <div className="animate-float-up" style={{ animationDelay: '300ms' }}>
          <TeamSection />
        </div>
        <div className="animate-float-up" style={{ animationDelay: '450ms' }}>
          <FaqSection />
        </div>
        <div className="animate-float-up" style={{ animationDelay: '600ms' }}>
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <div className="w-full px-4 sm:px-6">
        <Footer />
      </div>
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
