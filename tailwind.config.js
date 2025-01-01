/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/js/*.js',
    './src/pages/*.html',
    './index.html',
  ],
  theme: {
    extend: {      
      fontFamily: {
        'inter': ['Inter','sans-serif'],
      },

      // Color
      colors: {
        'logo': '#004aad',
      }

    },
  },
  plugins: [],
}

