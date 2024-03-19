/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btn:"#5C42E9",
        btn1:"#EDF2F7",
        new:"#090808"
      }
    },
  },
  plugins: [],
}