/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./Components/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#141414",
      secondary: "#00C250",
      gray: "#686868",
      white: "#fff",
      onHover: "#00C250",
    },
  },
  plugins: [],
};
