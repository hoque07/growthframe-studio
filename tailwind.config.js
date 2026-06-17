/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#effdf5",
          100: "#d9fbe8",
          200: "#b6f4d1",
          300: "#7ee8ad",
          400: "#41d482",
          500: "#18b965",
          600: "#0d9550",
          700: "#0b7843",
          800: "#0c5f39",
          900: "#0b4e31"
        },
        ink: "#111827"
      },
      boxShadow: {
        glow: "0 16px 45px rgba(24, 185, 101, 0.18)"
      }
    }
  },
  plugins: []
};
