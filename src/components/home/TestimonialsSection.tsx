"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const testimonials = [
    { image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", text: "Com o apoio da Echosec, fui selecionado para o programa de talentos da IBM." },
    { image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", text: "Depois de treinar com a Echosec, consegui minha primeira vaga como pentester júnior." },
    { image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", text: "Com as aulas e material de Echosec, consegui participar da DEFCON CTF e chegar à final." },
    { image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", text: "A Echosec me deu as ferramentas para conseguir minha primeira certificação em cybersec." },
    { image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", text: "Através das aulas práticas, consegui uma vaga de analista de segurança em uma multinacional." }
  ];

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (testimonials.length - (slidesPerView - 1)));
    }, 5000);
    return () => clearInterval(interval);
  }, [slidesPerView, testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % (testimonials.length - (slidesPerView - 1)));
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + (testimonials.length - (slidesPerView - 1))) % (testimonials.length - (slidesPerView - 1)));

  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-white text-center mb-4">Histórias da Liga</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus.
        </p>

        <div className="relative max-w-7xl mx-auto">
          <button onClick={prevSlide} className="absolute left-2 sm:left-8 z-10 text-white p-2 sm:p-3 rounded-full shadow-lg hover:scale-110 transition-transform bg-black/30">
            <svg className="w-6 h-6 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden w-full max-w-5xl mx-auto">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 px-2 sm:px-3" style={{ width: `${100 / slidesPerView}%` }}>
                  <div className="relative mx-auto cursor-pointer transition-all duration-300 hover:scale-105 aspect-[3/4] max-w-sm bg-[url('/person-card.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="pt-20 pb-6 sm:pb-8 px-16 sm:px-6 text-center h-full flex flex-col justify-between">
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.text}
                        width={180}
                        height={180}
                        className="sm:w-40 sm:h-40 rounded-full border-4 border-purple-400 mx-auto mb-4 mt-2 shadow-xl object-cover"
                      />
                      <p className="text-gray-200 text-xs sm:text-sm leading-relaxed flex-1 flex items-center justify-center">{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} className="absolute right-2 sm:right-8 z-10 text-white p-2 sm:p-3 rounded-full shadow-lg hover:scale-110 transition-transform bg-black/30">
            <svg className="w-6 h-6 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: testimonials.length - (slidesPerView - 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-purple-500' : 'bg-gray-600'}`}
            />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href='/quem-somos'>
            <button className="bg-purple-600 hover:bg-purple-600/80 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors">
              Conheça Nossos Membros
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
