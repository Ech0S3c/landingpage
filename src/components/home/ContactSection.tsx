import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-6xl mx-auto p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            backgroundImage: `url('/forms.svg')`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0"></div>
          
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Title */}
            <div>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Tem algum <span className="text-purple-400">feedback</span>,{' '}
                <span className="text-purple-400">dúvida</span>, ou 
                simplesmente quer <span className="text-purple-400">entrar</span>{' '}
                <span className="text-purple-400">em contato</span>?
              </h2>
            </div>
            
            {/* Right side - Form */}
            <div>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Insira seu nome"
                  className="w-full bg-gray-600/60 border-0 rounded-lg px-6 py-4 text-white placeholder-gray-300 focus:bg-gray-600/80 focus:outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Insira seu e-mail"
                  className="w-full bg-gray-600/60 border-0 rounded-lg px-6 py-4 text-white placeholder-gray-300 focus:bg-gray-600/80 focus:outline-none transition-all"
                />
                <textarea
                  placeholder="Insira uma mensagem que você quer enviar à Liga"
                  rows={5}
                  className="w-full bg-gray-600/60 border-0 rounded-lg px-6 py-4 text-white placeholder-gray-300 focus:bg-gray-600/80 focus:outline-none resize-none transition-all"
                ></textarea>
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-colors flex items-center gap-3 text-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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