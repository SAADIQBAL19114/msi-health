/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A0AA",
        secondary: "#FFC567",
        grayBox: "#D9D9D9",
      },
      maxWidth: {
        container: "1180px",
      },
      padding: {
        7.5: "30px",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        lg2: "10px",
      },
      rotate: {
        225:"225deg"
      },
      inset: {
        38: "9.5rem",
      },
      spacing: {
        512: "512px",
        45: "45%",
      },
      fontSize: {
        "3.5xl": "32px",
        "7.5xl": "70px",
        "4.5xl": "46px",
        "4.25xl": "40px",
      },
      lineHeight: {
        90: "90px",
        19: "19px",
        62: "62px",
        54: "54px",
        43.2: "43.2px",
      },
      backgroundImage: {
        "next-slide": "url('../public/images/right-arrow.png')",
        "prev-slide": "url('../public/images/left-arrow.png')",
      },
    },
  },
  plugins: [],
};
