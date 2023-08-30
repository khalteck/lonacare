/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "660px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/hero.jpg')",
        hero2: "url('/images/hero2.jpg')",
        register: "url('/images/hero2.jpg')",
        dash: "url('/images/dashboard.jpg')",
      },
    },
  },
  plugins: [],
};
