/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif']
    },
    colors: {
      'white': '#fff',
      'main-blue': '#3A4562',
      'card-gray': '#878D9D'
    },
    boxShadow: {
      'card-shadow': '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)'
    }
  },
  plugins: [],
}
