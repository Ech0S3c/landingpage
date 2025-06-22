
import React from 'react';

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
    <section className="bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre a Liga</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="relative group">
              {/* Card usando SVG como background */}
              <div 
                className="relative p-8 text-center transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url('/card.svg')`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  minHeight: '373px',
                  width: '100%',
                  aspectRatio: '320/373'
                }}
              >
                {/* Conteúdo do card */}
                <div className="relative z-10 h-full flex flex-col justify-center items-start text-left px-8 py-4">
                  <img 
                    src={card.icon} 
                    alt={card.title}
                    className="w-12 h-12 mb-6"
                  />
                  <h3 className="text-2xl font-bold text-white mb-6">{card.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
