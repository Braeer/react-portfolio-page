/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  safelist: [
    'before:bg-[#FF6D00]',
    'before:bg-[#039BE5]',
    'before:bg-[#FFD600]',
    'before:bg-[#1976D2]',
    'before:bg-[#F06292]',
    'before:bg-[#00ACC1]',
    'before:bg-[#80DEEA]',
    'before:bg-[#5F4BB6]',
    'before:bg-[#FFFFFF]',
    'before:bg-[#F4511E]',
    'before:bg-[#2395EC]',
    'before:bg-[#FCCA00]',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        bg: '##202A25',
        text: '#F6F7EB',
        button: '#5F4BB6',
      },
      fontFamily: {
        TitleFonts: ['Rubik', 'sans-serif'],
        DescriptionFont: ['Montserrat', 'monospace'],
      },
    },
    backgroundImage: {
      'bg-header': "url('/imgs/header.svg')",
    },
  },
  plugins: [require('tailwindcss-animate')],
};
