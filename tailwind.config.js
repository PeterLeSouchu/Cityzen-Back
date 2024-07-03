import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#6CB7B6',
        blue: '#4F5D77',
        black: '#000500',
        grey: '#828282',
        lightgrey: '#E0E0E0',
        white: '#FFFAFF',
        whiteP: '#FFFFFF',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        hind: ['Hind', 'sans-serif'],
      },
      maxWidth: {
        screen: '100vw',
      },
    },
  },
  plugins: [daisyui],
};
