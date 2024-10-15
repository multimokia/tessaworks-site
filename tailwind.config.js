/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/3': '33.33333%',
        '1/2': '50%',
        '2/3': '66.66666%',
        '3/4': '75%',

        '1/3vw': '33.33333vw',
        '1/2vw': '50vw',
        '2/3vw': '66.66666vw',
        '3/4vw': '75wh'
      },
      maxHeight: {
        '1/3': '33.33333%',
        '1/2': '50%',
        '2/3': '66.66666%',
        '3/4': '75%',

        '1/3vh': '33.33333vh',
        '1/2vh': '50vh',
        '2/3vh': '66.66666vh',
        '3/4vh': '75vh'
      }
    },
  },
  plugins: [],
}

