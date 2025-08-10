import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div 
          className="max-w-7xl mx-auto p-8 md:p-12 lg:p-16 xl:p-20 relative overflow-hidden rounded-2xl md:rounded-3xl"
          style={{
            backgroundImage: `url('/forms.svg')`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl md:rounded-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left side - Title */}
            <div className="text-center lg:text-left">
              <h2 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-0">
                Tem algum <span className="text-purple-400">feedback</span>,{' '}
                <span className="text-purple-400">dúvida</span>, ou 
                simplesmente quer <span className="text-purple-400">entrar</span>{' '}
                <span className="text-purple-400">em contato</span>?
              </h2>
            </div>
            
            {/* Right side - Form */}
            <div className="w-full">
              <form className="space-y-5 md:space-y-6">
                <input
                  type="text"
                  placeholder="Insira seu nome"
                  className="w-full bg-gray-800/70 backdrop-blur-sm border border-gray-600/30 rounded-xl px-5 md:px-6 py-4 md:py-5 text-white placeholder-gray-300 focus:bg-gray-800/90 focus:border-purple-500/50 focus:outline-none transition-all text-base md:text-lg"
                />
                <input
                  type="email"
                  placeholder="Insira seu e-mail"
                  className="w-full bg-gray-800/70 backdrop-blur-sm border border-gray-600/30 rounded-xl px-5 md:px-6 py-4 md:py-5 text-white placeholder-gray-300 focus:bg-gray-800/90 focus:border-purple-500/50 focus:outline-none transition-all text-base md:text-lg"
                />
                <textarea
                  placeholder="Insira uma mensagem que você quer enviar à Liga"
                  rows={5}
                  className="w-full bg-gray-800/70 backdrop-blur-sm border border-gray-600/30 rounded-xl px-5 md:px-6 py-4 md:py-5 text-white placeholder-gray-300 focus:bg-gray-800/90 focus:border-purple-500/50 focus:outline-none resize-none transition-all text-base md:text-lg"
                ></textarea>
                <div className="flex justify-center lg:justify-end pt-4">
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 text-lg md:text-xl hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// Versão Mobile
export const ContactSectionMobile = () => {
  return (
    <section className="py-12">
      <div className="px-4">
        <div 
          className="p-6 relative overflow-hidden rounded-xl"
          style={{
            backgroundImage: `url('/card.svg')`,
            width: '100%',
            maxWidth: '375px',
            minHeight: '700px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            margin: '0 auto',
            transform: 'rotate(90deg)',
            transformOrigin: 'center center'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          
                      <div className="relative z-10 flex flex-col gap-8 min-h-full justify-between">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-white text-xl font-bold leading-tight">
                Tem algum <span className="text-purple-400">feedback</span>,{' '}
                <span className="text-purple-400">dúvida</span>, ou 
                simplesmente quer <span className="text-purple-400">entrar</span>{' '}
                <span className="text-purple-400">em contato</span>?
              </h2>
            </div>
            
            {/* Form */}
            <div className="flex-1">
              <form className="space-y-5 flex flex-col min-h-96">
                <input
                  type="text"
                  placeholder="Insira seu nome"
                  className="w-full bg-gray-800/70 backdrop-blur-sm border border-gray-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:bg-gray-800/90 focus:border-purple-500/50 focus:outline-none transition-all text-sm"
                />
                <input
                  type="email"
                  placeholder="Insira seu e-mail"
                  className="w-full bg-gray-800/70 backdrop-blur-sm border border-gray-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:bg-gray-800/90 focus:border-purple-500/50 focus:outline-none transition-all text-sm"
                />
                <textarea
                  placeholder="Insira uma mensagem que você quer enviar à Liga"
                  rows={3}
                  className="w-full bg-gray-800/70 backdrop-blur-sm border border-gray-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:bg-gray-800/90 focus:border-purple-500/50 focus:outline-none resize-none transition-all text-sm flex-1"
                ></textarea>
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="bg-purple-600 active:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-base active:scale-95 touch-manipulation"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};