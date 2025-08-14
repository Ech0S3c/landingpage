import React from 'react';
import Card from '../general/Card';

const AboutSection = () => {
  const cards = [
    {
      icon: "/F4.svg",
      title: "Missão",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in. Ut risus lorem, scelerisque sit amet elementum ac, vulputate vel tellus.",
    },
    {
      icon: "/G4.svg",
      title: "Visão",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in. Ut risus lorem, scelerisque sit amet elementum ac, vulputate vel tellus.",
    },
    {
      icon: "/C1.svg",
      title: "Valores",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in. Ut risus lorem, scelerisque sit amet elementum ac, vulputate vel tellus.",
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 font-body">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Sobre a Liga</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed px-4 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
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