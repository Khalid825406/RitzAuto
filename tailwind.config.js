/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royal: "#20639c",
        navy: "#0A1628",
        royal: {
          DEFAULT: "#1F6FE5",
          dark: "#1752B8",
        },
        sky: "#4DA3FF",
        steel: "#C5CEDB",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
      },
    },
  },
  plugins: [],
};