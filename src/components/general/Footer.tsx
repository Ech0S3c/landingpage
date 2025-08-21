import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 md:py-12 font-body text-gray-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Logo e tagline */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
              <span className="text-white font-semibold text-lg md:text-xl">EchoSec</span>
            </Link>
            <p className="text-purple-400 font-mono text-sm mb-4">//Welcome to Echosec.</p>
            
            {/* Email com ícone SVG */}
            <div className="flex items-center space-x-2">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2441_85)">
                  <path d="M13.332 3.44336H2.66536C1.93203 3.44336 1.3387 4.04336 1.3387 4.77669L1.33203 12.7767C1.33203 13.51 1.93203 14.11 2.66536 14.11H13.332C14.0654 14.11 14.6654 13.51 14.6654 12.7767V4.77669C14.6654 4.04336 14.0654 3.44336 13.332 3.44336ZM13.332 6.11003L7.9987 9.44336L2.66536 6.11003V4.77669L7.9987 8.11003L13.332 4.77669V6.11003Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_2441_85">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.777344)"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="text-sm">echosec@inteli.edu.br</span>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <span className="text-white font-semibold mb-4 block">Navegue pelo site</span>
            <div className="grid grid-cols-1 gap-x-6 gap-y-2">
              <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                Home
              </Link>
              <Link href="/educacional" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                Educacional
              </Link>
              <Link href="/quem-somos" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                Quem Somos
              </Link>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/echosec" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.625 3.40234H3.375C2.96016 3.40234 2.625 3.7375 2.625 4.15234V21.4023C2.625 21.8172 2.96016 22.1523 3.375 22.1523H20.625C21.0398 22.1523 21.375 21.8172 21.375 21.4023V4.15234C21.375 3.7375 21.0398 3.40234 20.625 3.40234ZM8.18672 19.3797H5.40469V10.4312H8.18672V19.3797ZM6.79688 9.20781C6.47795 9.20781 6.16619 9.11324 5.90102 8.93606C5.63584 8.75887 5.42917 8.50704 5.30712 8.21239C5.18507 7.91774 5.15314 7.59352 5.21536 7.28073C5.27758 6.96793 5.43115 6.68061 5.65667 6.4551C5.88218 6.22959 6.1695 6.07601 6.48229 6.0138C6.79509 5.95158 7.11931 5.98351 7.41395 6.10556C7.7086 6.2276 7.96044 6.43428 8.13762 6.69946C8.3148 6.96463 8.40937 7.27639 8.40937 7.59531C8.40703 8.48594 7.68516 9.20781 6.79688 9.20781ZM18.6023 19.3797H15.8227V15.0273C15.8227 13.9891 15.8039 12.6555 14.3766 12.6555C12.9305 12.6555 12.7078 13.7852 12.7078 14.9523V19.3797H9.93047V10.4312H12.5977V11.6547H12.6352C13.0055 10.9516 13.9125 10.2086 15.2672 10.2086C18.0844 10.2086 18.6023 12.0625 18.6023 14.4719V19.3797Z" fill="currentColor"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/echo.sec/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/Ech0S3c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-xs text-gray-500">
            Todos os Direitos Reservados © EchoSec 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;