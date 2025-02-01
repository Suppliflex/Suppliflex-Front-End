/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Customize Colors
        black: '#000000',
        pink: '#7F6C79',
        white: '#FAFAFA',
        softWhite: '#F4F7FF',
      },
    },
  },
  plugins: [],
};
