/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00aeef", // brand
          light: "#3b82f6",
          dark: "#1e3a8a",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.04)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
