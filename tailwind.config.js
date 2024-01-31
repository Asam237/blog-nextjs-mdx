/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "4rem",
          lg: "5rem",
          xk: "5rem",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#112840",
        },
        primaryTitle: {
          DEFAULT: "#0E3758",
        },
        primaryDescription: {
          DEFAULT: "#1E75BA",
        },
        gray: {
          DEFAULT: "#F2F8FD",
        },
        secondary: {
          DEFAULT: "#1E75BA",
        },
        orange: {
          DEFAULT: "#faaf42",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen md": {
            maxWidth: "900px",
          },
          "@screen lg": {
            maxWidth: "900px",
          },
          "@screen xl": {
            maxWidth: "900px",
          },
        },
      });
    },
  ],
};
