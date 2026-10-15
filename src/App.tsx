import React from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

function MainLayout() {
  return (
    <div className="min-h-screen bg-almendra text-oliva dark:bg-oliva-dark dark:text-almendra font-body antialiased bg-grid-light dark:bg-grid-dark transition-colors duration-200 flex flex-col selection:bg-salvia/30 selection:text-oliva-dark dark:selection:text-almendra">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6">
        <Hero />
        <ProjectsSection />
        <TeamSection />
        <FaqSection />
        <ContactSection />
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
