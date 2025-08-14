import React from 'react';
import Card from '../general/Card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "/D3.svg",
      title: "Comunidade",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    },
    {
      icon: "/G4.svg",
      title: "Aprendizado",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    },
    {
      icon: "/C1.svg",
      title: "Networking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    },
    {
      icon: "/H4.svg",
      title: "Preparação de Carreira",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    },
    {
      icon: "/F4.svg",
      title: "Projetos Práticos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    }
  ];

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-20">Benefícios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Card
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.description}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {benefits.slice(3).map((benefit, index) => (
            <Card
              key={index + 3}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;