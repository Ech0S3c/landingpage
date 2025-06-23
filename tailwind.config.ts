import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom': {
          'purple': '#7327FF',
        },
        // Ou podemos sobrescrever o purple padrão
        'purple': {
          '400': '#7327FF',
          '500': '#7327FF', 
          '600': '#7327FF',
          '700': '#6520E6',
          '900': '#4A1BA8',
        }
      },
    },
  },
  plugins: [],
}
export default config
