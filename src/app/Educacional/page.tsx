import React from 'react';
import Footer from '@/components/general/Footer';
import Header from '@/components/general/Header';
import MaterialsSection from '@/components/materiais/MaterialsSection';
import ResearchSection from '@/components/materiais/ResearchSection';

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