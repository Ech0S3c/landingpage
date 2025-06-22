import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-gray-900 border border-purple-500 rounded-lg p-8">
          <div className="mb-8">
            <h2 className="text-white text-xl mb-2">
              Tem algum <span className="text-purple-400">feedback</span>, 
              <span className="text-purple-400"> dúvida</span>, ou 
              simplesmente quer <span className="text-purple-400">entrar</span>
            </h2>
            <h2 className="text-white text-xl">
              <span className="text-purple-400">em contato</span>?
            </h2>
          </div>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Insira seu nome"
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Insira seu e-mail"
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
            />
            <textarea
              placeholder="Insira uma mensagem que você quer enviar à Liga"
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded font-semibold transition-colors"
            >
              ✈ Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;