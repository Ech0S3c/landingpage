import React from 'react';

interface CardProps {
  icon: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ icon, title, text }) => {
  return (
    <div className="relative group w-full max-w-sm mx-auto">
      {/* Card usando SVG como background */}
      <div 
        className="relative text-center transition-all duration-300 hover:scale-105"
        style={{
          backgroundImage: `url('/card.svg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '300px',
          width: '100%',
          aspectRatio: '320/373'
        }}
      >
        {/* Conteúdo do card */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start text-left px-6 py-8 sm:px-8 sm:py-10">
          <img 
            src={icon} 
            alt={title}
            className="w-8 h-8 sm:w-12 sm:h-12 mb-4 sm:mb-6"
          />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">{title}</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
