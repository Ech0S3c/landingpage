"use client";
// Hero.tsx

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [glitch, setGlitch] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [terminalCommand, setTerminalCommand] = useState('');

  const terminalCommands = [
    'nmap -sS -O target.com',
    'sqlmap -u "http://target.com/page.php?id=1" --dbs',
    'gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt',
    'hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://target.com',
    'nikto -h http://target.com',
    'metasploit-framework',
    'aircrack-ng -a2 -b 00:11:22:33:44:55 -w wordlist.txt capture.cap',
    'john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt',
    'wireshark -i eth0',
    'burpsuite',
    'dirb http://target.com /usr/share/dirb/wordlists/common.txt',
    'wpscan --url http://target.com --enumerate u',
    'searchsploit apache 2.4.41',
    './exploit.py -t 192.168.1.100',
    'nc -lvnp 4444'
  ];

  // Sequência para títulos principais
  const titleSequence = [
    'the World of Hackers', 8765,
    '', 500,
    'EchoSec', 7750,
    '', 500,    
  ];

  // Efeito glitch aleatório
  useEffect(() => {
    const glitchTimer = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 150);
      }
    }, 2000);

    return () => clearInterval(glitchTimer);
  }, []);

  // Gerador de partículas
  useEffect(() => {
    const particleTimer = setInterval(() => {
      if (Math.random() < 0.3) {
        const newParticle = {
          id: Date.now(),
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
        };
        setParticles(prev => [...prev, newParticle]);
        
        // Remove partícula após 3 segundos
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 3000);
      }
    }, 1000);

    return () => clearInterval(particleTimer);
  }, []);

  // Sistema de terminal simplificado
  useEffect(() => {
  let currentCommandIndex = 0;
  let typingInterval: NodeJS.Timeout | null = null;
  let commandTimer = null;

  const typeCommand = () => {
    const command = terminalCommands[currentCommandIndex];
    let charIndex = 0;
    
    setTerminalCommand('');
    
    if (typingInterval) {
      clearInterval(typingInterval);
    }
    
    typingInterval = setInterval(() => {
      if (charIndex <= command.length) {
        setTerminalCommand(command.substring(0, charIndex));
        charIndex++;
      } else {
        //@ts-ignore
        clearInterval(typingInterval);
        typingInterval = null;
      }
    }, Math.max(2000 / command.length, 30));
  };

  const firstCommandTimer = setTimeout(typeCommand, 1000);

  commandTimer = setInterval(() => {
    currentCommandIndex = (currentCommandIndex + 1) % terminalCommands.length;
    typeCommand();
  }, 4000);

  return () => {
    if (typingInterval) clearInterval(typingInterval);
    if (commandTimer) clearInterval(commandTimer);
    if (firstCommandTimer) clearTimeout(firstCommandTimer);
  };
}, []);

  return (
    <section className="bg-black min-h-screen flex items-center justify-center pt-16 md:pt-10 relative overflow-hidden">
      {/* Partículas de fundo */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-600 rounded-full animate-pulse hidden md:block"
          style={{
            left: particle.x,
            top: particle.y,
            boxShadow: '0 0 10px #7c3aed, 0 0 20px #7c3aed, 0 0 30px #7c3aed'
          }}
        />
      ))}

      {/* Efeito de linha de código de fundo */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <div className="text-purple-400 text-xs font-mono leading-4 p-2 md:p-4">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="mb-1">
              {Math.random() > 0.5 ? '01010101' : '10101010'} {Math.random() > 0.5 ? '11110000' : '00001111'}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-6xl">
        <div className="relative">
          {/* Título principal com TypeAnimation */}
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 md:mb-12 transition-all duration-100 min-h-[4rem] md:min-h-[5rem] flex flex-col items-center justify-center leading-tight ${
              glitch ? 'transform translate-x-1 text-purple-400' : ''
            }`}
            style={{
              textShadow: glitch 
                ? '2px 0 #7c3aed, -2px 0 #ec4899, 0 0 20px #7c3aed' 
                : '0 0 20px rgba(124, 58, 237, 0.5)'
            }}
          > 
            <span className="mb-2">Welcome to </span>
            <TypeAnimation
              sequence={titleSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline-block' }}
            />
          </h1>
          
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 animate-pulse"
            style={{
              background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)',
              height: '2px',
              animation: 'scan 2s infinite'
            }}
          />
        </div>
        
        <div className="text-sm md:text-base lg:text-lg font-mono mt-8 md:mt-12 max-w-full md:max-w-5xl mx-auto text-left">
          {/* Terminal com glassmorphism */}
          <div 
            className="relative p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl mx-4 md:mx-0"
            style={{
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(139, 69, 19, 0.08) 50%, rgba(0, 0, 0, 0.4) 100%)',
              boxShadow: '0 25px 50px rgba(124, 58, 237, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            }}
          >
            {/* Efeito de brilho sutil no topo */}
            <div 
              className="absolute top-0 left-0 right-0 h-px opacity-60"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.8), transparent)'
              }}
            />
            
            {/* Header do terminal */}
            <div className="flex items-center mb-3 md:mb-4">
              <div className="flex space-x-1 md:space-x-2 mr-2 md:mr-4">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500/80 rounded-full backdrop-blur-sm shadow-lg"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500/80 rounded-full backdrop-blur-sm shadow-lg"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500/80 rounded-full backdrop-blur-sm shadow-lg"></div>
              </div>
              <span className="text-gray-400/80 text-xs md:text-sm font-medium">Terminal - zsh</span>
            </div>
            
            {/* Linha do prompt */}
            <div className="text-xs md:text-sm mb-1 opacity-90 overflow-hidden">
              <span className="text-green-400/90">┌──(</span>
              <span className="text-blue-400/90 font-semibold">kali㉿echosec</span>
              <span className="text-green-400/90">)-[</span>
              <span className="text-white/90">~/pentest</span>
              <span className="text-green-400/90">]</span>
            </div>
            
            {/* Linha do comando */}
            <div className="text-xs md:text-sm flex items-start md:items-center overflow-hidden">
              <span className="text-green-400/90 mr-1 flex-shrink-0">└─$ </span>
              <span className="text-white/95 font-mono tracking-wide break-all md:break-normal">{terminalCommand}</span>
              <span 
                className="animate-pulse text-green-400/90 ml-1 font-bold flex-shrink-0"
                style={{
                  textShadow: '0 0 8px rgba(74, 222, 128, 0.5)'
                }}
              >█</span>
            </div>
            
            {/* Efeito de scan line sutil no terminal */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-xl md:rounded-2xl opacity-20 hidden md:block"
              style={{
                background: 'linear-gradient(0deg, transparent 48%, rgba(124, 58, 237, 0.1) 49%, rgba(124, 58, 237, 0.2) 50%, rgba(124, 58, 237, 0.1) 51%, transparent 52%)',
                animation: 'terminalScan 4s infinite ease-in-out'
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
        
        @keyframes terminalScan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;