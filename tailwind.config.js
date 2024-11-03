/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      banner: "url('./assets/Banner.jpg')",
    },
  },
  plugins: [require("daisyui")],
};
