/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/hero-bg.jpg')",
        "newsletter-bg": "url('/newsletter-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
