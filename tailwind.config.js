/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        banana: {
          DEFAULT: '#1B4332',
          light: '#2D6A4F',
          dark: '#0F2B1E',
        },
        gold: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706',
        },
        terracotta: {
          DEFAULT: '#C2410C',
          light: '#EA580C',
        },
        cream: {
          DEFAULT: '#FDF6EC',
          dark: '#F5E6C8',
        },
        charcoal: '#2D2D2D',
        'near-black': '#111111',
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};