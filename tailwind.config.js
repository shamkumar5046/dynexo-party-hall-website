/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C5A059",
        "primary-dark": "#A8833E",
        "background-light": "#F9F9F7",
        "background-dark": "#1A1A1A",
        "surface-light": "#FFFFFF",
        "surface-dark": "#262626",
        "text-light": "#2D2D2D",
        "text-dark": "#E5E5E5",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
        signature: ["Great Vibes", "cursive"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
      backgroundImage: {
        'gold-texture': "url('https://www.transparenttextures.com/patterns/gold-scale.png')",
      },
    },
  },
  plugins: [],
}