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
    extend: {
      colors: {
        "power-rgba": "rgba(0,255,0, 0.4)",
      },
    },
  },
  plugins: [],
}
