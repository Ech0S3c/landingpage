import React from 'react';

interface CardProps {
  icon: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ icon, title, text }) => {
  return (
    <div className="relative group">
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
            src={icon} 
            alt={title}
            className="w-12 h-12 mb-6"
          />
          <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
          <p className="text-gray-300 text-base leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
