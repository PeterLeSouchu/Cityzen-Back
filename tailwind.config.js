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
        lightgrey: '#ededed',
        white: '#FFFFFF',
        green2: '#e4f7f7',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        hind: ['Hind', 'sans-serif'],
      },
      maxWidth: {
        screen: '100vw',
      },
      minWidth: {
        16: '16.666667%',
      },
      height: {
        90: '90vh',
        50: '50vh',
        80: '80vh',
        83: '83vh',
        10: '10vh',
        7: '7vh',
        900: '90%',
        41.5: '41.5vh',
      },
      margin: {
        7: '7vh',
        10: '10vh',
      },
      minHeight: {
        90: '90vh',
        80: '80vh',
        83: '83vh',
      },
      spacing: {
        'vw-12': '12vw',
      },
    },
  },
  plugins: [daisyui],
};
