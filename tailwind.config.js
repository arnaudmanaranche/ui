/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInRight: {
          "0%": { opacity: "0.2", transform: "translateX(1%)" },
          "50%": { opacity: "0.7", transform: "translateX(0%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInRight: "fadeInRight 0.25s forwards",
      },
    },
  },
  plugins: [],
};
