/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./Components/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        ms: "0 4px 20px 2px rgba(206, 206, 206, 0.9)",
      },
    },
    colors: {
      primary: "#141414",
      secondary: "#00C250",
      gray1: "#686868",
      gray2: "#333333",

      white: "#fff",
      black: "#000",
      black05: "rgba(0, 0, 0, 0.5)",
      onHover: "#00C250",
    },
    screens: {
      xs: "360px",
      sm: "600px",
      md: "768px",
      lg: "900px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
