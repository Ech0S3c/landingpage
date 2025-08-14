import React from 'react';
import Image from 'next/image';

const EducationalSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-30">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Educacional</h2>
        
        <div className="grid md:grid-cols-2 gap-5 items-center mb-16">
          <div className="bg-purple-600 p-0.5">
            <Image
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
              alt="Nosso Jeito de Ensinar"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Nosso Jeito de Ensinar</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in. Ut risus lorem, scelerisque sit amet elementum ac, vulputate vel tellus. Sed congue bibendum ipsum, vel fermentum tellus.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-white mb-4">Nossas Aulas e Eventos</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in. Ut risus lorem, scelerisque sit amet elementum ac.
            </p>
            <button className="bg-purple-600 hover:bg-purple-600/80 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-">
              Veja Nossos Materiais
            </button>
          </div>
          <div className="order-1 md:order-2 bg-purple-600 p-0.5">
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
              alt="Nossas Aulas e Eventos"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;