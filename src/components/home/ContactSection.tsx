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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div
          className="max-w-7xl mx-auto p-8 md:p-12 lg:p-16 xl:p-20 relative overflow-hidden rounded-2xl md:rounded-3xl"
          style={{
            backgroundImage: `url('/forms.svg')`,
            backgroundSize: '115% 115%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/20 rounded-2xl md:rounded-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-0">
                Tem algum <span className="text-purple-400">feedback</span>,{' '}
                <span className="text-purple-400">dúvida</span>, ou
                simplesmente quer <span className="text-purple-400">entrar</span>{' '}
                <span className="text-purple-400">em contato</span>?
              </h2>
            </div>
            
            {/* Right side - Form */}
             <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Insira seu nome"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-gray-800 p-3 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Insira seu e-mail"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-gray-800 p-3 rounded"
              />
              <textarea
                name="message"
                placeholder="Insira uma mensagem que você quer enviar à Liga"
                value={form.message}
                onChange={handleChange}
                required
                className="bg-gray-800 p-3 rounded h-40"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-600/80 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-"
              >
              Enviar
              </button>
              {status && <p className="text-sm text-center mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;