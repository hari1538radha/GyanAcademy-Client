/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    screens: {
      'md': {'min': '768px', 'max': '1023px'},

      'sm':  {'min': '360px', 'max': '423px'},
    },
 
    extend: { transitionDelay: {
      '0': '0ms',
      '2000': '2000ms',
    },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-30px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 6s ease-out infinite '
        
    }
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}