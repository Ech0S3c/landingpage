import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 md:py-12 font-body text-gray-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
              <span className="text-white font-semibold text-lg md:text-xl">EchoSec</span>
            </Link>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">Páginas</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Educacional', href: '/educacional' },
                { label: 'Quem Somos', href: '/quem-somos' },
              ].map(({ label, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm md:text-base"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">Contato</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span>📧</span>
                <span className="text-sm md:text-base">contact@echosec.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <a href="https://www.instagram.com/echo.sec/" className="hover:text-purple-400 transition-colors">
                  <span>💬</span>
                  <span className="text-sm md:text-base"> @echo.sec</span>
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span>📱</span>
                <span className="text-sm md:text-base">+55 27 99242-3488</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm space-y-4 md:space-y-0">
          <p className="text-center md:text-left">Todos os direitos reservados - EchoSec</p>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500">inteli</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;