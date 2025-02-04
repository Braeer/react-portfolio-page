/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // background:
        bg: '#242a35',
      },
      fontFamily: {
        Liter: ['Liter', 'sans-serif'],
        Roboto: ['Roboto Mono', 'monospace'],
      },
    },
    backgroundImage: {
      'bg-header': "url('./public/img/background_header.svg')",
    },
  },
  plugins: [require('tailwindcss-animate')],
};
