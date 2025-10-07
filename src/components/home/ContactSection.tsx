'use client'
import React from 'react';
import { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('Erro ao enviar. Verifique sua conexão.');
    }
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div
          className="max-w-4xl mx-auto p-8 md:p-12 lg:p-16 relative overflow-hidden rounded-xl md:rounded-2xl"
          style={{
            backgroundImage: `url('/forms.svg')`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-black/20 rounded-xl md:rounded-2xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight mb-4 md:mb-0">
                Tem algum <span className="text-purple-400">feedback</span>,{' '}
                <span className="text-purple-400">dúvida</span>, ou
                simplesmente quer <span className="text-purple-400">entrar</span>{' '}
                <span className="text-purple-400">em contato</span>?
              </h2>
            </div>
            
            {/* Right side - Form */}
             <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Insira seu nome"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 px-4 py-2.5 rounded-lg transition-all duration-200 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Insira seu e-mail"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 px-4 py-2.5 rounded-lg transition-all duration-200 outline-none"
              />
              <textarea
                name="message"
                placeholder="Insira uma mensagem que você quer enviar à Liga"
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                className="bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 px-4 py-2.5 rounded-lg transition-all duration-200 outline-none resize-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
              Enviar
              </button>
              {status && <p className="text-sm text-center mt-1 text-gray-300">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;