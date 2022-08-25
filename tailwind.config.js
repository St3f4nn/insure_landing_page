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
      spacing: {
        1.75: "7px",
        2.25: "9px",
        3.75: "15px",
        4.75: "19px",
        5.25: "21px",
        6.25: "25px",
        6.5: "26px",
        6.75: "27px",
        7.5: "30px",
        7.75: "31px",
        8.25: "33px",
        15: "60px",
        18: "72px",
        23.25: "93px",
        26.25: "105px",
        44: "176px",
        74.75: "299px",
        83.5: "334px",
      },
      height: {
        0.25: "1px",
        41.25: "165px",
        54.5: "218px",
        82.5: "330px",
        126: "504px",
        148.25: "593px",
      },
      width: {
        31: "124px",
        37.5: "150px",
        42: "168px",
        48.75: "195px",
        109: "436px",
      },
      translate: {
        26.25: "105px",
      },
      lineHeight: {
        0.9: "0.9",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
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
