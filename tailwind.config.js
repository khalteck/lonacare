/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "660px",
      md: "768px",
      lg: "1204px",
      xl: "1280px",
    },
    fontFamily: {
      merri: ["Merriweather", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/hero4.jpg')",
        about: "url('/images/service6.jpeg')",
        contact: "url('/images/contact.jpg')",
        service: "url('/images/house.jpg')",
      },
    },
  },
  plugins: [],
};
