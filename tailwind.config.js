const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0A192F',
        secondary: '#64FFDA',
        primaryf: '#CCD6F6',
        secondaryf: '#8892B0',
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        twitter: '#1DA1F2',
        hashnode: '#2962FF',
        linkedin: '#0077B5',
        gmail: '#D44638',
        github: '#181717'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
