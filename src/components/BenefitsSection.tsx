import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "👥",
      title: "Comunidade",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    },
    {
      icon: "🎓",
      title: "Aprendizado",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    },
    {
      icon: "🌐",
      title: "Networking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    },
    {
      icon: "💼",
      title: "Preparação de Carreira",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    },
    {
      icon: "🛠️",
      title: "Projetos Práticos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Benefícios</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="bg-gray-900 border border-purple-500 rounded-lg p-6 hover:border-purple-400 transition-colors">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.slice(3).map((benefit, index) => (
            <div key={index + 3} className="bg-gray-900 border border-purple-500 rounded-lg p-6 hover:border-purple-400 transition-colors">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;