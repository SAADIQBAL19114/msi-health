/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#00A0AA"
        },
      },
      maxWidth: {
        container: "1156px",
      },
    },
  },
  plugins: [],
};
