/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./Components/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#141414",
      secondary: "#00C250",
      gray1: "#686868",
      gray2: "#333333",
      white: "#fff",
      black: "#000",
      black08: "rgba(0, 0, 0, 0.8)",
      onHover: "#00C250",
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "900px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
