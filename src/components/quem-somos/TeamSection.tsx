import React from 'react';
import Image from 'next/image';

const EducationalSection = () => {
  return (
    <section className="relative bg-black py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-left bg-[length:15%]"
        style={{ backgroundImage: 'url("/hexagon-shade.svg")' }}
      />
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mt-16 mb-4">
          Quem somos nós
        </h2>
        <p className="text-gray-400 text-center mb-8 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
          Somos a Echosec, Liga Acadêmica de Cibersegurança. Unimos estudantes que querem aprender e praticar segurança digital em um ambiente ético, inclusivo e colaborativo. Promovemos trilhas de estudo, CTFs, projetos e conexões com o mercado para transformar curiosidade em carreira.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center items-center max-w-full mx-auto">
            <Image
              src="/team.svg"
              alt="Nosso Jeito de Ensinar"
              width={552}
              height={339}
              className="object-contain w-full max-h-80 md:max-h-[339px]"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Nosso Time</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
              Multidisciplinar e mão na massa: pessoas de tecnologia e áreas afins, apoiadas por mentores. Trabalhamos com liderança compartilhada, aprendizado contínuo e cultura de colaboração, aqui todo mundo ensina e aprende.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
