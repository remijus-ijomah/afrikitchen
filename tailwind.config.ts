/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html ", "./src/**/*.{js,jsx, ts, tsx}"],
  theme: {
    extend: {
      
      animation:{
        scroll: "scroll 10s linear infinite"
      },
      keyframes: {
        scroll:{
          "0%" : {transform:"scaleX(0%)"},
          "100%" : {transform: "scaleX(100%)"}
        }
      }
    },
  },
  plugins: [],
};