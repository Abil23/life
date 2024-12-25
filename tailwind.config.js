/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px' ,

    },
    extend: {
      colors: {
        primary: '#608B57' ,
        secondary: '#474747' ,
        dark: '#0f172a' ,
        darkgreen: '#415F3B',
      },
      fontFamily: {
        Josefin: ['Josefin Sans', 'serif'],
        Cormorant: ['Cormorant', 'serif'],
      },
      screens : {
        '2xl' : '1320px' ,
      }
    },
  },
  plugins: [],
}

