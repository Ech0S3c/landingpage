import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-primary/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-light font-semibold">EchoSec</span>
            </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-light hover:text-secondary transition-colors">Home</a>
            <a href="/educacional" className="text-light hover:text-secondary transition-colors">Educacional</a>
            <a href="/quem-somos" className="text-light hover:text-secondary transition-colors">Quem Somos</a>
            <a href="/" className="text-light hover:text-secondary transition-colors">Contato</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
