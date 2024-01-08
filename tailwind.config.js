/** @type {import('tailwindcss').Config} */

//const defaultTheme = require("tailwindcss/defaultTheme");
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "800px", // Adjusted breakpoint for iPads
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        SantanderHeadlineBold: [
          "SantanderHeadline-Bold",
          ...defaultTheme.fontFamily.sans,
        ],
        SantanderHeadlineBoldIt: [
          "SantanderHeadline-BoldIt",
          ...defaultTheme.fontFamily.sans,
        ],
        SantanderHeadlineIt: [
          "SantanderHeadline-It",
          ...defaultTheme.fontFamily.sans,
        ],
        SantanderHeadlineRegular: [
          "SantanderHeadline-Regular",
          ...defaultTheme.fontFamily.sans,
        ],
        SantanderWebFont: ["SantanderWebFont", ...defaultTheme.fontFamily.sans],
        Sofia: ["Sofia", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  plugins: [],
};
