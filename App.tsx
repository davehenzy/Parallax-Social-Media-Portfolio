
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 font-sans leading-relaxed text-slate-300 antialiased selection:bg-teal-300 selection:text-teal-900">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
