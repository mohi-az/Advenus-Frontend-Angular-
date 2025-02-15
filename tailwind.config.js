/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Handlee: ['Handlee', 'sans-serif'],
        Oswald:['Oswald','Arial']
      },
      colors: {
        amber25: '#fcfaee'
        ,
      }
      , borderWidth: {
        1: '1px'
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["bumblebee"],
  },
}
