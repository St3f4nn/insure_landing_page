/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./dist/js/*.js"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          darkviolet: "hsl(256, 26%, 20%)",
          grayishblue: "hsl(216, 30%, 68%)",
        },
        neutral: {
          verydarkviolet: "hsl(270, 9%, 17%)",
          darkgrayishviolet: "hsl(273, 4%, 51%)",
          verylightgray: "hsl(0, 0%, 98%)",
        },
      },
      fontFamily: {
        dm: "'DM Serif Display', serif",
        karla: "'Karla', sans-serif",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "688px",
          },
          "@screen md": {
            maxWidth: "816px",
          },
          "@screen lg": {
            maxWidth: "1072px",
          },
          "@screen xl": {
            maxWidth: "1158px",
          },
          "@screen 2xl": {
            maxWidth: "1158px",
          },
        },
      });
    },
  ],
};
