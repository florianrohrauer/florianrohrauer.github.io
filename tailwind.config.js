/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        krona: ["Krona One"],
      },
      colors: {
        background: "#1a1a1a",
        subtext: "#45485A",
      },
    },
  },
  plugins: [],
};
