/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Customize Colors
        primary: '#272125',
        secondary: '#7F6C79',
        tertiary: '#F4F7FF',
        // Customize Colors for dark mode
        dark: {
          background: 'rgb(0, 0, 0)',
          text: 'rgb(244, 247, 255)',
        },
        // Customize Colors for light mode
        light: {
          background: 'rgb(252, 252, 252)',
          text: 'rgb(26, 26, 26)',
        },
      },
    },
  },
  plugins: [],
};
