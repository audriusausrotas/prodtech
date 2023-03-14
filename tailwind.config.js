/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
