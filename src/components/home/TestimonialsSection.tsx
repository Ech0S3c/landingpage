"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "Com o apoio da Echosec, participei da National Cyber League e fui selecionado para o programa de talentos da IBM.",
      name: "João Silva",
      role: "Security Analyst"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face",
      text: "Depois de treinar com a Echosec, lideramos uma equipe até a final da DEFCON CTF e eu consegui minha primeira vaga como pentester júnior.",
      name: "Maria Santos",
      role: "Penetration Tester"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "A metodologia de ensino da Echosec é única. Consegui desenvolver habilidades práticas que me levaram direto para o mercado de trabalho.",
      name: "Carlos Lima",
      role: "Cyber Security Engineer"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "A Echosec me deu as ferramentas e conhecimento necessários para conseguir minha primeira certificação em segurança cibernética.",
      name: "Ana Costa",
      role: "Security Consultant"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Através dos treinamentos práticos, consegui uma vaga como analista de segurança em uma empresa multinacional.",
      name: "Pedro Oliveira",
      role: "Security Analyst"
    }
  ];
  
  // Detect window size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate slides per view based on screen size
  const getSlidesPerView = () => {
    if (windowWidth < 768) return 1; // mobile: 1 slide
    if (windowWidth < 1024) return 2; // tablet: 2 slides  
    return 3; // desktop: 3 slides
  };
  
  const slidesPerView = getSlidesPerView();
  const maxSlides = Math.max(0, testimonials.length - slidesPerView + 1);
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [maxSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Histórias da Liga</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
            Conheça as histórias inspiradoras dos nossos membros que transformaram suas carreiras através da segurança cibernética e do hacking ético.
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <button 
              onClick={prevSlide}
              className="absolute left-2 md:left-4 lg:left-8 z-10 text-white p-3 md:p-4 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-purple-600/50 hover:border-purple-500/50 hover:scale-110 transition-all duration-300 shadow-xl"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="relative px-4 md:px-8 w-full">
              <div className="overflow-hidden w-full">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` 
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 md:px-4"
                    >
                      <div 
                        className="relative mx-auto cursor-pointer transition-all duration-300 hover:scale-[1.02] aspect-[3/4] max-w-xs group"
                        style={{
                          backgroundImage: `url('/person-card.svg')`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center'
                        }}                      
                      >
                        <div className="pt-16 sm:pt-18 md:pt-20 lg:pt-24 pb-6 md:pb-8 px-3 sm:px-4 md:px-6 text-center h-full flex flex-col justify-between">
                          <div>
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={150}
                              height={150}
                              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-purple-400 mx-auto mb-3 sm:mb-4 group-hover:scale-105 group-hover:border-purple-300 transition-all duration-300 shadow-xl object-cover"
                            />
                          </div>
                          
                          <div className="flex-1 flex flex-col justify-center px-1 sm:px-2">
                            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-3 group-hover:text-white transition-colors duration-300">
                              "{testimonial.text}"
                            </p>
                            
                            <div className="mt-auto">
                              <p className="text-white font-semibold text-sm group-hover:text-purple-300 transition-colors duration-300">
                                {testimonial.name}
                              </p>
                              <p className="text-purple-400 text-xs font-medium">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={nextSlide}
              className="absolute right-2 md:right-4 lg:right-8 z-10 text-white p-3 md:p-4 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-purple-600/50 hover:border-purple-500/50 hover:scale-110 transition-all duration-300 shadow-xl"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-8 md:mt-12 space-x-2">
            {Array.from({ length: maxSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-500 scale-110 shadow-lg shadow-purple-500/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 text-base md:text-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Conheça Nossos Membros
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

// Versão Mobile Otimizada
export const TestimonialsSectionMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "Com o apoio da Echosec, participei da National Cyber League e fui selecionado para o programa de talentos da IBM.",
      name: "João Silva",
      role: "Security Analyst"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face",
      text: "Depois de treinar com a Echosec, lideramos uma equipe até a final da DEFCON CTF e eu consegui minha primeira vaga como pentester júnior.",
      name: "Maria Santos",
      role: "Penetration Tester"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "A metodologia de ensino da Echosec é única. Consegui desenvolver habilidades práticas que me levaram direto para o mercado de trabalho.",
      name: "Carlos Lima",
      role: "Cyber Security Engineer"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "A Echosec me deu as ferramentas e conhecimento necessários para conseguir minha primeira certificação em segurança cibernética.",
      name: "Ana Costa",
      role: "Security Consultant"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Através dos treinamentos práticos, consegui uma vaga como analista de segurança em uma empresa multinacional.",
      name: "Pedro Oliveira",
      role: "Security Analyst"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Slower for mobile

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-black py-12">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">Histórias da Liga</h2>
          <p className="text-gray-400 text-sm leading-relaxed px-2">
            Conheça as histórias inspiradoras dos nossos membros que transformaram suas carreiras através da segurança cibernética e do hacking ético.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-center min-h-96">
            <button 
              onClick={prevSlide}
              className="absolute left-4 z-20 text-white p-2 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 active:bg-purple-600/50 active:border-purple-500/50 active:scale-95 transition-all duration-300 shadow-xl touch-manipulation"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="px-12 w-full max-w-sm mx-auto">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)` 
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0"
                    >
                      <div 
                        className="relative mx-auto transition-all duration-300 active:scale-95 w-full max-w-80 h-96"
                        style={{
                          backgroundImage: `url('/person-card.svg')`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center'
                        }}                      
                      >
                        <div className="pt-12 pb-6 px-4 text-center h-full flex flex-col">
                          <div className="mb-4">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="w-20 h-20 rounded-full border-3 border-purple-400 mx-auto shadow-lg object-cover"
                            />
                          </div>
                          
                          <div className="flex-1 flex flex-col justify-center px-3">
                            <p className="text-gray-200 text-xs leading-relaxed mb-4 line-clamp-4">
                              "{testimonial.text}"
                            </p>
                            
                            <div className="mt-auto">
                              <p className="text-white font-semibold text-sm mb-1">
                                {testimonial.name}
                              </p>
                              <p className="text-purple-400 text-xs font-medium">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 z-20 text-white p-2 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 active:bg-purple-600/50 active:border-purple-500/50 active:scale-95 transition-all duration-300 shadow-xl touch-manipulation"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentSlide 
                    ? 'bg-purple-500 scale-125 shadow-md shadow-purple-500/50' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-purple-600 active:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm active:scale-95 touch-manipulation shadow-lg">
            Conheça Nossos Membros
          </button>
        </div>
      </div>
    </section>
  );
};