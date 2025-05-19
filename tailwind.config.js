/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit'],
      },
      colors: {
        'skejio-blue': '#1f2eef',
      },
    },
  },
  plugins: [],
}; 