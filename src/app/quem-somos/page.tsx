import React from 'react';
import Header from '@/components/general/Header';
import TeamSection from '@/components/quem-somos/TeamSection';
import OrganizationalSection from '@/components/quem-somos/OrganizationalSection';
import Footer from '@/components/general/Footer';

const WhoWeAreSection = () => {
  return (
    <div>
      <Header />
      <TeamSection />
      <OrganizationalSection />
      <Footer />
    </div>
  );
};

export default WhoWeAreSection;