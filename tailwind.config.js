/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "krona-one": ["Krona One", "sans-serif"],
        "jost": ["Jost", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
        "noto-sans": ["Noto Sans", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "hammersmith-one": ["Hammersmith One", "sans-serif"],
      },
      colors:{
        "black":"#121212",
        "gray":"#2B2C32"
      }
    },
  },
  plugins: [],
}