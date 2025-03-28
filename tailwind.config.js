/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FF5733", // Vibrant Orange (Background)
        secondary: "#FFFFFF", // White (Text)
        tertiary: "#C70039", // Crimson Red (Optional for accents)
        "accent-1": "#581845", // Deep Purple
        "accent-2": "#900C3F", // Dark Red
        "accent-3": "#FFC300", // Bright Yellow (Optional for highlights)
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(255, 87, 51, 0.5)", // Updated shadow with orange tint
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};