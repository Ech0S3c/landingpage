"use client";
// Hero.tsx

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [obfuscatedText, setObfuscatedText] = useState('');

  const texts = [
    'Welcome to the World of Hackers',
    'Welcome to EchoSec',
    'Penetration Testing',
    'Cyber Security',
    'Ethical Hacking'
  ];

  // Função para gerar texto obfuscado (efeito Minecraft &k)
  const generateObfuscatedText = (length: number) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  // Efeito para atualizar texto obfuscado continuamente
  useEffect(() => {
    const obfuscateTimer = setInterval(() => {
      const currentWord = texts[currentIndex];
      const remainingLength = currentWord.length - displayText.length;
      if (remainingLength > 0) {
        setObfuscatedText(generateObfuscatedText(remainingLength));
      } else {
        setObfuscatedText('');
      }
    }, 100);

    return () => clearInterval(obfuscateTimer);
  }, [displayText, currentIndex, texts]);

  useEffect(() => {
    const typeSpeed = isDeleting ? 30 : 80; // Aumentado a velocidade (era 50:150)
    const currentWord = texts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Digitando
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          
          // Efeito glitch aleatório
          if (Math.random() < 0.15) { // Aumentada a chance de glitch
            setGlitch(true);
            setTimeout(() => setGlitch(false), 100);
          }
          
          // Adicionar partículas
          if (Math.random() < 0.4) { // Mais partículas
            const newParticle = {
              id: Date.now(),
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
            };
            setParticles(prev => [...prev, newParticle]);
            
            // Remove partícula após 2 segundos
            setTimeout(() => {
              setParticles(prev => prev.filter(p => p.id !== newParticle.id));
            }, 2000);
          }
        } else {
          // Pausar antes de começar a apagar
          setTimeout(() => setIsDeleting(true), 1500); // Reduzido de 2000 para 1500
        }
      } else {
        // Apagando
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <section className="bg-black min-h-screen flex items-center justify-center pt-10 relative overflow-hidden">
      {/* Partículas de fundo */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            boxShadow: '0 0 10px #7c3aed, 0 0 20px #7c3aed, 0 0 30px #7c3aed'
          }}
        />
      ))}

      {/* Efeito de linha de código de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="text-purple-500 text-xs font-mono leading-4 p-4">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="mb-1">
              {Math.random() > 0.5 ? '01010101' : '10101010'} {Math.random() > 0.5 ? '11110000' : '00001111'}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="relative">
          <h1 
            className={`text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-100 ${
              glitch ? 'transform translate-x-1 text-purple-500' : ''
            }`}
            style={{
              textShadow: glitch 
                ? '2px 0 #7c3aed, -2px 0 #ec4899, 0 0 20px #7c3aed' 
                : '0 0 20px rgba(124, 58, 237, 0.5)'
            }}
          >
            {displayText}
            <span className="animate-pulse text-purple-500">|</span>
          </h1>
          
          {/* Efeito de scan line */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 animate-pulse"
            style={{
              background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)',
              height: '2px',
              animation: 'scan 3s infinite'
            }}
          />
        </div>
        
        <h2 className="text-xl md:text-2xl text-gray-400 font-mono mt-8">
          {'>'} Initializing secure connection...
          <span className="animate-pulse">_</span>
        </h2>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
