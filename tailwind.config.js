/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      md: { min: "768px", max: "1023px" },

      xl: { min: "1025px", max: "1250px" },
      
      sm: { min: "320px", max: "479px" },
    },

    extend: {
      transitionDelay: {
        0: "0ms",
        2000: "2000ms",
      },
      boxShadow: {
        header_box: "0 4px 18px  rgba(0, 0, 0, 0.25)",
        home_button: "0px 7.50138px 22.5041px rgba(19, 108, 181, 0.2)",
        home_box: "0px 2.22897px 13.3738px -0.557242px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        background: "url('./GyanAcademyPages/HomePage/asserts/Gradient.png')",
      },
      borderRadius: {
        rad: "75px 0px 75px",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 6s ease-out infinite ",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};