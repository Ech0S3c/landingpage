import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
              <span className="text-white font-semibold text-xl">EchoSec</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Páginas</h3>
            <ul className="space-y-2">
              
              <li><a href="/" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="/Educacional" className="text-gray-400 hover:text-purple-400 transition-colors">Educacional</a></li>
              <li><a href="/Quem Somos" className="text-gray-400 hover:text-purple-400 transition-colors">Quem Somos</a></li>
              <li><a href="/Contato" className="text-gray-400 hover:text-purple-400 transition-colors">Contato</a></li>
              <li><a href="/Materiais" className="text-gray-400 hover:text-purple-400 transition-colors">Materiais</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">📧</span>
                <span className="text-gray-400">contact@echosec.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">💬</span>
                <span className="text-gray-400">@echosec_official</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">📱</span>
                <span className="text-gray-400">+55 11 99999-9999</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">Todos os direitos reservados - League Hacker Security</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400">inteli</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;