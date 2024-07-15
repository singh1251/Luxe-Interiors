/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "960px",
      },

      backgroundImage: {
        "my-background": "url('/src/assets/BackgroundImages/background.jpg')", // Custom background image
      },
    },
  },
  plugins: [],
};
