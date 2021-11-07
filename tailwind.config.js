const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#59E8D2',
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
        github: '#181717',
        javascript: '#F7DF1E',
        socials: {
          twitter: '#1DA1F2',
          hashnode: '#2962FF',
          linkedin: '#0077B5',
          gmail: '#D44638',
          github: '#181717'
        },
        skills: {
          javascript: '#F7DF1E',
          react: '#61DAFB',
          node: '#339933',
          express: '#FFF',
          mongodb: '#47A248',
          figma: '#F24E1E',
          tailwind: '#06B6D4',
          bulma: '#00D1B2',
          git: '#F05032'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
