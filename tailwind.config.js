/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      accent: "#13A05A",
      highAccent: "#2724BB",
      accentContrast: "#ffffff",
      title: "#00451C",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
