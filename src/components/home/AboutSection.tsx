import React from 'react';
import Card from '../general/Card';

const AboutSection = () => {
  const cards = [
    {
      icon: "/F4.svg",
      title: "Missão",
      description:
        "Capacitar todos os nossos membros na área de cibersegurança para que possam se tornar referências futuras dentro da área.Para isso, vamos promover um ambiente de aprendizado colaborativo para o desenvolvimento de uma carreira sólida no hacking ético e na defesa cibernética.",
    },
    {
      icon: "/G4.svg",
      title: "Visão",
      description:
        "Ser a principal referência nacional em ligas de cibersegurança, desenvolvendo uma comunidade reconhecida pela formação de talentos e pela inovação.",
    },
    {
      icon: "/C1.svg",
      title: "Valores",
      description:
        "Ética (integridade e privacidade); Inclusão e Diversidade (acessível e plural); Colaboração (troca e parcerias); Criatividade (experimentação e originalidade); Excelência (padrões altos e evolução); Confiança (transparência e compromisso).",
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 font-body">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Sobre a Liga</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed px-4 md:px-0">
            Liga Acadêmica de Cibersegurança: aprendemos na prática, compartilhamos conhecimento e criamos projetos e CTFs para formar os profissionais que o mercado precisa.
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