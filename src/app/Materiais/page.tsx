import React from 'react';
import Footer from '@/components/general/Footer';
import Header from '@/components/general/Header';
import MaterialsSection from '@/components/landing-page/MaterialsSection';
import ResearchSection from '@/components/landing-page/ResearchSection';

export default function MateriaisPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <MaterialsSection />
      <ResearchSection />
      <Footer />
    </div>
  );
}