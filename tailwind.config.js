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
        "primary-accent": "var(--accent-color, #333333  )",
        "primary-accent-light": "var(--accent-color-light, #d4d4d4)",
        "primary-off-color": "var(--off-color, #eaeaea)",
        "primary-link": "var(--accent-color, #57b1c9)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(-5%);" },
          "85%": { opacity: "1" },
          "100%": { opacity: "1", transform: "translateX(0%);" },
        },
        bounceIn: {
          "0%": { transform: "scale(0)" },
          "65%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 150ms ease-in",
        "fade-in-right": "fadeInRight 300ms linear",
        "bounce-in": "bounceIn 1000ms cubic-bezier(.14,.59,0,1.4)",
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
