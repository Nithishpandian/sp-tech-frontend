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
        "roboto": ["Roboto", "sans-serif"],
        "noto-sans": ["Noto Sans", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors:{
        "black":"#121212"
      }
    },
  },
  plugins: [],
}