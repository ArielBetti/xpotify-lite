/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Open sans'
      },
      colors: {
        "spotify-green": "#1DB954",
        "spotify-green-200": "#11913f"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
