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
      },
    },
  },
  plugins: [],
};
