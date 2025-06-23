
import React from 'react';
import Card from './Card';

const AboutSection = () => {
  const cards = [
    {
      icon: "/F4.svg", 
      title: "Missão",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in. Ut risus lorem, scelerisque sit amet elementum ac, vulputate vel tellus."
    },
    {
      icon: "/G4.svg",
      title: "Visão",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in. Ut risus lorem, scelerisque sit amet elementum ac, vulputate vel tellus."
    },
    {
      icon: "/C1.svg",
      title: "Valores",  
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in. Ut risus lorem, scelerisque sit amet elementum ac, vulputate vel tellus."
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre a Liga</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
