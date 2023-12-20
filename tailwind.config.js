/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "design-system": ["Design System C W01 900R", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
        "noto-sans": ["Noto Sans", "sans-serif"],
      },
      colors:{
        "black":"#121212"
      }
    },
  },
  plugins: [],
}