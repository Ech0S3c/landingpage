"use client";

// =======================
// Imports
// =======================
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { TypeAnimation } from 'react-type-animation';

// =======================
// Types
// =======================

/**
 * Particle interface for animated background dots.
 */
interface Particle {
  id: number;
  x: number;
  y: number;
}

/**
 * Window dimensions for responsive particle placement.
 */
interface WindowDimensions {
  width: number;
  height: number;
}

// =======================
// Constants
// =======================

/**
 * Glitch effect settings.
 */
const GLITCH_PROBABILITY = 0.1; // Chance to trigger glitch
const GLITCH_DURATION = 150; // ms glitch lasts
const GLITCH_CHECK_INTERVAL = 2000; // ms between glitch checks

/**
 * Particle animation settings.
 */
const PARTICLE_PROBABILITY = 0.8; // Chance to spawn particles
const PARTICLE_LIFETIME = 2000; // ms particle stays visible
const PARTICLE_GENERATION_INTERVAL = 1000; // ms between particle batches

/**
 * Terminal animation settings.
 */
const COMMAND_DISPLAY_DURATION = 4000; // ms each command is shown
const INITIAL_TYPING_DELAY = 1000; // ms before first command types
const MIN_TYPING_SPEED = 30; // ms minimum per character

/**
 * List of terminal commands to animate.
 */
const TERMINAL_COMMANDS = [
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

/**
 * Title animation sequence for TypeAnimation.
 */
const TITLE_SEQUENCE = [
  'the World of Hackers', 8765,
  '', 500,
  'EchoSec', 7750,
  '', 500,
];

// =======================
// Custom Hooks
// =======================

/**
 * Tracks window size for responsive effects.
 */
function useWindowDimensions(): WindowDimensions {
  const [dimensions, setDimensions] = useState<WindowDimensions>({ width: 1000, height: 800 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateDimensions = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return dimensions;
}

/**
 * Controls the glitch effect for the animated title.
 */
function useGlitchEffect(): boolean {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const glitchTimer = setInterval(() => {
      if (Math.random() < GLITCH_PROBABILITY) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), GLITCH_DURATION);
      }
    }, GLITCH_CHECK_INTERVAL);

    return () => clearInterval(glitchTimer);
  }, []);

  return glitch;
}

/**
 * Manages animated particles in the background.
 */
function useParticles(dimensions: WindowDimensions): Particle[] {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generates a batch of particles at random positions
  const createParticleBatch = useCallback(() => {
    const batchSize = 5 + Math.floor(Math.random() * 6);
    return Array.from({ length: batchSize }, (_, i) => ({
      id: Date.now() + Math.random() + i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
    }));
  }, [dimensions]);

  useEffect(() => {
    const particleTimer = setInterval(() => {
      if (Math.random() < PARTICLE_PROBABILITY) {
        const newParticles = createParticleBatch();
        const particleIds = newParticles.map(p => p.id);
        setParticles(prev => [...prev, ...newParticles]);
        // Remove particles after their lifetime
        setTimeout(() => {
          setParticles(prev => prev.filter(p => !particleIds.includes(p.id)));
        }, PARTICLE_LIFETIME);
      }
    }, PARTICLE_GENERATION_INTERVAL);

    return () => clearInterval(particleTimer);
  }, [createParticleBatch]);

  return particles;
}

/**
 * Animates terminal commands, typing them out one by one.
 */
function useTerminalAnimation(): string {
  const [terminalCommand, setTerminalCommand] = useState('');
  useEffect(() => {
    let currentCommandIndex = 0;
    let typingInterval: NodeJS.Timeout | null = null;
    let commandTimer: NodeJS.Timeout | null = null;
    let firstCommandTimer: NodeJS.Timeout | null = null;

    const clearTypingInterval = () => {
      if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
      }
    };

    // Types out the current command character by character
    const typeCommand = () => {
      const command = TERMINAL_COMMANDS[currentCommandIndex];
      let charIndex = 0;
      setTerminalCommand('');
      clearTypingInterval();
      typingInterval = setInterval(() => {
        if (charIndex <= command.length) {
          setTerminalCommand(command.substring(0, charIndex));
          charIndex++;
        } else {
          clearTypingInterval();
        }
      }, Math.max(2000 / command.length, MIN_TYPING_SPEED));
    };

    // Schedules the next command to be typed
    const scheduleNextCommand = () => {
      currentCommandIndex = (currentCommandIndex + 1) % TERMINAL_COMMANDS.length;
      typeCommand();
    };

    firstCommandTimer = setTimeout(typeCommand, INITIAL_TYPING_DELAY);
    commandTimer = setInterval(scheduleNextCommand, COMMAND_DISPLAY_DURATION);

    return () => {
      clearTypingInterval();
      if (commandTimer) clearInterval(commandTimer);
      if (firstCommandTimer) clearTimeout(firstCommandTimer);
    };
  }, []);

  return terminalCommand;
}

// =======================
// UI Components
// =======================

/**
 * Renders a single animated particle.
 */
const Particle: React.FC<{ particle: Particle }> = React.memo(({ particle }) => (
  <div
    className="absolute w-1 h-1 bg-purple-600 rounded-full animate-pulse hidden md:block"
    style={{
      left: particle.x,
      top: particle.y,
      boxShadow: '0 0 10px #7c3aed, 0 0 20px #7c3aed, 0 0 30px #7c3aed',
      animationDuration: '0.5s',
    }}
  />
));

/**
 * Renders the terminal window header (colored dots and label).
 */
const TerminalHeader: React.FC = React.memo(() => (
  <div className="flex items-center mb-3 md:mb-4">
    <div className="flex space-x-1 md:space-x-2 mr-2 md:mr-4">
      <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500/80 rounded-full backdrop-blur-sm shadow-lg" />
      <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500/80 rounded-full backdrop-blur-sm shadow-lg" />
      <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500/80 rounded-full backdrop-blur-sm shadow-lg" />
    </div>
    <span className="text-gray-400/80 text-xs md:text-sm font-medium">Terminal - zsh</span>
  </div>
));

/**
 * Renders the terminal prompt line.
 */
const TerminalPrompt: React.FC = React.memo(() => (
  <div className="text-xs md:text-sm mb-1 opacity-90 overflow-hidden">
    <span className="text-green-400/90">┌──(</span>
    <span className="text-blue-400/90 font-semibold">kali㉿echosec</span>
    <span className="text-green-400/90">)-[</span>
    <span className="text-white/90">~/pentest</span>
    <span className="text-green-400/90">]</span>
  </div>
));

/**
 * Renders the command line with animated typing and blinking cursor.
 */
const TerminalCommandLine: React.FC<{ command: string }> = React.memo(({ command }) => (
  <div className="text-xs md:text-sm flex items-start md:items-center overflow-hidden">
    <span className="text-green-400/90 mr-1 flex-shrink-0">└─$ </span>
    <span className="text-white/95 font-mono tracking-wide break-all md:break-normal">{command}</span>
    <span
      className="animate-pulse text-green-400/90 ml-1 font-bold flex-shrink-0"
      style={{
        textShadow: '0 0 8px rgba(74, 222, 128, 0.5)',
      }}
    >█</span>
  </div>
));

/**
 * Renders the full terminal window with header, prompt, and command line.
 */
const Terminal: React.FC<{ command: string }> = React.memo(({ command }) => (
  <div
    className="relative p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl mx-4 md:mx-0"
    style={{
      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(139, 69, 19, 0.08) 50%, rgba(0, 0, 0, 0.4) 100%)',
      boxShadow: '0 25px 50px rgba(124, 58, 237, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
    }}
  >
    {/* Top scan line */}
    <div
      className="absolute top-0 left-0 right-0 h-px opacity-60"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.8), transparent)',
      }}
    />
    <TerminalHeader />
    <TerminalPrompt />
    <TerminalCommandLine command={command} />
    {/* Animated scan overlay */}
    <div
      className="absolute inset-0 pointer-events-none rounded-xl md:rounded-2xl opacity-20 hidden md:block"
      style={{
        background: 'linear-gradient(0deg, transparent 48%, rgba(124, 58, 237, 0.1) 49%, rgba(124, 58, 237, 0.2) 50%, rgba(124, 58, 237, 0.1) 51%, transparent 52%)',
        animation: 'terminalScan 4s infinite ease-in-out',
      }}
    />
  </div>
));

/**
 * Renders the animated title with glitch effect and scan line.
 */
const AnimatedTitle: React.FC<{ glitch: boolean }> = React.memo(({ glitch }) => {
  // Style for glitch effect
  const titleStyles = useMemo(() => ({
    textShadow: glitch
      ? '2px 0 #7c3aed, -2px 0 #ec4899, 0 0 20px #7c3aed'
      : '0 0 20px rgba(124, 58, 237, 0.5)',
  }), [glitch]);

  // Classes for glitch transform
  const titleClasses = useMemo(() =>
    `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 md:mb-12 transition-all duration-100 min-h-[4rem] md:min-h-[5rem] flex flex-col items-center justify-center leading-tight ${
      glitch ? 'transform translate-x-1 text-purple-400' : ''
    }`, [glitch]
  );

  return (
    <div className="relative">
      <h1
        className={titleClasses}
        style={titleStyles}
      >
        <span className="mb-2">Welcome to </span>
        {/* Animated title text */}
        <TypeAnimation
          sequence={TITLE_SEQUENCE}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={true}
          style={{ display: 'inline-block' }}
        />
      </h1>
      {/* Animated scan line under title */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 animate-pulse"
        style={{
          background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)',
          height: '2px',
          animation: 'scan 2s infinite',
        }}
      />
    </div>
  );
});

/**
 * Injects custom keyframe animations for scan effects.
 */
const AnimationStyles: React.FC = React.memo(() => (
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
));

// =======================
// Main Hero Component
// =======================

/**
 * Main Hero section with animated title, terminal, and background particles.
 */
const Hero: React.FC = () => {
  // Responsive window size for particles
  const dimensions = useWindowDimensions();
  // Glitch effect for title
  const glitch = useGlitchEffect();
  // Animated background particles
  const particles = useParticles(dimensions);
  // Animated terminal command
  const terminalCommand = useTerminalAnimation();

  return (
    <section className="bg-black min-h-screen flex items-center justify-center pt-16 md:pt-10 relative overflow-hidden">
      {/* Render animated particles */}
      {particles.map(particle => (
        <Particle key={particle.id} particle={particle} />
      ))}
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-6xl">
        {/* Animated title with glitch */}
        <AnimatedTitle glitch={glitch} />
        {/* Terminal animation */}
        <div className="text-sm md:text-base lg:text-lg font-mono mt-8 md:mt-12 max-w-full md:max-w-5xl mx-auto text-left">
          <Terminal command={terminalCommand} />
        </div>
      </div>
      {/* Inject animation keyframes */}
      <AnimationStyles />
    </section>
  );
};

export default Hero;
