/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    colors: {
      'white': '#fff',
      'main-blue': '#3A4562',
      'card-gray': '#878D9D',
      'sub-blue' : '#38415d',
      'card-b-text': '#55699E',
      'card-b-bg': '#a1b1db',
      'card-b-border': '#55699e',
      'card-y-text': '#988B49',
      'card-y-bg': '#ffcf00',
      'card-y-border': '#FFCF00',
      'return': '#384564',
      'pagination-arrow': '#7D859C',
      'pagination-border': '#DEE3EF',
      'pagination-number': '#70778B',
      'pagination-hover': '#5876C5',
      'map-bg': '#2A3047'
    },
    boxShadow: {
      'card-shadow': '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)'
    }
  },
  plugins: [],
}
