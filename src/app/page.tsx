import React from 'react';
import Header from '../components/general/Header';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import EducationalSection from '../components/home/EducationalSection';
import BenefitsSection from '../components/home/BenefitsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';
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
