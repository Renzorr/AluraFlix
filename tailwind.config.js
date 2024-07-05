/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      },
      container: {
        center: true,
        screens: {
          xl: "1600px"
        },
        padding: "20px"
      },
      colors: {
        aquamarine: "#6BD1FF",
        green: "#00C86F",
        blue: "#4F83C1",
        ambar: "#FFBA05"
      },
      backgroundImage: {
        main: "url(/img/main-bg.png)"
      },
      screens: {
        desktop: { max: "1200px" },
        tablet: { max: "890px" },
        mobile: { max: "660px" },
      },
    },
  },
  plugins: [],
}



