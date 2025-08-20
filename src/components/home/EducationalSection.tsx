import React from 'react';
import Image from 'next/image';

const EducationalSection = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-20">Educacional</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20">
          <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-1 rounded-2xl order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
              alt="Nosso Jeito de Ensinar"
              width={600}
              height={400}
              className="w-full h-56 md:h-72 lg:h-80 object-cover rounded-xl"
            />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">Nosso Jeito de Ensinar</h3>
            <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
              Desenvolvemos uma metodologia única que combina teoria e prática, permitindo que nossos membros aprendam através de experiências reais de hacking ético e segurança cibernética. Nosso foco é criar profissionais preparados para os desafios do mercado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">Nossas Aulas e Eventos</h3>
            <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
              Oferecemos workshops práticos, competições de CTF, palestras com especialistas da indústria e projetos hands-on que simulam cenários reais de segurança cibernética. Cada evento é uma oportunidade de crescimento.
            </p>
            <button className="bg-purple-600 hover:bg-purple-600/80 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-">
              Veja Nossos Materiais
            </button>
          </div>
          <div className="order-1 lg:order-2 bg-gradient-to-r from-purple-600 to-purple-500 p-1 rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
              alt="Nossas Aulas e Eventos"
              width={600}
              height={400}
              className="w-full h-56 md:h-72 lg:h-80 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;