/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html",
      "./node_modules/tw-elements/dist/js/**/*.js",],

  theme: {
    fontFamily: {
      jost: "Jost, sans-serif",
      poppins: "Poppins, sans-serif",
      raleway: "Raleway, sans-serif",
    },
    container: {
      center: true,
    },
    screens: {
      xs: "450px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "orange-lemon": "hsl(14, 97%, 60%)",
        "blue-docker": "hsl(217, 89%, 61%)",
        "navy-blue": "hsl(218, 39%, 35%)",
        "youth-blue": "hsl(199, 74%, 59%)",
        "cream-vanilla": "hsl(52, 60%, 95%)",
        "yellow-sunrise": "hsl(56, 98%, 59%)",
        "red-bata": "hsl(7,78%,60%)",
      },
      backgroundImage: {
        "hero-header": "url('../img/bg/Hero-Bg.jpeg')",
        "hero-topics": "url('../img/bg/theme.jpeg')",
        "hero-bg": "url('../img/bg/theme.jpeg')",
        "hero-committees": "url('../img/bg/theme.jpeg')",
      },
      gridTemplateColumns: {
        "max-2": "repeat(2,max-content)",
        "max-3": "repeat(3,max-content)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};
