import React from 'react';

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-lg">E</span>
            </div>
            <span className="text-white font-semibold">EchoSec</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Educacional</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Quem Somos</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Contato</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Materiais</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;