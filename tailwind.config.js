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
