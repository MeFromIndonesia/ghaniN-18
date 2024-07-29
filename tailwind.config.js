import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Gabarito"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#eaffe5",
          100: "#cfffc6",
          200: "#a2ff93",
          300: "#67ff55",
          400: "#35f823",
          500: "#11d303",
          600: "#08b300",
          700: "#098704",
          800: "#0c6a0a",
          900: "#0e5a0d",
          950: "#013202",
        },
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
    },
  },
  plugins: [],
};
