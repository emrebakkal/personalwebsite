/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ["'Outfit'", 'sans-serif'],
      },
      colors: {
        'primary': '#161616',
        'secondary': '#B4B5B4',
        'tertiary': '#9A9B9B',
        'quaternary': '#1B1A1B',
      }
    },
  },
  plugins: [],
}