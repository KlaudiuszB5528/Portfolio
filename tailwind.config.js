/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlack: "#121212",
      },
      fontFamily: {
        amiri: ["Amiri Quran", "island"],
        island: ["Island Moments", "cursive"],
      },
      screens: {
        sm: "500px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
