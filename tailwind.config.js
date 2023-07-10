/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlack: "#121212",
      },
      fontFamily: {
        amiri: ["var(--font-amiri)"],
        island: ["var(--font-island)"],
      },
      screens: {
        sm: "500px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
