/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "550px",
      md: "767px",
      lg: "990px",
      xl: "1300px",
    },
    extend: {
      colors: {
        primary: "#0a1f77",
        secondary: "#437b8f",
        third: "#50bbff",
        blueMobile: "#2570b0"
      },
    },
  },
  plugins: [],
};
