import flowbitePlugin from 'flowbite/plugin';


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
        'nunito': ['Nunito sans','sans-serif'],
        'merriweather': ['Merriweather','serif'],
      },

      // Color
      colors: {
        'logo': '#004aad',
      }

    },
  },
  plugins: [
    flowbitePlugin,
  ],
}

