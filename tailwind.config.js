/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primaryColor: "#b71d21",
        secondaryColor: "#6f1416",
        thirdColor: "#e30000",
        blackColor: "#000000",
        borderColor: "#f0f0f0",
        grayColor: "#a7a7a7",
        grayTextColor: "#363f4d",
        grayTextLightColor: "#a4a4a4",
        grayTextLighterColor: "#7a7a7a",
      },
    },

    fontFamily: {
      primaryFont: ['"Roboto Condensed"', "sans-serif"],
    },
  },
  plugins: [],
};
