const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["OpenSans", "sans-serif"],
      serif: ["SourceSerifPro", "serif"],
      mono: ["DMMono", "monospace"],
    },
    extend: {
      colors: {
        "primary-light-strong": "#3A3A3A",
        "primary-light-medium": "#676767",
        "primary-light": "#9CA3AF",
        "primary-light-weak": "#e1e5ed",
        "primary-accent": "#E14689",
        "primary-accent-light": "#FFF2FC",
        "primary-off-color": "#F2EFDE",
        "primary-link": "#57b1c9",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 150ms ease-in",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        "@font-face": {
          fontFamily: "OpenSans",
          fontWeight: 500,
          src: "url(/assets/font/OpenSans.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "OpenSans",
          fontStyle: "italic",
          src: "url(/assets/font/OpenSans-Italic.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "SourceSerifPro",
          fontWeight: 600,
          src: "url(/assets/font/SourceSerifPro-SemiBold.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "SourceSerifPro",
          fontWeight: 700,
          src: "url(/assets/font/SourceSerifPro-Bold.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "DMMono",
          fontWeight: 400,
          src: "url(/assets/font/DMMono.ttf)",
        },
      });
    }),
  ],
};
