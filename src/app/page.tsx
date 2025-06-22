import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import EducationalSection from '../components/EducationalSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <AboutSection />
      <EducationalSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
