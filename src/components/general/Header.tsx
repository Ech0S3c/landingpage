"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
            <span className="text-white font-semibold text-lg md:text-xl">EchoSec</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-400 transition-colors">Home</Link>
            <Link href="/educacional" className="text-white hover:text-purple-400 transition-colors">Educacional</Link>
            <Link href="/quem-somos" className="text-white hover:text-purple-400 transition-colors">Quem Somos</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className="text-white hover:text-purple-400 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/educacional" 
                className="text-white hover:text-purple-400 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Educacional
              </Link>
              <Link 
                href="/quem-somos" 
                className="text-white hover:text-purple-400 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;