/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B2447", 700: "#12335F" },
        goo: { DEFAULT: "#16A34A", dark: "#128A3E" },
        mist: "#F1F5F9",
      },
      boxShadow: { soft: "0 8px 30px rgba(11,36,71,0.08)" },
    },
  },
  plugins: [],
};
