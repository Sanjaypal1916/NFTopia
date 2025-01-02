/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgb(0, 255, 191)',
        bggreen: 'rgb(0, 191, 143)',
      },
    },
  },
  plugins: [],
}