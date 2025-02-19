/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"//template paths
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
  plugins: [require('daisyui'), require('flowbite/plugin'),    require('@tailwindcss/line-clamp'),
  ],
  daisyui: {
    themes: ["bumblebee"],
  },
}
