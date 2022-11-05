/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    screens: {
      'md': {'min': '768px', 'max': '1023px'},

      'sm':  {'min': '360px', 'max': '423px'},
    },

    extend: {
      boxShadow: {
        header_box: '0 4px 18px  rgba(0, 0, 0, 0.25)',
        home_button: '0px 7.50138px 22.5041px rgba(19, 108, 181, 0.2)',
        home_box: '0px 2.22897px 13.3738px -0.557242px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        background: "url('./GyanAcademyPages/HomePage/asserts/Gradient.png')",
      },
      borderRadius: {
        rad: "75px 0px 75px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}