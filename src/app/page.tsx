import React from 'react';
import Header from '@/components/general/Header';
import Hero from '../components/landing-page/Hero';
import AboutSection from '../components/landing-page/AboutSection';
import EducationalSection from '../components/landing-page/EducationalSection';
import BenefitsSection from '../components/landing-page/BenefitsSection';
import TestimonialsSection from '../components/landing-page/TestimonialsSection';
import ContactSection from '../components/landing-page/ContactSection';
import Footer from '../components/general/Footer';

const Landing = () => {
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

export default Landing;
