// components/general/Card.tsx
import React from "react";

type CardProps = {
  title: string;
  text: string;
  icon?: string;
};

export default function Card({ title, text, icon }: CardProps) {
  return (
    <div
      className="relative w-82 h-96 bg-no-repeat bg-cover bg-center drop-shadow-card-glow"
      style={{ backgroundImage: `url('/card.svg')` }}
    >
      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-start items-start gap-6 z-10">
        {icon && (
          <img
            src={icon}
            alt="Ícone"
            className="w-10 h-10 text-light mt-2"
          />
        )}

        <h2 className="font-heading text-2xl text-light font-bold leading-tight">
          {title}
        </h2>

        <p className="font-body text-gray-300 leading-relaxed text-sm max-w-64">
          {text}
        </p>
      </div>
    </div>
  );
}
