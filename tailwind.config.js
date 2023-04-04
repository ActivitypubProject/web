/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    colors: {
      transparent: 'transparent',
      white: colors.white,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      green_right: "#1a2f23",
      green_left: "#15202B",
      forest: {
        right: '#1a2f23',
        left: '#15202B',
        glass: '#2AA3EF',
      }
    }
  },
  plugins: [],
}

