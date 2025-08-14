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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. 
          Donec tincidunt faucibus lorem, et molestie tortor imperdiet in.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
