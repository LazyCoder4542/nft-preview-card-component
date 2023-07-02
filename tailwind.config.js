/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'blue': {
        100: 'hsl(215, 51%, 70%)',
        200: 'hsl(215, 32%, 27%)',
        300: 'hsl(216, 50%, 16%)',
        400: 'hsl(217, 54%, 11%)',
      },
      'blue-soft': 'hsl(215, 51%, 70%)',
      'white': 'hsl(0, 0%, 100%)',
      'cyan': 'hsl(178, 100%, 50%)',
    },
    fontFamily: {
      'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
      'serif': ['Outfit', ...defaultTheme.fontFamily.serif],
      'mono': ['Outfit', ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [],
}

