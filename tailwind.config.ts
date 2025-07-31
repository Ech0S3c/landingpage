import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1C3F',         // Azul escuro institucional
        secondary: '#FFD700',       // Dourado suave
        light: '#FFFFFF',           // Branco
        muted: '#F5F5F5',           // Cinza muito claro
        dark: '#1A1A1A',            // Quase preto
        border: '#E5E7EB',          // Cinza claro para contornos
        card: {
          bg: '#2A2A2A',            // Fundo escuro do card
          border: '#8B5CF6',        // Roxo para a borda
          glow: 'rgba(139, 92, 246, 0.3)', // Brilho roxo
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      spacing: {
        'section': '4rem', // Para seções principais
      },
      dropShadow: {
        'card-glow': '0 0 20px rgba(139, 92, 246, 0.4)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;