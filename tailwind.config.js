const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        gray: colors.slate,
        text: "#4a5568",
      },
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        96: "23rem",
      },
    },
  },
  variants: {
    extend: {
      border: ["focus"],
      translate: ["group-hover"],
      boxShadow: ["group-hover"],
      textDecoration: ["group-hover"],
    },
  },
};
