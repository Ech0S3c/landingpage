import React from 'react';
import Card from './Card';

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
    <section className="bg-black py-20">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Benefícios</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Card
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.description}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
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