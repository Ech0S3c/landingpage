import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border py-12 font-body text-muted">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
              <span className="text-light font-semibold text-xl">EchoSec</span>
            </Link>
          </div>

          <div>
            <h3 className="text-light font-semibold mb-4">Páginas</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Educacional', href: '/materiais' },
                { label: 'Quem Somos', href: '/quem-somos' },
                { label: 'Contato', href: '/contato' },
              ].map(({ label, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-light font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>contact@echosec.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>💬</span>
                <span>@echosec_official</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <span>+55 11 99999-9999</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Todos os direitos reservados - EchoSec</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>inteli</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
