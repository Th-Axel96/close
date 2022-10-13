/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0000D1",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        silkscreen: ["silkscreen", "cursive"],
        poppins:["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
