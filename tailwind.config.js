/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'md': {'min': '768px', 'max': '1023px'},

      'sm':  {'min': '360px', 'max': '423px'},
    },
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}