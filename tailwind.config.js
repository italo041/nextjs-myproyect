const colors = require('tailwindcss/colors')

module.exports = {
    future: {
      removeDeprecatedGapUtilities: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
      fontFamily: {
        rale: ['Raleway'],
      },
      colors,
      extend: {
        colors: {
          'danger': '#ff5f40',
          'info': {
            100: '#24a19c',
            200: '#6ebfb5',
          }
        },
      },
    }, 
    variants: { 
    },
    plugins: [],
  }