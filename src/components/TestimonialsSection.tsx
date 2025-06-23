"use client";

import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  
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
    if (windowWidth < 640) return 1; // mobile: 1 slide
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
    <section className="bg-black py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">Histórias da Liga</h2>
        <p className="text-gray-400 text-center mb-8 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in.
        </p>
        
        <div className="relative max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex items-center justify-center">
            <button 
              onClick={prevSlide}
              className="absolute left-1 md:left-6 z-10 text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="relative px-2">
              <div className="overflow-hidden w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-5xl mx-auto">
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
                        className="relative mx-auto cursor-pointer transition-all duration-300 hover:scale-[1.02] aspect-[3/4] max-w-xs sm:max-w-sm"
                        style={{
                          backgroundImage: `url('/person-card.svg')`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center'
                        }}                      
                      >
                      <div className="pt-16 sm:pt-18 md:pt-20 lg:pt-24 pb-6 md:pb-8 px-3 sm:px-4 md:px-6 text-center h-full flex flex-col justify-between">
                        <div>
                          <img 
                            src={testimonial.image}
                            alt="Testimonial"
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full border-4 border-purple-400 mx-auto mb-3 sm:mb-4 hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-xl"
                          />
                        </div>
                        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed flex-1 flex items-center justify-center px-1 sm:px-2">{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
            
            <button 
              onClick={nextSlide}
              className="absolute right-1 md:right-6 z-10 text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlides }).map((_, index) => (
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
        
        <div className="text-center mt-8 md:mt-12">
          <button className="bg-purple-600 hover:bg-purple-600/80 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base">
            Conheça Nossos Membros
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;