/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        merriweather: "Merriweather",
      },
      colors: {
        blue: "#227C9D",
        green: "#17C3B2",
        yellow: "#FFCB77",
        background: "#FEF9EF",
        red: "#FE6D73",
      },
    },
  },
  plugins: [],
};
