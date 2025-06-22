"use client";

import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Maria Silva",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    },
    {
      name: "João Santos",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    },
    {
      name: "Ana Costa",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Histórias da Liga</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut enim eu dolor tempus cursus. Donec tincidunt faucibus lorem, et molestie tortor imperdiet in.
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <button 
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
            >
              ←
            </button>
            
            <div className="grid md:grid-cols-3 gap-8 w-full">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-purple-900/50 to-gray-900 border border-purple-500 rounded-lg p-6 relative ${
                    index === currentSlide ? 'opacity-100' : 'opacity-50'
                  } transition-opacity`}
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-purple-500"
                    />
                    <div className="ml-4">
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{testimonial.text}</p>
                </div>
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 z-10 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
            >
              →
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Conheça Nossos Membros
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;