/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      logo: ["Splash", "cursive"],
      body: ["Karla", "sans-serif"],
    },
    boxShadow: {
      power: "0 0 8px 6px rgba(0, 255, 0, 0.2)",
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "700px",
      // => @media (min-width: 960px) { ... }

      lg: "1050px",
      // => @media (min-width: 1440px) { ... }

      xl: "1500px",
      // => @media (min-width: 1500px) { ... }

      "2xl": "2000px",
      // => @media (min-width: 2000px) { ... }
    },
    extend: {
      colors: {
        "power-rgba": "rgba(0,255,0, 0.4)",
      },
    },
  },
  plugins: [],
}
