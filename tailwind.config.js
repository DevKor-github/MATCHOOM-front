/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/App.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'Arial'],
      },
      colors: {
        green: '#74EFC2',
        blue: '#4174F7',
        background: '#121212',
        grey: {
          1: '#FFF',
          4: '#BCC1CB',
          6: '#636872',
        },
      },
    },
  },
  plugins: [],
};
