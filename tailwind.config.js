/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#F63728",
        muted: "#838383",
        bg: "#eff2f9",
        gray2: "#c4c4c4",
        gray1: "#bababa",
        pink: "#FFF2F2",
        red: "#BE212A",
        textGray: "#666666",
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
