/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A0AA",
        secondary: "#FFC567",
      },
      maxWidth: {
        container: "1156px",
      },
      padding: {
        7.5: "30px",
      },
      borderRadius: {
        lg2: "10px",
      },
      inset: {
        38: "9.5rem",
      },
    },
  },
  plugins: [],
};
