/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm3: "490px",
      sma3: "320px",
      sma2: "375px",
      sma: "425px",
      sm: "640px",
      smr: "600px",
      sm2: "700px",
      md: "768px",
      " mdr": "900px",

      lg: "1024px",

      xl: "1280px",
      xla: "1440px",

      "2xl": "1536px",

      "2xla": "2560px",
    },
    extend: {
      gridTemplateRows: {
        grid: "400px 400px",
      },
      fontFamily: {
        poppins: "poppins",
        questrial: "Questrial",
      },
      colors: {
        primary: "#fccb00",
        secondary: "#003049",
        secondaryOrange: "#FF8475",
        background: "#fdfff5",
        ordinary: "#f5f4f0",
        footer: "#383737",
        footer2: "#4e5450",
        footer3: "#7d7d7d",
        gradient: "#adaba3",
        bgdrop : "#b0b3b8",
        "main-bg": "#fff",
        "main-dark": "#1F1D2B",
        "card-dark": "#252836",
        "dark-light": "#353949",
        "hover-color-dark": "#2f3343",
        dark: "#2f3343",
      },
      gridTemplateColumns: {
        "16-auto": "250px auto",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-muted": {
          opacity: 0.8,
        },
        ".transition-a": {
          transition: "all 0.3s ease-in-out",
        },
        ".card-shadow": {
          boxShadow: " 0 0 0.8rem 0.25rem rgba(0, 0, 0, 0.1)",
        },
        ".shadow-light": {
          boxShadow: "0.1rem 0.1rem 0.3rem .1rem rgba(0, 0, 0, 0.05)",
        },
        ".border-light": {
          border: "1px solid rgba(46, 46, 46, 0.1)",
        },
        ".input-shadow": {
          boxShadow: "0 0 0 1000px #f5f5f9 inset !important",
        },
        ".input-dark-shadow": {
          boxShadow: "0 0 0 1000px #13131A inset !important",
        },
        ".inputAutofillColor": {
          "-webkit-text-fill-color": "#ccc",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },
        ".heading-h1": {
          fontFamily: "Sans-serif",
          fontSize: "31px",
          fontWeight: "semi-bold",
          color: "white",
        },
        ".sub-heading1": {
          fontFamily: "Sans-serif",
          fontSize: "15px",
          color: "white",
        },
        ".heading-sm": {
          fontFamily: "Sans-serif",
          fontSize: "25px",
          fontWeight: "semi-bold",
          color: "white",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
