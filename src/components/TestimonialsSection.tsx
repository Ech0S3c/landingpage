"use client";

import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "Com o apoio da Echosec, participei da National Cyber League e fui selecionado para o programa de talentos da IBM."
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "Depois de treinar com a Echosec, lideramos uma equipe até a final da DEFCON CTF e eu consegui minha primeira vaga como pentester júnior."
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "A Echosec me deu as ferramentas e conhecimento necessários para conseguir minha primeira certificação em segurança cibernética."
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "Através dos treinamentos práticos, consegui uma vaga como analista de segurança em uma empresa multinacional."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Histórias da Liga</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in.
        </p>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <button 
              onClick={prevSlide}
              className="absolute left-8 z-10 text-white p-3 rounded-full shadow-lg hover:scale-120 transition-transform duration-300 ease-in-out"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="overflow-hidden w-full max-w-5xl mx-auto">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-1/3 flex-shrink-0 px-3"
                  >
                    <div 
                      className="relative mx-auto cursor-pointer transition-all duration-300 hover:scale-105 aspect-[3/4] max-w-sm"
                      style={{
                        backgroundImage: `url('/person-card.svg')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}                      
                    >
                      <div className="pt-20 pb-8 px-6 text-center h-full flex flex-col justify-between">
                        <div>
                          <img 
                            src={testimonial.image}
                            className="w-39 h-39 rounded-full border-4 border-purple-400 mx-auto mb-4 mt-2 hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl"
                          />
                        </div>
                        <p className="text-gray-200 text-sm leading-relaxed flex-1 flex items-center justify-center">{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={nextSlide}
              className="absolute right-8 z-10 text-white p-3 rounded-full shadow-lg hover:scale-120 transition-transform duration-300 ease-in-out"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-purple-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-600/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Conheça Nossos Membros
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;